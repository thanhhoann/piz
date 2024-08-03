import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	Input,
	Label,
} from "@components/atoms";
import { SubmitButton } from "@components/molecules";
import { ROUTE } from "@constants/route";
import { signUp } from "@services/auth-service";
import Link from "next/link";

export default function SignUpPage({
	searchParams,
}: {
	searchParams: { message: string };
}) {
	return (
		<Card className="mx-auto max-w-sm border-none">
			<CardHeader>
				<CardTitle className="text-2xl">Sign Up</CardTitle>
				<CardDescription>
					Enter your information to create an account
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form className="flex w-full flex-1 flex-col justify-center gap-2 text-foreground">
					<div className="grid gap-4">
						<div className="grid gap-2">
							<Label htmlFor="username">Username</Label>
							<Input
								id="username"
								name="username"
								placeholder=""
								required
							/>
						</div>
						<div className="grid gap-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								name="email"
								type="email"
								placeholder=""
								required
							/>
						</div>
						<div className="grid gap-2">
							<Label htmlFor="password">Password</Label>
							<Input name="password" id="password" type="password" />
						</div>
						<SubmitButton
							formAction={signUp}
							className="mb-2 rounded-md bg-white px-4 py-2 text-black"
							pendingText="Creating your account ..."
							placeholder="Create an account"
						/>
					</div>
					<div className="mt-4 text-center text-sm">
						Already have an account?{" "}
						<Link href={ROUTE.SIGN_IN} className="underline">
							Sign in
						</Link>
					</div>
					{searchParams?.message && (
						<div className="mt-4 max-w-full rounded-md border-2 border-red-700 p-4 text-center text-foreground">
							<p>{searchParams.message}</p>
						</div>
					)}
				</form>
			</CardContent>
		</Card>
	);
}
