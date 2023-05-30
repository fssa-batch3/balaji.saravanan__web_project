const root = window.location.origin;

const signUpButton = document.getElementById("signUp");

const signInButton = document.getElementById("signIn");

const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

//    register starts

const form = document.getElementById("register");

const f_name = document.getElementById("first_name");

const l_name = document.getElementById("last_name");

const mobilenumber = document.getElementById("mobile_number");

const regemail = document.getElementById("regemail");

const regpassword = document.getElementById("regpassword");

const registerFromValidation = () => {
  // this is a register page star and this store the value in localstorage

  const f_name_value = f_name.value.trim();
  const l_name_value = l_name.value.trim();
  const mobile_value = mobilenumber.value.trim();
  const reg_email_value = regemail.value.trim();
  const reg_pass_value = regpassword.value.trim();

  // empty array
  const record = [];

  // empty object
  const user = {};

  const users = JSON.parse(localStorage.getItem("users")) ?? record;

  user.first_name = f_name_value;
  user.last_name = l_name_value;
  user.mobile_number = mobile_value;
  user.email = reg_email_value;
  user.password = reg_pass_value;
  user.id = users.length;

  const isDuplicate = users.find(
    (user_v) =>
      user_v.email === reg_email_value || user_v.mobile_number === mobile_value
  );

  if (isDuplicate) {
    Notify.error("You already have an account");
  } else {
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    container.classList.remove("right-panel-active");

    Notify.success("Account created successfully");
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  registerFromValidation();
});

//    login starts

const checkform = document.getElementById("checkregister");

const username = document.getElementById("username");

const password = document.getElementById("password");

const checkregisterFromValidation = () => {
  const admin_email = "admin@gmail.com";
  const admin_password = "Admin@55";

  const user_data = JSON.parse(localStorage.getItem("users"));

  const username_value = username.value.trim();
  const password_value = password.value.trim();

  if (user_data === null) {
    Notify.error("you first sinup next you come and try");
  }
  if (admin_email === username_value && admin_password === password_value) {
    localStorage.setItem("admin_login", admin_email);
    Notify.success("admin entry");
    window.location.href = `${root}/../index.html`;
    checkform.reset();
  } else {
    const email_check = user_data.filter(
      (obj) => obj.email === username_value && obj.password === password_value
    );

    if (email_check.length === 1) {
      const profile_email = username_value;

      localStorage.setItem("profile_email", profile_email);

      window.location.href = `${root}/../index.html`;

      Notify.success("Successfully Login");

      checkform.reset();
    } else {
      Notify.error("Email or Password Incorrect");
    }
  }
};

checkform.addEventListener("submit", (e) => {
  e.preventDefault();
  checkregisterFromValidation();
});
