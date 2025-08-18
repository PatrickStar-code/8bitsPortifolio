import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Power,
  PowerOff,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import MenuGameBoy from "./menu";
import { useNavigate } from "react-router-dom";

export default function Gameboy() {
  const [activeDirection, setActiveDirection] = useState<string | null>(null);
  const [isOn, setIsOn] = useState(false);
  const [zoom, setZoom] = useState(false);
  const navigate = useNavigate();

  const handleButtonPress = (direction: string) => {
    setActiveDirection(direction);

    setTimeout(() => {
      setActiveDirection(null);
    }, 150);
  };

  const getButtonClasses = (direction: string) => {
    const baseClasses =
      "absolute flex items-center justify-center transition-all duration-100 cursor-pointer select-none";
    const isActive = activeDirection === direction;

    if (isActive) {
      return `${baseClasses} bg-gray-800 shadow-inner transform scale-95`;
    }

    return `${baseClasses} bg-black hover:bg-gray-600 shadow-lg hover:shadow-md active:shadow-inner active:scale-95 hover:scale-105`;
  };

  return (
    <>
      <button className="absolute top-16 right-4">
        {isOn ? (
          <PowerOff onClick={() => setIsOn(false)} />
        ) : (
          <Power onClick={() => setIsOn(true)} />
        )}
      </button>

      <motion.div
        className="bg-gameboy w-[35rem] h-[50rem] border-4 rounded-br-[10rem] flex bg-[#B6B5B3] rounded-t-2xl rounded-bl-2xl items-center flex-col"
        animate={zoom ? { scale: 4, y: 620, x: 0 } : { scale: 1, x: 0, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        onAnimationComplete={() => {
          if (zoom) {
            navigate("/portifolio");
          }
        }}
      >
        {/* Tela Mockup */}
        <div className="gameboy-screen-mockup relative w-[80%] h-[40%] border-[#565763] bg-[#565763] border-4 mt-20 flex flex-col p-2 rounded-t-2xl rounded-bl-2xl rounded-br-4xl retro text-xs">
          <p className="text-center text-white hidden md:block">
            Dot Matter With Stereo Sound
          </p>
          <div className=" absolute  top-1/2 flex flex-col items-center -left-2 md:left-0 ml-2 gap-2">
            <div
              className={`pin w-3 h-3  ${
                isOn ? "bg-green-400" : "bg-[#291920]"
              } rounded-full`}
            ></div>
            <p className="text-[0.5rem] text-white transition-all ease-in">
              Battery
            </p>
          </div>
          <div
            className={`absolute top-1/2 left-1/2 w-[60%] h-[80%] transform -translate-x-1/2 -translate-y-1/2 transition-all ease-in ${
              isOn ? "bg-[#586e1b]" : "bg-[#465716]"
            } rounded-md`}
          >
            {isOn && (
              <MenuGameBoy {...{ handleSetZoom: () => setZoom(true) }} />
            )}
          </div>
        </div>
        {/* Fim Tela */}

        {/* Logo */}
        <div className="flex items-left">
          <h2 className="retro mt-2 text-1xl text-left text-[#3F467E]">
            Nintendo Gameboy<span className="text-[0.5rem]">TM</span>
          </h2>
        </div>
        {/*D pad  */}
        <div className="relative">
          <div className="absolute w-30 h-30 right-24 top-10">
            {/* D-Pad Container */}
            <div className="relative w-32 h-32 mx-auto mb-6">
              {/* D-Pad Base - Horizontal Bar */}
              <div className="absolute top-11 left-0 w-32 h-10 bg-black shadow-lg rounded-md"></div>

              {/* D-Pad Base - Vertical Bar */}
              <div className="absolute top-0 left-11 w-10 h-32 bg-black shadow-lg rounded-md"></div>

              {/* Up Button */}
              <button
                className={`${getButtonClasses(
                  "up"
                )} top-0 left-11 w-10 h-13 rounded-t-md border border-black`}
                onMouseDown={() => handleButtonPress("up")}
                onTouchStart={() => handleButtonPress("up")}
              >
                <ChevronUp size={16} className="text-gray-500" />
              </button>

              {/* Down Button */}
              <button
                className={`${getButtonClasses(
                  "down"
                )} bottom-0 left-11 w-10 h-13 rounded-b-md border border-black`}
                onMouseDown={() => handleButtonPress("down")}
                onTouchStart={() => handleButtonPress("down")}
              >
                <ChevronDown size={16} className="text-gray-500" />
              </button>

              {/* Left Button */}
              <button
                className={`${getButtonClasses(
                  "left"
                )} top-11 left-0 w-13 h-10 rounded-l-md border border-black`}
                onMouseDown={() => handleButtonPress("left")}
                onTouchStart={() => handleButtonPress("left")}
              >
                <ChevronLeft size={16} className="text-gray-500" />
              </button>

              {/* Right Button */}
              <button
                className={`${getButtonClasses(
                  "right"
                )} top-11 right-0 w-13 h-10 rounded-r-md border border-black`}
                onMouseDown={() => handleButtonPress("right")}
                onTouchStart={() => handleButtonPress("right")}
              >
                <ChevronRight size={16} className="text-gray-500" />
              </button>

              {/* Center Circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-black rounded-full shadow-inner border border-black"></div>
            </div>
          </div>
        </div>
        {/* Fim Dpad */}
        {/* Bottoes a e B    */}
        <div className="button-container relative left-[5rem] top-[7rem]">
          <div className="A-Container">
            <button
              className="button absolute bg-[#7D0A45]  hover:bg-[#620835] rounded-full w-15 h-15   "
              onClick={() => isOn && setZoom(true)}
            />
            <span className="retro text-black absolute top-[4rem] left-[1.7rem] transform ">
              A
            </span>
          </div>
          <div className="b-container">
            <button className="absolute button bg-[#7D0A45] hover:bg-[#620835] rounded-full w-15 h-15  left-16 bottom-0" />
            <span className="retro  absolute text-black left-22  top-1 transform">
              B
            </span>
          </div>
        </div>

        {/* Botões Start e Select */}
        <div className="button-container relative -left-2 top-[16rem] flex gap-4">
          <div className=" transform -rotate-[20deg] text-black retro">
            <div>
              <div className="bg-[#6D6B76] hover:bg-[#5F5E65] rounded-full w-18 h-4"></div>
            </div>
            <span className="text-black text-xs">Select</span>
          </div>
          <div className=" transform -rotate-[20deg] text-black retro">
            <div>
              <button
                className="bg-[#6D6B76] hover:bg-[#5F5E65] rounded-full w-18 h-4"
                onClick={() => isOn && setZoom(true)}
              />
            </div>
            <span className="text-black text-xs">Start</span>
          </div>
        </div>
      </motion.div>
    </>
  );
}
