function filterArray(numbers, value) {
    let array = []
    let number
    for (number of numbers) {
      if (number > value) {
        array.push(number)
      }
    }
    return array
}

console.log(filterArray([12, 24, 8, 41, 76], 38))
console.log(filterArray([1, 2, 3, 4, 5], 5))