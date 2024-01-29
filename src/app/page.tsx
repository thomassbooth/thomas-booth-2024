import Card from "@/components/Card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative pt-[50vh]">
      <Card colour = {'green'}/>
      <Card colour = {'red'} />
    </main>
  );
}
