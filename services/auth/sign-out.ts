import { createSupabaseClientWithCookies } from "@utils/supabase/server";

export const signOut = async () => {
	"use server";
	const supabase = createSupabaseClientWithCookies();
	await supabase.auth.signOut();
};
