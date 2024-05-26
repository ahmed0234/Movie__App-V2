"use client";
import Link from "next/link";

function Moviepagination({ Genre, TotalPages }) {
  return (
    <div className="styleScrollbar mt-12 flex gap-6 overflow-x-scroll pb-3">
      {[...Array(TotalPages)].map((_, i) => (
        <Link
          href={`/movies/${Genre}/${Genre}${i + 1}`}
          key={i + 1}
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          {i + 1}
        </Link>
      ))}
    </div>
  );
}

export default Moviepagination;
