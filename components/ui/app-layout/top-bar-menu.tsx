import ThemeToggle from "@components/theme/theme-toggle";
import {
	Button,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@components/ui/common";
import { cn } from "@utils/cn";
import { ROUTE } from "@utils/route";
import {
	Archive,
	LogOut,
	MenuIcon,
	SettingsIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

const iconClass = "mr-2 h-4 w-4";

const items = [
	// {
	// 	href: "#",
	// 	label: "Liked posts",
	// 	icon: <BookHeart className={iconClass} />,
	// },
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

export default function TopBarMenu() {
	const { theme, setTheme } = useTheme();
	const dropdownMenuItemClass = cn(
		"cursor-pointer",
		theme === "dark" ? "dark-common" : "light-common",
	);

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
						{items.map(({ href, icon, label }) => (
							<Link key={href} href={href}>
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
					<DropdownMenuItem className={dropdownMenuItemClass}>
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
