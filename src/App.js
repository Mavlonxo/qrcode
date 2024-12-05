import React, { useState } from "react";
import "./App.css";


//Salatlar
import img2 from './img/chaban.jpg'
import salad1 from './img/salat1.jpg'
import salad2 from './img/salat2.jpg'
import salad3 from './img/salat3.jpg'
import salad5 from './img/salat5.jpg'
import salad6 from './img/salat6.jpg'


//ichimliklar 

import drink1 from './img/drink1.jpg'
import drink2 from './img/drink2.jpg'
import drink3 from './img/drink3.jpg'


const menu = {
  Салат: [
    {
      name: "Греческий",
      price: "37 000",
      img: salad1,
    },
    {
      name: "Чабан",
      price: "32 500",
      img: salad2,
    },
    {
      name: "Ачичук",
      price: "20 000",
      img: salad3,
    },
  
    {
      name: "Французский Салат.",
      price: "42 000",
      img: salad5,
    },
    {
      name: "Цезарь с курицей",
      price: "45 000",
      img: salad6,
    } 
  ],
  "1-чи овқат": [
    {
      name: "Чабан салат",
      price: "32 500",
      img: img2,
    },
    {
      name: "Caesar Salad",
      price: "$7.99",
      img: "https://hips.hearstapps.com/hmg-prod/images/harvest-bowls-index-66b3f14d6d5d4.jpg?crop=0.502xw:1.00xh;0,0&resize=640:*",
    },
    {
      name: "Iced Tea",
      price: "$1.99",
      img: "https://static01.nyt.com/images/2024/07/10/dining/10WELL-LUNCH-SECRETS9/18WELL-LUNCH-SECRETS9-mediumSquareAt3X.jpg",
    },
  ],
  "2-чи овқат": [
    {
      name: "Steak",
      price: "$15.99",
      img: "https://images.immediate.co.uk/production/volatile/sites/30/2022/03/Quick-dinner-recipes-c7ca11c.jpg",
    },
    {
      name: "Pasta",
      price: "$12.99",
      img: "https://www.acouplecooks.com/wp-content/uploads/2023/01/Vegan-Stir-Fry-006.jpg",
    },
    {
      name: "Red Wine",
      price: "$8.49",
      img: "https://images.immediate.co.uk/production/volatile/sites/30/2023/09/Prawn-harissa-spaghetti--b3b0fdd.jpg?quality=90&resize=556,505",
    },
  ],
  Дессерт: [
    {
      name: "Soda",
      price: "$1.99",
      img: "https://www.tasteofhome.com/wp-content/uploads/2024/05/Sweet-Rum-Punch_EXPS_FT24_273648_EC_050224_4.jpg",
    },
    {
      name: "Milkshake",
      price: "$4.49",
      img: "https://hips.hearstapps.com/hmg-prod/images/drinks-to-avoid-1621959532.jpg?crop=0.670xw:1.00xh;0.151xw,0&resize=1200:*",
    },
    {
      name: "Cocktail",
      price: "$6.99",
      img: "https://hips.hearstapps.com/hmg-prod/images/delish-220517-dirty-shirley-cocktail-001-ab-web-1657145301.jpg?crop=0.828xw:0.829xh;0.123xw,0.0932xh&resize=980:*",
    },
  ],
  Ичимликлар: [
    {
      name: "Moxito",
      price: "40 000",
      img: drink1,
    },
    {
      name: "Ocean",
      price: "40 000",
      img: drink2,
    },
    {
      name: "Klubinka",
      price: "40 000",
      img: drink3,
    },
  ],
};

function App() {
  const [selectedCategory, setSelectedCategory] = useState("Салат");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Zeytun Menu</h1>
      </header>
      <div className="categories">
        {Object.keys(menu).map((category) => (
          <button
            key={category}
            className="category-button"
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="menu-container">
        {menu[selectedCategory].map((item, index) => (
          <div className="menu-item" key={index}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <span>{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
