// Crea una función llamada rollDice() que reciba como parametro el numero de caras
// que queramos que tenga el dado que deberá simular el codigo dentro de la función.
// Como hemos dicho, que la función use el parametro para simular una tirada de dado
// y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te
// preocupes! Busca información sobre la función de javascript Math.random()
const dado = 6
const dadorol = 16
const rollDice = (numCaras) => {
  const resultadoTirada = Math.floor(Math.random() * numCaras) + 1
  return resultadoTirada
}

console.log(rollDice(dado))
console.log(rollDice(dadorol))
