import { Card } from "./ui/8bit/card";
import { motion } from "framer-motion";
import TypewriterTitle from "./kokonutui/type-writer";
import { PixelImage } from "./magicui/pixel-image";

export default function AboutSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4 sm:px-6 md:px-12 snap-start">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-6xl"
      >
        <Card className="p-8 md:p-12 bg-gray-850 backdrop-blur-sm shadow-2xl rounded-3xl border border-cyan-400/30">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            {/* Texto com estilo retro */}
            <motion.div
              className="text-center md:text-left flex-1"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-3 tracking-wider drop-shadow-[0_0_5px_cyan]">
                PLAYER: <span className="text-cyan-400">Patrick_Star</span>
              </h1>
              <TypewriterTitle className="text-lg sm:text-xl md:text-2xl text-cyan-300 font-mono drop-shadow-[0_0_3px_cyan]" />
            </motion.div>
          </div>

          {/* Parágrafo com elementos retro */}
          <motion.p
            className="mt-8 text-cyan-200 text-base sm:text-lg md:text-xl leading-relaxed text-center md:text-justify max-w-4xl mx-auto font-mono drop-shadow-[0_0_2px_cyan]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }}
          >
            Um desenvolvedor de software em constante jornada, movido pela
            missão de criar aplicações que realmente fazem a diferença e superar
            desafios complexos. Formado no SENAI Juiz de Fora e atualmente
            evoluindo sua classe no Bacharelado em Engenharia de Software na
            UniAcademia. Com experiência em criar sistemas completos e liderar
            equipes, sigo em busca de novas quests para entregar soluções
            inovadoras e eficientes, sempre com estilo retrô no coração do
            código.
          </motion.p>
        </Card>
      </motion.div>
    </section>
  );
}
