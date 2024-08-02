import { signOut } from "@components/auth/auth-actions";
import { Badge, Button } from "@components/ui/common";
import { ROUTE } from "@utils/route";
import { createClient } from "@utils/supabase/server";
import Link from "next/link";

export default async function AuthButton() {
	const supabase = createClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	return user ? (
		<div className="flex items-center gap-4">
			<Badge>{user.email}</Badge>
			<form action={signOut}>
				<Button className="rounded-md bg-btn-background px-4 py-2 no-underline hover:bg-btn-background-hover">
					Logout
				</Button>
			</form>
		</div>
	) : (
		<div>
			<Link
				href={ROUTE.SIGN_IN}
				className="flex rounded-md bg-btn-background px-3 py-2 no-underline hover:bg-btn-background-hover"
			>
				<Button>Login</Button>
			</Link>
		</div>
	);
}
