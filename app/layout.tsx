export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">

        {/* Navbar */}
        <nav className="bg-white shadow p-4 flex justify-between">
          <h1 className="font-bold">Study Platform</h1>

          <div className="flex gap-4">
            <a href="/">Home</a>
            <a href="/syllabus">Syllabus</a>
            <a href="/subjects">Materials</a>
            <a href="/mock-test">Practice</a>
          </div>
        </nav>

        {/* Page Content */}
        {children}

      </body>
    </html>
  );
}
