'use client'
import Card from "@/components/Card";
import Hero from "@/components/Hero";
import Random from "@/components/Random";
import Introduction from "@/components/Introduction";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Introduction/>
      <Random/>
    </main>
  );
}
