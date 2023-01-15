import React from "react";

const Home = () => {
  return (
    <div>
      <section id="main">
        <section id="result">
          <div id="appareilsResult"></div>
          <div id="ingredientsResult"></div>
          <div id="ustensilesResult"></div>
        </section>
        <section id="tri">
          <div id="ingredients">
            <div id="choixTriIngredients">
              <form className="ingredientsForm">
                <input
                  name="triIngredients"
                  id="inputIngredients"
                  type="text"
                  placeholder="Ingrédients"
                  autoComplete="off"
                />
                <button id="triBtnIngredients">
                  <img
                    className="imgFlechBas"
                    src="./img/fleche_bas.png"
                    alt="bouton flèche pour faire descendre menu déroulant"
                  />
                </button>
              </form>
              <aside id="listIngredients" value="false">
                <ul id="triIngredientsInput"></ul>
              </aside>
            </div>
          </div>
          <div id="appareils">
            <div id="choixTriAppareils">
              <form className="applianceForm">
                <input
                  name="triAppareils"
                  id="inputAppareils"
                  type="text"
                  placeholder="Appareil"
                  autoComplete="off"
                />
                <button id="triBtnAppareil">
                  <img
                    className="imgFlechBas"
                    src="./img/fleche_bas.png"
                    alt="bouton flèche pour faire descendre menu déroulant"
                  />
                </button>
              </form>
              <aside id="listAppareils" value="false">
                <ul id="triAppareilsInput"></ul>
              </aside>
            </div>
          </div>
          <div id="ustensiles">
            <div id="choixTriUstensiles">
              <form id="ustensilsForm">
                <input
                  name="triUstensiles"
                  id="inputUstensiles"
                  type="text"
                  placeholder="Ustensiles"
                  autoComplete="off"
                />
                <button id="triBtnUstensiles">
                  <img
                    className="imgFlechBas"
                    src="./img/fleche_bas.png"
                    alt="bouton flèche pour faire descendre menu déroulant"
                  />
                </button>
              </form>
              <aside id="listUstensiles" value="false">
                <ul id="triUstensilesInput"></ul>
              </aside>
            </div>
          </div>
        </section>
        <section id="listeRecettes"></section>
        <div id="noResults">Nous n'avons trouvé aucun résultat</div>
      </section>
    </div>
  );
};

export default Home;
