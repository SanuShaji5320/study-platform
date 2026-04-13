import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, FileText, Brain } from "lucide-react";

const features = [
  {
    title: "Syllabus",
    desc: "Structured syllabus for each subject",
    link: "/syllabus",
    icon: BookOpen,
  },
  {
    title: "Study Materials",
    desc: "Notes, PDFs, and learning resources",
    link: "/notes",
    icon: FileText,
  },
  {
    title: "Question Try Outs",
    desc: "Practice questions and mock tests",
    link: "/mock-test",
    icon: Brain,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-12">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight">
            Study Smarter
          </h1>
          <p className="mt-3 text-gray-600">
            Everything you need — syllabus, notes, and practice
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <a key={item.title} href={item.link}>
                <Card className="hover:shadow-xl transition rounded-2xl cursor-pointer">
                  <CardContent className="p-6">

                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-gray-700" />
                    </div>

                    <h2 className="mt-4 text-xl font-semibold">
                      {item.title}
                    </h2>

                    <p className="text-gray-600 mt-2">
                      {item.desc}
                    </p>

                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>

      </div>
    </main>
  );
}