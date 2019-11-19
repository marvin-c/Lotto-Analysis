let arrNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]
let binary = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
let n
let arr_nums_length = 40
let lottoCombination = []
let lottoIndex

for (n=1; n<=6; n++) {
  let i = Math.floor((Math.random() * (arr_nums_length)))
  lottoCombination.push(arrNumbers[i])
  lottoIndex = lottoCombination[n-1]
  convertNumToBit(lottoIndex)
  arr_nums_length--
  arrNumbers.splice(i, 1)
}

binary = binary.join()
binary = binary.split(',').join("")
console.log(lottoCombination)
console.log(binary)
convertBinarytoNumberCombination(binary)

function convertBinarytoNumberCombination (bin) {
  arrNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]
  binary = bin.split('')
  lottoCombination = []
  let tempLottoCombination = binary.map(function (value, index){
    // console.log(value, index)
    if (value === '1') {
      lottoCombination.push(arrNumbers[index])
      // console.log(arrNumbers[index+1], '----')
    }
  }) 
  console.log(lottoCombination)
}

function convertNumToBit (num) {
  binary[lottoIndex - 1] = 1
}