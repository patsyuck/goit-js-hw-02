function makeStringFromArray(array, delimeter) {
    let string
    string = array.join(delimeter)
    return string
}

console.log(makeStringFromArray(['Манго', 'спешит', 'на', 'поезд'], ' '))
console.log(makeStringFromArray(['М', 'а', 'н', 'г', 'о'], ''))