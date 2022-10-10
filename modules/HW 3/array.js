1. 
let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

function arrayClone(arr) {
    return arr.slice(0);
}

let arrayOne = arrayClone(vegetables);

console.log(arrayOne);


2. 
let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

let stringOne = vegetables.toString();
let stringTwo = vegetables.join();

console.log(stringOne);
console.log(stringTwo);


3. 
const num = prompt('Введите число', '');

function colonOdd (num) {
return num.split('')
.map((item, index, array) => array[index] % 2 == 1 && array[index + 1] % 2 == 1 ? item + ':': item)
.join('');
}

console.log(colonOdd(num));


 4.
const str = prompt('Введите слово', 'КаЖдЫй ОхОтНиК');

function changeRegister (str) {
let result = ''
for(let i = 0; i < str.length; i++) {
if(str[i] === str[i].toUpperCase()) {
result += str[i].toLowerCase();
} else {
result += str[i].toUpperCase();
}
}
return result.split();
}

console.log(changeRegister(str));


5. 
let arr = ["php", "php", "css", "css",
"script", "script", "html", "html", "java"
];
function removeDuplicates(arr) {
let res = [];
for(let i = 0; i < arr.length; i++) {
if(res.includes(arr[i]) === false) {
res.push(arr[i])
}
}
return res;
}

console.log(removeDuplicates(arr));


6. 
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6];
let arr3 = [];
  if (arr1.length > arr2.length) {
    let count = arr1.length;
  } else {
    let count = arr2.length;
  }
      for (var i = 0; i < count; i++) {
        if (arr2[i] === undefined) {
            arr2.push(0);
        } else {
            if (arr1[i] === undefined) {
              arr1.push(0);
            }
        }
        arr3.push(arr1[i] + arr2[i]);
      }; 

console.log(arr3);


7.
function countIdentic(arr) {
  arr = arr.sort()
  let newSortArr = [];
  for (let i = 0; i < arr.length; i++) {
  if (arr[i] == arr[i + 1]) {
  newSortArr.push(arr[i])
  }
  }
  let result = newSortArr.filter((item, index) => {
  return newSortArr.indexOf(item) === index;
  })
  return result.length;
};

countIdentic([3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8]);
countIdentic([15,14,13,19,13,14,14,14,7,9,9]);

console.log(countIdentic(arr))


8.
var numbers = [3, 8, 7, 6, 5, -4, 3, 2, 1];  

function compareNumbers(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i + 1; j < arr.length; j++) {
  const a = arr[i];
  const b = arr[j];
  if (a > b) {
  arr[i] = b;
  arr[j] = a;
  }
  }
  }
  return arr;
  }

  console.log(compareNumbers(numbers));

  
9.
let litmir = [
  { author: 'Хэленка', title: 'Улетела сказка'},
  { author: 'Коул Кресли', title: 'Восстание Аркан'},
  { author: 'Райчел Мид', title: 'Золотая лилия'}
  ];

function compare(a,b)
{
 if (a.title < b.title)
   return -1;
 if (a.title > b.title)
   return 1;
 return 0;
}

litmir.sort(compare);

for(var i = 0; i < litmir.length; i++) {
 document.writeln(litmir[i].title); 
}

console.log(litmir);


10.
let litmir = [
  { author: 'Хэленка', title: 'Улетела сказка'},
  { author: 'Коул Кресли', title: 'Восстание Аркан'},
  { author: 'Райчел Мид', title: 'Золотая лилия'}
  ];

function propertyValue(array, key) {
   const arr = [];
   let index = -1;
   let item;

   while (++index < array.length) {
   item = array[index];

     if (item.hasOwnProperty(key)) {
      arr[arr.length] = item[key];
     }
   }

   return arr;
};

console.log(propertyValue(litmir, 'title'));;
console.log(propertyValue(litmir, 'author'));;
 