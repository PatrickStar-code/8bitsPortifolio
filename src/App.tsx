import { useEffect } from "react";
import NavbarComponent from "./assets/navbar";

function App() {
  useEffect(() => {
    const themeUser = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (themeUser) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <>
      <NavbarComponent />
    </>
  );
}

export default App;
