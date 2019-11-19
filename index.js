let arrNumbers = [
  [1,'000001'],
  [2,'000010'],
  [3,'000011'],
  [4,'000100'],  
  [5,'000101'],
  [6,'000110'],
  [7,'000111'],
  [8,'001000'],
  [9,'001001'],
  [10,'001010'],
  [11,'001011'],
  [12,'001100'],
  [13,'001101'],
  [14,'001110'],
  [15,'001111'],
  [16,'010000'],
  [17,'010001'],
  [18,'010010'],
  [19,'010011'],
  [20,'010100'],
  [21,'010101'],
  [22,'010110'],
  [23,'010111'],
  [24,'011000'],
  [25,'011001'],
  [26,'011010'],
  [27,'011011'],
  [28,'011100'],
  [29,'011101'],
  [30,'011110'],
  [31,'011111'],
  [32,'100000'],
  [33,'100001'],
  [34,'100010'],
  [35,'100011'],
  [36,'100100'],
  [37,'100101'],
  [38,'100110'],
  [39,'100111'],
  [40,'101000']
]

// let arrNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]
//                  1        2        3        4        5        6        7        8        9        10        11      12      13      14         15      16        17       18      19          20      21      22         23      24      25        26        27      28      29        30       31       32       33        34      35       36       37      38        39      40
// let arrBinary = ['000001','000010','000011','000100','000101','000110','000111','001000','001001','001010','001011','001100','001101','001110','001111','010000','010001','010010','010011','010100','010101','010110','010111','011000','011001','011010','011011','011100','011101','011110','011111','100000','100001','100010','100011','100100','100101','100110','100111','101000']

// let n
// let arr_nums_length = 40
// let lottoCombination = []
// let lottoCombinationBinary = []

// for (n=1; n<=6; n++) [
//   let i = Math.floor((Math.random() * (arr_nums_length)))
//   lottoCombination.push(arrNumbers[i])
//   lottoCombinationBinary.push(arrBinary[i])
//   arr_nums_length--
//   arrNumbers.splice(i, 1)
//   arrBinary.splice(i, 1)
// ]

// console.log(lottoCombination)
// console.log(lottoCombinationBinary)

let n
let arr_nums_length = 40
let lottoCombination = []
let lottoCombinationBinary = []

for (n=1; n<=6; n++) {
  let i = Math.floor((Math.random() * (arr_nums_length)))
  lottoCombination.push(arrNumbers[i][0])
  lottoCombinationBinary.push(arrNumbers[i][1])
  arr_nums_length--
  arrNumbers.splice(i, 1)
  // arrBinary.splice(i, 1)
}
console.log(lottoCombination)
console.log(lottoCombinationBinary)
lottoCombinationBinary = lottoCombinationBinary.join()
lottoCombinationBinary = lottoCombinationBinary.split(',').join("")
console.log(lottoCombinationBinary)

// console.log(numbers[1][1])