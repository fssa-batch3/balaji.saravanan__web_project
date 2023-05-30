const createManifesto = async () => {
  // Get the existing manifesto data from local storage
  const manifestoData = JSON.parse(localStorage.getItem("manifesto_data")) ?? [];

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

  // Add the new manifesto object to the existing data
  manifestoData.push(manifesto_values);
  localStorage.setItem("manifesto_data", JSON.stringify(manifestoData));

  // Translate the manifesto values to English
  const targetLanguage = "en"; // translate to English
  const manifesto_values_en = {};
  for (const [key, value] of Object.entries(manifesto_values)) {
    if (typeof value === "string") {
      const translateUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLanguage}&dt=t&q=${value}`;
      const response = await fetch(translateUrl);
      const data = await response.json();
      const translatedText = data[0][0][0]; // get the translated text from the API response
      manifesto_values_en[key] = translatedText; // update the manifesto values object with the translated text
    } else {
      manifesto_values_en[key] = value;
    }
  }

  // Store the translated manifesto data in local storage
  const manifestoDataEn = JSON.parse(localStorage.getItem("manifesto_data_english")) ?? [];
  manifesto_values_en.id = manifestoDataEn.length;
  manifesto_values_en.time = timeValue;
  manifestoDataEn.push(manifesto_values_en);
  localStorage.setItem("manifesto_data_english", JSON.stringify(manifestoDataEn));

  // Reset the form and display a success message
  document.getElementById("manifesto_form").reset();
  alert("Manifesto created successfully!");
};

const manifestoForm = document.getElementById("manifesto_form");

manifestoForm.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent default form submission behavior
  createManifesto();
});
