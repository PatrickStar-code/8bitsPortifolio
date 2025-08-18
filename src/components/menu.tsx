import type React from "react";
import { Button } from "./ui/8bit/button";

export default function MenuGameBoy({
  handleSetZoom,
}: {
  handleSetZoom: () => void;
}) {
  return (
    <div className="flex items-center flex-col justify-center mt-12 text-[#465716] text-sm md:text-xl">
      PatrickStar
      <Button
        onClick={() => handleSetZoom()}
        className="mt-12 animate-bounce  ring-[#465716] h-7 hover:bg-[#60791d] bg-[#6A7D2A] text-[#465716] dark:ring-black  "
      >
        Start
      </Button>
    </div>
  );
}
