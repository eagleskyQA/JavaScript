let age_2 = 18;
let age_3 = 60;

const checkAge = function(age) {
  if (age < age_2) {
    console.log('You don’t have access cause your age is ' + age + ' It’s less then');
  } else if (age >= age_2 && age < age_3) {
    console.log('Welcome  !');
  } else if (age > age_3) {
    console.log('Keep calm and look Culture channel');
  } else {
  console.log('Technical work')
  };
}

console.log(checkAge(17));
console.log(checkAge(18));
console.log(checkAge(61));
console.log(checkAge('Я НИНАЮ СКОЛЬКО МНЕ ЛЕТ!!! ПАМАГИТИ!!!!'));