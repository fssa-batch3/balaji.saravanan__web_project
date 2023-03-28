
const leaderForm = document.getElementById("leader-form");

const registerFromValidation = () => {

    let ministersData = JSON.parse(localStorage.getItem("politician_data")) ?? [];

    const img_url = document.getElementById("url").value;
    const tamil_name = document.getElementById("tname").value;
    const english_name = document.getElementById("ename").value;
    const position = document.getElementById("position").value;
    const description = document.getElementById("describe").value;
    const party_name = document.getElementById("party_name").value;

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
        description: description,
        party_name: party_name,
        id: ministersData.length,
        status: true
    };

    ministersData.push(leaderdata);

    localStorage.setItem("politician_data", JSON.stringify(ministersData));

    alert("Leader created successfully!");

    window.location.href = "../portfolio/potfolio.html";
};

leaderForm.addEventListener("submit", (event) => {
    event.preventDefault();
    registerFromValidation();
});
