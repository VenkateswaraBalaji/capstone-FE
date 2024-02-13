import axios from "axios";

const instance = axios.create({
  // .. congigure axios baseURL
  baseURL: "https://capstone-be-b28x.onrender.com"
});

export default instance;