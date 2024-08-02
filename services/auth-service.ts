/**
 *  NOTE: dont use client component like @constants/route.ts here]
 */

import { createSupabaseClientWithCookies } from "@utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

// TODO: add all auth routes here
const SIGN_IN = "/login";

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
		return redirect("/login?message=Could not authenticate user");
	}

	return redirect("/protected");
};

export const signUp = async (formData: FormData) => {
	"use server";
	const supabase = createSupabaseClientWithCookies();
	const origin = headers().get("origin");
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;

	const { error } = await supabase.auth.signUp({
		email,
		password,
		options: {
			emailRedirectTo: `${origin}/auth/callback`,
		},
	});

	if (error) {
		return redirect("/login?message=Could not authenticate user");
	}

	return redirect(
		"/login?message=Check email to continue sign in process",
	);
};

export const signOut = async () => {
	"use server";
	const supabase = createSupabaseClientWithCookies();
	await supabase.auth.signOut();
	return redirect("/login");
};
