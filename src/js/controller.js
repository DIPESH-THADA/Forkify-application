import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

// NEW API URL (instead of the one shown in the video)
// https://forkify-api.jonas.io

///////////////////////////////////////

const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;
    recipeView.renderSpinner();

    // loading recipe
    await model.loadRecipe(id);

    // rendering recepie
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError(`${err.message}`);
  }
};
controlRecipe();

const init = function () {
  recipeView.addHandlerRender(controlRecipe);
};
init();
