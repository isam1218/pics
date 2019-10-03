import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID a27a81df732004b800a24fbe86c93275022082b5aa98778f5381595dc07da40a"
  }
});

