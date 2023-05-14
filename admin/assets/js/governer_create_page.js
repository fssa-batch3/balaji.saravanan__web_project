const leaderForm = document.getElementById("leader-form");

const registerFromValidation = () => {
  const governer_data =
    JSON.parse(localStorage.getItem("governer_details")) ?? [];

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
  alert("Governer created successfully!");
  window.location.href = "../governer_list.html";
};

leaderForm.addEventListener("submit", (event) => {
  event.preventDefault();
  registerFromValidation();
});
