import HeaderBarLogo from "@components/organisms/header-bar/header-bar-logo";
import HeaderBarMenu from "@components/organisms/header-bar/header-bar-menu";
import HeaderBarNavigation from "@components/organisms/header-bar/header-bar-navigation";
import { createSupabaseClientWithCookies } from "@utils/supabase/server";
import { AtSign } from "lucide-react";
import Link from "next/link";
import React from "react";

export default async function HeaderBar() {

	return (
		<>
			<header className="sticky top-0 z-40 flex h-14 w-full items-center justify-between border-b px-4 transition-colors duration-300">
				{/* left */}
				{/* left, desktop view */}
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

				{/* left, mobile view */}
				<HeaderBarNavigation />

				{/* center */}
				<HeaderBarLogo />

				{/* right */}
				<div className="ml-auto flex items-center gap-4">
					<HeaderBarMenu />
				</div>
			</header>
		</>
	);
}
