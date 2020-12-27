function calculateTotal(number) {
    let s = 0
    for (let i = 1; i <= number; i += 1) {
      s += i
    }
    return s
}

console.log(calculateTotal(1))
console.log(calculateTotal(18))