let mla_list_tamil = JSON.parse(localStorage.getItem("mla_details_tamil"));
let mla_list_eng = JSON.parse(localStorage.getItem("mla_details_english"));

let table_data_row, table_data1, table_data2, name_link, table_data3, table_data4, table_data4_div, table_data4_img, table_data4_div_desc, table_data5, table_data6, table_data7;


let tamil_tran = document.getElementById("lang_ta");

let english_tran = document.getElementById("lang_eng");

let dmk = "../../assets/images/flages/dmk-logo.png";
let aiadmk = "../../assets/images/flages/aiadmk.png";
let bjp = "../../assets/images/flages/bjp.jpg";
let congress = "../../assets/images/flages/inc.png";
let mnmk = "../../assets/images/flages/Mmk_flag.png";
let pmk = "../../assets/images/flages/Pmk_flag.jpg";
let vck= "../../assets/images/flages/vck.png";
let cpm = "../../assets/images/flages/cpm.png";
let mathimuka = "../../assets/images/flages/mathimuka.jpg";


function default_list(array){
    
    array.forEach(values =>{

        table_data_row = document.createElement("tr");
        document.querySelector(".mla_list_body").append(table_data_row);
    
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
        }
         else if (values.Party === "அதிமுக") {
            table_data4_img.setAttribute("src", aiadmk);
        }
         else if (values.Party === "பாஜக") {
            table_data4_img.setAttribute("src", bjp);
        } 
        else if (values.Party === "காங்.") {
            table_data4_img.setAttribute("src", congress);
        } 
        else if (values.Party === "மக்கள் நீதி மய்யம் கட்சி") {
            table_data4_img.setAttribute("src", mnmk);
        }
        else if(values.Party === "பாமக"){
            table_data4_img.setAttribute("src", pmk);
        }
        else if(values.Party === "விசிக"){
            table_data4_img.setAttribute("src", vck);
         }
         else if(values.Party === "சிபிஎம்"){
            table_data4_img.setAttribute("src", cpm);
         }
         else if(values.Party === "மதிமுக"){
            table_data4_img.setAttribute("src", mathimuka);
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
        table_data_row.append(table_data7);
    

    });
}

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



default_list(mla_list_tamil);



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





let  head_tamil= document.getElementById("head_tamil");

let head_english= document.getElementById("head_english");


tamil_tran.addEventListener('click', function(){


    document.querySelector(".mla_list_body").innerHTML = "";

    head_tamil.style.display="table-header-group"

    head_english.style.display="none"


    default_list(mla_list_tamil);
});

english_tran.addEventListener('click', function(){


    document.querySelector(".mla_list_body").innerHTML="";

    head_tamil.style.display="none"

    head_english.style.display="table-header-group"

    default_list(mla_list_eng);
});
