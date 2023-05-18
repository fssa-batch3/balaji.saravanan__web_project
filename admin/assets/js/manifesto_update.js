const popup = document.getElementById("menifesto_popup");

const closeBtn = document.getElementById("closeBtn");

closeBtn.addEventListener("click", () => {
  popup.style.display = "none"; // hide the manifesto popup
});

const manifesto = JSON.parse(localStorage.getItem("manifesto_data")) ?? [];

// const manifesto_value =JSON.parse(localStorage.getItem("manifesto_data")) ?? [];
let manifestoId = null;

const menifestoForm = document.getElementById("menifesto_form");
console.log();

function updateMenifesto(manifesto_v) {
  // Set form values to current leader data
  document.getElementById("manifesto_title").value = manifesto_v.title;
  document.getElementById("status_stage").value = manifesto_v.stage;
  document.getElementById("category").value = manifesto_v.category;
  document.getElementById("manifesto-status").value = manifesto_v.status;
  manifestoId = manifesto_v.id;

  console.log(manifestoId);
}

function handleSubmit(e) {
  e.preventDefault();
  const title = document.getElementById("manifesto_title").value;
  const stage = document.getElementById("status_stage").value;
  const category = document.getElementById("category").value;
  const status = document.getElementById("manifesto-status").value;
  const time = new Date().getTime();
  // const id=;
  // console.log(id)

  const menifesto = {
    title,
    stage,
    catogery: category,
    status,
    time,
    delete: false,
    id: manifestoId,
  };

  // Find index of current leader in ministersData
  const index = manifesto.findIndex(
    (menifesto5) => menifesto5.id === manifestoId
  );

  // If leader is found, update their data and save to localStorage
  if (index !== -1) {
    manifesto[index] = menifesto;

    alert("menifesto updated successfully!");
    localStorage.setItem("manifesto_data", JSON.stringify(manifesto));

    loadPastLeaders();

    document.getElementById("menifest_title").value = "";
  }
}

// Add event listener to form submission
menifestoForm.addEventListener("submit", handleSubmit);

function deleteLeader(menifesto1) {
  const menifesto_value =
    JSON.parse(localStorage.getItem("manifesto_data")) ?? [];

  const index = menifesto_value.findIndex(
    (manifesto) => manifesto.title === menifesto1.title
  );

  // If leader is found, update their status to false and save to localStorage
  if (index !== -1) {
    menifesto_value[index].delete = true;
    localStorage.setItem("manifesto_data", JSON.stringify(menifesto_value));
    alert("manifesto delete successfully!");
    loadPastLeaders()
  }
}



function loadPastLeaders() {
  manifesto.forEach((menifesto_value) => {
    // Create the accordion container element
    const accordion = document.createElement("div");
    accordion.setAttribute("id", "accordion-1");

    // Create the head element
    const head = document.createElement("div");
    head.setAttribute("class", "head");

    // Create the h2 element
    const h2 = document.createElement("h2");
    h2.textContent = menifesto_value.title;
    head.appendChild(h2);

    // Create the arrow icon element
    const arrow = document.createElement("i");
    arrow.setAttribute("class", "fas fa-angle-down arrow");
    head.appendChild(arrow);

    const content = document.createElement("div");
    content.setAttribute("class", "content");
    content.style.display = "none"; // hide content by default

    const paragraph = document.createElement("p");
    paragraph.textContent = menifesto_value.stage;

    const button = document.createElement("button");
    button.innerText = menifesto_value.status;

    content.appendChild(paragraph);
    content.appendChild(button);

    const updateButton = document.createElement("button");
    // updateButton.setAttribute('class', 'arrow');
    updateButton.innerHTML = "update";
    updateButton.onclick = function update() {

      updateMenifesto(menifesto_value);
    };
    content.appendChild(updateButton);

    const deleteButton = document.createElement("button");
    // delete4.setAttribute('class', 'arrow');
    deleteButton.innerHTML = "delete";
    deleteButton.onclick = function () {

      deleteLeader(menifesto_value);
    };
    content.appendChild(deleteButton);

    // Append the head and content elements to the accordion
    accordion.appendChild(head);
    accordion.appendChild(content);

    // Add the accordion to the document
    document.querySelector(".container").append(accordion);

    // Add click functionality to the accordion
    head.addEventListener("click", () => {
      if (content.style.display === "none") {
        content.style.display = "block";
        arrow.classList.remove("fa-angle-down");
        arrow.classList.add("fa-angle-up");
      } else {
        content.style.display = "none";
        arrow.classList.remove("fa-angle-up");
        arrow.classList.add("fa-angle-down");
      }
    });
  });
}

window.onload = function () {
  loadPastLeaders();
};
