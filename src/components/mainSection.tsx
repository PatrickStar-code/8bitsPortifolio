import { PixelImage } from "./magicui/pixel-image";
import { TypingAnimation } from "./magicui/typing-animation";
import { motion } from "framer-motion";

export default function MainSection() {
  return (
    <section className="h-screen grid grid-cols-1 md:grid-cols-2 place-items-center retro snap-start">
      <div className="p-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl font-bold mb-4">Meu nome é Patrick Silva</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <TypingAnimation className="text-2xl">
            Programador FullStack
          </TypingAnimation>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }} // estado inicial
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <PixelImage
          src="/imgs/out_2.png"
          customGrid={{ rows: 4, cols: 6 }}
          grayscaleAnimation={true}
        />
      </motion.div>
    </section>
  );
}
