let numbers = [...[1,2,7,10] , ...[15,60,78]];//spread operator
console.log(numbers) 

let squaredNumbers = numbers.map(num => num * num);//mapping
console.log(squaredNumbers)

let evenNumbers = numbers.filter(num => num % 2 === 0);//filter
console.log(evenNumbers)

let total = numbers.reduce((accumulator,currentvalue) => accumulator + currentvalue , 0);//დააჯამებს numbers მასივის წევრებს
let totalofeven = evenNumbers.reduce((accumulator,currentvalue) => accumulator + currentvalue , 0);//დააჯამებს გაფილტრულ მასივს სადაც ლუწი რიცხვებია
console.log(total);
console.log(totalofeven);
//logic operator
function checkNumbers(num){
    let result = (num > 10 && num % 2 === 0) ? true : false;
    return result;
}
console.log(checkNumbers(31)) //return false 
console.log(checkNumbers(28))//return true