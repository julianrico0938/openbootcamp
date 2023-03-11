// crea la funcion duplicados que recibe un numero y lo duplica
// crea la fucion callbackMap que recibe un array de numeros y la funcion duplicados debe retornar un array con los numeros duplicados
// console.log(callbackMap(arr, duplicados))

// expect [4, 8, 132, 16, 42]

const duplicar = (n) => {
  return n * 2;
};

console.log(duplicar(2));

// const callback = (arr ,cb) => {
//     // let resultado = arr.map(cb() => {

//     // })

// }

function callbackfun(array, callback) {
  //   return array.map(callback);

  let arrayS = [];

  for (let i = 0; i < array.length; i++) {
    let duplicado = callback(array[i]);

    arrayS.push(duplicado);
  }
  return arrayS;
}

let numeros = [4, 8, 132, 16, 42];
console.log(callbackfun(numeros, duplicar));
