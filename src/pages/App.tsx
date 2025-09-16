import Gameboy from "../components/gameboy";
import JigSaw from "../components/jigSaw";
import { AnimatedThemeToggler } from "../components/magicui/animated-theme-toggler";

function App() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <AnimatedThemeToggler className="absolute top-4 right-4" />
      <Gameboy />
      <JigSaw />
    </main>
  );
}

export default App;
