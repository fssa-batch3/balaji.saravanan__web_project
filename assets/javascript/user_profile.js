// this is local storage get iteem i get value form local storage

const users = JSON.parse(localStorage.getItem('users')) ?? [];

const profile_check = localStorage.getItem("profile_email");   // this is checking purpuse

const user = users.find(user => user.email === profile_check);    // i check user profife beacuse this is condition

if (user) {
    document.getElementById("first_name").value = user.first_name;
    document.getElementById("last_name").value = user.last_name;
    document.getElementById("mobile").value = user.mobile_number;
    document.getElementById("email").value = user.email;
}




const editButton = document.getElementById("edit");   // this all set values is button values
const saveButton = document.getElementById("profile_user")
const inputs = document.querySelectorAll("input");    // this is input field select purpase code
const deleteButton = document.getElementById("delete");

editButton.addEventListener("click", e => {
    e.preventDefault();
    // edit button function you can press edit button this code activate and enable the input button
    inputs.forEach(input => {
        if (input.type == "email") {
            input.disabled = true;
        } else {
            input.disabled = false;
        }
    });


    editButton.disabled = true;

    saveButton.disabled = false;

});


saveButton.addEventListener("submit", e => {    // save button function this button save the values of user object


    inputs.forEach(input => {
        input.disabled = true;
    });


    editButton.disabled = false;
    saveButton.disabled = true;

    user.first_name = document.getElementById("first_name").value;
    user.last_name = document.getElementById("last_name").value;
    user.mobile_number = document.getElementById("mobile").value;
    let addres_value = {

        address: document.getElementById("age").value,
        occuption: document.getElementById("occupation").value,
        city: document.getElementById("city").value,
        gender: document.getElementById("gender").value
    }
    user.address = addres_value;
    localStorage.setItem('users', JSON.stringify(users));

    e.preventDefault();

});




deleteButton.addEventListener("click", function (e) {                   // this isdelete button user want delete user pres and account delete 
    const index = users.findIndex(user => user.email === profile_check);// thisis frofile check and delete

    if (index !== -1) {     // this is condition not equal to -one 


        localStorage.removeItem("profile_email");

        localStorage.setItem('users', JSON.stringify(users));   // this is object all of the resotre the collect annother value.

        window.location.href = "../../index.html";

        alert("User deleted successfully.");

    }
    e.preventDefault();
});


