
const manifestoForm = document.getElementById("manifesto_form");

const createManifesto = () => {
  // Get the existing manifesto data from local storage
  const manifestoData = JSON.parse(localStorage.getItem("manifesto_data")) ?? [];

  // Get the values of the form inputs
  const title = document.getElementById("manifesto_title").value;
  const stage = document.getElementById("status_stage").value;
  const category = document.getElementById("category").value;
  const status = document.getElementById("manifesto-status").value;

  // Create a new manifesto object with a unique ID
  const manifesto_values = {
    id: manifestoData.length,
    title,
    stage,
    category,
    status,
    delete: false,
    time: new Date().getTime()
  };

  manifestoData.push(manifesto_values)

  alert("ooooooooooooooooooooo")
  localStorage.setItem("manifesto_data", JSON.stringify(manifestoData));

  window.location.href = "../admin/manifesto_listpage.html";
  document.getElementById("manifesto_form").reset();
};

manifestoForm.addEventListener("submit", e => {
  e.preventDefault(); // prevent default form submission behavior
  createManifesto();
});