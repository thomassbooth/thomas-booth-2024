import React from "react";

interface cardProps {
  colour: string
}

const Card: React.FC<cardProps> = ({colour}) => {
  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <div style={{backgroundColor: colour}} className="p-[50px] w-[1000px] h-[500px] relative bg-gray-50">
        <p className = 'font-bold	text-9xl'>HI THERE, IM HUY NGUYEN.</p>
      </div>
    </div>
  );
};

export default Card;