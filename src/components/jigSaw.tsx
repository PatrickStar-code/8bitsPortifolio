import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function JigSaw() {
  const [showDialog, setShowDialog] = useState(true);
  const [phrase, setPharse] = useState(
    "Você entrou no meu jogo... mas, se quiser escapar, clique em mim."
  );

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setPharse(
        "Lembre-se, o jogo nunca termina... E para iniciar so clicar no botão de ligar logo acima."
      );
    }, 5000);

    const timer2 = setTimeout(() => {
      setShowDialog(false);
    }, 10000); // Oculta após 10 segundos

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
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
            {phrase}
          </p>
        </motion.div>
      )}
    </div>
  );
}
