import { signIn, signUp } from "@services/auth-service";
import Link from "next/link";
import { SubmitButton } from "./submit-button";

export default function Login({
	searchParams,
}: {
	searchParams: { message: string };
}) {
	return (
		<div className="flex w-full flex-1 flex-col justify-center gap-2 px-8 sm:max-w-md">
			<Link
				href="/"
				className="group absolute top-8 left-8 flex items-center rounded-md bg-btn-background px-4 py-2 text-foreground text-sm no-underline hover:bg-btn-background-hover"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="group-hover:-translate-x-1 mr-2 h-4 w-4 transition-transform"
				>
					<polyline points="15 18 9 12 15 6" />
				</svg>
				Back
			</Link>

			<form className="flex w-full flex-1 flex-col justify-center gap-2 text-foreground">
				<label className="text-md" htmlFor="email">
					Email
				</label>
				<input
					className="mb-6 rounded-md border bg-inherit px-4 py-2"
					name="email"
					placeholder="you@example.com"
					required
				/>
				<label className="text-md" htmlFor="password">
					Password
				</label>
				<input
					className="mb-6 rounded-md border bg-inherit px-4 py-2"
					type="password"
					name="password"
					placeholder="••••••••"
					required
				/>
				<SubmitButton
					formAction={signIn}
					className="mb-2 rounded-md bg-green-700 px-4 py-2 text-foreground"
					pendingText="Signing In..."
				>
					Sign In
				</SubmitButton>
				<SubmitButton
					formAction={signUp}
					className="mb-2 rounded-md border border-foreground/20 px-4 py-2 text-foreground"
					pendingText="Signing Up..."
				>
					Sign Up
				</SubmitButton>
				{searchParams?.message && (
					<p className="mt-4 bg-foreground/10 p-4 text-center text-foreground">
						{searchParams.message}
					</p>
				)}
			</form>
		</div>
	);
}
