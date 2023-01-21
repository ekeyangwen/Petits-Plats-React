import React from "react";
import Inputs from "../Components/Inputs";
import Recipes from "../Components/Recipes";
import { useEffect, useState } from "react";

const Home = () => {
  const [allRecipes, setAllRecipes] = useState([]);

  useEffect(() => {
    fetch("../../../data.json")
      .then((response) => response.json())
      .then((myJson) => {
        setAllRecipes(myJson);
      });
  }, []);

  let recipes = allRecipes.recipes;
  console.log(recipes);
  if (allRecipes === undefined && "") {
    console.log("recipes not found");
  }

  return (
    <section id="main">
      <section className="searchInputs">
        {recipes &&
          recipes.length > 0 &&
          recipes.map((recipeDetails) =>
            recipeDetails.ingredients.map((detailedIngredients) => (
              <Inputs
                id={"ingredients"}
                inputName={"Ingredients"}
                background={"ingBlue"}
                listIngredients={detailedIngredients.ingredient}
              />
            ))
          )}
        {recipes &&
          recipes.length > 0 &&
          recipes.map((recipeDetails) => (
            <Inputs
              id={"appliance"}
              inputName={"Appareils"}
              background={"appGreen"}
              listAppliances={recipeDetails.appliance}
            />
          ))}
        {recipes &&
          recipes.length > 0 &&
          recipes.map((recipeDetails) =>
            recipeDetails.ustensils.map((ustensilsDetails) => (
              <Inputs
                id={"ustensils"}
                inputName={"Ustensiles"}
                background={"ustRed"}
                listUstensils={ustensilsDetails}
              />
            ))
          )}
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
