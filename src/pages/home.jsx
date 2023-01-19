import React from "react";
import Inputs from "../Components/Inputs";
import Recipes from "../Components/Recipes";
import { useEffect, useState } from "react";

const Home = () => {
  const [allRecipes, setAllRecipes] = useState("");

  useEffect(() => {
    fetch("../../../data.json")
      .then((response) => response.json())
      .then((myJson) => {
        setAllRecipes(myJson);
      });
  }, []);

  let recipes = allRecipes.recipes;

  return (
    <section id="main">
      <section className="searchInputs">
        <Inputs
          id={"ingredients"}
          inputName={"Ingredients"}
          arrow={"ingBlue"}
        />
        <Inputs id={"appliance"} inputName={"Appareils"} arrow={"appGreen"} />
        <Inputs id={"ustensils"} inputName={"Ustensiles"} arrow={"ustRed"} />
      </section>
      <section id="recipesList">
        {recipes &&
          recipes.length > 0 &&
          recipes.map((recipeDetails) => (
            <Recipes id={recipeDetails.id} recipe={recipeDetails} />
          ))}
      </section>
      <div id="noResults">Nous n'avons trouvé aucun résultat</div>
    </section>
  );
};

export default Home;
