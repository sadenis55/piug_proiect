// Functie pentru validarea numelui
function validateNume(nume) {
  // Regex pentru a verifica daca numele contine doar litere
  const regexNume = /^[a-zA-Z]+$/;

  if (!regexNume.test(nume)) {
    alert("Numele trebuie sa contina doar litere!");
    return false;
  }

  return true;
}

// Functie pentru validarea prenumelui
function validatePrenume(prenume) {
  // Regex pentru a verifica daca prenumele contine doar litere
  const regexPrenume = /^[a-zA-Z]+$/;

  if (!regexPrenume.test(prenume)) {
    alert("Prenumele trebuie sa contina doar litere!");
    return false;
  }

  return true;
}

// Functie pentru validarea numarului de telefon
function validateTelefon(telefon) {
  // Regex pentru a verifica daca numarul de telefon este format corect
  const regexTelefon1 = /^[\d\+\- ]+$/;
  const regexTelefon2 = /^\d{10}$/;

  if (!regexTelefon1.test(telefon)) {
    alert(
      "Numarul de telefon trebuie sa contina doar cifre, semne plus sau minus si spatii!"
    );
    return false;
  }

  if (!regexTelefon2.test(telefon)) {
    alert("Numărul de telefon trebuie să aibă 10 cifre!");
    return false;
  }

  return true;
}

function validateEmail(email) {
  const regexEmail = /^[\w-.]+@[\w-.]+\.[a-z]{2,3}$/; // Expresie regulată pentru format email
  if (!regexEmail.test(email)) {
    alert("Adresa de email este invalidă!");
    return false;
  }
  return true;
}

// Functie pentru gestionarea evenimentului de submit
function handleSubmit(event) {
  event.preventDefault(); // Previne trimiterea automata a formularului

  const nume = document.getElementById("nume").value;
  const prenume = document.getElementById("prenume").value;
  const telefon = document.getElementById("telefon").value;
  const email = document.getElementById("email").value;

  // Valideaza campurile
  if (!validateNume(nume)) {
    return;
  }

  if (!validatePrenume(prenume)) {
    return;
  }

  if (!validateEmail(email)) {
    return;
  }

  if (!validateTelefon(telefon)) {
    return;
  }

  // Formularul este valid, trimite datele
  alert("Formularul a fost trimis cu succes!");

  // Opțional: trimite datele către un server sau le procesează local
}

function handleSubmitNewsletter(event)
{
    event.preventDefault();
    const emailnews = document.getElementById("newsemail").value;
    if(!validateEmail(emailnews)) {
        return;
    }
    alert("Ai fost abonat la newsletter");
}

// Adauga event listener la butonul de submit
const submitButton = document.getElementById("submitButton");
const newsSubmitButton = document.getElementById("newssubmit");

submitButton.addEventListener("click", handleSubmit);
newsSubmitButton.addEventListener("click", handleSubmitNewsletter);