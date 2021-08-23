function total(num1, num2 = 55) {
    // if (num2 == undefined) {
    //     num2 = 50
    // }
    /* num2 = num2 || 55; */
    const add = num1 + num2;
    return add;
}
const result = total(15);
console.log(result);

// fullname collection 
function fullname(firstName, lastName = 'chawdhury') {
    const name = firstName + ' ' + lastName;
    return name;
}
const author = fullname('mostofa');
console.log(author);