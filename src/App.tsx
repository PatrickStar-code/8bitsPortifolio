import { useEffect } from "react";
import { AnimatedThemeToggler } from "./components/magicui/animated-theme-toggler";

function App() {
  useEffect(() => {
    const themeUser = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (themeUser) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <>
      <AnimatedThemeToggler />
    </>
  );
}

export default App;
