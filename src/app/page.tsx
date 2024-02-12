import Hero from "@/components/Hero";
import Random from "@/components/Random";
import Introduction from "@/components/Introduction";
import type { Metadata } from "next";
import Magnetic from "@/components/Magnetic";
import Info from "@/components/Footer/Info";
import Card from "@/components/Card";
import Marquee from "@/components/Marquee";
export const metadata: Metadata = {
  title: "Thomas Booth - Software Engineer 2024",
  description: "...",
};

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Introduction />
      
      
      <div className="relative  bg-red-400 z-10 flex flex-col justify-center items-center gap-20 py-10">
        
        <Card colour="red"/>
      </div>
      <Info/>

      {/* <Random /> */}
    </main>
  );
}
