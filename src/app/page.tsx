'use client'
import Card from "@/components/Card";
import Random from "@/components/Random";

export default function Home() {
  return (
    <main className="bg-gray-200">
      <Random/>
      <Card colour = {'green'}/>
      <Card colour = {'red'} />
      <Card colour = {'blue'} />
    </main>
  );
}
