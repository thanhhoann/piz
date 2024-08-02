import TopBarMenu from "@components/ui/app-layout/top-bar-menu";
import { Button, Logo } from "@components/ui/common";
import { cn } from "@utils/cn";
import { createClient } from "@utils/supabase/client";
import type { User } from "@supabase/supabase-js";
import { AtSign, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function TopBar() {
	const [user, setUser] = React.useState<User | null>(null);
	const supabase = createClient();

	// biome-ignore lint/correctness/useExhaustiveDependencies: only need run on first render
	React.useEffect(() => {
		const fetchUser = async () => {
			const {
				data: { user },
			} = await supabase.auth.getUser();
			if (user) setUser(user);
		};

		fetchUser();
	}, []);

	const pathname = usePathname();
	const pathSegments = pathname
		.split("/")
		.filter((segment) => segment);

	return (
		<>
			<header className="sticky top-0 z-40 flex h-14 w-full items-center justify-between border-b px-4 transition-colors duration-300">
				{/* left */}
				{/* left, show on desktop */}
				<div className="desktop-only gap-4">
					<Link href="#" className="flex items-center gap-2">
						<div className="mx-2 flex gap-2 font-bold text-2xl">
							<span className="bold font-800 text-[#ff006e]">
								{/* {user ? user?.username : "guest"} */}
							</span>
							<AtSign className="mt-1" />
							<div>piz</div>
						</div>
					</Link>
				</div>

				{/* left, show on mobile */}
				{/* if URL length has more than 2 items then show */}
				{pathSegments.length >= 2 && (
					<div className="mobile-only">
						<ChevronLeft />
					</div>
				)}

				{/* center */}
				{/* if URL length has more than 2 items then show in center, else show in leftmost */}
				<div
					className={cn(
						"mobile-only flex-grow",
						pathSegments.length >= 2 && "flex-center",
					)}
				>
					<Logo className="font-black text-2xl" />
				</div>

				{/* right */}
				<div className="ml-auto flex items-center gap-4">
					{user ? <TopBarMenu /> : <Button>Log in</Button>}
				</div>
			</header>
		</>
	);
}
