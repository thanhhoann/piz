import { ROUTE } from "@constants/route";
import Link from "next/link";

const Logo = ({ className }: { className?: string }) => {
	return (
		<>
			<Link href={ROUTE.HOME}>
				<div className={className}>piz</div>
			</Link>
		</>
	);
};

Logo.displayName = "Logo";

export { Logo };
