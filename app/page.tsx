import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Work from "@/components/sections/Work";
import Stack from "@/components/sections/Stack";
import Approach from "@/components/sections/Approach";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Stack />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
