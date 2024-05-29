import HeroSection from "@/Components/Server/Herosection";

export const revalidate = 0; // revalidate at most every hour

const Page = async () => {
  return (
    <section className="sectionContainer flex items-center justify-center pb-10">
      <HeroSection />
    </section>
  );
};

export default Page;
