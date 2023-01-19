import React from "react";

const Ingredient = ({ ingredient, id }) => {
  return (
    <section className="ingredients">
      <ul className="ingredientsList">
        <li className="eachIngredient" key={id}>
          {ingredient}
        </li>
      </ul>
    </section>
  );
};

export default Ingredient;
