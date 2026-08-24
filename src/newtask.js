const arr = [1, 2, 0, 4, -5, 6.5, "Ouch", NaN, Number('dsfdgdf'), "4", 1/0];


const res1 = arr.filter(el => typeof el == 'number').map(el => el) // [1, 2, 0, 4, -5] // [t, t, f, t, t ]
arr.filter(el => Boolean(el)) // [1, 2, 4, -5];




const squares = arr.filter(el => typeof el == 'number' && !isNaN(el)).map(el => el*el) // [1, 4, 0, 16, 25]
console.log("squares", "[1, 4, 0, 16, 25]", squares)

//прочитать про массивы и методы массивов, стрелочные функции, приведение типов



// 1) массив натуральных чисел
const naturals = arr.filter(el => Number.isInteger(el) && el>0) // [1, 4, 0, 16, 25]
console.log("naturals", "[1, 2, 4]", naturals)



// 2) поэлементный вывод в консоль элементов массива arr, использовать методы массива не через Фор и Вайл
arr.forEach(el => console.log(typeof el))

const answer = arr.length > 6 ? 42 : 'Invalid'