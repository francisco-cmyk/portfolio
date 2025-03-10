import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type ThemeContextType = {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type ProviderPops = {
  children: ReactNode;
};

export const ThemeProvider: React.FC<ProviderPops> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (localStorage.getItem("theme") === "dark") return true;
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      document.body.className = "bg-black";
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      document.body.className = "bg-white";
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a theme context");
  }
  return context;
};
