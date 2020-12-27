function getCommonElements(array1, array2) {
    let array = []
    let elem
    for (elem of array1) {
      if (array2.includes(elem)) {
        array.push(elem)
      }
    }
    return array
}

console.log(getCommonElements([1, 2, 3], [2, 4]))
console.log(getCommonElements([1, 2, 3], [10, 20, 30]))