const past_leaders = JSON.parse(localStorage.getItem("past_leader"))


for (let values of past_leaders) {
    var tr = document.createElement('tr');

    // create table cell elements and set their content
    var td1 = document.createElement('td');
    td1.setAttribute('scope', 'row');
    td1.textContent = values.id;

    var td2 = document.createElement('td');
    var profileMainDiv = document.createElement('div');
    profileMainDiv.setAttribute('class', 'profile-main');

    var partiesDiv = document.createElement('div');
    partiesDiv.setAttribute('class', 'parties');

    var pastLeaderDiv = document.createElement('div');
    pastLeaderDiv.setAttribute('id', 'pastleader');
    pastLeaderDiv.setAttribute('class', 'fontsidepro');
    pastLeaderDiv.innerHTML = `<p>${values.name}</p>`;


    var backsideproDiv = document.createElement('div');
    backsideproDiv.setAttribute('class', 'backsidepro');
    backsideproDiv.innerHTML = '<p></p><img src="../../assets/images/ministers/mk stalin.png" alt="error image">';



    var buttonElement = document.createElement('button');
    var aElement = document.createElement('a');
    aElement.setAttribute('href', 'past_leader_profile.html?name=' + values.name);
    aElement.innerHTML = 'விவரம்';
    buttonElement.appendChild(aElement);
    backsideproDiv.appendChild(buttonElement);

    partiesDiv.appendChild(pastLeaderDiv);
    partiesDiv.appendChild(backsideproDiv);
    profileMainDiv.appendChild(partiesDiv);
    td2.appendChild(profileMainDiv);

    var td3 = document.createElement('td');
    td3.setAttribute('class', 'date');
    td3.textContent = values.to;

    var td4 = document.createElement('td');
    td4.setAttribute('class', 'date');
    td4.textContent = values.from;

    // Create table cell
    var td5 = document.createElement('td');
    var nameImgDiv = document.createElement('div');
    nameImgDiv.setAttribute('class', 'name-img');

    var partyImg = document.createElement('img');
    partyImg.setAttribute("alt", values.party_name)

    var partyName = document.createElement('p');
    partyName.innerText = values.party_name;

    if (values.party_name === "திமுக") {
        partyImg.setAttribute("src", "../../assets/images/flages/dmk-logo.png");
    } else if (values.party_name === "ஐ.ஏ.ஏ.டி.கே") {
        partyImg.setAttribute("src", "../../assets/images/flages/aiadmk-logo.png");
    } else if (values.party_name === "பி.ஜே.பி") {
        partyImg.setAttribute("src", "../../assets/images/flages/bjp-logo.png");
    } else if (values.party_name === "காங்.ரா") {
        partyImg.setAttribute("src", "../../assets/images/flages/congress-logo.png");
    } else if (values.party_name === "மக்கள் நீதி மய்யம் கட்சி") {
        partyImg.setAttribute("src", "../../assets/images/flages/mnmk-logo.png");
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
}



const sortTableByDate = () => {
    const table = document.getElementById('my-table');
    const rows = Array.from(table.getElementsByTagName('tr'));
    const sortedRows = rows.sort((row1, row2) => {
        const date1 = new Date(row1.cells[3].textContent);
        const date2 = new Date(row2.cells[3].textContent);
        return date1 - date2;
    });
    table.tBodies[0].append(...sortedRows);
};

document.getElementById('sort-date').addEventListener('click', sortTableByDate);


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


window.onload = function () {
    let searchBox = document.querySelector('#searchbar');
    searchBox.addEventListener('input', function () {
        let filterValue = searchBox.value.toLocaleLowerCase();
        let rows = document.querySelectorAll("table tr");
        for (let i = 1; i < rows.length; i++) { // start from index 1 to skip the header row
            let row = rows[i];
            let name = row.children[1].textContent.toLocaleLowerCase();
            let party = row.children[3].textContent.toLocaleLowerCase();
            let leader_name = row.children[2].textContent.toLocaleLowerCase();
            if (name.includes(filterValue) || party.includes(filterValue) || leader_name.includes(filterValue)) {
                row.style.display = "table-row";
            } else {
                row.style.display = "none";
            }
        }
    });
};