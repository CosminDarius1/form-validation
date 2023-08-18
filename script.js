const submit = document.querySelector("form");

submit.addEventListener("submit", (e) => {
  //Selecting forms
  const strRegex = /^[A-Za-zs]*$/;
  const requiredField = document.querySelector("#required-field");
  const maxLength8 = document.querySelector("#max-length-8");
  const minMax = document.querySelector("#min-length-10-max-25");
  const minMaxNotRequired = document.querySelector("#not-required");
  const lettersRequired = document.querySelector("#letters-only");
  const radioBtn = document.querySelector("#radio-1");
  //Select messages
  const requiredYes = document.querySelector("#required-yes");

  let areThereErrors = false;

  if (requiredField.value == "") {
    document.querySelector("#message-1").textContent =
      "This field requires a value";
    areThereErrors = true;
  } else {
    document.querySelector("#message-1").textContent = "";
  }
  if (maxLength8.value.length > 8) {
    document.querySelector("#message-2").textContent =
      "This field's maximum length is 8";
    areThereErrors = true;
  } else {
    document.querySelector("#message-2").textContent = "";
  }

  if (minMax.value.length < 10 || minMax.value.length > 25) {
    document.querySelector("#message-3").textContent =
      "This field required to have a minimum of 10 characters and a maximum of 25";
    areThereErrors = true;
  } else {
    document.querySelector("#message-3").textContent = "";
  }
  if (
    (minMaxNotRequired.value !== "" && minMaxNotRequired.value.length < 10) ||
    minMaxNotRequired.value.length > 25
  ) {
    document.querySelector("#message-6").textContent =
      "This field required to have a minimum of 10 characters and a maximum of 25";
    areThereErrors = true;
  } else {
    document.querySelector("#message-6").textContent = "";
  }
  if (!lettersRequired.value.match(strRegex)) {
    document.querySelector("#message-4").textContent =
      "This field requires only letters";
    areThereErrors = true;
  } else {
    document.querySelector("#message-4").textContent = "";
  }
  if (radioBtn.checked && requiredYes.value == "") {
    document.querySelector("#message-5").textContent =
      "This field requires a value";
    areThereErrors = true;
  } else {
    document.querySelector("#message-5").textContent = "";
  }

  if (areThereErrors) {
    e.preventDefault();
  }
});
console.log(submit);
