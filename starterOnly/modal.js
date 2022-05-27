function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
const modalBody = document.querySelector(".modal-body");

// forms inputs
const firstname = document.getElementById("first");
const lastname = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const turnamentQuantity = document.getElementById("quantity");
const radioBtns = document.querySelectorAll("input[name='location']");
const generalTermsCheck = document.getElementById("checkbox1");

// Change checkbox1 value
generalTermsCheck.addEventListener("click", (e) => {
  e.target.value === "on" ? (e.target.value = "off") : (e.target.value = "on");
});

// hide error message in form
function hideError() {
  for (let data of formData) {
    data.setAttribute("data-error-visible", "false");
  }
}

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal form
function closeModal() {
  if (validate()) {
    return resetForm();
  }
  hideError();
  return (modalbg.style.display = "none");
}

// close modal event
closeBtn.addEventListener("click", closeModal);

// close modal and reset form
function resetForm() {
  document.querySelector("form").reset();
  document.getElementById("confirmation").classList.add("display-none");
  document.querySelector("form").classList.remove("display-none");
  hideError();
  modalbg.style.display = "none";
}

// reset and close form after validation
document
  .getElementById("close-confirmation")
  .addEventListener("click", resetForm);

// check if value has minimum x caracters
function isTwoCaracters(value) {
  return value.length >= 2;
}

// check if email is valid
function isEmailValid(value) {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
}

// check if date is valid
function isDateValid(value) {
  return new Date(value) < new Date();
}

// check if positive number
function isNumber(value) {
  return /^\d+$/.test(value);
}

// check if one radio button is checked
function radioIsChecked() {
  let radioResults = [];
  for (let radiobtn of radioBtns) {
    if (radiobtn.checked) {
      radioResults.push(radiobtn.value);
    }
  }
  return radioResults.length > 0;
}

// check if checkbox is checked
function checkboxisChecked() {
  return generalTermsCheck.value === "on";
}

// prevent submit from reload
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
});

// confirmation elements
function confirmation() {
  document.querySelector("form").classList.add("display-none");
  document.getElementById("confirmation").classList.remove("display-none");
}

// validate form inputs
function validate() {
  if (!isTwoCaracters(firstname.value)) {
    formData[0].setAttribute(
      "data-error",
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
    );
    formData[0].setAttribute("data-error-visible", "true");
    return false;
  } else if (!isTwoCaracters(lastname.value)) {
    formData[1].setAttribute(
      "data-error",
      "Veuillez entrer 2 caractères ou plus pour le champ du nom."
    );
    formData[1].setAttribute("data-error-visible", "true");
    return false;
  } else if (!isEmailValid(email.value)) {
    formData[2].setAttribute("data-error", "L'adresse email n'est pas valide.");
    formData[2].setAttribute("data-error-visible", "true");
    return false;
  } else if (!isDateValid(birthdate.value)) {
    formData[3].setAttribute("data-error", "Veuillez entrer une date valide.");
    formData[3].setAttribute("data-error-visible", "true");
    return false;
  } else if (!isNumber(turnamentQuantity.value)) {
    formData[4].setAttribute(
      "data-error",
      "Veuillez entrer un nombre pour ce champ"
    );
    formData[4].setAttribute("data-error-visible", "true");
    return false;
  } else if (!radioIsChecked()) {
    formData[5].setAttribute("data-error", "Vous devez choisir une option.");
    formData[5].setAttribute("data-error-visible", "true");
    return false;
  } else if (!checkboxisChecked()) {
    formData[6].setAttribute(
      "data-error",
      "Vous devez accepter les termes et conditions."
    );
    formData[6].setAttribute("data-error-visible", "true");
    return false;
  } else {
    confirmation();
    return true;
  }
}
