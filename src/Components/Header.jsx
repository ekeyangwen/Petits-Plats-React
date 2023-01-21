import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {

  const [enteredValue, setEnteredValue] = useState("");

  //  onChange={handleChange}
  // const searchValue = () => {
  //   for (let i = 0; i < recipes.length; i++) {
  //     let descriptionIncluded = false;
  //     descriptionIncluded = recipes[i].description
  //       .toLowerCase()
  //       .includes(enteredValue);
  //     if (descriptionIncluded) {
  //       console.log(descriptionIncluded);
  //     }
  //     let ingredientIncluded = false;
  //     for (let j = 0; j < recipes[i].ingredients.length; j++) {
  //       if (
  //         recipes[i].ingredients[j].ingredient
  //           .toLowerCase()
  //           .includes(enteredValue)
  //       ) {
  //         ingredientIncluded = true;
  //         console.log(ingredientIncluded);
  //       }
  //     }
  //   }
  // };
  function verification(event) {
     setEnteredValue({ enteredValue: event.target.value });
    if (enteredValue.length >= 3) {
      console.log("entrée dans fonction verif");
      console.log(enteredValue.length);
    } 
  }

  return (
    <header>
      <NavLink to="/">
        <img
          id="logo"
          src="../../../img/logo.png"
          alt="Logo Petit Petits Plats"
        />
      </NavLink>
      <section id="search">
        <input
          id="searchBar"
          type="search"
          name="search"
          placeholder="Rechercher un ingrédient, appareil, ustensiles ou une recette"
          autoComplete="off"
          onChange={verification}
        />

        <button id="searchBtn">
          <img
            className="loupe"
            src="./img/loupe.png"
            alt="bouton loupe pour lancer la recherche"
          />
        </button>
      </section>
    </header>
  );
};

export default Header;
