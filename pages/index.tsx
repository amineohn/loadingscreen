import type { NextPage } from "next";
import React, { useState } from "react";
const Home: NextPage = () => {
  const [backgrounds, setBackgrounds] = useState([
    `/static/images/loadingnewsscreenbg4.png`,
  ]);
  const background =
    typeof window !== "undefined" && document?.getElementById("background");
  if (background) {
    background.style.backgroundImage = `url(${backgrounds})`;
  }
  // update background images every 5 seconds

  setInterval(() => {
    setBackgrounds([`/static/images/loadingnewsscreenbg5.png`]);
  }, 1000);

  setInterval(() => {
    setBackgrounds([`/static/images/loadingnewsscreenbg6.png`]);
  }, 1500);

  return (
    <>
      <div className="py-4" />
      <div
        className={`bg-cover w-[1800px] h-[900px] m-auto pt-5 px-5 -skew-x-3 scale-95 rounded transition-all ease-in-out duration-500`}
        id="background"
      >
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          reprehenderit commodi animi excepturi aliquid ipsum porro iste quidem
          molestiae tempora eaque qui, sit laborum, consequatur eius dignissimos
          corporis quas magni?
        </div>
      </div>
    </>
  );
};

export default Home;
