import type { NextPage } from "next";
import React, { useState } from "react";
const Home: NextPage = () => {
  const [backgrounds, setBackgrounds] = useState(
    "/static/images/loadingnewsscreenbg0.png"
  );
  const background =
    typeof window !== "undefined" && document?.getElementById("background");
  if (background) {
    background.style.backgroundImage = `url(${backgrounds})`;
  }
  setInterval(() => {
    const random = Math.floor(Math.random() * 4);
    switch (random) {
      case 0:
        setBackgrounds(`/static/images/loadingnewsscreenbg2.png`);
        break;
      case 1:
        setBackgrounds(`/static/images/loadingnewsscreenbg3.png`);
        break;
      case 2:
        setBackgrounds(`/static/images/loadingnewsscreenbg4.png`);
        break;
      case 3:
        setBackgrounds(`/static/images/loadingnewsscreenbg5.png`);
        break;
      default:
        setBackgrounds(`/static/images/loadingnewsscreenbg6.png`);
        break;
    }
  }, 3000);
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
