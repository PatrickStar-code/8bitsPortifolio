import { Card, CardTitle } from "./ui/8bit/card";
import { motion } from "framer-motion";
import TypewriterTitle from "./kokonutui/type-writer";
import { PixelImage } from "./magicui/pixel-image";

export default function AboutSection() {
  return (
    <section className="min-h-screen snap-start flex items-center justify-center px-4 sm:px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
        className="w-full max-w-6xl"
      >
        <Card className="p-6 sm:p-8">
          {/* Container imagem + título */}
          <motion.div
            className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-6 md:gap-12 mb-6"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {/* Imagem responsiva */}
            <div className="flex-shrink-0">
              <PixelImage
                src="/imgs/out.png"
                customGrid={{ rows: 4, cols: 6 }}
                grayscaleAnimation={true}
              />
            </div>

            {/* Texto responsivo */}
            <motion.div
              className="text-center md:text-left"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                PLAYER: <span className="text-cyan-400">Patrick_Star</span>
              </CardTitle>
              <TypewriterTitle />
            </motion.div>
          </motion.div>

          {/* Parágrafo responsivo */}
          <motion.p
            className=" black:text-gray-300 text-base sm:text-lg leading-relaxed text-center md:text-justify max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }}
          >
            Um desenvolvedor de software em constante jornada, movido pela
            missão de criar aplicações que realmente fazem a diferença e vencer
            desafios complexos. Forjado no SENAI Juiz de Fora e atualmente
            evoluindo sua classe no Bacharelado em Engenharia de Software na
            UniAcademia. Com experiência em desenvolver sistemas completos e
            liderar equipes, sigo em busca de novas quests para entregar
            soluções cada vez mais eficientes e inovadoras.
          </motion.p>
        </Card>
      </motion.div>
    </section>
  );
}
