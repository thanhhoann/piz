"use client";
import { Button } from "@components/atoms";
import SideBarMobileDrawer from "@components/organisms/side-bar/side-bar-mobile-drawer";
import { ROUTE } from "@constants/route";
import { Heart, House, Plus, Search, User } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";

export const SIDE_BAR_ITEMS_ICON_SIZE = 20;

export default function SideBarItems({
	is_mobile = false,
}: { is_mobile?: boolean }) {
	const [isSelected, setIsSelected] = React.useState(ICON_LABELS[0]);
	const [drawerIsOpen, setOpenDrawer] = React.useState(false);

	const { theme } = useTheme();

	const iconSelect = (item: string) => setIsSelected(item);
	const iconFill = (item: string) =>
		isSelected === item
			? theme === "dark"
				? "white"
				: "black"
			: "none";

	const handleSelect = (iconLabel) => {
		iconSelect(iconLabel);
	};

	return (
		<>
			{SIDE_BAR_ITEMS.map((item, index) => {
				// item is "post" and the screen is desktop
				if (ICON_LABELS[index] === "post" && !is_mobile) return null;

				// item is "post"
				if (ICON_LABELS[index] === "post" && is_mobile)
					return (
						<Button
							variant="ghost"
							key={ICON_LABELS[index]}
							onClick={() => setOpenDrawer(true)}
						>
							<item.icon
								size={SIDE_BAR_ITEMS_ICON_SIZE}
								fill={iconFill(ICON_LABELS[index])}
							/>
						</Button>
					);

				return (
					<>
						{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
						<div
							key={ICON_LABELS[index]}
							className="dark:hover:background-item flex items-center gap-3 rounded-md p-4 font-medium text-sm transition-colors hover:bg-muted"
							onClick={() => handleSelect(ICON_LABELS[index])}
						>
							<Link href={item.href ?? "#"} prefetch={false}>
								<item.icon
									size={SIDE_BAR_ITEMS_ICON_SIZE}
									fill={iconFill(ICON_LABELS[index])}
								/>
							</Link>
						</div>
					</>
				);
			})}

			<SideBarMobileDrawer
				isOpen={drawerIsOpen}
				setOpen={setOpenDrawer}
			/>
		</>
	);
}

const ICON_LABELS = ["home", "search", "post", "activity", "profile"];

const SIDE_BAR_ITEMS = [
	{
		href: ROUTE.HOME,
		icon: House,
		is_desktop: true,
		is_mobile: true,
	},
	{
		href: ROUTE.SEARCH,
		icon: Search,
		is_desktop: true,
		is_mobile: true,
	},
	{
		href: ROUTE.PROFILE,
		icon: Plus,
		is_desktop: false,
		is_mobile: true,
	},
	{
		href: ROUTE.ACTIVITY,
		icon: Heart,
		is_desktop: true,
		is_mobile: true,
	},
	{
		href: ROUTE.PROFILE,
		icon: User,
		is_desktop: true,
		is_mobile: true,
	},
];
