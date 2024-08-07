import SideBarMobileDrawer from "@components/ui/app-layout/side-bar-mobile-drawer";
import { Button } from "@components/ui/common";
import { ROUTE } from "@utils/route";
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
						<Link
							key={ICON_LABELS[index]}
							href={item.href ?? "#"}
							className="dark:hover:background-item flex items-center gap-3 rounded-md p-4 font-medium text-sm transition-colors hover:bg-muted"
							onClick={() => iconSelect(ICON_LABELS[index])}
							prefetch={false}
						>
							<item.icon
								size={SIDE_BAR_ITEMS_ICON_SIZE}
								fill={iconFill(ICON_LABELS[index])}
							/>
						</Link>
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
