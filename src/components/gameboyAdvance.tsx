import Dpad from "./dpad";

export default function GameboyAdvance() {
  return (
    <div className="flex  ">
      {/* Esquerda */}
      <div className="w-[20rem] h-[29rem] border-2 border-white relative mt-2   gameboy-left bg-blue-900">
        <div className="mt-12">
          <Dpad isColorGray={true} />

          {/* Buttons Container */}
          <div className="flex-col gap-8 right-5 top-[60%] absolute">
            <div className="first-circle-left">
              <div className="bg-gray-300 w-8 h-8 rounded-full"></div>
            </div>
            <div className="mt-8">
              <div className="bg-gray-300 w-8 h-8 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Centro */}
      <div className="w-[40rem] relative border-2 flex-col flex border-white gameboy-center items-center rounded-t-lg bg-blue-900 rounded-b-lg">
        {/* Logo */}
        <div className=" flex justify-center items-center"></div>
        <div className="mockup-screen flex rounded-2xl bg-black items-center flex-col mb-12 justify-center   border-white border-2 h-[25rem] w-[90%] mt-8">
          <div
            className="screen w-[30rem] h-[90rem] drop-shadow-2xl
 border-white mt-8  bg-blue-400"
          ></div>
          <span className="text-md p-2">
            Gameboy <span className="text-xs">Advance</span>
          </span>
        </div>
      </div>

      {/* Direita */}
      <div className="w-[20rem] h-[29rem] border-2 border-white gameboy-right  bg-blue-900 mt-2">
        a
      </div>
    </div>
  );
}
