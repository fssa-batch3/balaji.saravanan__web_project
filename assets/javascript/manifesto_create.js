const menifesto_form = document.getElementById("menifesto_form");

const createmenifesto = () => {
    // Get the existing manifesto data from local storage
    let menifesto_data = JSON.parse(localStorage.getItem("menifesto_data")) ?? [];

    // Get the values of the form inputs
    const title = document.getElementById("menifest_title").value;
    const stage = document.getElementById("status_stage").value;
    const category = document.getElementById("category").value;
    const status = document.getElementById("mainfesto-status").value;

    // Create a new manifesto object with a unique ID
    const newManifesto = {
        id: menifesto_data.length,
        title,
        stage,
        category,
        status,
        delete: true,
        time: new Date().getTime()
    };

    // Add the new manifesto object to the existing manifesto data

    menifesto_data.push(newManifesto);

    // Store the updated manifesto data in local storage
    
    localStorage.setItem("menifesto_data", JSON.stringify(menifesto_data));

    // Reset the form
    document.getElementById("menifesto_form").reset();
};


menifesto_form.addEventListener("submit", e => {

    e.preventDefault(); // prevent default form submission behavior
    createmenifesto();

    window.location.href="../admin/manifesto_listpage.html"
});
