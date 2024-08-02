import { SubmitButton } from "@components/molecules";
import { signUp } from "@services/auth-service";

export default function SignUpPage({
	searchParams,
}: {
	searchParams: { message: string };
}) {
	return (
		<div className="flex w-full flex-1 flex-col justify-center gap-2 px-8 sm:max-w-md">
			<form className="flex w-full flex-1 flex-col justify-center gap-2 text-foreground">
				{/* username */}
				<label className="text-md" htmlFor="username">
					Username
				</label>
				<input
					className="mb-6 rounded-md border bg-inherit px-4 py-2"
					name="username"
					placeholder=""
					required
				/>
				{/* email */}
				<label className="text-md" htmlFor="email">
					Email
				</label>
				<input
					className="mb-6 rounded-md border bg-inherit px-4 py-2"
					name="email"
					placeholder=""
					required
				/>
				{/* password */}
				<label className="text-md" htmlFor="password">
					Password
				</label>
				<input
					className="mb-6 rounded-md border bg-inherit px-4 py-2"
					type="password"
					name="password"
					placeholder=""
					required
				/>
				{/* button */}
				<SubmitButton
					formAction={signUp}
					className="mb-2 rounded-md border border-foreground/20 px-4 py-2 text-foreground"
					pendingText="Signing up ..."
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
