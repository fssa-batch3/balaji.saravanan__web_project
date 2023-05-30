const past_leader_one = JSON.parse(localStorage.getItem("past_leader"));
const languagess = localStorage.getItem("language");

const past_leaders_english_one = JSON.parse(localStorage.getItem("past_leaders_english"));

const dmk = "../../assets/images/flages/dmk-logo.png";
const aiadmk = "../../assets/images/flages/aiadmk.png";
const bjp = "../../assets/images/flages/bjp.jpg";
const congress = "../../assets/images/flages/inc.png";
const others1 = "../../assets/images/ministers/not-iamge.jpg";

function default_list(array) {
  document.querySelector(".table_body").innerHTML = "";
  array.forEach((values) => {
    const tr = document.createElement("tr");

    // create table cell elements and set their content
    const td1 = document.createElement("td");
    td1.setAttribute("scope", "row");
    td1.textContent = values.id;

    const td2 = document.createElement("td");
    const profileMainDiv = document.createElement("div");
    profileMainDiv.setAttribute("class", "profile-main");

    const partiesDiv = document.createElement("div");
    partiesDiv.setAttribute("class", "parties");

    const pastLeaderDiv = document.createElement("div");
    pastLeaderDiv.setAttribute("id", "pastleader");
    pastLeaderDiv.setAttribute("class", "fontsidepro");
    pastLeaderDiv.innerHTML = `<p>${values.name}</p>`;

    const backsideproDiv = document.createElement("div");
    backsideproDiv.setAttribute("class", "backsidepro");
    backsideproDiv.innerHTML = `<p></p><img src="${values.image}" alt="${values.name}">`;

    const buttonElement = document.createElement("button");
    const aElement = document.createElement("a");
    aElement.setAttribute(
      "href",
      `past_leader_profile.html?name=${values.id}`
    );
    if (languagess === "english") {
      aElement.innerHTML = "profile";

    } else {
      aElement.innerHTML = "விவரம்";

    }

    buttonElement.appendChild(aElement);
    backsideproDiv.appendChild(buttonElement);

    partiesDiv.appendChild(pastLeaderDiv);
    partiesDiv.appendChild(backsideproDiv);
    profileMainDiv.appendChild(partiesDiv);
    td2.appendChild(profileMainDiv);

    const td3 = document.createElement("td");
    td3.setAttribute("class", "date");
    td3.textContent = values.to;

    const td4 = document.createElement("td");
    td4.setAttribute("class", "date");
    td4.textContent = values.from;

    // Create table cell
    const td5 = document.createElement("td");
    const nameImgDiv = document.createElement("div");
    nameImgDiv.setAttribute("class", "name-img");

    const partyImg = document.createElement("img");

    partyImg.setAttribute("alt", values.party_name);

    const partyName = document.createElement("p");
    partyName.innerText = values.party_name;

    if (values.party_name === "திமுக" || values.party_name === "DMK") {
      partyImg.setAttribute("src", dmk);
    } else if (
      values.party_name === "அதிமுக" ||
      values.party_name === "AIADMK"
    ) {
      partyImg.setAttribute("src", aiadmk);
    } else if (values.party_name === "பாஜக" || values.party_name === "BJP") {
      partyImg.setAttribute("src", bjp);
    } else if (values.party_name === "காங்." || values.party_name === "INC") {
      partyImg.setAttribute("src", congress);
    } else {
      partyImg.setAttribute("src", others1);
    }

    nameImgDiv.appendChild(partyImg);
    nameImgDiv.appendChild(partyName);
    td5.appendChild(nameImgDiv);

    td5.appendChild(nameImgDiv);

    // add table cell elements to table row element
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    document.querySelector(".table_body").append(tr);
  });
}

default_list(past_leader_one);




const tamil_tran = document.getElementById("lang_ta");

const english_tran = document.getElementById("lang_eng");


tamil_tran.addEventListener("click", () => {
  document.querySelector(".table_body").innerHTML = "";

  default_list(past_leader_one);

});

english_tran.addEventListener("click", () => {
  document.querySelector(".table_body").innerHTML = "";

  default_list(past_leaders_english_one);
});

const language_setting11 = localStorage.getItem("language");


if (language_setting11 === "english") {

  document.querySelector(".table_body").innerHTML = "";

  default_list(past_leaders_english_one);
}
else if (language_setting11 === "tamil") {

  document.querySelector(".table_body").innerHTML = "";

  default_list(past_leader_one);
}


window.onload = function () {

  const searchBox = document.querySelector("#searchbar");

  searchBox.addEventListener("input", () => {

    const filterValue = searchBox.value.toLocaleLowerCase();

    const rows = document.querySelectorAll("table tr")

    for (let i = 1; i < rows.length; i++) {
      // start from index 1 to skip the header row
      const row = rows[i];

      const name = row.children[1].textContent.toLocaleLowerCase();
      const party = row.children[3].textContent.toLocaleLowerCase();
      const leader_name = row.children[2].textContent.toLocaleLowerCase();
      if (
        name.includes(filterValue) ||
        party.includes(filterValue) ||
        leader_name.includes(filterValue)
      ) {
        row.style.display = "table-row";
      } else {
        row.style.display = "none";
      }
    }
  });
};

const sortDateButton = document.getElementById("sort-date");

const sortDateButton1 = document.getElementById("sort-date1");

sortDateButton.addEventListener("click", () => {

  const table = document.querySelector("table");

  const { rows } = table;

  const sortedRows = Array.from(rows)
    .slice(1)
    .sort((a, b) => {
      const dateA = (a.cells[0].textContent);
      const dateB = (b.cells[0].textContent);
      return dateB - dateA; // Sort in descending order
    });

  table.tBodies[0].append(...sortedRows);
});

sortDateButton1.addEventListener("click", () => {

  const table = document.querySelector("table");

  const { rows } = table;

  const sortedRows = Array.from(rows)
    .slice(1)
    .sort((a, b) => {
      const dateA = (a.cells[0].textContent);
      const dateB = (b.cells[0].textContent);
      return dateA - dateB; // Sort in descending order
    });

  table.tBodies[0].append(...sortedRows);
});

const sortNameButton = document.getElementById("sortName");

const sortNameButton1 = document.getElementById("sortName1");

sortNameButton.addEventListener("click", () => {
  const table = document.querySelector("table");
  const { rows } = table;

  const sortedRows = Array.from(rows)
    .slice(1)
    .sort((a, b) => {
      const nameA = a.cells[1].textContent;
      const nameB = b.cells[1].textContent;
      return nameA.localeCompare(nameB);
    });

  table.tBodies[0].append(...sortedRows);
});


sortNameButton1.addEventListener("click", () => {
  const table = document.querySelector("table");
  const { rows } = table;

  const sortedRows = Array.from(rows)
    .slice(1)
    .sort((a, b) => {
      const nameA = a.cells[1].textContent;
      const nameB = b.cells[1].textContent;
      return nameB.localeCompare(nameA);
    });

  table.tBodies[0].append(...sortedRows);
});
