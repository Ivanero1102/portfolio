import { useState, useEffect } from "react";
import bird from '../../assets/birts.png';
import star from '../../assets/stars.png';
import cloud from '../../assets/cloud.png';

export default function DarkModeToggle() {

  const [isDark, setIsDark] = useState(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "dark") return true;
      if (stored === "light") return false;
      if (typeof window !== "undefined") {
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
      }
      return false;
    } catch {
      return false;
    }
  });

  const translationDistance = (() => {
    const parentWidth = 96;
    const childWidth = 32;
    const padding = 8;
    const availableWidth = parentWidth - padding * 2;
    return availableWidth - childWidth;
  })();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);

    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      const matches = "matches" in e ? e.matches : mql.matches;
      setIsDark(matches);
      document.documentElement.classList.toggle("dark", matches);
    };

    if (mql.addEventListener) mql.addEventListener("change", handleChange as EventListener);
    else if ((mql as any).addListener) (mql as any).addListener(handleChange);

    return () => {
      if (mql.removeEventListener) mql.removeEventListener("change", handleChange as EventListener);
      else if ((mql as any).removeListener) (mql as any).removeListener(handleChange);
    };
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <div
      className={`relative cursor-pointer inline-flex w-24 h-12 items-center transition-all p-2 duration-500 rounded-full overflow-hidden ${
        isDark ? "bg-gray-700" : "bg-blue-400"
      }`}
      onClick={toggle}
    >
      <div
        className="absolute w-8 h-8 rounded-full flex items-center overflow-hidden transition-all duration-500 bg-yellow-200"
        style={{ transform: isDark ? `translateX(${translationDistance}px)` : `translateX(0)` }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
        </div>
        <div
          className="relative w-full h-full transition-all shadow-inner duration-500 bg-gray-50 rounded-full"
          style={{ transform: isDark ? `translateX(0)` : `translateX(${translationDistance}px)` }}
        >
          <div className="absolute h-2 w-2 rounded-full bg-gray-300 top-1 left-[40%]"></div>
          <div className="absolute h-2 w-2 rounded-full bg-gray-300 bottom-1 left-[50%]"></div>
          <div className="absolute h-3 w-3 rounded-full bg-gray-300 top-[30%] left-1"></div>
        </div>
      </div>
      <div className={`absolute top-1 -right-16 transition-all duration-500 ${isDark ? "translate-y-[200px]" : "translate-y-0"}`}>
        <img src={cloud} alt="cloud" />
      </div>

      <div className={`absolute w-24 h-auto top-1 -right-8 transition-all duration-500 ${isDark ? "translate-y-[200px]" : "translate-y-0"}`}>
        <img src={bird} alt="birts" />
      </div>

      <div className={`absolute top-1 -right-14 transition-all duration-500 ${isDark ? "translate-y-0" : "translate-y-[200px]"}`}>
        <img src={star} alt="stars" />
      </div>
      {[20, 40, 60].map((offset, i) => (
        <div
          key={i}
          className="absolute h-25 w-25 rounded-full bg-white opacity-[0.09] transition-all duration-500"
          style={{ transform: isDark ? `translateX(${translationDistance - offset}px)` : `translateX(-${translationDistance - offset + 20}px)` }}
        />
      ))}
    </div>
  );
}