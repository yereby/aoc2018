const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, '../input/day4.txt'), 'utf-8', (err: string, data: string) => {
  const input: Array<string> = data.trim().split('\n')

  const result1 = input
  console.log('Result 1 :', result1)

  const result2 = input
  console.log('Result 2 :', result2)
})
