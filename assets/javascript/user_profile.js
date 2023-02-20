// this is local storage get iteem i get value form local storage

let users = JSON.parse(localStorage.getItem('users'));

let profile_check = localStorage.getItem("profile_email");   // this is checking purpuse

let user = users.find(user => user.email === profile_check);    // i check user profife beacuse this is condition

if (user) {
    document.getElementById("first_name").value = user.first_name;
    document.getElementById("last_name").value = user.last_name;
    document.getElementById("mobile").value = user.mobile_number;
    document.getElementById("email").value = user.email;
}



let editButton = document.getElementById("edit");   // this all set values is button values
let saveButton = document.getElementById("save")
let inputs = document.querySelectorAll("input");    // this is input field select purpase code
let deleteButton = document.getElementById("delete");

editButton.addEventListener("click", e => {         // edit button function you can press edit button this code activate and enable the input button
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

saveButton.addEventListener("click", e => {    // save button function this button save the values of user object
    inputs.forEach(input => {
        input.disabled = true;
    });
    editButton.disabled = false;
    saveButton.disabled = true;
    user.first_name = document.getElementById("first_name").value;
    user.last_name = document.getElementById("last_name").value;
    user.mobile_number = document.getElementById("mobile").value;
    user.address = document.getElementById("address").value;
    user.pin_code = document.getElementById("pin_code").value;
    user.city = document.getElementById("city").value;
    user.gender = document.getElementById("gender").value;
    localStorage.setItem('users', JSON.stringify(users));
});

deleteButton.addEventListener("click", e => {                   // this isdelete button user want delete user pres and account delete 
    let index = users.findIndex(user => user.email === profile_check);// thisis frofile check and delete

    if (index !== -1) {     // this is condition not equal to -one 

        users = [...users.slice(0, index), ...users.slice(index + 1)];  //slice operator

        localStorage.setItem('users', JSON.stringify(users));   // this is object all of the resotre the collect annother value.

        window.location.href = "../../index.html";

        alert("User deleted successfully.");
    }
});