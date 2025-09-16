import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function JigSaw() {
  const [showDialog, setShowDialog] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDialog(false);
    }, 8000); // Oculta após 8 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Jigsaw no canto */}
      <a href="https://patrickstarcode.vercel.app/">
        <img
          src="/imgs/Jigsaw.png"
          alt="Imagem do Jigsaw"
          className="fixed bottom-0 right-0 w-20 cursor-pointer"
        />
      </a>

      {/* Balão de conversa */}
      {showDialog && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-24 right-5 bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-4 max-w-xs"
        >
          <div
            className="absolute -bottom-2 right-5 w-0 h-0 
            border-l-8 border-r-8 border-t-8 
            border-l-transparent border-r-transparent 
            border-t-white dark:border-t-gray-800"
          ></div>
          <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">
            Você entrou no meu jogo... mas, se quiser escapar, clique em mim.
          </p>
        </motion.div>
      )}
    </div>
  );
}
