const fs = require('fs')
const path = require('path')

function findIds(list: Array<string>) {
  let total = new Map()

  list.forEach(item => {
    const mymap = new Map()

    // count common letters
    for (const letter of item) {
      mymap.set(letter, mymap.get(letter) + 1 || 1)
    }

    // keep 2 and 3
    const myset = new Set()
    for (const [key, value] of mymap) {
      if (value !== 2 && value !== 3) {
        mymap.delete(key)
      } else {
        myset.add(value)
      }
    }

    // keep unique values
    for (const value of myset) {
      total.set(value, total.get(value) + 1 || 1)
    }
  })

  return total.get(2) * total.get(3)
}

fs.readFile(path.join(__dirname, '../input/day2.txt'), 'utf-8', (err: string, data: string) => {
  const input: Array<string> = data.trim().split('\n')

  //const input = ['abcdef', 'bababc', 'abbcde', 'abcccd', 'aabcdd', 'abcdee', 'ababab']

  const result1 = findIds(input)
  console.log('Result 1 :', result1)

  const result2 = 2
  console.log('Result 2 :', result2)
})
