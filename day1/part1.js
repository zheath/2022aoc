const input = require('./input');
const { data } = input

let cals = 0
let elves = []

for(let i = 0; i < data.length; i++){
    const c = data[i]
    if(c > 0){
        cals += c
    } else {
        elves.push(cals)
        cals = 0
    }
}

console.log(elves.sort((a,b) => b-a))

console.log(elves.sort((a,b) => b-a).slice(0,3).reduce((tot, curr) => tot+=curr, 0))