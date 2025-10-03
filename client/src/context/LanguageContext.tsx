import { createContext, useEffect, useState } from "react";
import type { ReactNode } from "react"; 
import type { Language } from "../translation/translations"; 

interface LanguageContextType {
  language: Language;
  changeLanguage: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  changeLanguage: () => {},
});

interface LanguageProviderProps {
  children: ReactNode;
}

const detectLanguage = (): Language =>
  (typeof navigator !== "undefined" && navigator.language?.startsWith("es") ? "es" : "en") as Language;

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") return "en";
    const saved = (localStorage.getItem("lang") as Language | null) ?? null;
    return saved ?? detectLanguage();
  });

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Language | null;
    if (saved && saved !== language) setLanguage(saved);
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    if (typeof window !== "undefined") localStorage.setItem("lang", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}