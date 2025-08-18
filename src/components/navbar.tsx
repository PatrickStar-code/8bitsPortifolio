import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../components/ui/8bit/navigation-menu";
import { AnimatedThemeToggler } from "../components/magicui/animated-theme-toggler";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function NavbarComponent() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavigationMenu
      className={`fixed top-0 left-0 w-full  flex justify-between items-center px-6 py-3 z-50 pt-4 transition-all duration-300 ${
        isScrolled
          ? " dark:bg-gray-900/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="ml-2"
      >
        <p className="text-2xl hover:text-[#3B82F6] font-bold">
          PatrickStarCode
        </p>
      </motion.div>

      {/* Menu Desktop */}
      <NavigationMenuList className="hidden md:flex gap-6 mr-4">
        {["Inicio", "Sobre", "Projetos", "Contato"].map((item, idx) => (
          <NavigationMenuItem key={idx}>
            <motion.a
              href={`/${item.toLowerCase()}`}
              className="transition-colors hover:text-[#3B82F6]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
          <AnimatedThemeToggler />
        </NavigationMenuItem>
      </NavigationMenuList>

      {/* Botão Mobile */}
      <div className="md:hidden mr-2">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile (animado com Framer Motion) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-md md:hidden flex flex-col items-center gap-6 py-6 z-40"
          >
            {["Inicio", "Sobre", "Projetos", "Contato"].map((item, idx) => (
              <motion.a
                key={idx}
                href={`/${item.toLowerCase()}`}
                className="text-gray-800 dark:text-gray-200 hover:text-[#3b82f6] text-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </motion.a>
            ))}
            <AnimatedThemeToggler />
          </motion.div>
        )}
      </AnimatePresence>
    </NavigationMenu>
  );
}
