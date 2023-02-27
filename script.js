import { attendees } from "./data/data.js";
import { renderStudents } from "./module/polaznici.js";

let searchEl = document.querySelector(".search");
renderStudents(attendees);

searchEl.addEventListener("keyup", (event) => {
  const searchTerm = event.target.value;

  const filteredResults = attendees.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  renderStudents(filteredResults, "There are no attendees with that letter!");
});
