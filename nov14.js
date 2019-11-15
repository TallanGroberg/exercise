// const lessThanOrEqual = (num) => {
//   if(num > 0) {
//     return false
//   } else if (num === 0) {
//     return true
//   } else {
//     return true
//   }
// }

// console.log(lessThanOrEqual(0))

// const squared = (a) => a * a 

// console.log(squared(5))

// const nameShuffle = str => str.split(' ').reverse().join(' ')

// console.log(nameShuffle('tallan groberg'))

// const isIdentical = str => {
//    const toArr = str.split('')
//    const toSet = new Set(toArr)
//    const backToArr = [...toSet]
//    return backToArr.length === 1 ? true : false
// }


// const isIdentical = s => new Set(s).size === 1

// const isIdentical = s => [...s].every(lett => lett === s[0])

// console.log(isIdentical('ssssd'))

// const addUp = (num) => {
//   var nums = [];
//   var i;
//   for (i = 0; i < num; i++) {
//     nums.push(i + 1 )
//   }
//   return nums.reduce( (t,f) => f + t)
// }

// const addUp = n => (n * (n - 1) / 2) 
// console.log(addUp(5))




// this is my favorite way of solving this problem because of the funtional paradigm 
// ********************
// const addUp = num =>  !num ? 0 : num + addUp(--num)
// console.log(addUp(100))
// *******************



// .from returns an array from a string
// if the argument is a number or object the array is empty
// var myArr = Array.from({length: 1});
// console.log(myArr)


//i got this very quickly and am super proud of that!!!
// const mean = arr => Number.parseFloat(arr.reduce( (t,f) => f+t) / arr.length).toFixed(1)

// console.log(mean([1, 3, 8, 9, 9, 10]))
// console.log(mean([1, 6, 6, 7, 8, 8, 9, 10, 10]))

// return each letter in str n # of times
//find the number of letters in the string
const repeat = (str, n) => [...str].map(s => s.repeat(n)).join('')


console.log(repeat('kdlk', 4))