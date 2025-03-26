"use client"

import Link from 'next/link';
import "./globals.css";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
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
				<aside className="sidebar">
					<h1 className="text-xl font-bold hidden lg:flex">Rafael Marçalo</h1>
					<nav className="sidebar-container">
						<Link href="/" className="sidebar-link">
							<span>🏠</span>
							<span className="sidebar-label hidden lg:flex">Home</span>
						</Link>
						<Link href="/projects" className="sidebar-link">
							<span>🧪</span>
							<span className="sidebar-label hidden lg:block">Projects</span>
						</Link>
						<Link href="/posts" className="sidebar-link">
							<span>📝</span>
							<span className="sidebar-label hidden lg:block">Posts</span>
						</Link>
						<Link href="/library" className="sidebar-link">
							<span>📚</span>
							<span className="sidebar-label hidden lg:block">Library</span>
						</Link>
						<Link href="/people" className="sidebar-link">
							<span>🗣️</span>
							<span className="sidebar-label hidden lg:block">People</span>
						</Link>
						<Link href="/web" className="sidebar-link">
							<span>🌎</span>
							<span className="sidebar-label hidden lg:block">Web</span>
						</Link>
						<Link href="https://searxng.rafaelmarcalo.xyz/" className="sidebar-link">
							<span>🔍</span>
							<span className="sidebar-label hidden lg:block">SearXNG</span>
						</Link>
						<Link href="/donate" className="sidebar-link">
							<span>💰</span>
							<span className="sidebar-label hidden lg:block">Donate</span>
						</Link>
					</nav>
				</aside>

				{/* Main Content */}
				<main className="main-content">{children}</main>
			</body>
		</html>
	);
}