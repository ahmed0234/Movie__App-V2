import { auth } from "@clerk/nextjs/server";

export default function Home() {
  auth().protect();
  return (
    <main className="flex items-center justify-center  p-24">
      <h1 className="text-2xl">Contact Page</h1>
    </main>
  );
}
