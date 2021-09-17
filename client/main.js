const { default: axios } = require("axios");

const fortuneMenu = document.getElementById("fortunes");
const baseURL = "http://localhost:4000/api/fortunes/";

console.log(fortuneMenu.children);

function seek(e) {
  axios.get(baseURL + e.target.value);
  console.log(res.data);
}
fortuneMenu.addEventListener("change", seek);
