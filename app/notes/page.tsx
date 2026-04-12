const notes = [
  {
    subject: "Maths",
    title: "Algebra Basics",
    link: "https://example.com/sample.pdf",
  },
  {
    subject: "Science",
    title: "Physics Intro",
    link: "https://example.com/sample2.pdf",
  },
];

export default function Notes() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">Notes</h1>

      <div className="mt-6 space-y-4">
        {notes.map((note, i) => (
          <div key={i} className="p-4 bg-white rounded shadow">
            <h2 className="font-semibold">{note.title}</h2>

            <a
              href={note.link}
              target="_blank"
              className="text-blue-600 underline"
            >
              Download PDF
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}