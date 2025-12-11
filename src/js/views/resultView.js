import View from './view';
import icon from 'url:../../img/icons.svg';

class ResultView extends View {
  _parentElement = document.querySelector('.results');

  _errorMessage = 'No recipes found for your query! Plaease try again;';
  _message = 'Start by searching for a recipe or an ingredient. Have fun!';

  _generateMarkup() {
    return this.data.map().join('');
  }
  _generateMarkupPreview(result) {
    return `
    <li class="preview">
            <a class="preview__link preview__link--active" href="#${result.id}">
              <figure class="preview__fig">
                <img src="${result.image}" alt="${result.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${result.title}</h4>
                <p class="preview__publisher">${result.publisher}</p>
                <div class="preview__user-generated">
                  <svg>
                    <use href="src/img/${icon}#icon-user"></use>
                  </svg>
                </div>
              </div>
            </a>
          </li>
    `;
  }
}

export default new ResultView();
