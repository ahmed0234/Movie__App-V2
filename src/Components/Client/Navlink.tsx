"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navlink({ href, Navtext }) {
  const pathname = usePathname();



  if (pathname === href) {
    return (
      <Link href={href} className="text-rose-600">
        {Navtext}
      </Link>
    );
  } else {
    return <Link href={href}>{Navtext}</Link>;
  }
}

export default Navlink;
