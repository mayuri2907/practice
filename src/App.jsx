import StudentCard from "./Components/StudentCard"

function App() {
  return (
    <div className="min-h-screen bg-slate-950 px-6 py-16 text-white">

      <div className="mx-auto max-w-6xl">

        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">
            Student Profiles
          </h1>

          <p className="mt-3 text-slate-400">
            React Props + Tailwind CSS
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">

          <StudentCard
            name="Mayuri Vaishnav"
            course="BCA Hons"
            rollNo="101"
            marks="87%"
          />

          <StudentCard
            name="Nimisha Kumari"
            course="BCA"
            rollNo="102"
            marks="84%"
          />

          <StudentCard
            name="Priya Patel"
            course="BCA"
            rollNo="103"
            marks="91%"
          />

        </div>
      </div>
    </div>
  );
}

export default App;