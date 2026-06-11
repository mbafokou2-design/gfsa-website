import { createContext, useContext, useState } from "react";

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState("de");
  const toggle = () => setLang((prev) => (prev === "de" ? "en" : "de"));
  const t = (obj) => obj?.[lang] ?? obj?.["de"];

  return (
    <LangContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}