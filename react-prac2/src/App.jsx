import React, { useState } from "react";
import Foods from "./Component/Food";

const getMenu = () => {
  return [
    // Korean Dishes
    {
      name: "Kimchi",
      origin: "korean",
      isHot: true,
      price: 5000,
    },
    {
      name: "Bibimbap",
      origin: "korean",
      isHot: false,
      price: 8000,
    },
    {
      name: "Bulgogi",
      origin: "korean",
      isHot: false,
      price: 10000,
    },
    {
      name: "Japchae",
      origin: "korean",
      isHot: false,
      price: 7000,
    },
    // Chinese Dishes
    {
      name: "Kung Pao Chicken",
      origin: "chinese",
      isHot: true,
      price: 11000,
    },
    {
      name: "Mapo Tofu",
      origin: "chinese",
      isHot: true,
      price: 9000,
    },
    {
      name: "Mala Tang",
      origin: "chinese",
      isHot: true,
      price: 12000,
    },
    {
      name: "Beef Noodle Soup",
      origin: "chinese",
      isHot: false,
      price: 10000,
    },
    // Japanese Dishes
    {
      name: "Sushi",
      origin: "japanese",
      isHot: false,
      price: 15000,
    },
    {
      name: "Ramen",
      origin: "japanese",
      isHot: false,
      price: 8000,
    },
    {
      name: "Takoyaki",
      origin: "japanese",
      isHot: false,
      price: 6000,
    },
    {
      name: "Tonkatsu",
      origin: "japanese",
      isHot: false,
      price: 12000,
    },
  ];
};

const App = () => {
  const initValue = getMenu();
  // console.log(initValue);

  const [menu, setMenu] = useState(initValue);

  return (
    <div >
      <h1>Menu</h1>

      {menu.map((foods) => {
        return (
          <Foods food={foods} />
        )
      })}
    </div>
  );
};

export default App;