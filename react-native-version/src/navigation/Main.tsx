import { View, Text, ScrollView } from "react-native";
import React from "react";

const Main = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(128,0,128,.6)",
          paddingHorizontal: 15,
          paddingVertical: 10,
          borderRadius: 8,
        }}
      >
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 100,
            backgroundColor: "lightblue",
            marginBottom: 10,
          }}
        />
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              flex: 1,
              backgroundColor: "whitesmoke",
              borderRadius: 4,
              paddingVertical: 20,
              paddingHorizontal: 10,
              marginRight: 5,
            }}
          />
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 4,
              backgroundColor: "whitesmoke",
            }}
          />
        </View>
      </View>
      <View style={{ flex: 4, paddingVertical: 15 }}>
        <ScrollView horizontal={true} style={{ paddingLeft: 4 }}>
          <View
            style={{
              width: 125,
              height: 150,
              borderRadius: 8,
              backgroundColor: "rgba(255,255,0,.4)",
              marginRight: 8,
            }}
          />
          <View
            style={{
              width: 125,
              height: 150,
              borderRadius: 8,
              backgroundColor: "gray",
              marginRight: 8,
            }}
          />
          <View
            style={{
              width: 125,
              height: 150,
              borderRadius: 8,
              backgroundColor: "gray",
              marginRight: 8,
            }}
          />
        </ScrollView>
        <View style={{ flex: 1 }} />
      </View>
    </View>
  );
};

export default Main;
