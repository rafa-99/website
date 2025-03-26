"use client"

import { useState } from "react";
import Link from 'next/link';
import "./globals.css";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
	const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

	const toggleSidebar = () => {
		setIsSidebarCollapsed(prev => !prev);
	};

	return (
		<html lang="en">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="description" content="Rafael Marçalo's website wrote with Next.JS" />
				<meta name="author" content="Rafael Marçalo" />
				<meta property="og:title" content="Rafael Marçalo" />
				<link rel="manifest" href="/manifest.json" />
				<title>Rafael Marçalo</title>
			</head>
			<body className="flex h-screen">
				{/* Sidebar */}
				<aside className={`sidebar ${isSidebarCollapsed ? 'collapsed' : ''}`}>
					<button className="sidebar-toggle-btn" onClick={toggleSidebar} aria-label="Toggle Sidebar">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
						</svg>
					</button>
					<h1 className={`text-xl font-bold ${isSidebarCollapsed ? 'hidden' : ''}`}>Rafael Marçalo</h1>
					<nav className={`mt-4 space-y-2 sidebar-nav ${isSidebarCollapsed ? 'hidden' : ''}`}>
						<Link href="/">🏠 Home</Link>
						<Link href="/projects">🧪 Projects</Link>
						<Link href="/posts">📝 Posts</Link>
						<Link href="/library">📚 Library</Link>
						<Link href="/people">🗣️ People</Link>
						<Link href="/web">🌎 Web</Link>
						<Link href="https://searxng.rafaelmarcalo.xyz/">🔍 SearXNG</Link>
						<Link href="/donate">💰 Donate</Link>
					</nav>
				</aside>

				{/* Main Content */}
				<main className="main-content">{children}</main>
			</body>
		</html>
	);
}