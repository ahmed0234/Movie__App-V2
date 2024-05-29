"use client";

import { useRouter } from "next/navigation";

import { useState } from "react";

export default function NavbarSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const handleNavbarSearchClick = (e: any) => {
    e.preventDefault();
    router.push(`/movies/search/${searchTerm}`);
  };

  return (
    <div className="flex items-center rounded-lg bg-[#2c2f33] p-2">
      <form onSubmit={handleNavbarSearchClick}>
        <input
          className=" w-40 border-none bg-transparent px-4 text-white outline-none duration-300 ease-in-out placeholder:text-gray-400 focus:w-64 "
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button className="text-white" type="submit">
          <MicroscopeIcon className="size-4" />
        </button>
      </form>
    </div>
  );
}

function MicroscopeIcon(props) {
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
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </svg>
  );
}
