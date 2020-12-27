function getEvenNumbers(start, end) {
  let array = []
  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      array.push(i)
    }
  }
  return array
}

console.log(getEvenNumbers(2, 5))
console.log(getEvenNumbers(3, 11))