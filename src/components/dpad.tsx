import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
} from "lucide-react";
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
      <div className="absolute w-30 h-30 right-24 top-10">
        {/* D-Pad Container */}
        <div className="relative w-32 h-32 mx-auto mb-6">
          {/* D-Pad Base - Horizontal Bar */}
          <div
            className={`absolute top-11 left-0 w-32 h-10 ${
              isColorGray ? "bg-gray-500" : "bg-black"
            } shadow-lg rounded-md`}
          ></div>

          {/* D-Pad Base - Vertical Bar */}
          <div
            className={`absolute top-0 left-11 w-10  ${
              isColorGray ? "bg-gray-500" : "bg-black"
            } h-32 bg-black shadow-lg rounded-md`}
          ></div>

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
          <div
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5  ${
              isColorGray ? "bg-gray-400" : "bg-black"
            } rounded-full shadow-inner border border-black`}
          ></div>
        </div>
      </div>
    </div>
  );
}
