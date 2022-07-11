const { default: axios } = require("axios");

class GetMovies {
  constructor() {
    this.URL =
      "https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2022&month=JULY";
  }
  async get() {
    try {
      const data = await axios.get(this.URL, {
        headers: {
          "X-API-KEY": "c3a73e9d-7852-4b61-8294-3a50b3d8e374",
          "Content-Type": "application/json",
        },
      });
      return data.data.items;
    } catch (error) {
      return false;
    }
  }
}
export default new GetMovies();
