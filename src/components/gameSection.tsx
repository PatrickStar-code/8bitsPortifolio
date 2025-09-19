import { useEffect, useState } from "react";
import Game from "../game/game.jsx";
import { RotateCw } from "lucide-react";

function getOrientation() {
  return window.matchMedia("(orientation: portrait)").matches
    ? "portrait"
    : "landscape";
}

export default function GameSection() {
  const [orientation, setOrientation] = useState(getOrientation());

  useEffect(() => {
    function handleChange() {
      setOrientation(getOrientation());
    }

    window.addEventListener("orientationchange", handleChange);
    window.addEventListener("resize", handleChange);

    return () => {
      window.removeEventListener("orientationchange", handleChange);
      window.removeEventListener("resize", handleChange);
    };
  }, []);
  return (
    <section className="h-screen snap-start flex flex-col items-center justify-center retr bg-background">
      <div>
        {orientation === "landscape" ? (
          <Game />
        ) : (
          <div className="flex flex-col items-center gap-4 text-center animate-pulse">
            <RotateCw className="w-16 h-16 animate-spin-slow" />
            <h2 className="text-2xl font-bold">
              Por favor, gire seu dispositivo
            </h2>
            <p className="text-sm text-gray-300">
              A experiência apenas funcina na horizontal
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
