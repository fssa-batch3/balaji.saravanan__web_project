const past_leader_one = JSON.parse(localStorage.getItem("past_leader"));

const past_leaders_english_one = JSON.parse(
  localStorage.getItem("past_leaders_english")
);

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
      `past_leader_profile.html?name=${values.name}`
    );
    aElement.innerHTML = "விவரம்";
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

const sortTableByDate = () => {
  const table = document.getElementById("my-table");
  const rows = Array.from(table.getElementsByTagName("tr"));
  const sortedRows = rows.sort((row1, row2) => {
    const date1 = new Date(row1.cells[3].textContent);
    const date2 = new Date(row2.cells[3].textContent);
    return date1 - date2;
  });
  table.tBodies[0].append(...sortedRows);
};

document.getElementById("sort-date").addEventListener("click", sortTableByDate);

const table = document.querySelector("table");
const { rows } = table;

const sortNameButton = document.querySelector("#sortName");
sortNameButton.addEventListener("click", () => {
  const sortedRows = Array.from(rows)
    .slice(1)
    .sort((a, b) => {
      const nameA = a.cells[1].textContent;
      const nameB = b.cells[1].textContent;
      return nameA.localeCompare(nameB);
    });

  table.tBodies[0].append(...sortedRows);
});

window.onload = function balaji() {
  const searchBox = document.querySelector("#searchbar");
  searchBox.addEventListener("input", () => {
    const filterValue = searchBox.value.toLocaleLowerCase();
    const rows = document.querySelectorAll("table tr");
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

const tamil_tran = document.getElementById("lang_ta");

const english_tran = document.getElementById("lang_eng");

const head_tamil = document.getElementById("head_tamil");

const head_english = document.getElementById("head_english");

tamil_tran.addEventListener("click", () => {
  document.querySelector(".table_body").innerHTML = "";

  head_tamil.style.display = "table-row";

  head_english.style.display = "none";

  default_list(past_leader_one);
});

english_tran.addEventListener("click", () => {
  document.querySelector(".table_body").innerHTML = "";

  head_tamil.style.display = "none";

  head_english.style.display = "table-row";

  default_list(past_leaders_english_one);
});

const language_setting11 = localStorage.getItem("language");

if (language_setting11 === "english") {
  document.querySelector(".table_body").innerHTML = "";

  head_tamil.style.display = "none";

  head_english.style.display = "table-row";

  default_list(past_leaders_english_one);
} else if (language_setting11 === "tamil") {
  document.querySelector(".table_body").innerHTML = "";

  head_tamil.style.display = "table-row";

  head_english.style.display = "none";

  default_list(past_leader_one);
}
