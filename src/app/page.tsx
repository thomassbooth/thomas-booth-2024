import Hero from "@/components/Hero";
import Random from "@/components/Random";
import Introduction from "@/components/Introduction";
import type { Metadata } from "next";
import Magnetic from "@/components/Magnetic";
import Info from "@/components/Footer/Info";
import Card from "@/components/Card/Card";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Cards from "@/components/Card/Cards";
export const metadata: Metadata = {
  title: "Thomas Booth - Software Engineer 2024",
  description: "...",
};

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Introduction />
      {/* <About /> */}
      <Cards/>
      <Info />

      {/* <Random /> */}
    </main>
  );
}
