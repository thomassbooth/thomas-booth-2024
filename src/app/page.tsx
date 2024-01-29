import Card from "@/components/Card";
import Cursor from "@/components/Cursor";
import Random from "@/components/Random";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" ">
      <Random/>
      <Card colour = {'green'}/>
      <Card colour = {'red'} />
      <Cursor/>
    </main>
  );
}
