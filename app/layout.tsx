import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@components/theme/theme-provider";
import AppLayout from "@components/ui/app-layout";
import LoadingScreen from "@components/ui/special/loading-screen";

const geist_sans = localFont({
	src: "../assets/fonts/GeistVF.woff",
	variable: "--font-geist-sans",
});

const geist_mono = localFont({
	src: "../assets/fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
});

const defaultUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: "http://localhost:3000";

export const metadata = {
	metadataBase: new URL(defaultUrl),
	title: "Next.js and Supabase Starter Kit",
	description:
		"The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={`${geist_sans.variable}${geist_mono.variable}`}
		>
			<body className="bg-background text-foreground">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<LoadingScreen duration={600} />
					<AppLayout>{children}</AppLayout>
				</ThemeProvider>
			</body>
		</html>
	);
}
