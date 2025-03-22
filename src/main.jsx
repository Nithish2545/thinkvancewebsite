import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Lenis from "@studio-freight/lenis";
import "./index.css";
import App from "./App.jsx";

const LenisProvider = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      duration: 1.5, // Slower duration for extra smoothness
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing for natural feel
      wheelMultiplier: 1.2, // Adjusts scroll speed
      touchMultiplier: 1.5, // Enhances touch experience
      infinite: false, // Disable infinite scrolling
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Proper cleanup to avoid memory leaks
    };
  }, []);

  return children;
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LenisProvider>
      <App />
    </LenisProvider>
  </StrictMode>
);
