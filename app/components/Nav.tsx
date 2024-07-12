import React from "react";

export default function Nav() {
  return (
    <div className="fixed top-0 left-0 z-[20] text-white p-12 flex  justify-between w-screen">
      <div className="flex flex-col uppercase font-semibold tracking-[-.1rem]">
        <span>Style</span>
        <span>Beat</span>
        <span>Legacy</span>
        <span>Revival</span>
      </div>
      <div>
        {" "}
        <h1>LI WEI</h1>
      </div>
      <div>
        <span>Menu</span>
      </div>
    </div>
  );
}
