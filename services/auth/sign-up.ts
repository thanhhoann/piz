import { createSupabaseClientWithCookies } from "@utils/supabase/server";
import type { Route } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const signUp = async (formData: FormData) => {
	"use server";
	const supabase = createSupabaseClientWithCookies();
	const origin = headers().get("origin");
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;
	const username = formData.get("username") as string;

	const alreadySignedUpError =
		"AuthApiError: User already registered";

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
		const redirectUrl = `${"/sign-in" as Route}?type=signup&message=${error.message}`;

		// if (error.message === alreadySignedUpError) {
		// 	redirectUrl = `${"/sign-in" as Route}?type=signup&message=Account is already registered.`;
		// }

		return redirect(redirectUrl);
	}

	return redirect("/" as Route);
};
