// FormSubmit API - Envio de formularios a gmail a traves de la API FormSubmit
const form = document.getElementById("form-api");
const email = document.getElementById("inputEmail");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = email.value.trim();

  if (!email || !isValidEmail(email)) {
    email.focus();
    return;
  }
  form.action = `${form.action}${email}`;
  form.submit();
});

function isValidEmail(email) {
  const emailRegex =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  return emailRegex.test(email);
}
// form validator
const contactForm = $("#contact-form");
const nameInput = $("#name");
const emailInput = $("#email");
const phoneInput = $("#phone");
const messageInput = $("#message");
const submitBtn = $("#btn-submit");

// previene al form de hacer enviar el formulario
$("#contact-form").submit(function (event) {
  // prevent the default form submission
  event.preventDefault();
});

submitBtn.click(function () {
  const nameValue = nameInput.val();
  const emailValue = emailInput.val();
  const phoneValue = phoneInput.val();
  const messageValue = messageInput.val();

  if (!nameValue.match(/^[a-zA-ZáéíóúñÑÁÉÍÓÚ]{5,}$/)) {
    nameInput.css("outline", "1px solid red");
    nameInput.focus();
  } else nameInput.css("outline", "1px solid green");

  if (
    !emailValue.match(
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    )
  ) {
    emailInput.css("outline", "1px solid red");
    emailInput.focus();
  } else emailInput.css("outline", "1px solid green");

  if (phoneValue == "" && !phoneValue.match(/^\d{7,14}$/)) {
    phoneInput.css("outline", "1px solid red");
    phoneInput.focus();
  } else phoneInput.css("outline", "1px solid green");

  if (messageValue.length < 8) {
    messageInput.css("outline", "1px solid red");
    messageInput.focus();
  } else {
    messageInput.css("outline", "1px solid green");
  }

  // si todas las validaicones pasan se envia el form
  contactForm.submit();
});

document.querySelector("close-info-container");
