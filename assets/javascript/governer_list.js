const governer_list = JSON.parse(localStorage.getItem("governor_details"));

const governer_list_english = JSON.parse(localStorage.getItem("governor_list_english"));

const languagess = localStorage.getItem("language");

function default_list(array) {

  array.forEach((values) => {

    const table_row = document.createElement("tr");

    const table_data1 = document.createElement("td");
    table_data1.innerText = values.id;
    table_row.append(table_data1);

    const table_data2 = document.createElement("td");
    table_row.append(table_data2);

    const data2_div_profile = document.createElement("div");
    data2_div_profile.setAttribute("class", "profile-main");
    table_data2.append(data2_div_profile);

    const div_parties = document.createElement("div");
    div_parties.setAttribute("class", "parties");
    data2_div_profile.append(div_parties);

    const div_fontside = document.createElement("div");
    div_fontside.setAttribute("class", "fontsidepro");
    div_parties.append(div_fontside);

    const name_div = document.createElement("p");
    name_div.innerText = values.governor_name;
    div_fontside.append(name_div);

    const position_div = document.createElement("p");
    div_fontside.append(position_div);
    if (languagess === "english") {
      position_div.innerText = "Governer";
    } else {
      position_div.innerText = "ஆளுநர்";
    }
    const backside_div = document.createElement("div");
    backside_div.setAttribute("class", "backsidepro");
    div_parties.append(backside_div);

    const image_div = document.createElement("img");
    image_div.setAttribute("src", values.image);
    image_div.setAttribute("alt", values.governor_name);
    backside_div.append(image_div);

    const button_div = document.createElement("button");
    backside_div.append(button_div);
    const anc_link_div = document.createElement("a");
    anc_link_div.setAttribute(
      "href",
      `governer_profile.html?name=${values.id}`
    );
    button_div.append(anc_link_div);
    if (languagess === "english") {
      anc_link_div.innerText = "Profile";

    } else {
      anc_link_div.innerText = "விவரம்";

    }
    const table_data3 = document.createElement("td");
    table_data3.innerText = values.from;
    table_row.append(table_data3);

    const table_data4 = document.createElement("td");
    table_data4.innerText = values.to;
    table_row.append(table_data4);

    document.querySelector(".mla_list_body").append(table_row);

  });

}


default_list(governer_list);

window.onload = function () {
  const searchBox = document.querySelector("#searchbar");
  searchBox.addEventListener("input", () => {
    const filterValue = searchBox.value.toLocaleLowerCase();

    const rows = document.querySelectorAll("table tr");

    for (let i = 1; i < rows.length; i++) {
      // start from index 1 to skip the header row
      const row = rows[i];

      const id = row.children[0].textContent.toLocaleLowerCase();

      const name = row.children[1].textContent.toLocaleLowerCase();

      const party = row.children[3].textContent.toLocaleLowerCase();

      const leader_name = row.children[2].textContent.toLocaleLowerCase();

      if (
        name.includes(filterValue) ||
        party.includes(filterValue) ||
        leader_name.includes(filterValue) ||
        id.includes(filterValue)
      ) {
        row.style.display = "table-row";
      } else {
        row.style.display = "none";
      }
    }
  });
};

const table1 = document.querySelector("table");
const { rows } = table1;

const sortNameButton = document.querySelector("#sortName");
sortNameButton.addEventListener("click", () => {
  const sortedRows = Array.from(rows)
    .slice(1)
    .sort((a, b) => {
      const nameA = a.cells[1].textContent;
      const nameB = b.cells[1].textContent;
      return nameA.localeCompare(nameB);
    });

  table1.tBodies[0].append(...sortedRows);
});

const sortDateButton = document.getElementById("sort-date");
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


const tamil_tran = document.getElementById("lang_ta");

const english_tran = document.getElementById("lang_eng");

tamil_tran.addEventListener("click", () => {
  document.querySelector(".mla_list_body").innerHTML = "";



  default_list(governer_list);
});

english_tran.addEventListener("click", () => {
  document.querySelector(".mla_list_body").innerHTML = "";


  default_list(governer_list_english);
});

const language_setting11 = localStorage.getItem("language");

if (language_setting11 === "english") {
  document.querySelector(".mla_list_body").innerHTML = "";

  default_list(governer_list_english);

}
else if (language_setting11 == "tamil") {

  document.querySelector(".mla_list_body").innerHTML = "";

  default_list(governer_list);
}

