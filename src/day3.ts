const fs = require('fs')
const path = require('path')

interface Claim {
  id: string,
  fromLeft: number,
  fromTop: number,
  width: number,
  height: number,
}

function parse (item: string): object {
  const regex = /^#(\d+) @ (\d+),(\d+): (\d+)x(\d+)$/
  const res = item.match(regex)
  const claim: Claim = {
    id: res![1],
    fromLeft: parseInt(res![2], 10),
    fromTop: parseInt(res![3], 10),
    width: parseInt(res![4], 10),
    height: parseInt(res![5], 10),
  }

  return claim
}

function convertToMap (list: Array<string>) {
  const myMap = new Map()

  list.map(item => {
    const res: any = parse(item)
    myMap.set(res.id, res)
  })

  return myMap
}

function getMax (field: string, list: Map<string, Claim>) {
  const widths = new Array()
  list.forEach(value =>
    widths.push(value[field])
  )

  const max = Math.max(...widths)
  console.debug(max)
}

function createMatrix (list: Array<string>) {
  const mymap = convertToMap(list)
  const width = getMax('width', mymap)
  return mymap
}

fs.readFile(path.join(__dirname, '../input/day3.txt'), 'utf-8', (err: string, data: string) => {
  const input: Array<string> = data.trim().split('\n')

  //const input = [
  //  '#1 @ 871,327: 16x20',
  //  '#2 @ 676,717: 27x26',
  //  '#3 @ 245,818: 19x21',
  //  '#4 @ 89,306: 22x11',
  //  '#5 @ 451,712: 20x11',
  //]
  const result1 = createMatrix(input)
  //console.log('Result 1 :', result1)

  const result2 = input
  console.log('Result 2 :', result2[1])
})
