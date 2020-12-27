function calculateTotalPrice(order) {
    let total = 0
    for (const elem of order) {
      total += elem
    }
    return total
}

console.log(calculateTotalPrice([12, 85, 37, 4]))
console.log(calculateTotalPrice([]))