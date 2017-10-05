function theBeatlesPlay(m, ins) {
  let newArr = []
  let i = 0
  for(let player in m) {
    newArr.push(`${player} plays ${ins[i]}`)
    i++;
  }
  retrun newArr
}
