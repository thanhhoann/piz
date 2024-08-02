import AuthButton from "@components/auth/auth-button";
import { createClient } from "@utils/supabase/server";

export default async function Index() {
	const canInitSupabaseClient = () => {
		try {
			createClient();
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	};

	const isSupabaseConnected = canInitSupabaseClient();

	return (
		<div className="flex w-full flex-1 flex-col items-center gap-20">
			<nav className="flex h-16 w-full justify-center border-b border-b-foreground/10">
				<div className="flex w-full max-w-4xl items-center justify-between p-3 text-sm">
					{isSupabaseConnected && <AuthButton />}
				</div>
			</nav>
		</div>
	);
}
