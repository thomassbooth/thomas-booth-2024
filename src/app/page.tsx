
import Hero from "@/components/Hero";
import Random from "@/components/Random";
import Introduction from "@/components/Introduction";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thomas Booth - Software Engineer 2024",
  description: "...",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Introduction />
      <div className="h-screen"></div>
      <Random />
    </main>
  );
}
