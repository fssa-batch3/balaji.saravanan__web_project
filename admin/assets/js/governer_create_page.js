const leaderForm = document.getElementById("leader-form");

const registerFromValidation = async () => {

  const governer_data = JSON.parse(localStorage.getItem("governer_details")) ?? [];

  const img_url = document.getElementById("url").value;

  const tamil_name = document.getElementById("tname").value;

  const position = document.getElementById("position").value;

  const movie = document.getElementById("movie_radio").value;

  const movie_description = document.getElementById("description").value;

  const politics = document.getElementById("politics_radio").value;

  const politics_description = document.getElementById("description1").value;

  const income = document.getElementById("income_radio").value;

  const income_description = document.getElementById("description2").value;

  const birth = document.getElementById("birth_radio").value;

  const birth_description = document.getElementById("description3").value;

  const education = document.getElementById("education_radio").value;

  const education_description = document.getElementById("description4").value;

  const family = document.getElementById("family_radio").value;

  const family_description = document.getElementById("description5").value;

  const from_date = document.getElementById("date_f").value;

  const to_date = document.getElementById("date_t").value;

  const experiance = document.getElementById("experiance").value;

  const state = document.getElementById("state").value;

  const governer = {
    governor_name: tamil_name,

    img: {
      source: img_url,
      alter: tamil_name,
    },

    position,
    movie: {
      name: movie,
      description: movie_description,
    },

    politics: {
      name: politics,
      description: politics_description,
    },

    income: {
      name: income,
      description: income_description,
    },
    birth: {
      name: birth,
      description: birth_description,
    },
    family: {
      name: family,
      description: family_description,
    },
    education: {
      name: education,
      description: education_description,
    },

    id: governer_data.length + 1,

    status: true,

    from: from_date,

    to: to_date,

    experiance,

    state,

  };

  governer_data.push(governer);

  localStorage.setItem("governer_details", JSON.stringify(governer_data));

  // Translate the manifesto values to English

  const targetLanguage = "en"; // translate to English

  const governer_json_english = {};

  for (const [key, value] of Object.entries(governer)) {

    if (typeof value === "string") {

      const translateUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLanguage}&dt=t&q=${value}`;

      const response = await fetch(translateUrl);

      const data = await response.json();

      const translatedText = data[0][0][0]; // get the translated text from the API response
      governer_json_english[key] = translatedText; // update the manifesto values object with the translated text

    }

    else if (typeof value === "object" && value !== null) { // Check if the value is an object and not null
      const translatedValue = {};

      for (const [key2, value2] of Object.entries(value)) {
        if (key2 === "description") { // Check if the key is "description"

          const translateUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLanguage}&dt=t&q=${value2}`;

          const response = await fetch(translateUrl);
          const data = await response.json();

          const translatedText = data[0][0][0]; // get the translated text from the API response
          translatedValue[key2] = translatedText; // update the translated value object with the translated text
        } else {
          translatedValue[key2] = value2;

        }

      }

      governer_json_english[key] = translatedValue;

    } else {

      governer_json_english[key] = value;

    }
  }

  // Store the translated manifesto data in local storage
  const governer_json = JSON.parse(localStorage.getItem("governer_details_english")) ?? [];
  governer_json_english.id = governer_json.length;
  governer_json.push(governer_json_english);
  localStorage.setItem("governer.details_english", JSON.stringify(governer_json));

  // Reset the form and display a success message
  document.getElementById("leader-form").reset();
  alert("Manifesto created successfully!");
};

leaderForm.addEventListener("submit", (event) => {
  event.preventDefault();
  registerFromValidation();
});