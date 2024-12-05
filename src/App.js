import React, { useState } from "react";
import "./App.css";


//Salatlar
import salad1 from './img/salat1.jpg'
import salad2 from './img/salat2.jpg'
import salad3 from './img/salat3.jpg'
import salad5 from './img/salat5.jpg'
import salad6 from './img/salat6.jpg'



// 1chi ovqatlar
import soup1 from './img/b1.jpg'
import soup2 from './img/b2.jpg'
import soup3 from './img/b3.jpg'
import soup4 from './img/bfri.jpg'
import soup5 from './img/b4.jpg'
import soup6 from './img/b5.jpg'
import soup7 from './img/b6.jpg'
import soup8 from './img/b7.jpg'


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
      name: "Крем-суп Эзогелин",
      price: "37 000",
      img: soup1,
    },
    {
      name: "Крем-суп Мерджимек",
      price: "33 000",
      img: soup2,
    },
    {
      name: "Домашние пельмешки",
      price: "32 000",
      img: soup3,
    },

    {
      name: "Суп с фрикадельками",
      price: "36 000",
      img: soup4,
    },


    {
      name: "Фирменный суп",
      price: "36 000",
      img: soup5,
    },


    {
      name: "Тушёный суп",
      price: "42 000",
      img: soup6,
    },

    {
      name: "Мастава",
      price: "32 000",
      img: soup7,
    },



    {
      name: "Борщ украинский",
      price: "32 000",
      img: soup8,
    },









  ],
  "2-чи овқат": [
   
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
