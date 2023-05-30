const minister_values_search = JSON.parse(localStorage.getItem("politician_data"));

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

  const filteredMinisters = minister_values_search.filter((minister) => {
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
