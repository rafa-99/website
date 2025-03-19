import "./globals.css";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className="flex h-screen">
        {/* Sidebar */}
        <aside className="sidebar">
          <h1 className="text-xl font-bold">Rafael Marçalo</h1>
          <nav className="mt-4 space-y-2 sidebar-nav">
            <a href="/">🏠 Home</a>
            <a href="/posts">📜 Posts</a>
            <a href="/library">📚 Library</a>
            <a href="/people">🗣️ People</a>
            <a href="/web">🌎 Web</a>
            <a href="/references">🗃️ References</a>
            <a href="/search">🔍 SearXNG</a>
            <a href="/donate">💰 Donate</a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="main-content">{children}</main>
      </body>
    </html>
  );
}