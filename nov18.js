// var nums = [1, 2, 3, 4, 5, 6]

// function evens() {
//   for (let i = 0; i < nums.length; i++ ){
//     if(i % 2 === 0) {
//       console.log( 'even1')
//     }
//     if(i % 2 === 0) {
//       return 'even2'
//     }
//   }
// }
// console.log(evens())

// function letterCount(str) {

//   let results = []
//   let newArr = str.split('')
//   let sorted = newArr.sort()
//   for (let i = 0; i < newArr.length - 1; i++) {
//     if(sorted[i + 1] === sorted[i])
//     results.push(sorted[i])
    
//   }

//   console.log(results)
// }
// letterCount('a;sdkfd')

// function nestedForLoop() {
//   let myArr = []
//   let nestArr = []
//   for (let i = 0; i < 3; i++) {
//    myArr.push(i)
//   }
//     for (let j = 0; j < myArr.length; j++){
//       nestArr.push(myArr)
//     }
//   console.log(nestArr)
// }

// console.log(nestedForLoop())

// const arr = ['e', 'r', 't']

// the first is the one to copy and the second is the one that you choose to replace it with.
// console.log(arr.copyWithin(2,0))


// const iterator =  array1.entries()
// const makeObj = () => {
  //   return Object.assign({}, array1)
  // }
  
  // console.log(makeObj())
  
  
  // you can do alot with this method revisit this soon
  // console.log(array1.fill( 'c', 3,4));
  // console.log(array1.fill(5, 3, 6));
  // console.log(array1.copyWithin(0,6))
  
  //   const iterator = array1.keys()
  
  
  // for (const key of iterator) {
    //   console.log(key);
    // }
    const array1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];


    console.log(array1.splice(2,0,'filler'))

    // const object1 = {
    //   a: 'somestring',
    //   b: 42,
    //   c: false
    // };

    // const person = {
    //   name: 'dude',
    //   age: 12,
    // }
    // works like concat but for objects
    // console.log(Object.assign(object1, person))
    // console.log(Object.values(object1))
    // console.log(Object.keys(object1))

    // // to concat
    // const keys = Object.values(object1)
    // const values = Object.keys(object1)
    // console.log(keys.concat(values))
    // const entries = new Map([
    //   ['foo', 'bar'],
    //   ['baz', 42]
    // ]);
    
    // const obj = Object.fromEntries(entries);
    
    // console.log(obj);




