// src/pages/NotFound.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#141B2A]">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center"
      >
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          className="text-[6rem] font-extrabold tracking-widest text-[#3B82F6] drop-shadow-[0_0_10px_#3B82F6] retro"
        >
          404
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg text-[#3B82F6] font-mono retro"
        >
          Página não encontrada
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#3B82F6]  font-bold font-mono rounded-lg shadow-[0_0_10px_#3B82F6] hover:scale-105 transition-transform "
          >
            <Home size={20} className="retro text-white" />
            <p className="retro text-white">Voltar para a Home</p>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
