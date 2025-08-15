import { AnimatedThemeToggler } from "./components/magicui/animated-theme-toggler";
import Gameboy from "./components/gameboy";

function App() {
  return (
    // <main className="background">
    //   <NavbarComponent />
    // </main>
    <main className="min-h-screen flex justify-center items-center">
      <AnimatedThemeToggler className="absolute top-4 right-4" />
      <Gameboy />
    </main>
  );
}

export default App;
