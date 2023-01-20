import React from "react";
import Ingredient from "./Ingredient";

const Recipes = ({ recipe }) => {
  return (
    <section className="recipe">
      <div className="recipeAndIngredients">
        <h1 className="recipeTitle">{recipe.name}</h1>
        {recipe.ingredients &&
          recipe.ingredients.length > 0 &&
          recipe.ingredients.map((ingredientsDetails) => (
            <Ingredient ingredient={ingredientsDetails.ingredient} />
          ))}
      </div>
      <div className="timeAndDescription">
        <p className="time">{recipe.time}</p>
        <p className="description">{recipe.description}</p>
      </div>
    </section>
  );
};

export default Recipes;
