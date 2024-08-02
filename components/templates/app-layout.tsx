import HeaderBar from "@components/organisms/header-bar";
import SideBar from "@components/organisms/side-bar";
import MobileSideBar from "@components/organisms/side-bar/side-bar-mobile";
import type React from "react";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex min-h-screen w-full flex-col bg-background text-foreground transition-colors duration-300">
			<HeaderBar />

			<div className="flex flex-1">
				<SideBar />

				<main className="col-span-2 mt-3 flex-1 p-4 md:ml-10 md:p-8">
					{children}
				</main>
			</div>

			<MobileSideBar />
		</div>
	);
};

export { AppLayout };
