import getMovies from "../../api/getMovies";
import { ROOT_ROOT } from "../../root/root";
import Error from "../Error";
import Modal from "../Modal";
import "./Movies.css";

class Movies {
  async render() {
    const data = await getMovies.get();
    if (!data) return Error.render();
    let htmlCatalog = "";
    data.forEach(({ kinopoiskId, nameRu, posterUrl }) => {
      htmlCatalog += `
            <li class="movies__item" data-id="${kinopoiskId}">
                <img class="movies__img" src="${posterUrl}" alt="${nameRu}">
                <span class="movies__name"> ${nameRu} </span>
            </li>
      `;
    });
    const html = `
    <main>
    <section class="movies">
        <div class="container">
            <ul class="movies__list">
              ${htmlCatalog}
            </ul>
        </div>
    </section>
</main>
    `;
    ROOT_ROOT.innerHTML = html;
  }
  eventListener() {
    const moviesItem = document.querySelectorAll(".movies__item");
    moviesItem.forEach((card) => {
      card.addEventListener("click", async () => {
        const id = card.getAttribute("data-id");
        await Modal.render(id);
      });
    });
  }
}
export default new Movies();
