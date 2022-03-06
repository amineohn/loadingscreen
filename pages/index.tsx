import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
const Home: NextPage = () => {
  const [backgrounds, setBackgrounds] = useState(
    "/static/images/loadingnewsscreenbg0.png"
  );
  const background =
    typeof window !== "undefined" && document?.getElementById("background");
  if (background) {
    background.style.backgroundImage = `url(${backgrounds})`;
  }
  useEffect(() => {
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
  }, []);
  const audio =
    typeof window !== "undefined" &&
    (document?.getElementById("audio") as HTMLAudioElement);
  if (audio) {
    audio.play();
  }
  return (
    <>
      <audio id="audio" src="/static/music/musicGeneric.mp3" />
      <div className="py-4" />
      <div
        className={`bg-cover w-[1800px] h-[900px] m-auto pt-5 px-5 -skew-x-3 scale-95 rounded transition-all ease-in-out duration-500`}
        id="background"
      >
        <div className="flex justify-center items-center">
          <div className="px-2.5 py-2.5 bg-black/10 backdrop-blur-md text-white font-medium rounded-lg hidden">
            <div className="inline-flex space-x-3 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis culpa, mollitia sit, dolore sint accusamus illo
                aspernatur inventore minus quibusdam delectus necessitatibus.
                Officiis amet minima quibusdam sapiente eos ad distinctio.
              </span>
            </div>
          </div>
          <div className="bottom-0 fixed py-5 px-5 hidden">
            <button
              onClick={() => {
                if (audio) {
                  audio.pause();
                }
              }}
              className="bg-black/10 text-white font-medium rounded-lg px-8 py-2 backdrop-blur-sm transition-all ease-in-out duration-500 focus:outline-none scale-110"
            >
              {audio ? "Pause" : "Play"}
            </button>
          </div>
          <div className="bottom-0 fixed right-0 px-5 py-5">
            <Loading />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
