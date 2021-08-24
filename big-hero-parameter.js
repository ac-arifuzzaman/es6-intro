const add = (num1, num2) => num1 + num2;
const total = add(15, 17);

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(5, 4, 3);

const fiveTimes = (num) => num * 5;
const sum = fiveTimes(5);

const fullName = () => 'Arifuzzaman Arif';
const name = fullName();

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 5;
    return output;
}
const allTotal = doMath(5, 1);
console.log(allTotal);
