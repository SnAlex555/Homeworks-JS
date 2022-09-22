const firstString = '# # # #';
const secondString = ' # # # #';

let i

for (i = 0; i < 8; i++) {
    if (i % 2 == 0) {
        console.log(firstString)
    } else {
        console.log(secondString)
    }
}