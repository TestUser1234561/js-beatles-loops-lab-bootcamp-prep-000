function theBeatlesPlay(m, ins) {
  let newArr = []
  let i = 0
  for(let player in m) {
    newArr.push(`${m[player]} plays ${ins[i]}`)
    i++;
  }
  return newArr
}

function johnLennonFacts(arr) {
  let i = 0
  let newArr = []
  while(i < arr.length) {
    newArr.push(arr[i] + `!!!`)
    i++
  }
}
