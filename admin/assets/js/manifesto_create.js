const createManifesto = () => {
  // Get the existing manifesto data from local storage
  const manifestoData =
    JSON.parse(localStorage.getItem("manifesto_data")) ?? [];

  // Get the values of the form inputs
  const title = document.getElementById("manifesto_title").value;
  const stage = document.getElementById("status_stage").value;
  const category = document.getElementById("category").value;
  const status = document.getElementById("manifesto-status").value;

  // Create a new manifesto object with a unique ID
  const timeValue = new Date().getTime(); // define timeValue and assign it the current time
  const manifesto_values = {
    id: manifestoData.length,
    title,
    stage,
    category,
    status,
    delete: false,
    time: timeValue,
  };

  manifestoData.push(manifesto_values);
  alert("ki");
  localStorage.setItem("manifesto_data", JSON.stringify(manifestoData));

  const manifesto_english =
    JSON.parse(localStorage.getItem("manifesto_data_english")) ?? [];
  const manifesto_values_en = {
    id: manifesto_english.length,
    title,
    stage,
    category,
    status,
    delete: false,
    time: timeValue,
  };

  manifesto_english.push(manifesto_values_en);
  localStorage.setItem(
    "manifesto_data_english",
    JSON.stringify(manifesto_english)
  );
  document.getElementById("manifesto_form").reset();
  alert("Manifesto created successfully!");
};

const manifestoForm = document.getElementById("manifesto_form");

manifestoForm.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent default form submission behavior
  createManifesto();
});
