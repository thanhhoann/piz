import { ROUTE } from "@utils/route";
import { createClient } from "@utils/supabase/server";
import { redirect } from "next/navigation";

export const signOut = async () => {
	"use server";

	const supabase = createClient();
	await supabase.auth.signOut();
	return redirect(ROUTE.SIGN_IN);
};
