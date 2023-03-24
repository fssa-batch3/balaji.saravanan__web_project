const users = JSON.parse(localStorage.getItem("users"));

let login_email = localStorage.getItem("profile_email");

let fav_list = JSON.parse(localStorage.getItem("fav_minister"));

let user_id;

users.find(function (obj) {
  if (login_email == obj.email) {
    user_id = obj.id;

    return user_id;
  }
});

let user_like_check = false;

fav_list.find(function(obj){

  if(user_id == obj.user_id){

    user_like_check = true;

  }
  
  return user_like_check;

});

if(user_like_check){

  fav_list.filter(function (obj){

    if(user_id == obj.user_id){

      list_likes(obj);

    }
  });

}


function list_likes(item) {

  // create the elements
  let cardDiv = document.createElement("div");
  let cardImageDiv = document.createElement("div");
  let cardImage = document.createElement("img");
  let cardTitleDiv = document.createElement("div");
  let cardTitle = document.createElement("p");

  // set the attributes
  cardDiv.setAttribute("class", "card");
  cardImageDiv.setAttribute("class", "card_image");
  cardImage.setAttribute("src", item.image.sourse);
  cardTitleDiv.setAttribute("class", "card_title title-white");

  // set the text content
  cardTitle.textContent = item.name.tname;

  // append the elements
  cardImageDiv.appendChild(cardImage);
  cardTitleDiv.appendChild(cardTitle);
  cardDiv.appendChild(cardImageDiv);
  cardDiv.appendChild(cardTitleDiv);
  document.querySelector(".cards-list").append(cardDiv);
}
