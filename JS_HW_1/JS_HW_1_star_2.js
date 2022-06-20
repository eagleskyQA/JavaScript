let age_2 = 18;
let age_3 = 60;

const checkAge = function (age) {
  if (typeof age == 'number') {
    if (age < age_2) {
      console.log('You don’t have access cause your age is ' + age + ' It’s less then');
    } else if (age >= age_2 && age <= age_3) {
      console.log('Welcome  !');
    } else if (age > age_3) {
      console.log('Keep calm and look Culture channel');
    }
  } else if (typeof age != 'number') {
    console.log('ERROR');
  } else {
    console.log('Technical work')
  };
}

checkAge(17);
checkAge(18);
checkAge(60);
checkAge(61);
checkAge('Я НИНАЮ СКОЛЬКО МНЕ ЛЕТ!!! ПАМАГИТИ!!!!');