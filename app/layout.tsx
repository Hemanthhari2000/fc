import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'FC - FileConverter',
	description: 'Free, Open Source, Fast and Safe File Converter'
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<Navbar />
					<div className="pt-8 min-h-screen md:pt-32 lg:pt-36 2xl:pt-44 container max-w-4xl lg:max-w-6xl 2xl:max-w-7xl">
						{children}
					</div>
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
