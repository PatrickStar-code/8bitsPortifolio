import { useState } from "react";

export default function Dpad({ isColorGray }: { isColorGray?: boolean }) {
  const [activeDirection, setActiveDirection] = useState<string | null>(null);

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

    return `${baseClasses}  ${
      isColorGray
        ? "bg-gray-300 hover:bg-gray-600"
        : "bg-black  hover:bg-gray-600"
    } shadow-lg hover:shadow-md active:shadow-inner active:scale-95 hover:scale-105`;
  };

  return (
    <div className="relative">
      <div className="relative w-32 h-32">
        {/* D-Pad Base - Horizontal Bar */}
        <div
          className={`absolute top-11 left-0 w-32 h-10 ${
            isColorGray ? "bg-gray-500" : "bg-[#1a1a1a]"
          } shadow-xl rounded-sm`}
        ></div>

        {/* D-Pad Base - Vertical Bar */}
        <div
          className={`absolute top-0 left-11 w-10  ${
            isColorGray ? "bg-gray-500" : "bg-[#1a1a1a]"
          } h-32 shadow-xl rounded-sm`}
        ></div>

        {/* Up Button */}
        <button
          className={`${getButtonClasses(
            "up"
          )} top-0 left-11 w-10 h-13 rounded-t-sm border-b border-black/20`}
          onMouseDown={() => handleButtonPress("up")}
          onTouchStart={() => handleButtonPress("up")}
        >
          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[8px] border-gray-600/50 mb-4" />
        </button>

        {/* Down Button */}
        <button
          className={`${getButtonClasses(
            "down"
          )} bottom-0 left-11 w-10 h-13 rounded-b-sm border-t border-black/20`}
          onMouseDown={() => handleButtonPress("down")}
          onTouchStart={() => handleButtonPress("down")}
        >
          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-gray-600/50 mt-4" />
        </button>

        {/* Left Button */}
        <button
          className={`${getButtonClasses(
            "left"
          )} top-11 left-0 w-13 h-10 rounded-l-sm border-r border-black/20`}
          onMouseDown={() => handleButtonPress("left")}
          onTouchStart={() => handleButtonPress("left")}
        >
           <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[8px] border-gray-600/50 mr-4" />
        </button>

        {/* Right Button */}
        <button
          className={`${getButtonClasses(
            "right"
          )} top-11 right-0 w-13 h-10 rounded-r-sm border-l border-black/20`}
          onMouseDown={() => handleButtonPress("right")}
          onTouchStart={() => handleButtonPress("right")}
        >
          <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-gray-600/50 ml-4" />
        </button>

        {/* Center Circle */}
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6  ${
            isColorGray ? "bg-gray-400" : "bg-[#1a1a1a]"
          } rounded-full shadow-inner flex items-center justify-center`}
        >
           <div className="w-4 h-4 rounded-full bg-black/20" />
        </div>
      </div>
    </div>
  );
}
