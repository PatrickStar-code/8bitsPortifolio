import { useEffect, useRef } from "react";
import { collisions } from "../data/collisions";

function Game() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = document.querySelector("canvas");
    const c = canvas?.getContext("2d");
    if (!canvas) return;
    if (!canvasRef.current) return;
    if (!c) return;

    class Sprite {
      position: { x: number; y: number };
      image: HTMLImageElement;

      constructor(
        { position, image } = {
          position: { x: 0, y: 0 },
          image: new Image(),
        }
      ) {
        this.position = position;
        this.image = image;
      }

      draw() {
        c?.drawImage(this.image, this.position.x, this.position.y);
      }
    }

    canvas.width = window.innerWidth - 140;
    canvas.height = window.innerHeight - 140;

    class Boundary {
      static width = 48;
      static height = 48;
      position: { x: number; y: number };
      constructor({
        position,
      }: {
        position: { x: number; y: number };
        width?: number;
        height?: number;
      }) {
        this.position = position;
        this.width = 48;
        this.height = 48;
      }

      draw() {
        if (!c) return;
        c.fillStyle = "red";
        c?.fillRect(this.position.x, this.position.y, this.width, this.height);
      }
    }

    const collisionsMap = [];
    for (let i = 0; i < collisions.length; i += 70) {
      collisionsMap.push(collisions.slice(i, 70 + i));
    }

    console.log(collisionsMap);
    const boundaries = [] as Boundary[];
    const offset = { x: -500, y: -550 };

    collisionsMap.forEach((row, i) => {
      row.forEach((symbol, j) => {
        if (symbol === 1025) {
          boundaries.push(
            new Boundary({
              position: {
                x: j * Boundary.width + -361,
                y: i * Boundary.height + -485,
              },
            })
          );
        }
      });
    });

    // Carrega o Background/Cidade
    const image = new Image();
    image.src = "/AssetsGame/PelletTown.png";

    const background = new Sprite({
      position: {
        x: offset.x,
        y: offset.y,
      },
      image: image,
    });

    const keys = {
      w: { pressed: false },
      a: { pressed: false },
      s: { pressed: false },
      d: { pressed: false },
    };

    const playerImage = new Image();
    playerImage.src = "/AssetsGame/playerDown.png";

    function animate() {
      if (!canvas) return;

      window.requestAnimationFrame(animate);

      background.draw();

      boundaries.forEach((boundary) => {
        boundary.draw();
      });

      c?.drawImage(
        playerImage,
        0,
        0,
        playerImage.width / 4,
        playerImage.height,
        canvas.width / 2 - playerImage.width / 4,
        canvas.height / 2 - playerImage.height / 2,
        (playerImage.width / 4) * 1.2,
        playerImage.height * 1.2
      );

      if (keys.w.pressed && lastKey === "w") background.position.y += 3;
      else if (keys.a.pressed && lastKey === "a") background.position.x += 3;
      else if (keys.s.pressed && lastKey === "s") background.position.y -= 3;
      else if (keys.d.pressed && lastKey === "d") background.position.x -= 3;
    }

    animate();

    let lastKey = "";
    window.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "w":
          keys.w.pressed = true;
          lastKey = "w";
          break;
        case "a":
          keys.a.pressed = true;
          lastKey = "a";
          break;
        case "s":
          keys.s.pressed = true;
          lastKey = "s";
          break;
        case "d":
          keys.d.pressed = true;
          lastKey = "d";
          break;
      }
    });

    window.addEventListener("keyup", (event) => {
      switch (event.key) {
        case "w":
          keys.w.pressed = false;
          break;
        case "a":
          keys.a.pressed = false;
          break;
        case "s":
          keys.s.pressed = false;
          break;
        case "d":
          keys.d.pressed = false;
          break;
      }
    });

    // Limpeza ao desmontar o componente
    return () => {};
  }, []);

  return <canvas ref={canvasRef}></canvas>;
}

export default Game;
