import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <NavLink to="/">
          <img
            id="logo"
            src="../../../img/logo.png"
            alt="Logo Petit Petits Plats"
          />
        </NavLink>
        <section id="recherche">
          <input
            id="barreRecherche"
            type="search"
            name="recherche"
            placeholder="Rechercher un ingrédient, appareil, ustensiles ou une recette"
            autoComplete="off"
          />

          <button id="loupeBtn">
            <img
              src="./img/loupe.png"
              alt="bouton loupe pour lancer la recherche"
            />
          </button>
        </section>
      </header>
    </div>
  );
};

export default Header;
