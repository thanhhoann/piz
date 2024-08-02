import { signOut } from "@services/auth-service";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	try {
		await signOut();
		return NextResponse.json({ message: "Signed out successfully" });
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to sign out" },
			{ status: 500 },
		);
	}
}
