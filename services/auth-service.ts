/**
 *  NOTE: dont use client component like @constants/route.ts here]
 */

import { createSupabaseClientWithCookies } from "@utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const SIGN_IN = "/sign-in";
const HOME = "/";

export const signIn = async (formData: FormData) => {
	"use server";
	const supabase = createSupabaseClientWithCookies();
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;

	const { error } = await supabase.auth.signInWithPassword({
		email,
		password,
	});

	if (error) {
		return redirect(`${SIGN_IN}?message=Could not authenticate user`);
	}

	return redirect(HOME);
};

export const signUp = async (formData: FormData) => {
	"use server";
	const supabase = createSupabaseClientWithCookies();
	const origin = headers().get("origin");
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;
	const username = formData.get("username") as string;

	const { error } = await supabase.auth.signUp({
		email,
		password,
		options: {
			emailRedirectTo: `${origin}/auth/callback`,
			data: {
				user_name: username,
			},
		},
	});

	if (error) {
		return redirect(`${SIGN_IN}?message=Could not authenticate user`);
	}

	return redirect(HOME);
};

export const signOut = async () => {
	"use server";
	const supabase = createSupabaseClientWithCookies();
	await supabase.auth.signOut();
};

export const fetchUser = async () => {
	"use server";
	const supabase = createSupabaseClientWithCookies();
	const {
		data: { user },
	} = await supabase.auth.getUser();
	return user;
};
