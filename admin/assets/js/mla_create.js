const leaderForm = document.getElementById("leader-form");

const registerFromValidation = () => {
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
  alert("Leader created successfully!");
  window.location.href = "../profile_list_page.html";
};
leaderForm.addEventListener("submit", (event) => {
  event.preventDefault();
  registerFromValidation();
});
