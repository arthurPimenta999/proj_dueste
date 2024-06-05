import AsyncStorage from "@react-native-async-storage/async-storage";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState, useContext, createContext } from "react";
import { db } from "../apis/firebaseConfig";

interface PizzaContextType {
  pizzaSalURL: string[];
  pizzaSalTitle: string[];
  pizzaSalPreco: number[];
  pizzaDoceURL: string[];
  pizzaDoceTitle: string[];
  pizzaDocePreco: number[];
  bebidaURL: string[];
  bebidaTitle: string[];
  bebidaPreco: number[];
  loading: boolean;
  update: () => void;
}

const PizzaContext = createContext<PizzaContextType | undefined>(undefined);

export const PizzaProvider = ({ children }) => {
  const [pizzaSalURL, setPizzaSalURL] = useState<string[]>([]);
  const [pizzaSalTitle, setPizzaSalTitle] = useState([]);
  const [pizzaSalPreco, setPizzaSalPreco] = useState([]);

  const [pizzaDoceURL, setPizzaDoceURL] = useState<string[]>([]);
  const [pizzaDoceTitle, setPizzaDoceTitle] = useState([]);
  const [pizzaDocePreco, setPizzaDocePreco] = useState([]);

  const [bebidaURL, setBebidaURL] = useState<string[]>([]);
  const [bebidaTitle, setBebidaTitle] = useState([]);
  const [bebidaPreco, setBebidaPreco] = useState([]);

  const [loading, setLoading] = useState(false);

  const update = async () => {
    let isMounted = true;
    try {
      setLoading(true);

      const salRef = doc(db, "pizzaCards", "pizzaSal");
      const doceRef = doc(db, "pizzaCards", "pizzaDoce");
      const bebidaRef = doc(db, "pizzaCards", "pizzaBebida");

      const [salSnap, doceSnap, bebidaSnap] = await Promise.all([
        getDoc(salRef),
        getDoc(doceRef),
        getDoc(bebidaRef),
      ]);

      if (isMounted) {
        if (salSnap.exists() && doceSnap.exists() && bebidaSnap.exists()) {
          setPizzaSalURL(salSnap.data().pizzaURL);
          setPizzaSalTitle(salSnap.data().pizzaTitle);
          setPizzaSalPreco(salSnap.data().pizzaPreco);

          setPizzaDoceURL(doceSnap.data().pizzaURL);
          setPizzaDoceTitle(doceSnap.data().pizzaTitle);
          setPizzaDocePreco(doceSnap.data().pizzaPreco);

          setBebidaURL(bebidaSnap.data().pizzaURL);
          setBebidaTitle(bebidaSnap.data().pizzaTitle);
          setBebidaPreco(bebidaSnap.data().pizzaPreco);
        } else {
          console.log("Documento não encontrado.");
        }
      }
    } catch (error) {
      if (isMounted) {
        console.error("Erro ao buscar dados: ", error);
      }
    } finally {
      if (isMounted) {
        setLoading(false);
      }
    }

    return () => {
      isMounted = false;
    };
  };

  useEffect(() => {
    update();
  }, []);

  return (
    <PizzaContext.Provider
      value={{
        pizzaSalURL,
        pizzaSalTitle,
        pizzaSalPreco,
        pizzaDoceURL,
        pizzaDoceTitle,
        pizzaDocePreco,
        bebidaURL,
        bebidaTitle,
        bebidaPreco,
        loading,
        update,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

export const usePizza = (): PizzaContextType => {
  const context = useContext(PizzaContext);
  if (context === undefined) {
    throw new Error(
      "usePizza deve ser usado dentro de um PizzaProvider. O PizzaProvider deve ser colocado no ponto mais alto do app - normalmente no App.tsx ou App.js do seu projeto Expo."
    );
  }

  return context;
};
