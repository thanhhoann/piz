import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	Input,
} from "@components/atoms";
import { SubmitButton } from "@components/molecules";
import { ROUTE } from "@constants/route";
import { signIn } from "@services/auth-service";
import Link from "next/link";

export default function SignInPage({
	searchParams,
}: {
	searchParams: { message: string };
}) {
	return (
		<Card className="mx-auto max-w-sm border-none">
			<CardHeader>
				<CardTitle className="text-2xl">Login</CardTitle>
				<CardDescription>
					Enter your email and password to sign in
				</CardDescription>
			</CardHeader>

			<CardContent>
				<form className="flex w-full flex-1 flex-col justify-center gap-2 text-foreground">
					<div className="grid gap-4">
						<div className="grid gap-2">
							<label className="text-md" htmlFor="email">
								Email
							</label>
							<Input
								id="email"
								name="email"
								type="email"
								placeholder=""
								required
							/>
						</div>
						<div className="grid gap-2">
							<div className="flex items-center">
								<Link
									href="#"
									className="ml-auto inline-block text-sm underline"
								>
									Forgot your password?
								</Link>
							</div>
							<label className="text-md" htmlFor="password">
								Password
							</label>
							<Input
								id="password"
								name="password"
								type="password"
								required
							/>
						</div>
						<SubmitButton
							formAction={signIn}
							className="mb-2 rounded-md bg-white px-4 py-2 text-black text-foreground"
							pendingText="Signing in ..."
						>
							Sign In
						</SubmitButton>
					</div>
					<div className="mt-4 text-center text-sm">
						Don&apos;t have an account?{" "}
						<Link href={ROUTE.SIGN_UP} className="underline">
							Sign up
						</Link>
					</div>

					{searchParams?.message && (
						<p className="mt-4 bg-foreground/10 p-4 text-center text-foreground">
							{searchParams.message}
						</p>
					)}
				</form>
			</CardContent>
		</Card>
	);
}
