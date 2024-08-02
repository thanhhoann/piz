import { createBrowserClient } from "@supabase/ssr";

export const createSupabaseClientForBrowser = () =>
	createBrowserClient(
		// biome-ignore lint/style/noNonNullAssertion: I dunno anything about supabase builtin function
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		// biome-ignore lint/style/noNonNullAssertion: I dunno anything about supabase builtin function
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
	);
