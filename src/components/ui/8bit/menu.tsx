import { Button } from "./button";

export default function MenuGameBoy({
  handleSetZoom,
}: {
  handleSetZoom: () => void;
}) {
  return (
    <div className="flex-1 flex flex-col justify-between items-center w-full min-h-0 py-2 text-[#0f380f] select-none">
      <div className="flex flex-col items-center w-full">
        <h1 className="retro text-[max(1rem,2vw)] md:text-3xl font-bold tracking-tighter mb-1 leading-tight">
          PATRICK
        </h1>
        <div className="h-[1px] w-[80%] bg-[#0f380f]/30"></div>
      </div>

      <div className="flex flex-col items-center justify-center gap-2 md:gap-4 flex-1 min-h-0 w-full overflow-hidden">
        <Button
          onClick={() => handleSetZoom()}
          className="retro px-4 py-1 md:px-6 md:py-2 bg-[#306230] text-[#9bbc0f] hover:bg-[#0f380f] hover:text-[#9bbc0f] border-b-2 md:border-b-4 border-[#0f380f] active:border-b-0 active:translate-y-0.5 transition-all uppercase text-[max(0.5rem,1vw)] md:text-sm whitespace-nowrap"
        >
          Press Start
        </Button>
      </div>
    </div>
  );
}
