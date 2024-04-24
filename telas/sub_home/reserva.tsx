import * as React from "react";
import { View, ScrollView, StyleSheet, Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Index() {
  const titles = ["Pizza Pepperoni", "Pizza Bauru", "Pizza Alho"];

  const imageLinks = [
    "https://eu.ooni.com/cdn/shop/articles/pepperoni-pizza.jpg?crop=center&height=800&v=1587043733&width=800",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuWaGD5ipO5-S6j1KPluu9nQeBMv-9cv7DIozP1F5vZQ&s",
    "https://files.mob-cdn.co.uk/recipes/2023/10/Garlic-Pizza-Bread.jpg",
  ];

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {titles.map((title, index) => (
            <View key={index} style={styles.card}>
              <Image source={{ uri: imageLinks[index] }} style={styles.image} />
              <Text style={styles.title}>{title}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Index;
