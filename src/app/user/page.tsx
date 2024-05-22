async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function page() {
  const delay = await wait(1000);
  return (
    <div className="m-0 flex min-h-screen border  p-0 ">
      Users Page Hello World
    </div>
  );
}

export default page;
