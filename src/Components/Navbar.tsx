import Link from "next/link";
import styles from "./navbar.module.css";
import { UserButton , SignedIn} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <Link href={`/`} >Next.js</Link>
        <ul className={styles.links}>
          <Link href="/">
            <li>Home 🏠 </li>
          </Link>
          <Link href="/about">
            <li>About 🐶 </li>
          </Link>
          <Link href="/contact">
            <li>Contact ☎️ </li>
          </Link>
          <Link href="/sign-in">
            <li>Listing ☎️ </li>
          </Link>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
