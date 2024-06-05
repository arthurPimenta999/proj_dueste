import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import { useState, useContext, createContext } from "react";

const ThemeContext = createContext({
  theme: {},
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("light");

  useEffect(() => {
    const loadDarkModeState = async () => {
      try {
        const darkModeState = await AsyncStorage.getItem("darkModeState");
        if (darkModeState !== null) {
          setCurrentTheme(JSON.parse(darkModeState) ? "dark" : "light");
        }
      } catch (error) {
        console.error(
          "Erro ao pegar estado armazenado do modo escuro: ",
          error
        );
      }
    };

    loadDarkModeState();
  }, []);

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
    AsyncStorage.setItem("darkModeState", JSON.stringify(newTheme === "dark"));
  };

  const theme = currentTheme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const darkTheme = {
  // valores pra todas as telas
  screenColor: "#222",
  txtColor: "#eee",
  inverTxtColor: "#000",
  bgColor: "#333",
  yellow: "#bf8d02",
  placeholderColor: "#474747",

  // tela home
  imageHomeBG: "#000",
  red: "#802019",
  imageTransparency: 0.3,

  // tela settings
  barColor: "#111",
  navigatorBorder: "#444",
  themeIcon: "moon",

  // tela cardapio
  cardBG: "#333",

  // tela login
  facebook: "#0c3c7a",

  // tela segurança
  verifyConfirm: "#306844",
};

const lightTheme = {
  // valores pra todas as telas
  screenColor: "#fff",
  txtColor: "#111",
  inverTxtColor: "#fff",
  bgColor: "#ddd",
  yellow: "#fcba04",
  placeholderColor: "#999",

  // tela home
  imageHomeBG: "#fff",
  red: "#d4473d",
  imageTransparency: 0.6,

  // tela settings
  barColor: "#dedede",
  navigatorBorder: "#aaa",
  themeIcon: "sunny",

  // tela cardapio
  cardBG: "#fff",

  // tela login
  facebook: "#1877F2",

  // tela segurança
  verifyConfirm: "#43c465",
};
