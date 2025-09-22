import { Power, PowerOff } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import MenuGameBoy from "./menu";
import { useNavigate } from "react-router-dom";
import Dpad from "./dpad";

export default function Gameboy() {
  const [isOn, setIsOn] = useState(false);
  const [zoom, setZoom] = useState(false);
  const navigate = useNavigate();

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
          <h2 className="retro mt-2 text-lg  text-left text-[#3F467E]">
            Nintendo Gameboy<span className="text-[0.5rem]">TM</span>
          </h2>
        </div>
        {/*D pad  */}
        <Dpad />
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
