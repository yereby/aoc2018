const fs = require('fs')
const path = require('path')

function convertStringToNumbers (list: Array<string>): Array<number> {
  return list.map(iter => parseInt(iter, 10))
}
function sumNumbers (list: Array<number>): number {
  return list.reduce((a, b) => a + b, 0)
}
function twice (list: Array<number>): Set<number> {
  const myset = new Set()

  let done = null
  let index = 0

  while (true) {
    list.reduce((a, b, i, arr) => {
      const res = a + b

      if (myset.has(res)) {
        done = res
        arr.splice(1)
      }

      myset.add(res)

      index = res
      return res
    }, index)

    if (done !== null) { break }
  }

  return done
}

fs.readFile(path.join(__dirname, '../input/day1.txt'), 'utf-8', (err: string, data: string) => {
  const input: Array<string> = data.trim().split('\n')
  const numbers = convertStringToNumbers(input)

  const result1 = sumNumbers(numbers)
  console.log('Result 1 :', result1)

  const result2 = twice(numbers)
  console.log('Result 2 :', result2)
})
