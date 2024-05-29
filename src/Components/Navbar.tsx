import Link from "next/link";
import Navlink from "@/Components/Client/Navlink";
import NavbarSearch from "@/Components/Server/Navbarsearch";
import { SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

function Navbar() {
  return (
    <nav className="mx-auto flex w-11/12 items-center justify-between  px-2 py-8 max-sm:px-0">
      <div className="right__nav flex items-center">
        <Link href={`/`}>
          <svg
            className="rotate-180 text-3xl"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 20 20"
          >
            <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
              <path
                d="M11.75 14.014L15.528 7.5H7.972zm-.865 2.495a1 1 0 0 0 1.73 0l5.514-9.507a1 1 0 0 0-.865-1.502H6.236a1 1 0 0 0-.865 1.502z"
                opacity={0.2}
              ></path>
              <path d="M10 16a.5.5 0 0 1-.429-.243l-6-10A.5.5 0 0 1 4 5h12a.5.5 0 0 1 .429.757l-6 10A.5.5 0 0 1 10 16m5.117-10H4.883L10 14.528z"></path>
            </g>
          </svg>
        </Link>
        <Link href={`/`}>
          <h1 className="text-xl">FlickWave</h1>
        </Link>
      </div>

      <div className="center__nav flex items-center gap-8 max-lg:hidden">
        <Navlink href={`/movies`} Navtext={`Movies`} />
        <Navlink href={`/series`} Navtext={`Series`} />
        <Navlink href={`/animations`} Navtext={`Animations`} />
      </div>

      <div className="nav__end flex items-center gap-4">
        <div className="max-sm:hidden">
          <NavbarSearch />
        </div>
        <div>
          <SignedOut>
            <SignUpButton mode="modal">
              <button className=" rounded-lg bg-neutral-100 px-6 py-2 text-black max-sm:px-4 max-sm:py-1">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        <div>
          <svg
            className="hidden text-3xl max-lg:block"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M16 18v2H5v-2zm5-7v2H3v-2zm-2-7v2H8V4z"
            ></path>
          </svg>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
