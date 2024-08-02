import { createSupabaseClientWithCookies } from "@utils/supabase/server";

export default async function HomePage() {
	const supabase = createSupabaseClientWithCookies();

	const {
		data: { user },
	} = await supabase.auth.getUser();
	return <>{user?.email}</>;
}
