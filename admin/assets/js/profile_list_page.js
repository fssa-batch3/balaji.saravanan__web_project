
const popup = document.getElementById('leader-popup');
const closeBtn = document.getElementById('closeBtn');

closeBtn.addEventListener('click', function () {
    // leaderForm.style.display = 'none';
    popup.style.display = 'none'; // hide the form
});
const minister_list = JSON.parse(localStorage.getItem("politician_data"));

// const timestamp = new Date().getTime();

// create HTML elements


for (const minister of minister_list) {

    let row = document.createElement("div");
    row.classList.add("row");

    let col = document.createElement("div");
    col.classList.add("col-lg-12");

    let card = document.createElement("div");
    card.classList.add("card", "border-4", "mb-4", "mt-4");

    let dFlex = document.createElement("div");
    dFlex.classList.add("d-flex");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("horizontal-card-bg-img");

    let img = document.createElement("img");
    img.src = minister.img.sourse;

    let flexFill = document.createElement("div");
    flexFill.classList.add("flex-fill");

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let title = document.createElement("div");
    title.classList.add("font-weight-bold", "mt-3");
    title.innerHTML = minister.name.ename;

    let text = document.createElement("div");
    text.classList.add("mb-3");
    text.innerHTML = "<p>this text content i want to this card</p>";

    let btnContainer = document.createElement("div");
    btnContainer.classList.add("horizontal-card-btn-container", "d-flex", "justify-content-center", "align-items-center");

    let button2 = document.createElement("button");
    button2.classList.add("btn-primary", "m-2");
    button2.innerHTML = "update";
    button2.onclick = function () {
        updateLeader(minister);

        popup.style.display = 'flex';

    }
    let button3 = document.createElement("button");
    button3.classList.add("btn-primary");
    button3.innerHTML = "delete";
    button3.onclick = function () {
        deleteLeader(minister);

    }
    // build the HTML structure

    row.appendChild(col);
    col.appendChild(card);
    card.appendChild(dFlex);
    dFlex.appendChild(imgContainer);
    imgContainer.appendChild(img);
    dFlex.appendChild(flexFill);
    flexFill.appendChild(cardBody);
    cardBody.appendChild(title);
    cardBody.appendChild(text);
    dFlex.appendChild(btnContainer);
    btnContainer.appendChild(button2);
    btnContainer.appendChild(button3);
    document.querySelector('.container').append(row);
}

let profile_leder_id= null;
const leaderForm = document.getElementById("leader-form");

const ministersData = JSON.parse(localStorage.getItem("politician_data")) ?? [];

// Function to update leader data
function updateLeader(leader) {
    // Set form values to current leader data
    document.getElementById("url").value = leader.img.sourse;

    document.getElementById("tname").value = leader.name.tname;

    document.getElementById("ename").value = leader.name.ename;

    document.getElementById("position").value = leader.position;

    document.getElementById("describe").value = leader.description;

    document.getElementById("party_name").value = leader.party_name;

    profile_leder_id= leader.id;
}

// Function to handle form submission
function handleSubmit(e) {
    e.preventDefault();
    const img_url = document.getElementById("url").value;

    const tamil_name = document.getElementById("tname").value;

    const english_name = document.getElementById("ename").value;

    const position = document.getElementById("position").value;

    const description = document.getElementById("describe").value;

    const party_name = document.getElementById("party_name").value;

    const leaderdata = {
        name: {
            tname: tamil_name,
            ename: english_name,
        },
        img: {
            sourse: img_url,
            alter: english_name,
        },
        position: position,
        description: description,
        party_name: party_name,
        status: true,
        id:profile_leder_id,
    };

    // Find index of current leader in ministersData
    const index = ministersData.findIndex((leader) => leader.id === profile_leder_id);

    // If leader is found, update their data and save to localStorage
    if (index !== -1) {
        ministersData[index] = leaderdata;
        localStorage.setItem("politician_data", JSON.stringify(ministersData));
        alert("Leader updated successfully!");
        window.location.reload();
    }

}

// Add event listener to form submission
leaderForm.addEventListener("submit", handleSubmit);


function deleteLeader(minister) {
    const ministersData = JSON.parse(localStorage.getItem("politician_data")) ?? [];

    const index = ministersData.findIndex((leader) => leader.name.ename === minister.name.ename);

    // If leader is found, update their status to false and save to localStorage
    if (index !==-1) {
        ministersData[index].status = false;
        localStorage.setItem("politician_data", JSON.stringify(ministersData));
        alert("Leader status changed successfully!");
        window.location.reload();
    }
}




