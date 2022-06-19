let age_2 = 18;
let age_3 = 60;
let age = prompt('Введите Ваш возраст');

const checkAge = function(age) {
  if (Number(age) < age_2) {
    alert('You don’t have access cause your age is ' + age + ' It’s less then');
  } else if (Number(age) >= age_2 && Number(age) < age_3) {
    alert('Welcome  !');
  } else if (Number(age) > age_3) {
    alert('Keep calm and look Culture channel');
  } else if (typeof(age) != 'number') {
    alert('ERROR');
  } else {
    alert('Technical work');
  }
}

checkAge(age);