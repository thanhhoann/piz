import HeaderBar from "@components/organisms/header-bar";
import SideBar from "@components/organisms/side-bar";
import type React from "react";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex min-h-screen w-full flex-col bg-background text-foreground transition-colors duration-300">
			<HeaderBar />

			<div className="flex h-screen">
				<SideBar />

				<main className="mt-3 mobile_s:ml-0 tablet:ml-[100px] flex-1 p-4">
					{children}
				</main>
			</div>
		</div>
	);
};

export { AppLayout };
