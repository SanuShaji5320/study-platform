import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">

        {/* Navbar */}
        <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">StudySmart</h1>

          <div className="flex gap-6 text-sm font-medium">
            <a href="/" className="hover:text-blue-600">Home</a>
            <a href="/syllabus" className="hover:text-blue-600">Syllabus</a>
            <a href="/subjects" className="hover:text-blue-600">Notes</a>
            <a href="/mock-test" className="hover:text-blue-600">Practice</a>
          </div>
        </nav>

        {/* Page Content */}
        {children}

      </body>
    </html>
  );
}