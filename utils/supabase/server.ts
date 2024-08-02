import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export const createSupabaseClientWithCookies = () => {
	const cookieStore = cookies();

	return createServerClient(
		// biome-ignore lint/style/noNonNullAssertion: i dunno anything about supabase builtin function
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		// biome-ignore lint/style/noNonNullAssertion: i dunno anything about supabase builtin function
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
		{
			cookies: {
				getAll() {
					return cookieStore.getAll();
				},
				setAll(cookiesToSet: any) {
					try {
						for (const { name, value, options } of cookiesToSet) {
							cookieStore.set(name, value, options);
						}
					} catch (error) {
						// The `set` method was called from a Server Component.
						// This can be ignored if you have middleware refreshing
						// user sessions.
						console.log("Supabase Server Error: ", error);
					}
				},
			},
		},
	);
};
