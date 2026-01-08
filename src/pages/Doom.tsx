import { useEffect, useRef } from "react";
import { Dos } from "js-dos";
import "js-dos/dist/js-dos.css";

export default function Doom() {
  const ref = useRef(null);

  useEffect(() => {
    const dos = new Dos(ref.current);

    dos.run({
      executable: "/doom/doom.exe",
      files: ["/doom/doom1.wad"],
    });
  }, []);

  return <div ref={ref} style={{ width: "800px", height: "600px" }} />;
}
