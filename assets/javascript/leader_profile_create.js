
const leaderForm = document.getElementById("leader-form");
// const urlParams = new URLSearchParams(window.location.search);
// const username = urlParams.get("name");
// let found = false;

// function updateLeader(e) {
//     const findminister = ministersData.find(function (leader) {
//         if (username === leader.name.ename) {
//             found = true;
//             return true;
//         }
//     });
//     if (found) {
//         document.getElementById("url").value = findminister.img.source;
//         document.getElementById("tname").value = findminister.name.tname;
//         document.getElementById("ename").value = findminister.name.ename;
//         document.getElementById("position").value = findminister.position;
//         document.getElementById("describe").value = findminister.description;
//         document.getElementById("party_name").value = findminister.party_name;
//     }
// }

// if (){
    // updateLeader()
// createLeader();

// } 
// else {
//     
// }

// function createLeader() {
    const registerFromValidation = () =>  {
        // e.preventDefault();

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
            status:true
        };
        let ministersData = JSON.parse(localStorage.getItem("politician_data")) ?? [];

        ministersData.push(leaderdata);

        localStorage.setItem("politician_data", JSON.stringify(ministersData));


        alert("Leader created successfully!");

        window.location.href = "../portfolio/potfolio.html";

    };
// }
leaderForm.addEventListener("submit", e => {

e.preventDefault();

registerFromValidation();
});

// leaderForm.addEventListener("submit", function (e) {
//     e.preventDefault();
//     if (found) {
//         const updatedMinisters = ministersData.map(function (leader) {
//             if (username === leader.name.ename) {
//                 return {
//                     name: {
//                         tname: document.getElementById("tname").value,
//                         ename: document.getElementById("ename").value,
//                     },
//                     img: {
//                         source: document.getElementById("url").value,
//                         alter: "",
//                     },
//                     position: document.getElementById("position").value,
//                     description: document.getElementById("describe").value,
//                     party_name: document.getElementById("party_name").value,
//                     status: found
//                 };
//             } else {
//                 return leader;
//             }
//         });

//         localStorage.setItem("politician_data", JSON.stringify(updatedMinisters));

//         alert("Leader updated successfully!");
//         window.location.href = "../portfolio/potfolio.html";
    // }
// });

