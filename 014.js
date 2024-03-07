// Crea una función llamada swap que reciba un array y dos parametros que sean
// indices del array. La función deberá intercambiar la posición de los valores de
// los indices que hayamos enviado como parametro. Retorna el array resultante.

// Sugerencia de array:

const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
]

const swap = (array, param, param2) => {
  const index1 = array.indexOf(param)
  const index2 = array.indexOf(param2)

  if (index1 === -1 || index2 === -1) {
    console.log('Uno o ambos valores no se encuentran en el array.')
    return array
  }
  ;[array[index1], array[index2]] = [array[index2], array[index1]]

  return array
}
console.log(swap(fantasticFour, 'La cosa', 'La mujer invisible'))
