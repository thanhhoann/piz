import SideBarItems from "@components/ui/app-layout/side-bar-items";

export default function MobileSideBar() {
	return (
		<div className="mobile-only fixed right-0 bottom-0 left-0 h-18 w-screen bg-background p-2">
			<div className="flex-center">
				<div className="max-w-[425px] flex-between gap-0 mobile-l:gap-5 mobile_m:gap-3 mobile_s:gap-0">
					<SideBarItems is_mobile />
				</div>
			</div>
		</div>
	);
}
