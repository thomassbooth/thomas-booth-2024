import Card from "@/components/Card";
import Random from "@/components/Random";
import React from "react";

const Page = () => {
  return (
    <div>
      <main className="bg-gray-200">
        <Card colour={"green"} />
        <Card colour={"red"} />
        <Card colour={"blue"} />
        <Random />
      </main>
    </div>
  );
};

export default Page;
