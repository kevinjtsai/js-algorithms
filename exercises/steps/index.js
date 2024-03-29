// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }
  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }
  stair.length <= row ? stair += '#' : stair += ' ';
  steps(n, row, stair);
}

module.exports = steps;

// function steps(n) {
//   let array = [];
//   if (n > 0) {
//     for (let i = 0; i < n; i++) {
//       let stair = '';
//       for (let j = 0; j < n; j++) {
//         j <= i ? stair += '#' : stair += ' ';
//       }
//       console.log(stair);
//     }
//   }
// }

// function steps(n) {
//   let array = [];
//   if (n > 0) {
//     for (let i = 0; i < n; i++) {
//       let temp = [];
//       for (let j = 0; j < n; j++) {
//         j <= i ? temp.push('#') : temp.push(' ');
//       }
//       array.push(temp);
//     }
//     for (let i in array) {
//       console.log(array[i]);
//     }
//   }
// }
