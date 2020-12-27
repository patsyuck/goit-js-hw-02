function makeArray(firstArray, secondArray, maxLength) {
  let array = firstArray.concat(secondArray)
  array = array.length <= maxLength ? array : array.slice(0, maxLength)
  return array
}

console.log(makeArray(['Манго', 'Поли'], ['Аякс', 'Челси'], 3))
console.log(makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран'], 4))
console.log(makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран', 'Венера'], 0))