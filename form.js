// FormSubmit API - Envio de formularios a gmail a traves de la API FormSubmit
let submit = document.getElementById("sub-form");

submit.addEventListener("click", (e) => {
  let inputVal = e.target.form[0].value;
  e.target.form.action += inputVal;
});

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
