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

// forms input
const firstname = document.getElementById("first");
const lastname = document.getElementById("last");
const email = document.getElementById("email");
const turnamentQuantity = document.getElementById("quantity");
const radioBtns = document.querySelectorAll("input[name='location']");
const generalTermsCheck = document.getElementById("checkbox1");

// Change checkbox1 value
generalTermsCheck.addEventListener("click", (e) => {
  e.target.value === "on" ? (e.target.value = "off") : (e.target.value = "on");
});

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// check if value has minimum x caracters
function isTwoCaracters(value) {
  return value.length >= 2;
}

// check if email is valid
function isEmailValid(value) {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
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
    return true;
  }
}
