

let mla_list = JSON.parse(localStorage.getItem("mla_ditails"));

let table_div, table_head, table_head_row, table_heading1, table_heading2, table_heading3, table_heading4, table_heading5, table_heading6, table_heading7, table_body, table_data_row, table_data1, table_data2, name_link, table_data3, table_data4, table_data4_div, table_data4_img, table_data4_div_desc, table_data5, table_data6, table_data7;


table_div = document.createElement("table");
table_div.classList = "table table-hover";


table_head = document.createElement("thead");
table_div.append(table_head);

table_head_row = document.createElement("tr");
table_head_row.setAttribute("class", "sticky-top")
table_head.append(table_head_row);

table_heading1 = document.createElement("th");
table_heading1.setAttribute("class", "text-center");
table_heading1.innerText = "வ.எண்";
table_head_row.append(table_heading1);

table_heading2 = document.createElement("th");
table_heading2.setAttribute("class", "text-center");
table_heading2.innerText = "தொகுதி பெயர்";
table_head_row.append(table_heading2);

table_heading3 = document.createElement("th");
table_heading3.setAttribute("class", "text-center");
table_heading3.innerText = "வேட்பாளர் பெயர்";
table_head_row.append(table_heading3);

table_heading4 = document.createElement("th");
table_heading4.setAttribute("class", "text-center");
table_heading4.innerText = "கட்சிகள்";
table_head_row.append(table_heading4);

table_heading5 = document.createElement("th");
table_heading5.setAttribute("class", "text-center");
table_heading5.innerText = "வாக்குகள்";
table_head_row.append(table_heading5);

table_heading6 = document.createElement("th");
table_heading6.setAttribute("class", "text-center");
table_heading6.innerText = "வாக்கு வித்தியாசம்";
table_head_row.append(table_heading6);

table_heading7 = document.createElement("th");
table_heading7.setAttribute("class", "text-center");
table_heading7.innerText = "வாக்கு விகிதம்";
table_head_row.append(table_heading7);

table_body = document.createElement("tbody");
table_div.append(table_body);

let dmk = "../../assets/images/flages/dmk-logo.png";
let aiadmk = "../../assets/images/flages/aiadmk-logo.png";
let bjp = "../../assets/images/flages/bjp-logo.png";
let congress = "../../assets/images/flages/congress-logo.png";
let mnmk = "../../assets/images/flages/mnmk-logo.png";

for (let values of mla_list) {
    table_data_row = document.createElement("tr");
    table_div.append(table_data_row);

    table_data1 = document.createElement("td");
    table_data1.innerText = values.mla_id;
    table_data_row.append(table_data1)

    table_data2 = document.createElement("td");
    table_data_row.append(table_data2)

    name_link = document.createElement("a");
    name_link.setAttribute("href", "../../assets");
    name_link.setAttribute("title", values.constituency_Name);
    name_link.innerText = values.constituency_Name;
    table_data2.append(name_link);

    table_data3 = document.createElement("td");
    table_data_row.append(table_data3)

    let table_data3_link = document.createElement("a");
    table_data3_link.setAttribute("href", "mla_profile.html?name=" + values.candidate_Name)
    table_data3_link.innerText = values.candidate_Name;
    table_data3.append(table_data3_link)

    table_data4 = document.createElement("td");
    table_data_row.append(table_data4);

    table_data4_div = document.createElement("div");
    table_data4_div.setAttribute("class", "name-img");
    table_data4.append(table_data4_div);

    table_data4_img = document.createElement("img");
    table_data4_img.setAttribute("alt", "error Image");
    table_data4_div.append(table_data4_img);

    if (values.Party === "திமுக") {
        table_data4_img.setAttribute("src", dmk);
    } else if (values.Party === "ஐ.ஏ.ஏ.டி.கே") {
        table_data4_img.setAttribute("src", aiadmk);
    } else if (values.Party === "பி.ஜே.பி") {
        table_data4_img.setAttribute("src", bjp);
    } else if (values.Party === "காங்.ரா") {
        table_data4_img.setAttribute("src", congress);
    } else if (values.Party === "மக்கள் நீதி மய்யம் கட்சி") {
        table_data4_img.setAttribute("src", mnmk);
    }

    table_data4_div_desc = document.createElement("p");
    table_data4_div_desc.innerText = values.Party;
    table_data4_div.append(table_data4_div_desc);

    table_data5 = document.createElement("td");
    table_data5.innerText = values.votes;
    table_data_row.append(table_data5)

    table_data6 = document.createElement("td");
    table_data6.innerText = values.margin;
    table_data_row.append(table_data6)

    table_data7 = document.createElement("td");
    table_data7.innerText = values.vote_Rate;
    table_data_row.append(table_data7)

}
document.querySelector(".governer").append(table_div);


// $("button#first").click(function () {
//     $("#tableRow").slideToggle();
// });




window.onload = function () {
    let searchBox = document.querySelector('#searchbar');
    searchBox.addEventListener('input', function () {
        let filterValue = searchBox.value.toLocaleLowerCase();

        let rows = document.querySelectorAll("table tr");

        for (let i = 1; i < rows.length; i++) { // start from index 1 to skip the header row
            let row = rows[i];

            let id= row.children[0].textContent.toLocaleLowerCase();

            let name = row.children[1].textContent.toLocaleLowerCase();

            let party = row.children[3].textContent.toLocaleLowerCase();
            
            let leader_name = row.children[2].textContent.toLocaleLowerCase();

            if (name.includes(filterValue) || party.includes(filterValue) || leader_name.includes(filterValue)||id.includes(filterValue)) {

                row.style.display = "table-row";

            } else {
                row.style.display = "none";

            }
        }
    });
};




let table = document.querySelector("table");
let rows = table.rows;

let sortNameButton = document.querySelector("#sortName");
sortNameButton.addEventListener("click", () => {
    let sortedRows = Array.from(rows)
        .slice(1)
        .sort((a, b) => {
            let nameA = a.cells[1].textContent;
            let nameB = b.cells[1].textContent;
            return nameA.localeCompare(nameB);
        });

    table.tBodies[0].append(...sortedRows);
});




let sortMarginButton = document.querySelector("#sortMargin");
sortMarginButton.addEventListener("click", () => {
    let sortedRows = Array.from(rows)
        .slice(1)
        .sort((a, b) => {
            let marginA = parseInt(a.cells[4].textContent);
            let marginB = parseInt(b.cells[4].textContent);
            return marginB - marginA;
        });

    table.tBodies[0].append(...sortedRows);
});



