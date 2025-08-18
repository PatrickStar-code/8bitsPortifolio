import React from "react";

export default function GameboyAdvance() {
  return (
    <div className="flex gap-2">
      {/* Esquerda */}
      <div className="w-[5rem] border-2 border-white gameboy-left">a</div>

      {/* Centro */}
      <div className="w-[10rem] border-2 flex-col flex border-white gameboy-center rounded-t-lg rounded-b-lg">
        {/* Logo */}
        <div className=" flex justify-center items-center">
          <span className="rounded-full p-2 border-4 border-blue-900 text-blue-900 shadow-2xl retro mt-2 mb-2">
            Nintendo
          </span>
        </div>
        <div className="mockup-screen flex items-center justify-center border-black h-[40%] w-[80%]">
          a
        </div>
      </div>

      {/* Direita */}
      <div className="w-[5rem] border-2 border-white gameboy-right">a</div>
    </div>
  );
}
