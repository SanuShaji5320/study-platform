const subjects = ["Maths", "Science", "History"];

export default function Subjects() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">Subjects</h1>

      <div className="mt-6 space-y-3">
        {subjects.map((sub) => (
          <a
            key={sub}
            href={`/notes?subject=${sub}`}
            className="block p-4 bg-white rounded shadow hover:bg-gray-100"
          >
            {sub}
          </a>
        ))}
      </div>
    </main>
  );
}