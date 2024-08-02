import SideBarItems from "@components/organisms/side-bar/side-bar-items";

export default function SideBar() {
	return (
		<>
			<div className="desktop-only fixed left-0 h-screen bg-background p-2">
				<div className="h-[80%] flex-center flex-col gap-2">
					<SideBarItems />
				</div>
			</div>
		</>
	);
}
