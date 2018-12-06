const fs = require('fs')
const path = require('path')

function isLower(character: string): boolean {
  return character === character.toLowerCase() && character !== character.toUpperCase()
}
function isUpper(character: string): boolean {
  return character === character.toUpperCase() && character !== character.toLowerCase()
}
function sameCase(a: string, b:string): boolean {
  return (isLower(a) && isLower(b)) || (isUpper(a) && isUpper(b))
}
function differentLetters(a: string, b:string): boolean {
  return a.toLowerCase() !== b.toLowerCase()
}
function matchPolarity(a:string, b:string): boolean {
  return sameCase(a, b) || differentLetters(a, b)
}

function dedupe(input: string): string[] {
  let list = input.split('')

  let charToRemove = false
  let end = false

  while(!end) {
    end = true
    list = list.filter((letter, index) => {
      const previousLetter = list[index-1]
      const nextLetter = list[index+1]

      if (charToRemove) {
        charToRemove = false
        return
      }

      if (nextLetter && matchPolarity(letter, nextLetter)) {
        return letter
      }

      if (nextLetter) {
        end = false
        charToRemove = true
        return
      }

      return letter
    })
  }

  return list
}

fs.readFile(path.join(__dirname, '../input/day5.txt'), 'utf-8', (err: string, data: string) => {
  const input: string = data.trim()
  //const input = 'dabAcCaCBAcCcaDA'

  const result1 = dedupe(input).length
  console.log('Result 1 :', result1)

  const result2 = input
  //console.log('Result 2 :', result2)
})
