"use client";

export default function AuthFormTitle({
	tabValue,
}: { tabValue: string }) {
	return <>{tabValue ? "Sign in" : "Sign up"}</>;
}
