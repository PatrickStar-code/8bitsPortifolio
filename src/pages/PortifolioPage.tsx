import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GameSection from "../components/gameSection";

export default function PortifolioPage() {
  const navigate = useNavigate();
  const [zoomOut, setZoomOut] = useState(false);

  const handleClick = () => {
    setZoomOut(true);
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <motion.main
      className=" w-full overflow-hidden"
      animate={zoomOut ? { scale: 0, opacity: 0 } : { scale: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <GameSection />
      <img
        src="/imgs/gameboy.png"
        className="absolute right-4 bottom-4 cursor-pointer animate-bounce"
        onClick={handleClick}
      />
    </motion.main>
  );
}
