function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Eléments du DOM

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// Chargement de l'évènement modal

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Chargement du formulaire modal

function launchModal() {
  document.getElementById('formCloseContent').style.display = 'none';
  document.getElementById('modalClose').style.display = 'block';
  modalbg.style.display = "block";
}

// Déclaration expressions régulières à des fins de vérifications de champs

const regexName = /^[a-zA-Z0-9éè^]{2,}$/;
const regexMail = /^[a-z0-9.-_]+@[a-z0-9.-_]{2,}\.[a-z]{2,4}$/;
const regexQuantity = /^[0-9]$/;


//Validation des formats en input

//document.forms["reserve"]["first"].addEventListener("submit", function(event) { Possible si on veut une syntaxe sans ID
document.getElementById("first").addEventListener("input", function(){
  if (regexName.test(this.value) === false) {
    this.style.color = 'red';
    document.getElementById('erreurName').style.display = 'block';
    document.getElementById('erreurName').innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom !';

  }
  else if (regexName.test(this.value) === true) {
    document.getElementById('erreurName').style.display = 'none';
    this.style.border = 'unset';
    this.style.color = 'green';

  }
  else{
    document.getElementById('erreurName').style.display = 'none';
    //erreurName = ""; pour réinitialiser le contenu du message d'erreur
  }

});

document.getElementById("last").addEventListener("input", function(){
  if (regexName.test(this.value) === false) {
    this.style.color = 'red';
    document.getElementById('erreurLastName').style.display = 'block';
    document.getElementById('erreurLastName').innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du nom !';

  }
  else if (regexName.test(this.value) === true) {
    document.getElementById('erreurLastName').style.display = 'none';
    this.style.border = 'unset';
    this.style.color = 'green';
  }
  else{
    document.getElementById('erreurLastName').style.display = 'none';
    //document.getElementById('erreurLastName') = "";
  }

});

document.getElementById("email").addEventListener("input", function(){
  if (regexMail.test(this.value) === false) {
    this.style.color = 'red';
    document.getElementById('erreurMail').style.display = 'block';
    document.getElementById('erreurMail').innerHTML = 'Veuillez entrer une adresse mail valide !';

  }
  else if (regexMail.test(this.value) === true) {
    document.getElementById('erreurMail').style.display = 'none';
    this.style.border = 'unset';
    this.style.color = 'green';

  }
  else{
    document.getElementById('erreurMail').style.display = 'none';
    //document.getElementById('erreurLastName') = "";
  }

});

document.getElementById("birthdate").addEventListener("input", function(){
  if (!this.value) {
    this.style.border = '0.1rem solid red';
    document.getElementById('erreurBirth').style.display = 'block';
    document.getElementById('erreurBirth').innerHTML = 'Veuillez entrer une date !';

  }
  else if (this.value) {
    document.getElementById('erreurBirth').style.display = 'none';
    this.style.border = 'unset';

  }
  else{
    document.getElementById('erreurBirth').style.display = 'none';
    //document.getElementById('erreurLastName') = "";
  }

});

document.getElementById("quantity").addEventListener("input", function(){
  if (regexQuantity.test(this.value) === false) {
    this.style.color = 'red';
    document.getElementById('erreurQuantity').style.display = 'block';
    document.getElementById('erreurQuantity').innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du nom !';

  }
  else if (regexQuantity.test(this.value) === true) {
    document.getElementById('erreurQuantity').style.display = 'none';
    this.style.border = 'unset';
    this.style.color = 'green';

  }
  else{
    document.getElementById('erreurQuantity').style.display = 'none';
    //document.getElementById('erreurLastName') = "";
  }

});

//Validation des champs en submit

document.forms["reserve"].addEventListener("submit", function(event) {

  let error;
  let valid = true;
  let checkLocation = false;

  if (!this["checkbox"].checked) {
    error = 'Veuillez acceptez les conditions !';
    valid = false;
  }

  for (let i = 0;  i < this["location"].length; i++){
    if (this["location"][i].checked){
      checkLocation = true;
      break;
    }
  }
  if (!checkLocation) {
      error = 'Veuillez renseigner une ville !';
      valid = false;
  }
  

  for (let i = 0;  i < this.length; i++){
    if(!this[i].value){
        error = 'Veuillez renseigner tous les champs';
        this[i].style.border = '0.2rem solid red';
        valid = false;
        break;
    }
  }
  
  if (!valid) {
      event.preventDefault();
      document.getElementById('erreur').innerHTML = error;
      return false;
  }
  else {
      event.preventDefault();
      document.getElementById('modalClose').style.display = 'none';
      document.getElementById('formClose').style.display = 'none';
      document.getElementById('formCloseContent').style.display = 'flex';  
  }
});


//Contournement afin d'éviter l'utilisation de span

const crossClose = document.getElementById('formClose');
const formulaireClose = document.getElementById('bgroundClose');

crossClose.addEventListener("click", function() {
  if(formulaireClose.style.display != "none"){
    formulaireClose.style.display = "none";
  }
});

document.getElementById('closeForm').addEventListener("click", function() {
    document.forms["reserve"].submit();
});

document.getElementById('closingMessage').addEventListener("click", function() {
    document.forms["reserve"].submit();
});