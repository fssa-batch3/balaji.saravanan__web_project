

const minister_values = JSON.parse(localStorage.getItem("politician_data"));

// const delete_button1 = document.getElementById("deleteButton");


// let card_div;

// let imgBx_div;

// let image5;

// let contentBx;

// let title;

// let size_div;

// let name;

// let position;

// let role_name;

// let anchor5;

// let edit_button;

// let delete_button;


// for (let minister of minister_values) {

//     //card_div
//     card_div = document.createElement("div");
//     card_div.setAttribute("class", "card");



//     //imgBx_div

//     imgBx_div = document.createElement("div");
//     imgBx_div.setAttribute("class", "imgBx");
//     card_div.append(imgBx_div);





//     //image
//     image5 = document.createElement("img");
//     image5.setAttribute("src", minister["img"]["sourse"]);
//     image5.setAttribute("alt", minister["img"]["alter"]);
//     imgBx_div.append(image5);

//     //contentBx
//     contentBx = document.createElement("div");
//     contentBx.setAttribute("class", "contentBx");
//     card_div.append(contentBx);


//     //title
//     title = document.createElement("p");
//     title.innerText = "பெயர் : " + minister.name["tname"];
//     contentBx.append(title);

//     //size_div
//     size_div = document.createElement("div");
//     size_div.setAttribute("class", "size");
//     contentBx.append(size_div);

//     //name
//     name = document.createElement("h3");
//     name.innerText = "NAME : " + minister.name["ename"];
//     size_div.append(name);

//     //position
//     position = document.createElement("div");
//     position.setAttribute("class", "color");
//     contentBx.append(position);

//     //role_name
//     role_name = document.createElement("h3");
//     role_name.innerText = "பதவி : " + minister["position"];
//     position.append(role_name);


//     // delete_button = document.createElement("a");
//     // delete_button.setAttribute("id", "deleteButton");
//     // delete_button.setAttribute("href", "../admin/delete_politician.html?name=" + minister.name.ename + "&data=" + encodeURIComponent(JSON.stringify(minister)));
//     // delete_button.innerText = "delete";
//     // contentBx.append(delete_button);

//     // Create the delete button
//     // Create the delete button
//     // Create the delete button
//     delete_button = document.createElement("a");
//     delete_button.setAttribute("id", "deleteButton");
//     delete_button.innerText = "delete";

//     // Add the onclick event to the delete button
//     delete_button.onclick = function () {
//         // Get the name of the minister to delete
//         const name = this.parentElement.querySelector(".name").textContent();

//         // Call the deleteButton function with the name as argument
//         deleteButton(name);
//     };

//     // Add the delete button to the content box
//     contentBx.append(delete_button);

//     // Function to handle the delete action
//     function deleteButton(name) {
//         // Find the index of the minister to delete
//         const index = minister_values.findIndex(minister => minister.name.ename === name);

//         // Remove the minister from the minister_values array
//         minister_values.splice(index, 1);

//         // Update localStorage with the modified array
//         localStorage.setItem("politician_data", JSON.stringify(minister_values));

//         // Show a success message to the user
//         // Notify.success("Product Deleted");
//         alert("delete success fully");

//         // Reload the current page to reflect the changes
//         window.location.reload();
//     }



//     //anchor
//     anchor5 = document.createElement("a");
//     anchor5.setAttribute("href", "../portfolio/profile/profile.html?name=" + minister.name["ename"]);
//     anchor5.innerText = "vief port folio"
//     contentBx.append(anchor5);



//     document.querySelector("div.lists1").append(card_div)
// }

// const deleteButton = document.getElementById("deleteButton");

// <td onclick="deleteButton(${index})"><i class="fa-solid fa-trash"></i></td>
// function deleteButton(index) {

//     created_products.splice(index, 1);

//     localStorage.setItem("product_list", JSON.stringify(created_products));

//     Notify.success("Product Deleted");

//     self.location.assign(window.location);

// }


// deleteButton.onclick = function () {
//     const confirmed = confirm("Are you sure you want to delete this leader?");
//     if (!confirmed) {
//         return false; // prevent the default behavior of following the link
//     }
// }
// const deleteButton= document.getElementById("deleteButton")
// const urlParams = new URLSearchParams(window.location.search);
//         const username = urlParams.get("name");

// delete_button.addEventListener("click", function (e) {                   // this isdelete button user want delete user pres and account delete 
//     let index =minister_values.findIndex(user=>user.name.ename===username);// thisis frofile check and delete

//     if (index !== -1) {     // this is condition not equal to -one 

//         users = [...users.slice(0, index), ...users.slice(index + 1)];  //slice operator

//         localStorage.setItem('politician_data', JSON.stringify(users));   // this is object all of the resotre the collect annother value.

//         window.location.href = "../../index.html";

//         alert("User deleted successfully.");

//     }
//     e.preventDefault();
// });


// // Get the modal
// const modal = document.getElementById("editModal");

// // Get the <span> element that closes the modal
// const span = document.getElementsByClassName("close")[0];

// // Get the form and input elements
// const form = document.querySelector("form");
// const nameInput = document.getElementById("name");
// const positionInput = document.getElementById("position");

// // Add an event listener to the edit button
// edit_button.addEventListener("click", function () {
//     // Set the initial values of the form inputs to the current values of the card
//     nameInput.value = minister.name["tname"];
//     positionInput.value = minister["position"];

//     // Show the modal
//     modal.style.display = "block";
// });

// // When the user clicks on <span> (x), close the modal
// span.addEventListener("click", function () {
//     modal.style.display = "none";
// });

// When






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




// searchInput.addEventListener("input", function () {
//     const searchTerm = searchInput.value.trim().toLowerCase();
//     searchResults.innerHTML = '';
//     let hasResults = false;

//     for (let i = 0; i < minister_name.length; i++) {
//         const minister = minister_name[i];
//         const ministerName = minister.ename.trim().toLowerCase();

//         if (ministerName.includes(searchTerm)) {
//             const card_div = createMinisterCard(minister);
//             searchResults.appendChild(card_div);
//             hasResults = true;
//         }
//     }

//     if (!hasResults) {
//         const li = document.createElement("li");
//         li.textContent = "No results found.";
//         searchResults.appendChild(li);
//     }
// });




// function createMinisterCard(minister, searchTerm) {
//     const card = document.createElement("div");
//     card.setAttribute("class", "card");

//     const name = document.createElement("h2");
//     name.textContent = minister.ename;
//     card.appendChild(name);

//     const position = document.createElement("p");
//     position.textContent = minister.position;
//     card.appendChild(position);

//     const searchTermElem = document.createElement("p");
//     searchTermElem.textContent = "Search term: " + searchTerm;
//     card.appendChild(searchTermElem);

//     return card;
// }



searchInput.addEventListener("input", function (e) {
    const searchTerm = searchInput.value.trim().toLowerCase();
    searchResults.innerHTML = '';

    if (searchTerm === "") {
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
    window.location.href = "../portfolio/profile/profile.html";
})





// function deleteButton(minister) {
//     // Find the index of the minister to delete
//     const index = minister_values.findIndex(m => m.name.ename === minister.name.ename);

//     // Remove the minister from the minister_values array
//     minister_values.splice(index, 1);

//     // Update localStorage with the modified array
//     localStorage.setItem("politician_data", JSON.stringify(minister_values));

//     // Show a success message to the user
//     const conform= confirm("Successfully deleted minister: " + minister.name.ename);

//     // Reload the current page to reflect the changes
//     window.location.reload();
// }
// function deleteButton(ministerCard) {
//     // Find the parent element of the minister card
//     const parent = ministerCard.card_div;

//     // Remove the minister card from the parent element
//     parent.removeChild(ministerCard);

//     // Show a success message to the user
//     const conform = confirm("Successfully deleted minister.");

//     // You can still update the localStorage with the modified array if needed
//     // localStorage.setItem("politician_data", JSON.stringify(minister_values));
// }

