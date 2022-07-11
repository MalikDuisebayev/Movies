import getMovies from "../../api/getMovies";
import { ROOT_ROOT } from "../../root/root";
import Error from "../Error";
import "./Movies.css";

class Movies {
  async render() {
    const data = await getMovies.get();
    if (!data) return Error.render();
    let htmlCatalog = "";
    data.forEach(({ nameRu, posterUrl }) => {
      htmlCatalog += `
            <li class="movies__item">
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
}
export default new Movies();
