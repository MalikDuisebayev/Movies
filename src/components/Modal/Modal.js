import getMovies from "../../api/getMovies";
import { ROOT_MODAL } from "../../root/root";
import "./Modal.css";

class Modal {
  getListsMoviesInCategory(el, category) {
    let lists = "";
    if (el.length > 1) {
      el.forEach((element) => {
        lists += `${element[category]} `;
      });
    } else {
      lists = el[0][category];
    }
    return lists;
  }
  async render(id) {
    const data = (await getMovies.get()).find((el) => el.kinopoiskId == id);
    // const data = response.find((el) => el.kinopoiskId == id);

    const { nameRu, nameEn, countries, genres, posterUrl, premiereRu } = data;
    const date = new Date(premiereRu).toLocaleDateString("ru-RU");
    let genre = this.getListsMoviesInCategory(genres, "genre");
    let country = this.getListsMoviesInCategory(countries, "country");

    const htmlCatalog = `
    <div class="modal__item"> 
    <img class="modal__img" src="${posterUrl}" alt="${nameRu}">
    <div class="modal__content">
    <h2 class="modal__name" >
    ${nameRu}
    <span class="modal__name-span">${nameEn}</span>
    </h2>
    <ul class="modal__list">
        <li class="modal__list-item"><strong>Жанр:</strong> ${genre}</li>
        <li class="modal__list-item"><strong>Страна:</strong> ${country}</li>
        <li class="modal__list-item"><strong>Премьера:</strong> ${date}</li>
        
    </ul>
    </div>
</div>
    `;
    const htmlWrapper = `
        <div class="wrapper">
            <button class="modal__close"
            onclick="modal.innerHTML = ''"
            > ❌</button>
            <div class = "modal__container">
                ${htmlCatalog}
            </div>
        </div>
    `;
    ROOT_MODAL.innerHTML = htmlWrapper;
  }
}
export default new Modal();
