import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@components/atoms/card"
import { Input } from "@components/atoms/input"
import { Label } from "@components/atoms/label"
import { Tabs, TabsContent } from "@components/atoms/tabs"
import AuthPageTabs from "@components/molecules/auth/auth-page-tabs"
import { SubmitButton } from "@components/molecules/submit-button"
import { signIn } from "@services/auth/sign-in"
import { signUp } from "@services/auth/sign-up"
import Link from "next/link"

// TODO: apply code splitting here
export default function AuthPage({
	searchParams,
}: {
	searchParams: { type: string; message: string }
}) {
	return (
		<Tabs
			defaultValue="sign-in"
			className="mx-4 mt-5 flex-center flex-col"
		>
			<AuthPageTabs />
			<div className="h-[80vh] w-full flex-center ">
				{/* sign in */}
				<TabsContent value="sign-in" className="flex-center">
					<Card className="w-full max-w-sm border-none">
						<CardHeader>
							<CardTitle className="text-2xl">Sign In</CardTitle>
							<CardDescription>
								Enter your email below to login to your account.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<form className="grid gap-4">
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
									<div className="flex-between">
										<Label htmlFor="password">Password</Label>
										<Link
											href="#"
											className="ml-auto inline-block text-sm underline"
										>
											Forgot your password?
										</Link>
									</div>
									<Input
										id="password"
										name="password"
										type="password"
										required
									/>
								</div>
								<div className="grid gap-2">
									<SubmitButton
										formAction={signIn}
										pendingText="Signing in"
										placeholder="Sign in"
									/>
								</div>
							</form>
						</CardContent>
						<CardFooter>
							{/* message */}
							{searchParams?.message &&
								searchParams?.type === "signin" && (
									<div className="mt-4 w-full rounded-md border-2 border-red-700 p-4 text-center text-foreground">
										<p>{searchParams.message}</p>
									</div>
								)}
						</CardFooter>
					</Card>
				</TabsContent>

				{/* sign up */}
				<TabsContent value="sign-up" className="flex-center">
					<Card className="w-full max-w-sm border-none">
						<CardHeader>
							<CardTitle className="text-2xl">Sign Up</CardTitle>
							<CardDescription>
								Create a new Piz account to get started.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<form className="grid gap-4">
								<div className="grid gap-2">
									<Label htmlFor="username">Username</Label>
									<Input
										id="username"
										type="username"
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
									<Input
										id="password"
										name="password"
										type="password"
										required
									/>
								</div>
								<div className="grid gap-2">
									<SubmitButton
										formAction={signUp}
										pendingText="Creating your account"
										placeholder="Create an account"
									/>
								</div>
							</form>
						</CardContent>
						<CardFooter>
							{/* message */}
							{searchParams?.message &&
								searchParams?.type === "signup" && (
									<div className="mt-4 max-w-full rounded-md border-2 border-red-700 p-4 text-center text-foreground">
										<p>{searchParams.message}</p>
									</div>
								)}
						</CardFooter>
					</Card>
				</TabsContent>
			</div>
		</Tabs>
	)
}
