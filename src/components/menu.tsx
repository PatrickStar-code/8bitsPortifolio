import { Button } from "./ui/8bit/button";

export default function MenuGameBoy() {
  return (
    <div className="flex items-center flex-col justify-center mt-12 text-[#465716] text-xl">
      PatrickStar
      <Button className="mt-12 animate-bounce  ring-[#465716] hover:bg-[#60791d] bg-[#6A7D2A] text-[#465716] dark:ring-black  ">
        Start
      </Button>
    </div>
  );
}
