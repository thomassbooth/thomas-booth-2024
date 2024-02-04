'use client'
import Card from "@/components/Card";
import Hero from "@/components/Hero";
import Random from "@/components/Random";
import Test from "@/components/Test";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Test/>
      <Random/>
      <Card colour = {'green'}/>
      <Card colour = {'red'} />
      <Card colour = {'blue'} />
    </main>
  );
}
