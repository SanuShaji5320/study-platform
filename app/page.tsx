export default function Home() {
  const features = [
    {
      title: "Syllabus",
      desc: "View complete syllabus by subject",
      link: "/syllabus",
      color: "bg-blue-500",
    },
    {
      title: "Study Materials",
      desc: "Access notes, PDFs, and resources",
      link: "/notes",
      color: "bg-purple-500",
    },
    {
      title: "Question Try Outs",
      desc: "Practice with mock tests",
      link: "/mock-test",
      color: "bg-green-500",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-900 text-center">
          Study Smart
        </h1>
        <p className="text-center text-gray-600 mt-2">
          Everything you need to prepare — in one place
        </p>

        {/* Cards */}
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {features.map((item) => (
            <a
              key={item.title}
              href={item.link}
              className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
            >
              <div
                className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center text-white font-bold`}
              >
                {item.title[0]}
              </div>

              <h2 className="mt-4 text-xl font-semibold">
                {item.title}
              </h2>

              <p className="text-gray-600 mt-2">
                {item.desc}
              </p>
            </a>
          ))}
        </div>

      </div>
    </main>
  );
}
