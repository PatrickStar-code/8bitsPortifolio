import { useEffect, useRef } from "react";
import { collisions } from "../data/collisions";

export default function Game() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = document.querySelector("canvas");
    const c = canvas?.getContext("2d");
    if (!canvas) return;
    if (!canvasRef.current) return;
    if (!c) return;

    class Boundary {
      static width = 48;
      static height = 48;
      position;
      constructor({ position }) {
        this.position = position;
        this.width = 48;
        this.height = 48;
      }

      draw() {
        if (!c) return;
        c.fillStyle = "rgba(255, 0, 0, 0.2";
        c?.fillRect(this.position.x, this.position.y, this.width, this.height);
      }
    }

    class Sprite {
      position;
      image;

      constructor(
        { position, image, frames = { max: 1 } } = {
          position: { x: 0, y: 0 },
          image: new Image(),
        }
      ) {
        this.position = position;
        this.image = image;
        this.frames = frames;

        this.image.onload = () => {
          this.width = this.image.width / this.frames.max;
          this.height = this.image.height;
          console.log(this.width);
          console.log(this.height);
        };
      }

      draw() {
        c?.drawImage(
          this.image,
          0,
          0,
          this.image.width / this.frames.max,
          this.image.height,
          this.position.x,
          this.position.y,
          this.image.width / this.frames.max,
          this.image.height
        );
      }
    }

    canvas.width = window.innerWidth - 140;
    canvas.height = window.innerHeight - 140;

    const collisionsMap = [];
    for (let i = 0; i < collisions.length; i += 70) {
      collisionsMap.push(collisions.slice(i, 70 + i));
    }

    const boundaries = [];
    const offset = { x: -500, y: -550 };

    collisionsMap.forEach((row, i) => {
      row.forEach((symbol, j) => {
        if (symbol === 1025) {
          boundaries.push(
            new Boundary({
              position: {
                x: j * Boundary.width + -366,
                y: i * Boundary.height + -450,
              },
            })
          );
        }
      });
    });

    // Carrega o Background/Cidade
    const image = new Image();
    image.src = "/AssetsGame/PelletTown.png";

    const playerImage = new Image();
    playerImage.src = "/AssetsGame/playerDown.png";

    const player = new Sprite({
      position: {
        x: canvas.width / 2 - 192 / 4 / 2,
        y: canvas.height / 2 - 68 / 2,
      },
      image: playerImage,
      frames: { max: 4 },
    });

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

    const movables = [background, ...boundaries];
    function rectangularCollision({ rectangle1, rectangle2 }) {
      return (
        rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.position.y + rectangle1.height >= rectangle2.position.y &&
        rectangle1.position.y <= rectangle2.position.y + rectangle2.height
      );
    }
    function animate() {
      if (!canvas) return;

      window.requestAnimationFrame(animate);

      background.draw();

      player.draw();

      boundaries.forEach((boundary) => {
        boundary.draw();
      });

      let moving = true;
      if (keys.w.pressed && lastKey === "w") {
        for (let i = 0; i < boundaries.length; i++) {
          const boundary = boundaries[i];
          if (
            rectangularCollision({
              rectangle1: player,
              rectangle2: {
                ...boundary,
                position: {
                  x: boundary.position.x,
                  y: boundary.position.y + 3,
                },
              },
            })
          ) {
            moving = false;
            break;
          }
        }
        if (moving) {
          movables.forEach((movable) => {
            movable.position.y += 3;
          });
        }
      } else if (keys.a.pressed && lastKey === "a") {
        for (let i = 0; i < boundaries.length; i++) {
          const boundary = boundaries[i];
          if (
            rectangularCollision({
              rectangle1: player,
              rectangle2: {
                ...boundary,
                position: {
                  x: boundary.position.x + 3,
                  y: boundary.position.y,
                },
              },
            })
          ) {
            moving = false;
            break;
          }
        }
        if (moving) {
          movables.forEach((movable) => {
            movable.position.x += 3;
          });
        }
      } else if (keys.s.pressed && lastKey === "s") {
        for (let i = 0; i < boundaries.length; i++) {
          const boundary = boundaries[i];
          if (
            rectangularCollision({
              rectangle1: player,
              rectangle2: {
                ...boundary,
                position: {
                  x: boundary.position.x,
                  y: boundary.position.y - 3,
                },
              },
            })
          ) {
            moving = false;
            break;
          }
        }
        if (moving) {
          movables.forEach((movable) => {
            movable.position.y -= 3;
          });
        }
      } else if (keys.d.pressed && lastKey === "d") {
        for (let i = 0; i < boundaries.length; i++) {
          const boundary = boundaries[i];
          if (
            rectangularCollision({
              rectangle1: player,
              rectangle2: {
                ...boundary,
                position: {
                  x: boundary.position.x - 3,
                  y: boundary.position.y,
                },
              },
            })
          ) {
            moving = false;
            break;
          }
        }
        if (moving) {
          movables.forEach((movable) => {
            movable.position.x -= 3;
          });
        }
      }
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
