// const person = {
//   name: 'chick',
//   hobby: 'cycling',
//   phone: 1234567,
//   isAlive: true
// }
// entries does the opposite of assign for object methods

// const arr = Object.entries(person)


// console.log('reduces',arr.reduce( (f,t) => f.concat(t)))

// console.log('dumped', arr.map( a => a.fill({[a[0]]: a[1]})))

// console.log(Object.assign(person))
// console.log(Object.values(person))
// console.log(Object.keys(person))


// make the value print out the number of the key
// fruits = {
//   rock: 4,
//   paper: 1,
//   scissors: 2
// }
// function objToArrOfKeys(arg) {
//   let full = []
//   const keys = Object.keys(arg);
//   const values= Object.values(arg);
//   for (let i = 0; i < keys.length; i++) {
//     for (let j = 0; j < values[i]; j++) {
//       full.push(keys[i])
//     }
//   }
//   return full
// }

// console.log(objToArrOfKeys(fruits))

// const attempt = toArr.map(([key,value]) => {
//   return [ ...key.repeat(value).splice(2,0, '')  ].join('')
// })
// const string = 'asdfqwerzxcvertubm'


// you can use splice the same way you use fill but have to configure them to do so 
// array.splice(2, 0, 'strawberries')


// console.log(array)
