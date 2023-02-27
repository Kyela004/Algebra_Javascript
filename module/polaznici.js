export const renderStudents = (attendees, fallback) => {
  const tableBodyEl = document.querySelector(".table__body");
  const alertEl = document.querySelector(".alert");

  tableBodyEl.innerHTML = "";

  if (attendees.length) {
    alertEl.classList.remove("alert-visible");

    attendees.forEach((attendee) => {
      let tableRow = document.createElement("tr");

      let tableDataId = document.createElement("td");
      tableDataId.innerText = attendee.id;
      let tableDataName = document.createElement("td");
      tableDataName.innerText = attendee.name;
      let tableDataSurname = document.createElement("td");
      tableDataSurname.innerText = attendee.surname;
      let tableDataAge = document.createElement("td");
      tableDataAge.innerText = attendee.age;

      tableRow.appendChild(tableDataId);
      tableRow.appendChild(tableDataName);
      tableRow.appendChild(tableDataSurname);
      tableRow.appendChild(tableDataAge);

      tableBodyEl.appendChild(tableRow);
    });
  } else {
    alertEl.classList.add("alert-visible");
    alertEl.innerText = fallback;
  }
};
