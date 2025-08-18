import { Highlighter } from "./magicui/highlighter";
import { PixelImage } from "./magicui/pixel-image";
import { TypingAnimation } from "./magicui/typing-animation";
import { motion } from "framer-motion";

export default function MainSection() {
  return (
    <section className="h-screen  items-center align-center  grid grid-cols-1 md:grid-cols-2 retro">
      <div className="p-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
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
      <div>
        <PixelImage
          src="/pixel-image-demo.jpg"
          customGrid={{ rows: 4, cols: 6 }}
          grayscaleAnimation
        />
      </div>
    </section>
  );
}
