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

  if (recipes === undefined) {
    console.log("loading");
  }

  return (
    <section id="main">
      <section className="searchInputs">
        <Inputs
          id={"ingredients"}
          inputName={"Ingredients"}
          background={"ingBlue"}
          list={
            recipes &&
            recipes.length > 0 &&
            recipes.map((recipeDetails) =>
              recipeDetails.ingredients.map((ingredientsDetails) => {
                return ingredientsDetails;
              })
            )
          }
        />
        <Inputs
          id={"appliance"}
          inputName={"Appareils"}
          background={"appGreen"}
          list={
            recipes &&
            recipes.length > 0 &&
            recipes.map((recipeDetails) => recipeDetails.appliance)
          }
        />

        <Inputs
          id={"ustensils"}
          inputName={"Ustensiles"}
          background={"ustRed"}
          list={
            recipes &&
            recipes.length > 0 &&
            recipes.map((recipeDetails) =>
              recipeDetails.ustensils.map(
                (ustensilsDetails) => ustensilsDetails
              )
            )
          }
        />
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
