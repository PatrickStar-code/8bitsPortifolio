import React, { useEffect, useRef } from "react";

function Game() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = document.querySelector("canvas");
    const c = canvas?.getContext("2d");
    if (!canvasRef.current) return;
    if (!canvas) return;
    if (!c) return;

    canvas.width = window.innerWidth - 140;
    canvas.height = window.innerHeight - 140;

    c.fillStyle = "white";
    c?.fillRect(0, 0, canvas.width, canvas.height);

    console.log("Canvas dimensions:", canvas.width, canvas.height);

    const playerImage = new Image();
    playerImage.src = "../assets/game/images/playerDown.png";

    playerImage.onload = () => {
      c?.drawImage(playerImage, 0, 0);
    };

    // Limpeza ao desmontar o componente
    return () => {};
  }, []);

  return <canvas ref={canvasRef}></canvas>;
}

export default Game;
