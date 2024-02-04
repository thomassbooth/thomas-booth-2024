'use client'
import Card from "@/components/Card";
import Hero from "@/components/Hero";
import Random from "@/components/Random";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Random/>
      <Card colour = {'green'}/>
      <Card colour = {'red'} />
      <Card colour = {'blue'} />
    </main>
  );
}
