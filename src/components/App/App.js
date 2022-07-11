import Header from "../Header";
import Movies from "../Movies";
import "./App.css";
class App {
  async render() {
    Header.render();
    await Movies.render();
  }
}
export default new App();
