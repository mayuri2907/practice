function StudentCard({ name, course, rollNo, marks }) {
  return (
    <div className="group w-72 rounded-2xl border border-slate-700 bg-slate-800 p-6 text-white shadow-xl transition-all duration-300 hover:-translate-y-3 hover:border-blue-400 hover:shadow-blue-500/20">

      <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-3xl font-bold shadow-lg">
        {name.charAt(0)}
      </div>

      <h2 className="text-center text-2xl font-bold">
        {name}
      </h2>

      <p className="mt-2 text-center text-blue-400">
        {course}
      </p>

      <div className="mt-6 space-y-3 rounded-xl bg-slate-900 p-4 text-sm">
        <p>
          <span className="font-semibold text-slate-400">Roll No:</span>{" "}
          {rollNo}
        </p>

        <p>
          <span className="font-semibold text-slate-400">Marks:</span>{" "}
          {marks}
        </p>
      </div>

      <button className="mt-5 w-full rounded-xl bg-blue-600 py-2.5 font-semibold transition hover:bg-blue-500 active:scale-95">
        View Profile
      </button>
    </div>
  );
}

export default StudentCard;