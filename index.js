function theBeatlesPlay(m, ins) {
  let newArr = []
  let i = 0
  for(let player in m) {
    newArr.push(`${m[player]} plays ${ins[i]}`)
    i++;
  }
  return newArr
}
