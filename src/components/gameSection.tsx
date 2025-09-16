import Game from "../game/game";

export default function GameSection() {
  return (
    <section className="h-screen snap-start flex flex-col items-center justify-center retr bg-background">
      <div>
        <Game />
      </div>
    </section>
  );
}
