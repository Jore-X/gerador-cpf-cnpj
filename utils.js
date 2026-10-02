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

function generate_cpf_array() {
  let attemps = 0;
  const numbersArray = [];

  while (true) {
    let count = 0;
    

    attemps++;
    console.log("attemps");
    if (attemps > 50) {
      break;
    }
  }
  for (let i = 0; i < 9; i++) {
    numbersArray.push(Math.floor(Math.random() * 10));
  }

  return numbersArray;
}

function generate_cpf() {
  const numbersArray = generate_cpf_array();
  return `${numbersArray.join("")}-${calculate_digits(numbersArray)}`;
}
