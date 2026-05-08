import { useEffect } from "react";
import { scaleFactor, dialogueData } from "./constants";
import { displayDialogue, setCamScale } from "./utilsGame";
import kaboom from "kaboom";

export default function Game() {
  useEffect(() => {
    const canvas = document.getElementById("game") as HTMLCanvasElement;

    const k = kaboom({
      global: false,
      touchToMouse: true,
      canvas: canvas,
      debug: false,
      width: window.innerWidth,
      height: window.innerHeight,
    });

    k.loadSprite("spritesheet", "/AssetsGame/character.png", {
      sliceX: 4,
      sliceY: 5,
      anims: {
        "idle-down": 1,
        "walk-down": { from: 0, to: 3, loop: true, speed: 8 },

        "idle-side": 9,
        "walk-side": { from: 8, to: 11, loop: true, speed: 8 },

        "idle-up": 16,
        "walk-up": { from: 16, to: 19, loop: true, speed: 8 },
      },
    });

    k.loadSprite("map", "/AssetsGame/map.png");

    k.setBackground(k.Color.fromHex("#311047"));

    k.scene("main", async () => {
      const mapData = await (await fetch("/AssetsGame/map.json")).json();
      const layers = mapData.layers;

      const map = k.add([k.sprite("map"), k.pos(0), k.scale(scaleFactor)]);

      const player = k.make([
        k.sprite("spritesheet", { anim: "idle-down" }),
        k.area({
          shape: new k.Rect(k.vec2(0, 3), 10, 10),
        }),
        k.body(),
        k.anchor("center"),
        k.pos(),
        k.scale(scaleFactor),
        {
          speed: 250,
          direction: "down",
          isInDialogue: false,
        },
        "player",
      ]);

      const interactIndicator = k.add([
        k.text("!", { size: 24, font: "monospace" }),
        k.pos(0, 0),
        k.anchor("center"),
        k.color(255, 255, 255),
        k.opacity(0),
        {
          update() {
            if (player.isInDialogue) {
              // @ts-expect-error - interactIndicator is a GameObj
              this.opacity = 0;
              return;
            }
            // @ts-expect-error - interactIndicator is a GameObj
            this.pos = player.pos.add(k.vec2(0, -50));
          },
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ]) as any;

      for (const layer of layers) {
        if (layer.name === "boundaries") {
          for (const boundary of layer.objects) {
            const b = map.add([
              k.area({
                shape: new k.Rect(k.vec2(0), boundary.width, boundary.height),
              }),
              k.body({ isStatic: true }),
              k.pos(boundary.x, boundary.y),
              boundary.name,
            ]);

            if (boundary.name) {
              player.onCollide(boundary.name, () => {
                player.isInDialogue = true;
                displayDialogue(
                  dialogueData[boundary.name as keyof typeof dialogueData],
                  () => (player.isInDialogue = false),
                );

                if (boundary.name === "me") {
                  const imgBox = document.getElementById("ImgBox")!;
                  imgBox.innerHTML = `<img src="/imgs/out_2.png" alt="Foto do Patrick" class="imgBox-img"/>`;
                  const imgBoxContainer = document.querySelector(
                    ".imgBox-container",
                  ) as HTMLDivElement;
                  imgBoxContainer.style.display = "block";
                  player.isInDialogue = true;
                }

                if (boundary.name === "Game") {
                  const imgBox = document.getElementById("ImgBox")!;
                  imgBox.innerHTML = `<img src="/AssetsGame/doom.png" alt="Foto do Doom" class="imgBox-img" width="1080px"/>`;
                  const imgBoxContainer = document.querySelector(
                    ".imgBox-container",
                  ) as HTMLDivElement;
                  imgBoxContainer.style.display = "block";
                  player.isInDialogue = true;
                }
              });

              // Show indicator when near
              b.onUpdate(() => {
                const dist = player.pos.dist(
                  b
                    .worldPos()
                    .add(
                      k.vec2(
                        (boundary.width / 2) * scaleFactor,
                        (boundary.height / 2) * scaleFactor,
                      ),
                    ),
                );
                if (dist < 100 && !player.isInDialogue) {
                  interactIndicator.opacity = 1;
                }
              });
            }
          }

          continue;
        }

        if (layer.name === "spawnpoints") {
          for (const entity of layer.objects) {
            if (entity.name === "player") {
              player.pos = k.vec2(
                (map.pos.x + entity.x) * scaleFactor,
                (map.pos.y + entity.y) * scaleFactor,
              );
              k.add(player);
              continue;
            }
          }
        }
      }

      setCamScale(k);

      k.onResize(() => {
        setCamScale(k);
      });

      k.onUpdate(() => {
        k.camPos(player.worldPos().x, player.worldPos().y - 100);
        // Reset indicator opacity if not near anything
        interactIndicator.opacity = k.lerp(interactIndicator.opacity, 0, 0.1);
      });

      k.onMouseDown((mouseBtn) => {
        if (mouseBtn !== "left" || player.isInDialogue) return;

        const worldMousePos = k.toWorld(k.mousePos());
        player.moveTo(worldMousePos, player.speed);

        const mouseAngle = player.pos.angle(worldMousePos);

        const lowerBound = 50;
        const upperBound = 125;

        if (
          mouseAngle > lowerBound &&
          mouseAngle < upperBound &&
          player.curAnim() !== "walk-up"
        ) {
          player.play("walk-up");
          player.direction = "up";
          return;
        }

        if (
          mouseAngle < -lowerBound &&
          mouseAngle > -upperBound &&
          player.curAnim() !== "walk-down"
        ) {
          player.play("walk-down");
          player.direction = "down";
          return;
        }

        if (Math.abs(mouseAngle) > upperBound) {
          player.flipX = false;
          if (player.curAnim() !== "walk-side") player.play("walk-side");
          player.direction = "left";
          return;
        }

        if (Math.abs(mouseAngle) < lowerBound) {
          player.flipX = true;
          if (player.curAnim() !== "walk-side") player.play("walk-side");
          player.direction = "right";
          return;
        }
      });

      function stopAnims() {
        if (player.direction === "down") {
          player.play("idle-down");
          return;
        }
        if (player.direction === "up") {
          player.play("idle-up");
          return;
        }

        player.play("idle-side");
      }

      k.onMouseRelease(stopAnims);

      k.onKeyRelease(() => {
        stopAnims();
      });
    });

    k.go("main");
  }, []);

  return (
    <div
      id="app"
      className="relative w-screen h-screen overflow-hidden bg-[#311047]"
    >
      <div id="ui" className="absolute inset-0 pointer-events-none z-50">
        <p className="note absolute top-4 left-4 text-white/50 text-xs retro">
          Clique para se movimentar
        </p>

        <div
          className="imgBox-container absolute inset-0 flex items-center justify-center pointer-events-auto"
          style={{ display: "none" }}
        >
          <div className="imgBox" id="ImgBox"></div>
        </div>

        <div
          className="textbox-container absolute inset-0 flex items-end justify-center p-4 pointer-events-auto"
          id="textbox-container"
          style={{ display: "none" }}
        >
          <div id="textbox" className="text-black">
            <div id="textbox-content" className="flex-1 min-w-0">
              <p
                id="dialogue"
                className="ui-text text-sm md:text-xl lg:text-2xl break-words"
              ></p>
              <div className="btn-container flex gap-4 mt-2">
                <button id="play" className="ui-play-btn text-black hidden">
                  Jogar
                </button>
                <button id="close" className="ui-close-btn">
                  Fechar
                </button>
              </div>
            </div>
            <div className="next-indicator"></div>
          </div>
        </div>
      </div>
      <canvas id="game" className="w-full h-full block"></canvas>
    </div>
  );
}
