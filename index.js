do {
    yourlastName = prompt("Ваша фамилия", '');
} while (yourlastName === '' || yourlastName === null);
    
    
do {
    yourfirstNam = prompt('Ваше имя', '');
} while (yourfirstNam === '' || yourfirstNam === null);
    
    
do {
    yourmiddleName = prompt('Ваше отчество');
} while (yourmiddleName === '' || yourmiddleName === null);
    
    
do {
    yourYears = prompt('Ваш возраст', '');
} while (yourYears === '' || yourYears === null || yourYears > 100 || yourYears < 18);
    
    
do {
    yourGender = confirm('Ваш пол-мужской?');
} while (yourGender === '' || yourGender === null);
    
    
    
    
if (yourGender == true) {
    yourGender = ('мужской');
    
} else {
    yourGender = ('женский');
}
      
if (yourYears > 63) {
    pension = ('Вы на пенсии')
    
} else {
    pension = ('Придется поработать)))')
}
    
let yourYearsDay = yourYears * 365
let afterFiveYears = Number(yourYears) + Number(5)
    
    alert(`
    Ваше фио: ${yourlastName} ${yourfirstNam} ${yourmiddleName}
    Ваш возраст в годах: ${yourYears}
    Ваш возраст в днях: ${yourYearsDay}
    Через 5 лет вам будет: ${afterFiveYears}
    Ваш пол: ${yourGender}
    Вы на пенсии:  ${pension}`);