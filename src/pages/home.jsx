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
  console.log(recipes);

  let applianceList =
    recipes &&
    recipes.length > 0 &&
    recipes.map((recipeDetails) => recipeDetails.appliance);
  console.log(applianceList);

  // let ingredientsList =
  //   recipes &&
  //   recipes.length > 0 &&
  //   recipes.map((recipeDetails) => console.log(recipeDetails));
  // console.log(ingredientsList);

  return (
    <section id="main">
      <section className="searchInputs">
        {/* {recipes &&
          recipes.length > 0 &&
          recipes.map((recipeDetails) =>
            recipeDetails.ingredients.map((eachIngredient) => {
              return console.log(eachIngredient);
            })
          )} */}
        <Inputs
          id={"ingredients"}
          inputName={"Ingredients"}
          arrow={"ingBlue"}
          // list={eachIngredient.ingredient}
        />
        <Inputs
          id={"appliance"}
          inputName={"Appareils"}
          arrow={"appGreen"}
          list={applianceList.map((appliance) => {
            return appliance;
          })}
        />
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
