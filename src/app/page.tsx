import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import type { Metadata } from "next";
import About from "@/components/About";
import Cards from "@/components/Card/Cards";
import Footer from "@/components/Footer/Footer";
export const metadata: Metadata = {
  title: "Thomas Booth - Software Engineer 2024",
  description: "...",
};

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Introduction />
      <About />
      <Cards/>
      <Footer />

      {/* <Random /> */}
    </main>
  );
}
