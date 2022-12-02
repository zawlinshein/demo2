let word = 'racecar';
let stack = [];
let rword = "";

for(let i = 0; i < word.length; i++) {
    stack.push(word[i]);
}
console.log(stack);
console.log(stack.length);

for(let i = 0; i <= stack.length; i++) {
    rword += stack.pop();
}
console.log(rword);
console.log(stack.length);