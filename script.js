const cpf_result_field = document.querySelector(".result-field");
const cpf_generate_btn = document.getElementById("cpf_btn_generate");
const cpf_copy_btn = document.getElementById("cpf_btn_copy");
const input_cpf_validate = document.getElementById("input_cpf_validate");
const cpf_btn_validate = document.getElementById("cpf_btn_validate");
const formatting_checkbox = document.getElementById("formatting_checkbox");

cpf_generate_btn.addEventListener("click", () => {
  const cpf_generated = generate_cpf();
  
  if (formatting_checkbox.checked) {
    cpf_result_field.textContent = format_point_cpf(cpf_generated);
  } else {
    cpf_result_field.textContent = cpf_generated;
  }
});
cpf_copy_btn.addEventListener("click", () => {
  const cpf_generated = cpf_result_field.textContent;
  copyText(cpf_generated);
});

const field_responde_validate = document.querySelector(".response-row");

cpf_btn_validate.addEventListener("click", () => {
  const input_value = input_cpf_validate.value;
  const cpf_response_validate = cpf_validate(input_value);

  field_responde_validate.classList.remove("sucess");
  field_responde_validate.classList.remove("invalid");

  if (cpf_response_validate) {
    field_responde_validate.classList.add("sucess");
  } else {
    field_responde_validate.classList.add("invalid");
  }
});
