import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../components/ui/8bit/navigation-menu";
import { AnimatedThemeToggler } from "../components/magicui/animated-theme-toggler";
import { useState, useEffect } from "react";

export default function NavbarComponent() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NavigationMenu
      className={`flex justify-between ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur shadow-md"
          : "bg-transparent"
      } `}
    >
      <div className="ml-4">
        <p className="text-2xl text-[#3b82f6] font-bold ">PatrickStarCode</p>
      </div>
      <NavigationMenuList className="gap-6 m-4">
        <NavigationMenuItem>
          <a href="/about">Home</a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="/about">About</a>
        </NavigationMenuItem>{" "}
        <NavigationMenuItem>
          <a href="/about">Projects</a>
        </NavigationMenuItem>{" "}
        <NavigationMenuItem></NavigationMenuItem>
        <NavigationMenuItem>
          <AnimatedThemeToggler />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
