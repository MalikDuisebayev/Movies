import getMovies from "../../api/getMovies";
import { ROOT_MODAL } from "../../root/root";
import "./Modal.css";

class Modal {
  async render(id) {
    const response = await getMovies.get();
    const data = response.find((el) => el.kinopoiskId == id);
    console.log(data);
    const date = new Date(data.premiereRu).toLocaleDateString("ru-RU");
    const htmlCatalog = `
    <div class="modal__item"> 
    <img class="modal__img" src="${data.posterUrl}" alt="${data.nameRu}">
    <div class="modal__content">
    <h2 class="modal__name" >
    ${data.nameRu}
    <span class="modal__name-span">${data.nameEn}</span>
    </h2>
    <ul class="modal__list">
        <li class="modal__list-item"><strong>Жанр:</strong> ${data.genres[0].genre}</li>
        <li class="modal__list-item"><strong>Страна:</strong> ${data.countries[0].country}</li>
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
