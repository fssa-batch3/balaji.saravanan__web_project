const users = JSON.parse(localStorage.getItem("users"));

const login_email = localStorage.getItem("profile_email");

let user_id;

if (users != null) {
  users.find((obj) => {
    if (login_email === obj.email) {
      user_id = obj.id;

      return user_id;
    }
  });
}

const favorite_minister =
  JSON.parse(localStorage.getItem("fav_minister")) ?? [];

// const popup = document.getElementById("leader-popup");

// const closeBtn = document.getElementById("closeBtn");

// closeBtn.addEventListener("click", function () {

//   popup.style.display = "none"; // hide the form
// });

// Get minister data from localStorage
const minister_values = JSON.parse(localStorage.getItem("politician_data"));

const url = window.location.search;

const urlParams = new URLSearchParams(url);

const username = urlParams.get("name");

let conform = false;
minister_values.filter((obj) => {
  if (obj.status && obj.party_name === username) {
    list_leaders(obj);
    conform = true;
  }
});

if (!conform) {
  const li = document.createElement("li");
  li.innerHTML = "Comming soon";
  document.querySelector("body").append(li);
}

function list_leaders(item) {
  const ministerCard = document.createElement("div");
  ministerCard.classList.add("minister_card");

  const ministerImage = document.createElement("div");
  ministerImage.classList.add("minister_image");

  const image = document.createElement("img");
  image.src = `${item.img.sourse}`;
  image.alt = `${item.img.alter}`;

  ministerImage.appendChild(image);

  const ministerDetails = document.createElement("div");
  ministerDetails.classList.add("minister_details");

  const detailsContents = document.createElement("div");
  detailsContents.classList.add("details_contents");

  const ministerName = document.createElement("p");
  ministerName.classList.add("minister_name");
  ministerName.textContent = `${item.name.tname}`;

  const counOfMinister = document.createElement("p");
  counOfMinister.classList.add("coun_of_minister");
  counOfMinister.textContent = "மந்திரி சபை";

  const ministerPos = document.createElement("p");
  ministerPos.classList.add("minister_pos");
  ministerPos.textContent = `${item.position}`;

  const viewPortfolio = document.createElement("p");
  viewPortfolio.classList.add("view_portfolio");

  const anchor = document.createElement("a");
  anchor.href = `profile_ministers.html?name=${item.name.ename}`;
  anchor.textContent = "View portfolio";

  const heartButton = document.createElement("button");
  heartButton.className = "fa fa-heart";
  viewPortfolio.appendChild(heartButton);

  viewPortfolio.appendChild(anchor);

  detailsContents.appendChild(ministerName);
  detailsContents.appendChild(counOfMinister);
  detailsContents.appendChild(ministerPos);
  detailsContents.appendChild(viewPortfolio);

  ministerDetails.appendChild(detailsContents);

  ministerCard.appendChild(ministerImage);
  ministerCard.appendChild(ministerDetails);

  document.querySelector(".main_container").appendChild(ministerCard);

  heartButton.addEventListener("click", () => {
    let fav_check = false;

    favorite_minister.find((obj) => {
      if (user_id === obj.user_id) {
        if (item.id == obj.min_id) {
          fav_check = true;
        }
      }
      return fav_check;
    });

    if (fav_check) {
      alert("already added");
    } else {
      favorite_minister.push({
        fav_id: favorite_minister.length,

        min_id: item.id,

        user_id,

        image: item.img,

        name: item.name,
      });

      localStorage.setItem("fav_minister", JSON.stringify(favorite_minister));

      alert("added");
    }
  });
}

// functions to list leaders with filter
// function list_leaders(minister) {

//   let card = document.createElement('div');
//   card.classList.add('card');

//   let multiButton = document.createElement("div");
//   multiButton.className = "multi-button";

//   let commentButton = document.createElement("button");
//   commentButton.className = "	fa fa-comment";

//   commentButton.onclick = function () {

//     window.location.href = "profile_ministers.html?name=" + minister.name["ename"]
//   }
//   multiButton.appendChild(commentButton);

//   let shareButton = document.createElement("button");
//   shareButton.className = "fas fa-share-alt";
//   multiButton.appendChild(shareButton);

//   let trashButton = document.createElement("button");
//   trashButton.className = "fas fa-trash";
//   multiButton.appendChild(trashButton);

//

//   card.append(multiButton);
//   let cardImage = document.createElement('div');

//   cardImage.classList.add('card-image');

//   let img = document.createElement('img');
//   img.setAttribute('src', minister.img.sourse);
//   img.setAttribute('alt', 'profile picture');

//   cardImage.appendChild(img);

//   card.appendChild(cardImage);

//   let cardContent = document.createElement('div');
//   cardContent.classList.add('card-content');

//   let cardTitle = document.createElement('h2');
//   cardTitle.classList.add('card-title');
//   cardTitle.textContent = minister.name.tname;

//   let cardText1 = document.createElement('p');
//   cardText1.classList.add('card-text');
//   cardText1.textContent = 'மந்திரி சபை';

//   let cardText2 = document.createElement('p');
//   cardText2.classList.add('card-text');
//   cardText2.classList.add('card-strong');
//   cardText2.textContent = minister.position;

//   let cardButton = document.createElement('button');
//   cardButton.classList.add('card-button');
//   cardButton.textContent = 'விவரம்';
//   cardButton.onclick = function () {

//     window.location.href = "profile_ministers.html?name=" + minister.name["ename"]
//   }

//   // const anchor5 = document.createElement("a");
//   // anchor5.setAttribute("class", "rederect_button")
//   // anchor5.setAttribute("href", "stick.html?name=" + minister.name["ename"]);
//   // anchor5.innerText = "விவரம்";
//   // cardButton.append(anchor5);

//   cardContent.append(cardTitle);
//   cardContent.append(cardText1);
//   cardContent.append(cardText2);
//   cardContent.append(cardButton);
//   card.append(cardContent);

//   // append card div to list container
//   document.querySelector("div.lists1").append(card);

//   // function commend(minister) {
//   //   window.location.href = "stick.html?name=" + minister.name["ename"]

//   // }

//

// }

const searchInput = document.getElementById("searchbar");

const searchResults = document.getElementById("search_result");

// Function to create a card for a minister

function createMinisterCard(minister) {
  const card = document.createElement("div");
  card.setAttribute("class", "card");

  const name = document.createElement("a");
  name.setAttribute(
    "href",
    `profile_ministers.html?name=${minister.name.ename}`
  );
  name.innerText = minister.name.ename;
  card.appendChild(name);

  const position = document.createElement("p");
  position.innerText = minister.position;
  card.appendChild(position);

  return card;
}

searchInput.addEventListener("input", (e) => {
  const searchTerm = searchInput.value.trim().toLowerCase();
  searchResults.style.display = "block";
  searchResults.innerHTML = "";

  if (searchTerm === "") {
    searchResults.style.display = "none";
    return; // do not display any search results
  }

  const filteredMinisters = minister_values.filter((minister) => {
    // this is filter function using this function used to filter the json .
    const ministerName = minister.name.ename.trim().toLowerCase(); // all value change in lowercase
    return ministerName.includes(searchTerm); // return filter value and sertterm condition check this line
  });

  if (filteredMinisters.length > 0) {
    // card create if condition
    filteredMinisters.forEach((minister) => {
      // for each function this line use this check for minister name ;
      const card_div = createMinisterCard(minister); // already card create this card call this line
      searchResults.appendChild(card_div); // return value append
    });
  } else {
    const li = document.createElement("li"); // this is not found code
    li.textContent = "No results found.";
    searchResults.appendChild(li);
  }
  e.preventDefault();
});
