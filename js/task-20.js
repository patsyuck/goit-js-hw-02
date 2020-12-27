function calculateTotalPrice(order) {
    let total = 0
    let elem
    for (elem of order) {
      total += elem
    }
    return total
}

console.log(calculateTotalPrice([12, 85, 37, 4]))
console.log(calculateTotalPrice([412, 371, 94, 63, 176]))