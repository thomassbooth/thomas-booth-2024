'use client'
import Card from "@/components/Card";
import Cursor from "@/components/Cursor";
import Menu from "@/components/Menu";
import Random from "@/components/Random";
import Image from "next/image";

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
