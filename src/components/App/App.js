import Header from "../Header";
import Movies from "../Movies";
import "./App.css";
class App {
  async render() {
    Header.render();
    await Movies.render();
    Movies.eventListener();
  }
}
export default new App();
