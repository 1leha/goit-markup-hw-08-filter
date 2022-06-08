import cards from './portfolio-data.js';

const refs = {
  //   filterButtons: document.querySelectorAll('.filter-label__radio-original'),
  rbAll: document.querySelector('[data-cathegory="all"]'),
  rbWeb: document.querySelector('[data-cathegory="web"]'),
  rbApp: document.querySelector('[data-cathegory="app"]'),
  rbDesign: document.querySelector('[data-cathegory="design"]'),
  rbMarketing: document.querySelector('[data-cathegory="marketing"]'),
  filterButtonsUl: document.querySelector('.filter'),
  portfolioContainer: document.querySelector('.portfolio'),
};
let filteredCards;
// console.log(cards);
window.onload = e => {
  cardMaker(cards);
};

refs.filterButtonsUl.addEventListener('click', e => {
  //   console.log(e.target === refs.rbWeb);
  switch (e.target) {
    case refs.rbAll:
      cardMaker(cards);
      break;

    case refs.rbWeb:
      cardMaker(cards.filter(({ cardCathegory }) => cardCathegory === 'web'));
      break;

    case refs.rbApp:
      cardMaker(cards.filter(({ cardCathegory }) => cardCathegory === 'app'));
      break;

    case refs.rbDesign:
      cardMaker(cards.filter(({ cardCathegory }) => cardCathegory === 'design'));
      break;

    case refs.rbMarketing:
      cardMaker(cards.filter(({ cardCathegory }) => cardCathegory === 'marketing'));
      break;

    default:
      cardMaker(cards);
      break;
  }
});

function cardMaker(cards) {
  const cardsToPaste = cards.map(
    ({
      cardText,
      urlDesktopSized,
      urlTabletSized,
      urlPhoneSized,
      urlDefault,
      altText,
      cardTitle,
      cardDescription,
    }) => {
      return `<li class="portfolio__item">
            <a href="" class="card">
              <div class="card__thumb">
                <div class="card__overlay">
                  <p class="card__text">
                    ${cardText}
                  </p>
                </div>
                <picture class="card__image">
                  <source
                    srcset="
                                  ${urlDesktopSized[0]} 1x,
                                  ${urlDesktopSized[1]} 2x
                                "
                    media="(min-width: 1200px)"
                  />
                  <source
                    srcset="
                                  ${urlTabletSized[0]} 1x,
                                  ${urlTabletSized[1]} 2x
                                "
                    media="(min-width: 768px)"
                  />
                  <source
                    srcset="
                                  ${urlPhoneSized[0]} 1x,
                                  ${urlPhoneSized[1]} 2x
                                "
                    media="(min-width: 320px)"
                  />
                  <img src="${urlDefault}"
                  alt="${altText}" />
                </picture>
              </div>
              <div class="card__content">
                <h2 class="card__title">${cardTitle}</h2>
                <p class="card__description">${cardDescription}</p>
              </div>
            </a>
          </li>`;
    },
  );
  refs.portfolioContainer.innerHTML = '';
  refs.portfolioContainer.insertAdjacentHTML('beforeend', cardsToPaste.join(''));
}
