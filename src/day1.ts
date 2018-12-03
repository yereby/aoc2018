const fs = require('fs')
const path = require('path')

function convertStringToNumbers (list: Array<string>): Array<number> {
  return list.map(iter => parseInt(iter, 10))
}
function sumNumbers (list: Array<number>): number {
  return list.reduce((a, b) => a + b, 0)
}

fs.readFile(path.join(__dirname, '../input/day1.txt'), 'utf-8', (err, data) => {
  const input: Array<string> = data.trim().split('\n')
  const numbers = convertStringToNumbers(input)

  const result1 = sumNumbers(numbers)
  console.log('Result 1 :', result1)

  const result2 = sumNumbers(numbers)
  console.log('Result 2 :', result2)
})
