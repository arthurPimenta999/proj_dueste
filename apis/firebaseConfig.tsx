import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { initializeApp } from "firebase/app";
import firestore from "@react-native-firebase/firestore";
import { FlatList } from "react-native";

const firebaseConfig = {
  apiKey: "AIzaSyDy2KiQXzy0Ce5CuR83G_LE6UxJLYsWFiA",
  authDomain: "projetodueste.firebaseapp.com",
  databaseURL: "https://projetodueste-default-rtdb.firebaseio.com",
  projectId: "projetodueste",
  storageBucket: "projetodueste.appspot.com",
  messagingSenderId: "989713015226",
  appId: "1:989713015226:web:2185390e6f3eeb4ac93d83",
  measurementId: "G-BH2VJ1FDZN",
};

const FirestoreDB = initializeApp(firebaseConfig);

function Users() {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const nomes = firestore()
      .collection("catogries")
      .onSnapshot((querySnapshot) => {
        const categories = [];

        querySnapshot.forEach((documentSnapshot) => {
          categories.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setCategories(categories);
        setLoading(false);
      });

    return () => nomes();
  }, []);

  return (
    <FlatList
      data={categories}
      renderItem={({ item }) => (
        <View>
          <Text>Nome: {item.title}</Text>
        </View>
      )}
    />
  );
}

export default Users;
