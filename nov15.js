
// function fibonacci(num){
//   var a = 1;
//   var b = 0;
//   var temp;

//   while (num >= 0){
//     temp = a;
//     a = a + b;
//     b = temp;
//     num--;
//   }

//   return b;
// }

// function fibonacci(num) {
//   if (num <= 1) return 1;
//   return fibonacci(num - 1) + fibonacci(num - 2)
// }
// console.log(fibonacci(11))

// const diff = nums => Math.max(...nums) - Math.min(...nums)
// console.log(diff([1, 2, 3, 4, 5, 6, 7]))

// simplest way to check for truthy value
// isTruthy = (input) => +!!input;

// console.log(isTruthy(true))


let counting = false

button1.function start() {
  console.log('counting', counting)
  counting = true
  count++ 
  setInterval(1000)
}
button2.function stop() {
  counting = false
  clearInterval(interval(start));
}

function theCheck() {
  if(counting === false) {
    count = 0
  } else {
    count = //how ever long the timer is
  }
}