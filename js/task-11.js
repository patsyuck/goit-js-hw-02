function calculateEngravingPrice(message, pricePerWord) {
    return pricePerWord * message.split(' ').length
}

console.log(calculateEngravingPrice('JavaScript у меня в крови', 10))
console.log(calculateEngravingPrice('JavaScript у меня в крови', 20))