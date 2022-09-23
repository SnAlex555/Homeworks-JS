// const firstString = '# # # #';
// const secondString = ' # # # #';

// let i

// for (i = 0; i < 8; i++) {
//     if (i % 2 == 0) {
//         console.log(firstString)
//     } else {
//         console.log(secondString)
//     }
// }

let stringSize = 8;
let chessBoard = "";

for (let i = 0; i < stringSize; i++) {
  for (let k = 0; k < stringSize; k++) {
    if ((i + k) % 2 == 0) {
        chessBoard += " ";
    } else {
        chessBoard += "#";
    }
  }
  chessBoard += "\n";
}

console.log(chessBoard);