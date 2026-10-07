function digit_calculate(numberArray, weight) {
  let total_sum = 0;

  for (let i = 0; i < numberArray.length; i++) {
    const sum = numberArray[i] * weight;

    total_sum = total_sum + sum;

    weight--;
  }

  const resultado = 11 - (total_sum % 11);

  if (resultado >= 10) {
    return 0;
  } else {
    return resultado;
  }
}

function calculate_digits(numbers) {
  const numberArray = Array.from(numbers, Number);

  const first_digit = digit_calculate(numberArray, 10);

  const numberArray2 = [...numberArray, first_digit];

  const second_digit = digit_calculate(numberArray2, 11);

  return `${first_digit}${second_digit}`;
}

function identical_numbers_check(numbersArray) {
  let count = 0;
  let primary_number;

  console.log(numbersArray);
  for (let i = 0; i < numbersArray.length && i <= 8; i++) {
    //__________
    if (i === 0) {
      primary_number = numbersArray[0];
      console.log("Primeiro número do array: ", primary_number);
      //________
    } else if (numbersArray[i] === primary_number) {
      count++;
    }
  }
  console.log("Quantidade de números iguais ao primeiro: ", count);
  return count;
}
function format_point_cpf(cpf) {
  const clean_cpf = cpf.replace(/\D/g, "");
  const cpf_to_array = Array.from(clean_cpf);

  const cpf_formated = [
    ...cpf_to_array.slice(0, 3),
    ".",
    ...cpf_to_array.slice(3, 6),
    ".",
    ...cpf_to_array.slice(6, 9),
    "-",
    ...cpf_to_array.slice(9),
  ];
  
  return cpf_formated.join("");
}

function generate_cpf_array() {
  let while_loop = true; // Para controlar a finalização do loop while
  let attemps = 0;

  while (while_loop) {
    const numbersArray = [];
    attemps++;
    if (attemps > 5) {
      console.log("Tentativas limitadas para segurança do dispositivo.");
      return null;
    }

    // criar o array
    // fazer a comparação de cada elemento
    // incrementar a contagem a cada volta se for repetido
    // se a contagem for igual a 8, gera um novo

    for (let i = 0; i < 9; i++) {
      // Loop q cria o array de numeros aleatorios
      // numbersArray.push(1);

      numbersArray.push(Math.floor(Math.random() * 10));
    }

    let count = identical_numbers_check(numbersArray);

    if (count < 8) {
      while_loop = false;
      return numbersArray; //retorna o array dos 9 numeros
    }
  }
}

function generate_cpf() {
  const numbersArray = generate_cpf_array();
  if (numbersArray === null) {
    alert("Não foi possível gerar o CPF, tente novamente.");
  } else {
    return `${numbersArray.join("")}-${calculate_digits(numbersArray)}`;
  }
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Texto copiado com sucesso!");
  } catch (error) {
    console.error("Falha ao copiar o texto: ", error);
  }
}

function cpf_validate(cpf) {
  const numbers_only = cpf.replace(/\D/g, "");
  const cpf_array = numbers_only.split("").map(Number);

  //__________________
  if (cpf_array.length != 11) {
    console.log("CPF Inválido.");
    return false;
  }
  //__________________
  let count = identical_numbers_check(cpf_array);
  if (count >= 8) {
    console.log("CPF Inválido.");
    return false;
  }

  const cpf_numbers_array = Array.from(cpf_array.splice(0, 9), Number);
  const original_verification_digits = Array.from(
    cpf_array.splice(-2),
    Number,
  ).join("");
  // Array.from() transforma em Array
  // .splice() corta o Array
  // .join() junta o Array devolta em uma sequencia só

  console.log(original_verification_digits);

  const calculated_verification_digits = calculate_digits(cpf_numbers_array);
  console.log(calculated_verification_digits);

  if (calculated_verification_digits == original_verification_digits) {
    console.log("CPF válido.");
    return true;
  } else {
    console.log("CPF Inválido.");
    return false;
  }
}
