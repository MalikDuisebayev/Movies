import { ROOT_ROOT } from "../../root/root";
import "./Error.css";

class Error {
  render() {
    const html = `
        <div class=""error>
            <div class="container">
               <div class="error__wrapper">
               <p class="error__title"> Ошибка </p>
               <p class="error__title"> Повторите позднее </p>
               </div>
            </div>
        </div>
    `;
    ROOT_ROOT.innerHTML = html;
  }
}
export default new Error();
