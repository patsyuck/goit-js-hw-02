function findNumber(start, end, divisor) {
    for (let i = start; i < end; i += 1) {
      if (i % divisor === 0) {
        return i
      }
    }
}

console.log(findNumber(2, 6, 5))
console.log(findNumber(16, 35, 7))