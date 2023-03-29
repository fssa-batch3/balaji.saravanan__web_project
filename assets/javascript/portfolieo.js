
let users = JSON.parse(localStorage.getItem("users"));

let login_email = localStorage.getItem("profile_email");

let user_id;

users.find(function (obj) {

  if (login_email == obj.email) {

    user_id = obj.id;

    return user_id;
  }

});


let favorite_minister =
  JSON.parse(localStorage.getItem("fav_minister")) ?? [];

const popup = document.getElementById("leader-popup");

const closeBtn = document.getElementById("closeBtn");

closeBtn.addEventListener("click", function () {

  popup.style.display = "none"; // hide the form
});

// Get minister data from localStorage
const minister_values = JSON.parse(

  localStorage.getItem("politician_data")

);


minister_values.filter(function (obj) {

  if (obj.status) {

    list_leaders(obj);

  }

})

// functions to list leaders with filter
function list_leaders(minister) {

  // create card div.filter(minister => minister.status === true)
  let card_div = document.createElement("div");
  card_div.setAttribute("class", "card");

  let multiButton = document.createElement("div");
  multiButton.className = "multi-button";

  let heartButton = document.createElement("button");
  heartButton.className = "fas fa-heart";
  multiButton.appendChild(heartButton);

  let commentButton = document.createElement("button");
  commentButton.className = "fas fa-comment";
  multiButton.appendChild(commentButton);

  let shareButton = document.createElement("button");
  shareButton.className = "fas fa-share-alt";
  multiButton.appendChild(shareButton);

  let trashButton = document.createElement("button");
  trashButton.className = "fas fa-trash";
  multiButton.appendChild(trashButton);

  card_div.append(multiButton);

  // create imgBx div
  let imgBx_div = document.createElement("div");
  imgBx_div.setAttribute("class", "imgBx");
  card_div.append(imgBx_div);

  // create image element
  let image5 = document.createElement("img");
  image5.setAttribute("src", minister["img"]["sourse"]);
  image5.setAttribute("alt", minister["img"]["alter"]);
  imgBx_div.append(image5);

  // create contentBx div
  let contentBx = document.createElement("div");
  contentBx.setAttribute("class", "contentBx");
  card_div.append(contentBx);

  // create title element
  let title = document.createElement("p");
  title.innerText = "பெயர் : " + minister.name["tname"];
  contentBx.append(title);

  // create size div
  let size_div = document.createElement("div");
  size_div.setAttribute("class", "size");
  contentBx.append(size_div);

  // create name element
  let name = document.createElement("h3");
  name.innerText = "NAME : " + minister.name["ename"];
  size_div.append(name);

  // create position div
  let position = document.createElement("div");
  position.setAttribute("class", "color");
  contentBx.append(position);

  // create role_name element
  let role_name = document.createElement("h3");
  role_name.innerText = "பதவி : " + minister["position"];
  position.append(role_name);

  // create view portfolio anchor
  const anchor5 = document.createElement("a");
  anchor5.setAttribute("href", "stick.html?name=" + minister.name["ename"]);
  anchor5.innerText = "view portfolio";
  contentBx.append(anchor5);

  // append card div to list container
  document.querySelector("div.lists1").append(card_div);

  heartButton.addEventListener('click', function () {

    let fav_check = false;

    favorite_minister.find(function (obj) {

      if (user_id === obj.user_id) {

        if (minister.id === obj.min_id) {

          fav_check = true;

        }

      }
      return fav_check;
    });

    if (fav_check) {

      alert("already added");

    }
    else {

      favorite_minister.push({

        "fav_id": favorite_minister.length,

        "min_id": minister.id,

        "user_id": user_id,

        "image": minister.img,

        "name": minister.name
      });


      localStorage.setItem("fav_minister", JSON.stringify(favorite_minister));

      alert("added");

    }
  });

}



const searchInput = document.getElementById("searchbar");

const searchResults = document.getElementById("search_result");

// Function to create a card for a minister

function createMinisterCard(minister) {

  const card = document.createElement("div");
  card.setAttribute("class", "card");

  const name = document.createElement("a");
  name.setAttribute("href", "../portfolio/profile/profile.html?name=" + minister["ename"]);
  name.innerText = minister.name.ename;
  card.appendChild(name);

  const position = document.createElement("p");
  position.innerText = minister.position;
  card.appendChild(position);

  return card;
}


searchInput.addEventListener("input", function (e) {
  const searchTerm = searchInput.value.trim().toLowerCase();
  searchResults.style.display='block';
  searchResults.innerHTML = '';

  if (searchTerm === "") {
    searchResults.style.display='none';
    return; // do not display any search results
  }

  const filteredMinisters = minister_values.filter(function (minister) { //this is filter function using this function used to filter the json .
    const ministerName = minister.name.ename.trim().toLowerCase();    // all value change in lowercase
    return ministerName.includes(searchTerm);            // return filter value and sertterm condition check this line
  });


  if (filteredMinisters.length > 0) {        // card create if condition
    filteredMinisters.forEach(function (minister) {       //for each function this line use this check for minister name ;
      const card_div = createMinisterCard(minister);   // already card create this card call this line
      searchResults.appendChild(card_div);       // return value append
    });
  } else {
    const li = document.createElement("li");  // this is not found code
    li.textContent = "No results found.";
    searchResults.appendChild(li);
  }
  e.preventDefault();
});


const addbutton = document.getElementById("addbutton");
addbutton.addEventListener("click", function () {
})





