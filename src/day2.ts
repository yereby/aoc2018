const fs = require('fs')
const path = require('path')

function findIds(list: Array<string>): number {
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

function findCorrectBox(list: Array<string>): string {
  let arr = new Array()
  let res = new Array()

  arr = list.map(item => {
    const res = [...item]
    return res
  })

  arr.map((a, i) => {
    let index = new Array()

    arr.map((b) => {
      a.map((letter: string, j: number) => {
        if (letter !== b[j]) {
          index.push(j)
        }
      })

      if (index.length === 1) {
        res.push(a, b)
      }
      index = []
    })
  })

  res.splice(2)

  const result = res[0].filter((item: string, i: number) => {
    if (res[1][i] !== item) { return }
    return item
  })

  return result.join('')
}

fs.readFile(path.join(__dirname, '../input/day2.txt'), 'utf-8', (err: string, data: string) => {
  const input: Array<string> = data.trim().split('\n')

  const result1 = findIds(input)
  console.log('Result 1 :', result1)

  const result2 = findCorrectBox(input)
  console.log('Result 2 :', result2)
})
