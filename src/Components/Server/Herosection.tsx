

export default function HeroSection() {
  return (
    <section className="w-full  py-12 md:py-24 lg:py-32">
      <div className="  px-4 md:px-6 ">
        <div className="flex flex-col items-center space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              This is a movie app built with Next.js
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Discover the latest movies and TV shows, and never miss a beat.
            </p>
            <h2>
              Made by{" "}
              <span className=" text-xl text-rose-600">~Ahmed Hassan</span>
            </h2>
            <h3>Email: ahmedkiller0234@gmail.com</h3>
            <h3>Phone: +92 3355144371</h3>
          </div>
          <form className="w-full max-w-md">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
              <input
                className="w-full rounded-md border border-gray-200 bg-white px-10 py-2 text-sm shadow-sm transition-colors focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 dark:focus:border-gray-50 dark:focus:ring-gray-50"
                placeholder="Search for movies..."
                type="search"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
