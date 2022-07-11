import { ROOT_HEADER } from "../../root/root";
import "./Header.css";
class Header {
  render() {
    const html = `
    <header class="header">
      <div class="container">
        <h1 class="header__title">КиноАфиша</h1>
      </div>
    </header>
    `;
    ROOT_HEADER.innerHTML = html;
  }
}
export default new Header();
