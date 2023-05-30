const mla_list_tamil = JSON.parse(localStorage.getItem("mla_details_tamil"));
const mla_list_eng = JSON.parse(localStorage.getItem("mla_details_english"));

let table_data_row;
let table_data1;
let table_data2;
let name_link;
let table_data3;
let table_data4;
let table_data4_div;
let table_data4_img;
let table_data4_div_desc;
let table_data5;
let table_data6;
let table_data7;

const tamil_tran = document.getElementById("lang_ta");

const english_tran = document.getElementById("lang_eng");

const dmk = "../../assets/images/flages/dmk-logo.png";
const aiadmk = "../../assets/images/flages/aiadmk.png";
const bjp = "../../assets/images/flages/bjp.jpg";
const congress = "../../assets/images/flages/inc.png";
const mnmk = "../../assets/images/flages/Mmk_flag.png";
const pmk = "../../assets/images/flages/Pmk_flag.jpg";
const vck = "../../assets/images/flages/vck.png";
const cpm = "../../assets/images/flages/cpm.png";
const mathimuka = "../../assets/images/flages/mathimuka.jpg";
const others1 = "../../assets/images/ministers/not-iamge.jpg";

function default_list(array) {
  array.forEach((values) => {
    table_data_row = document.createElement("tr");
    document.querySelector(".mla_list_body").append(table_data_row);

    table_data1 = document.createElement("td");
    table_data1.innerText = values.mla_id;
    table_data_row.append(table_data1);

    table_data2 = document.createElement("td");
    table_data_row.append(table_data2);

    name_link = document.createElement("a");
    name_link.setAttribute("href", "mla_ditails.html?name="+values.mla_id);
    name_link.setAttribute("title", values.constituency_Name);
    name_link.innerText = values.constituency_Name;
    table_data2.append(name_link);

    table_data3 = document.createElement("td");
    table_data_row.append(table_data3);

    const table_data3_link = document.createElement("a");
    table_data3_link.setAttribute(
      "href",
      `mla_profile.html?name=${values.mla_id}`
    );
    table_data3_link.innerText = values.candidate_Name;
    table_data3.append(table_data3_link);

    table_data4 = document.createElement("td");
    table_data_row.append(table_data4);

    table_data4_div = document.createElement("div");
    table_data4_div.setAttribute("class", "name-img");
    table_data4.append(table_data4_div);

    table_data4_img = document.createElement("img");
    table_data4_img.setAttribute("alt", "error Image");
    table_data4_div.append(table_data4_img);

    if (values.Party === "திமுக" || values.Party === "DMK") {
      table_data4_img.setAttribute("src", dmk);
    } else if (values.Party === "அதிமுக" || values.Party === "AIADMK") {
      table_data4_img.setAttribute("src", aiadmk);
    } else if (values.Party === "பாஜக" || values.Party === "BJP") {
      table_data4_img.setAttribute("src", bjp);
    } else if (values.Party === "காங்." || values.Party === "INC") {
      table_data4_img.setAttribute("src", congress);
    } else if (values.Party === "மக்கள் நீதி மய்யம் கட்சி") {
      table_data4_img.setAttribute("src", mnmk);
    } else if (values.Party === "பாமக" || values.Party === "PMK") {
      table_data4_img.setAttribute("src", pmk);
    } else if (values.Party === "விசிக" || values.Party === "VCK") {
      table_data4_img.setAttribute("src", vck);
    } else if (values.Party === "சிபிஎம்" || values.Party === "CPM") {
      table_data4_img.setAttribute("src", cpm);
    } else if (values.Party === "மதிமுக") {
      table_data4_img.setAttribute("src", mathimuka);
    } else {
      table_data4_img.setAttribute("src", others1);
    }

    table_data4_div_desc = document.createElement("p");
    table_data4_div_desc.innerText = values.Party;
    table_data4_div.append(table_data4_div_desc);

    table_data5 = document.createElement("td");
    table_data5.innerText = values.votes;
    table_data_row.append(table_data5);

    table_data6 = document.createElement("td");
    table_data6.innerText = values.margin;
    table_data_row.append(table_data6);

    table_data7 = document.createElement("td");
    table_data7.innerText = values.vote_Rate;
    table_data_row.append(table_data7);
  });
}

default_list(mla_list_tamil);

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

const table = document.getElementById("mlatable");
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

const sortMarginButton = document.querySelector("#sortMargin");
sortMarginButton.addEventListener("click", () => {
  const sortedRows = Array.from(rows)
    .slice(1)
    .sort((a, b) => {
      const marginA = parseInt(a.cells[5].textContent);
      const marginB = parseInt(b.cells[5].textContent);
      return marginB - marginA;
    });

  table.tBodies[0].append(...sortedRows);
});


tamil_tran.addEventListener("click", () => {
  document.querySelector(".mla_list_body").innerHTML = "";

  default_list(mla_list_tamil);
});

english_tran.addEventListener("click", () => {
  document.querySelector(".mla_list_body").innerHTML = "";

  default_list(mla_list_eng);
});

const language_setting11 = localStorage.getItem("language");

if (language_setting11 === "english") {
  document.querySelector(".mla_list_body").innerHTML = "";


  default_list(mla_list_eng);
} else if (language_setting11 == "tamil") {
  document.querySelector(".mla_list_body").innerHTML = "";


  default_list(mla_list_tamil);
}



