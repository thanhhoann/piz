import { signOut } from "@services/auth/sign-out";
import { NextResponse } from "next/server";

export async function POST() {
	try {
		await signOut();
		return NextResponse.json({
			message: "User signed out successfully",
		});
	} catch (error) {
		return NextResponse.json(
			{ error: `Error while signing out: ${error}` },
			{ status: 500 },
		);
	}
}
