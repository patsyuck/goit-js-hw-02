function splitMessage(message, delimeter) {
    let words
    words = message.split(delimeter)
    return words
}

console.log(splitMessage('Манго', ''))
console.log(splitMessage('Манго спешит на поезд', ' '))