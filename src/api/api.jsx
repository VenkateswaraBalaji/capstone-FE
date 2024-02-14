import axios from "axios";

const instance = axios.create({
  // .. congigure axios baseURL
  baseURL: "https://capstone-be-9o2i.onrender.com"
});

export default instance;