// const { stringify } = require("uuid");

const leaderForm = document.getElementById("leader-form");

const registerFromValidation = () => {

    let ministersData = JSON.parse(localStorage.getItem("politician_data")) ?? [];

    let governer_data = JSON.parse(localStorage.getItem("governer_data")) ?? [];


    const img_url = document.getElementById("url").value;

    const tamil_name = document.getElementById("tname").value;

    const english_name = document.getElementById("ename").value;

    const position = document.getElementById("position").value;

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

    const from_date = document.getElementById("date_f").value;

    const to_date = document.getElementById("date_t").value;

    const experiance=document.getElementById("experiance").value;


    const leaderdata = {
        name: {
            tname: tamil_name,
            ename: english_name,
        },
        img: {
            source: img_url,
            alter: english_name,
        },
        position: position,
        movie: {
            name: movie,
            description: movie_description
        },
        politics: {
            name: politics,
            description: politics_description
        },
        income: {
            name: income,
            description: income_description
        },
        birth: {
            name: birth,
            description: birth_description
        },
        family: {
            name: family,
            description: family_description
        },
        education: {
            name: education,
            description: education_description
        },
        party_name: party_name,

        id: ministersData.length,

        status: true,

        from_date: from_date,

        to_date: to_date,
        
        experiance:experiance
    };

    if (position === "GOVERNER") {
        governer_data.push(leaderdata);
        localStorage.setItem("governer_data", JSON.stringify(governer_data));
        alert("governer list created successfully!");
        window.location.href = "../portfolio/potfolio.html";
    } else {
        ministersData.push(leaderdata);
        localStorage.setItem("politician_data", JSON.stringify(ministersData));
        alert("Leader created successfully!");
        window.location.href = "../portfolio/potfolio.html";
    }



};

leaderForm.addEventListener("submit", (event) => {
    event.preventDefault();
    registerFromValidation();
});
