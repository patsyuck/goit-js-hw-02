function findLongestWord(string) {
    let longestWord = null
    let l = 0
    let word
    for (word of string.split(' ')) {
      if (word.length > l) {
        l = word.length
        longestWord = word
      }
    }
    return longestWord
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'))
console.log(findLongestWord('Google do a roll'))
console.log(findLongestWord('May the force be with you'))