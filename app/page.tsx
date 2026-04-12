export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        
        <h1 className="text-4xl font-bold text-gray-900">
          Study Platform
        </h1>

        <p className="mt-2 text-gray-600">
          Access notes, syllabus, and take mock tests
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="/subjects"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg"
          >
            Browse Subjects
          </a>

          <a
            href="/mock-test"
            className="bg-green-600 text-white px-5 py-2 rounded-lg"
          >
            Take Mock Test
          </a>
        </div>

      </div>
    </main>
  );
}