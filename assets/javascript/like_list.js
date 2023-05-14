// const users = JSON.parse(localStorage.getItem("users"));

// let login_email = localStorage.getItem("profile_email");

// let fav_list = JSON.parse(localStorage.getItem("fav_minister"));

// let user_id;

// users.find(function (obj) {
//   if (login_email == obj.email) {
//     user_id = obj.id;

//     return user_id;
//   }
// });

// let user_like_check = false;

// fav_list.find(function(obj){

//   if(user_id == obj.user_id){

//     user_like_check = true;

//   }

//   return user_like_check;

// });

// if(user_like_check){

//   fav_list.filter(function (obj){

//     if(user_id == obj.user_id){

//       list_likes(obj);

//     }
//   });

// }

// function list_likes(item) {

//   // create the elements
//   let cardDiv = document.createElement("div");
//   let cardImageDiv = document.createElement("div");
//   let cardImage = document.createElement("img");
//   let cardTitleDiv = document.createElement("div");
//   let cardTitle = document.createElement("p");

//   // set the attributes
//   cardDiv.setAttribute("class", "card");
//   cardImageDiv.setAttribute("class", "card_image");
//   cardImage.setAttribute("src", item.image.sourse);
//   cardTitleDiv.setAttribute("class", "card_title title-white");

//   // set the text content
//   cardTitle.textContent = item.name.tname;

//   // append the elements
//   cardImageDiv.appendChild(cardImage);
//   cardTitleDiv.appendChild(cardTitle);
//   cardDiv.appendChild(cardImageDiv);
//   cardDiv.appendChild(cardTitleDiv);
//   document.querySelector(".cards-list").append(cardDiv);
// }

const users = JSON.parse(localStorage.getItem("users"));

const login_email = localStorage.getItem("profile_email");

const fav_list = JSON.parse(localStorage.getItem("fav_minister"));

function list_likes(item) {
  // create the elements
  const cardLink = document.createElement("a");
  cardLink.href = "#";
  cardLink.classList.add("card");

  const cardBottom = document.createElement("div");
  cardBottom.classList.add("card-bottom");

  const cardText = document.createElement("div");
  cardText.classList.add("card-text");

  const cardContents = document.createElement("div");
  cardContents.classList.add("card-contents");

  const cardTitle = document.createElement("p");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = item.name.ename;

  const cardText2 = document.createElement("button");
  cardText2.classList.add("card-text");
  cardText2.textContent = "delete";
  cardText2.onclick = function () {
    deleteLeader(item);
  };

  cardContents.appendChild(cardTitle);
  cardContents.appendChild(cardText2);
  cardText.appendChild(cardContents);
  cardBottom.appendChild(cardText);

  const cardTop = document.createElement("div");
  cardTop.classList.add("card-top", "card1");

  const image = document.createElement("img");
  image.setAttribute("src", item.image.sourse);
  image.setAttribute("alt", item.name.ename);
  cardTop.append(image);

  cardLink.appendChild(cardBottom);
  cardLink.appendChild(cardTop);

  document.querySelector(".card-container").appendChild(cardLink);
}

function deleteLeader(minister) {
  const ministersData = JSON.parse(localStorage.getItem("fav_minister")) ?? [];

  const index = ministersData.findIndex(
    (leader) => leader.name.ename === minister.name.ename
  );

  // If leader is found, delete the object from the array and save to localStorage
  if (index !== -1) {
    ministersData.splice(index, 1);
    localStorage.setItem("fav_minister", JSON.stringify(ministersData));
    alert("Leader deleted successfully!");
    window.location.reload();
  }
}

let user_id;

users.some((obj) => {
  if (login_email === obj.email) {
    user_id = obj.id;

    return true;
  }
});

const user_like_check = fav_list.some((obj) => user_id === obj.user_id);

if (user_like_check) {
  fav_list.forEach((obj) => {
    if (user_id === obj.user_id) {
      list_likes(obj);
    }
  });
}
