const cpf_result_field = document.querySelector(".result-field");
const cpf_generate_btn = document.getElementById("cpf_btn_generate");
const cpf_copy_btn = document.getElementById("cpf_btn_copy");
const input_cpf_validate = document.getElementById("input_cpf_validate");
const cpf_btn_validate = document.getElementById("cpf_btn_validate");

cpf_generate_btn.addEventListener("click", () => {
  cpf_result_field.textContent = generate_cpf();
});
cpf_copy_btn.addEventListener("click", () => {
  const cpf_generated = cpf_result_field.textContent;
  copyText(cpf_generated);
});

cpf_btn_validate.addEventListener("click", () => {
  input_value = input_cpf_validate.value;
  console.log(cpf_validate(input_value));
});
