function includes(array, value) {
    for (const elem of array) {
      if (elem === value) {
        return true
      }
    }
    return false
}

console.log(includes([1, 2, 3, 4, 5], 3))
console.log(includes([1, 2, 3, 4, 5], 17))