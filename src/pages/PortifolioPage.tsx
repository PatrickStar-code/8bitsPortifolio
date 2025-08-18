import { motion } from "framer-motion";
import { useState } from "react";
import NavbarComponent from "../components/navbar";
import { useNavigate } from "react-router-dom";
import MainSection from "../components/mainSection";

export default function PortifolioPage() {
  const navigate = useNavigate();
  const [zoomOut, setZoomOut] = useState(false);

  const handleClick = () => {
    setZoomOut(true);
    setTimeout(() => {
      navigate("/"); // rota do gameboy
    }, 500); // tempo da animação
  };

  return (
    <motion.main
      className="background w-full h-screen overflow-hidden"
      animate={zoomOut ? { scale: 0, opacity: 0 } : { scale: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <NavbarComponent />
      <MainSection />
      <img
        src="/imgs/gameboy.png"
        className="absolute right-4 bottom-4 cursor-pointer animate-bounce"
        onClick={handleClick}
      />
    </motion.main>
  );
}
