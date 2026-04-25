import { Power } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Dpad from "./dpad";
import MenuGameBoy from "./ui/8bit/menu";

export default function Gameboy() {
  const [isOn, setIsOn] = useState(false);
  const [zoom, setZoom] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="fixed inset-0 w-full h-full flex items-center justify-center p-4 bg-[#2a133d] overflow-hidden">
        <motion.div
          className="bg-gameboy relative w-full max-w-[min(90vw,32rem)] h-auto aspect-[35/50] max-h-[90vh] border-2 border-[#1a1a1a]/20 rounded-br-[8rem] flex flex-col items-center shadow-2xl p-6"
          animate={
            zoom ? { scale: 3, y: "60%", x: 0 } : { scale: 1, x: 0, y: 0 }
          }
          transition={{ duration: 1, ease: "easeInOut" }}
          onAnimationComplete={() => {
            if (zoom) {
              navigate("/portifolio");
            }
          }}
        >
          {/* Power Switch Top */}
          <div className="absolute -top-4 left-10 w-16 h-8 flex flex-col items-center">
            <div className="text-[0.6rem] retro text-white mb-1 uppercase opacity-70">
              Power
            </div>
            <button
              onClick={() => setIsOn(!isOn)}
              className={`w-12 h-4 power-switch rounded-full relative cursor-pointer overflow-hidden transition-colors ${isOn ? "bg-green-600" : "bg-gray-600"}`}
            >
              <motion.div
                animate={{ x: isOn ? 24 : 0 }}
                className="absolute top-0.5 left-0.5 w-6 h-3 bg-white/30 rounded-full border border-white/50"
              />
            </button>
          </div>

          {/* Screen Bezel */}
          <div className="gameboy-screen-bezel relative w-[90%] h-[40%] mt-8 flex flex-col p-4 rounded-t-xl rounded-bl-xl rounded-br-[3rem] overflow-hidden">
            <div className="flex justify-between items-center mb-2 px-4">
              <div className="h-[2px] w-12 bg-red-600 rounded-full opacity-50"></div>
              <p className="text-[0.6rem] text-white/40 retro uppercase tracking-widest">
                Dot Matrix With Stereo Sound
              </p>
              <div className="h-[2px] w-12 bg-blue-600 rounded-full opacity-50"></div>
            </div>

            <div className="flex-1 relative bg-[#292931] rounded-sm overflow-hidden flex items-center justify-center">
              {/* Battery LED */}
              <div className="absolute top-1/2 left-2 transform -translate-y-1/2 flex flex-col items-center gap-1 z-10">
                <div
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 power-led ${
                    isOn ? "on" : "bg-[#291920]"
                  }`}
                ></div>
              </div>

              {/* Display Area */}
              <div
                className={`w-[85%] h-[90%] transition-all duration-500 rounded shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center relative overflow-hidden ${
                  isOn ? "bg-[#8b911c]" : "bg-[#292931]"
                }`}
                style={{ imageRendering: "pixelated" }}
              >
                {isOn ? (
                  <div className="w-full h-full relative overflow-hidden flex items-center justify-center bg-[#8b911c]">
                    {/* Viewport for the screen content */}
                    <div className="w-full h-full flex flex-col items-center justify-center p-2 box-border overflow-hidden">
                      <div className="w-full h-full max-w-full max-h-full flex flex-col items-center justify-center scale-95 md:scale-100 transition-transform">
                        <MenuGameBoy
                          {...{ handleSetZoom: () => setZoom(true) }}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center opacity-10 select-none">
                    <Power size={32} className="text-black mb-2" />
                    <p className="retro text-[0.6rem] text-black uppercase">
                      Switch On
                    </p>
                  </div>
                )}

                {/* Subtle screen reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* Brand Logo */}
          <div className="w-[90%] mt-6 flex flex-col items-start px-2">
            <div className="flex items-baseline gap-1">
              <h2 className="retro text-xl font-bold tracking-tight text-[#30366b]">
                Nintendo <span className="text-2xl italic">GAME BOY</span>
              </h2>
              <span className="text-[0.5rem] text-[#30366b] retro">TM</span>
            </div>
          </div>

          {/* Controls Section */}
          <div className="flex-1 w-full flex flex-col justify-between py-8 px-4">
            <div className="flex justify-between items-start">
              {/* Dpad */}
              <div className="scale-75 md:scale-110 md:ml-4 mt-0 md:mt-4 origin-top-left">
                <Dpad />
              </div>

              {/* A / B Buttons */}
              <div className="flex gap-4 mt-8 md:mt-8 mr-0 md:mr-4 transform -rotate-[25deg]">
                <div className="flex flex-col items-center">
                  <button
                    className="gameboy-button-red w-10 h-10 md:w-16 md:h-16 rounded-full cursor-pointer"
                    onClick={() => isOn && setZoom(true)}
                  />
                  <span className="retro text-[#30366b] font-bold mt-2 text-xs md:text-sm italic">
                    B
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <button
                    className="gameboy-button-red w-10 h-10 md:w-16 md:h-16 rounded-full cursor-pointer"
                    onClick={() => isOn && setZoom(true)}
                  />
                  <span className="retro text-[#30366b] font-bold mt-2 text-xs md:text-sm italic">
                    A
                  </span>
                </div>
              </div>
            </div>

            {/* Start / Select Buttons */}
            <div className="flex justify-center gap-6 md:gap-10 mt-auto pb-4">
              <div className="flex flex-col items-center transform -rotate-[25deg]">
                <button className="w-10 h-3 md:w-16 md:h-4 bg-[#6d6b76] rounded-full shadow-md border-b md:border-b-2 border-black/40 hover:bg-[#5f5e65] transition-colors cursor-pointer" />
                <span className="retro text-[#30366b] text-[0.5rem] md:text-[0.6rem] font-bold mt-2 uppercase">
                  Select
                </span>
              </div>
              <div className="flex flex-col items-center transform -rotate-[25deg]">
                <button
                  className="w-10 h-3 md:w-16 md:h-4 bg-[#6d6b76] rounded-full shadow-md border-b md:border-b-2 border-black/40 hover:bg-[#5f5e65] transition-colors cursor-pointer"
                  onClick={() => isOn && setZoom(true)}
                />
                <span className="retro text-[#30366b] text-[0.5rem] md:text-[0.6rem] font-bold mt-2 uppercase">
                  Start
                </span>
              </div>
            </div>
          </div>

          {/* Speaker Grille */}
          <div className="absolute bottom-6 right-8 flex gap-2 transform rotate-[-45deg] scale-75 opacity-30">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="w-2.5 h-14 bg-black/40 rounded-full"
              ></div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}
