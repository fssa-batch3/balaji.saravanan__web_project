const leaderForm = document.getElementById("leader-form");

const registerFromValidation = async () => {
  const mla_list = JSON.parse(localStorage.getItem("mla_ditails")) ?? [];

  const constituency_Name = document.getElementById("constituency_Name").value;

  const img_url = document.getElementById("url").value;

  const tamil_name = document.getElementById("tname").value;

  const position = document.getElementById("position").value;

  const role = document.getElementById("role").value;

  const party_name = document.getElementById("party_name").value;

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

  const experiance = document.getElementById("experiance").value;

  const votes = parseFloat(document.getElementById("votes").value);

  const margin = parseFloat(document.getElementById("margin").value);

  const vote_rate = (margin / votes) * 100;

  const leaderdata = {
    constituency_Name,

    candidate_Name: tamil_name,

    img: {
      source: img_url,
      alter: tamil_name,
    },
    position,

    role,
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
    party: party_name,

    mla_id: mla_list.length,

    status: true,

    votes,

    margin,

    vote_Rate: vote_rate,

    experiance,
  };

  mla_list.push(leaderdata);
  localStorage.setItem("mla_ditails", JSON.stringify(mla_list));



  // Translate the manifesto values to English

  const targetLanguage = "en"; // translate to English

  const mla_json_english = {};

  for (const [key, value] of Object.entries(leaderdata)) {

    if (typeof value === "string") {

      const translateUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLanguage}&dt=t&q=${value}`;

      const response = await fetch(translateUrl);

      const data = await response.json();

      const translatedText = data[0][0][0]; // get the translated text from the API response
      mla_json_english[key] = translatedText; // update the manifesto values object with the translated text

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

      mla_json_english[key] = translatedValue;

    } else {

      mla_json_english[key] = value;

    }
  }

  // Store the translated manifesto data in local storage
  const governer_json = JSON.parse(localStorage.getItem("mla_details_english")) ?? [];
  mla_json_english.id = governer_json.length;
  governer_json.push(mla_json_english);
  localStorage.setItem("mla_details_english", JSON.stringify(governer_json));

  // Reset the form and display a success message
  document.getElementById("leader-form").reset();
  alert("Mla create created successfully!");
};
leaderForm.addEventListener("submit", (event) => {
  event.preventDefault();
  registerFromValidation();
});
