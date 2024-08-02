"use client";

import SideBar from "@components/ui/app-layout/side-bar";
import MobileSideBar from "@components/ui/app-layout/side-bar-mobile";
import TopBar from "@components/ui/app-layout/top-bar";
import { useTheme } from "next-themes";
import type React from "react";

export default function AppLayout({
	children,
}: { children: React.ReactNode }) {
	const { theme } = useTheme();

	return (
		<div
			className={`flex min-h-screen w-full flex-col bg-background text-foreground transition-colors duration-300 ${
				theme === "dark" ? "dark" : ""
			}`}
		>
			<TopBar />

			<div className="flex flex-1">
				<SideBar />

				<main className="col-span-2 mt-3 flex-1 p-4 md:ml-10 md:p-8">
					{children}
				</main>
			</div>

			<MobileSideBar />
		</div>
	);
}
