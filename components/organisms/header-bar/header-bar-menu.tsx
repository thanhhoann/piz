"use client";
import {
	Button,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@components/atoms";
import { ThemeToggle } from "@components/molecules";
import { ROUTE } from "@constants/route";
import { cn } from "@utils/cn";
import {
	Archive,
	LogOut,
	MenuIcon,
	SettingsIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/navigation";

const iconClass = "mr-2 h-4 w-4";

const items = [
	{
		href: ROUTE.SAVED_POSTS,
		label: "Saved posts",
		icon: <Archive className={iconClass} />,
	},
	{
		href: ROUTE.SETTINGS,
		label: "Settings",
		icon: <SettingsIcon className={iconClass} />,
	},
];

export default function HeaderBarMenu() {
	const { theme, setTheme } = useTheme();
	const router = useRouter();
	const dropdownMenuItemClass = cn(
		"cursor-pointer",
		theme === "dark" ? "dark-common" : "light-common",
	);

	const handleSignOut = async () => {
		try {
			const response = await fetch("/api/sign-out", {
				method: "POST",
			});
			if (response.ok) {
				router.push("/sign-in"); // Redirect to login page or any other page
			} else {
				console.error("Failed to sign out");
			}
		} catch (error) {
			console.error("An error occurred during sign out", error);
		}
	};

	return (
		<>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="ghost">
						<MenuIcon />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent
					className={cn(
						"w-56",
						theme === "dark" ? "bg-black" : "bg-white",
					)}
				>
					<DropdownMenuGroup>
						{items.map(({ href, icon, label }, index) => (
							<Link key={href + index.toString()} href={href}>
								<DropdownMenuItem
									key={label}
									className={dropdownMenuItemClass}
								>
									{icon}
									<span>{label}</span>
								</DropdownMenuItem>
							</Link>
						))}
					</DropdownMenuGroup>
					<DropdownMenuSeparator />
					<DropdownMenuItem
						className={dropdownMenuItemClass}
						onClick={() =>
							setTheme(theme === "dark" ? "light" : "dark")
						}
					>
						<ThemeToggle
							noButton
							iconClassName={iconClass}
							darkModeLabel="Toggle dark mode"
							lightModeLabel="Toggle light mode"
						/>
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem
						className={dropdownMenuItemClass}
						onClick={handleSignOut}
					>
						{/* <SignOutButton> */}
						<div className="flex w-full items-center">
							<LogOut className={iconClass} />
							<span>Log out</span>
						</div>
						{/* </SignOutButton> */}
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	);
}
