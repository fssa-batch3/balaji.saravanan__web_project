//    register starts


const form = document.getElementById("register");

const f_name = document.getElementById("first_name");

const l_name = document.getElementById("last_name");

const mobilenumber = document.getElementById("mobile_number");

const regemail = document.getElementById("regemail");

const regpassword = document.getElementById("regpassword");



const registerFromValidation = () => {
    let record = [];

    const user_data = JSON.parse(localStorage.getItem("users")) ?? record;

    const f_name_value = f_name.value.trim();
    const l_name_value = l_name.value.trim();
    const mobile_value = mobilenumber.value.trim();
    const regemail_value = regemail.value.trim();
    const regpassword_value = regpassword.value.trim();

    if (!f_name_value || !l_name_value || !mobile_value || !regemail_value || !regpassword_value) {

        alert("Please Fill All Required Field");
    }

    const email_check = user_data.filter(obj => obj.email == regemail_value || obj.mobile == mobile_value);


    if (email_check.length >= 1) {
        alert("Email Already Exist or Phone Number Already exist");

    }
    else {
        const user = {}

        user["f_name"] = f_name_value,
            user["l_name"] = l_name_value,
            user["mobile"] = mobile_value,
            user["email"] = regemail_value,
            user["password"] = regpassword_value;


        user_data.push(user);

        localStorage.setItem("users", JSON.stringify(user_data));
        alert("Successfully Registered")
        form.reset();
    }


}



form.addEventListener("submit", (e) => {
    e.preventDefault();
    registerFromValidation();
});


//    login starts

const checkform = document.getElementById("checkregister");

const username = document.getElementById("username");

const password = document.getElementById("password");



const checkregisterFromValidation = () => {


    const user_data = JSON.parse(localStorage.getItem("users"));

    const username_value = username.value.trim();
    const password_value = password.value.trim();


    if (!username_value || !password_value) {

        alert("Please Fill All Required Field");

    }

    const email_check = user_data.filter(obj => obj.email == username_value && obj.password == password_value)

    if (email_check.length >= 1) {

        let profile_email = username_value;

        console.log(profile_email);

        localStorage.setItem("profile_email", profile_email);
        window.location.href = "pages/home/home.html"
        alert("Successfully Login");

        checkform.reset();




    } else {
        alert("Email or Password Incorrect");
    }

}



checkform.addEventListener("submit", (e) => {
    e.preventDefault();
    checkregisterFromValidation();
});





const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});