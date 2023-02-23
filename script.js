import { lectures } from "./data/data.js";
import Lecture from "./modules/lecture.js";

const gridItemEl = document.querySelector(".grid__item");
const gridTitleEl = document.querySelector(".grid__title");
const gridTextEl = document.querySelector(".grid__text");

const inputEl = document.querySelector(".section__form");

inputEl.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
  }

  let letter = [];
});
