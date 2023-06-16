/*Q1: 
1. Create an array called grades and put the following values: 56, 87, 99, 40
2. Add another element at the end of the array with value: 68
3. Remove the 1st element of the array
4. Change 40 to 60.
5. Create a variable called average and compute for the average of the grades array.
    Tip: you can create another variable as a placeholder for the sum first.
*/

let gradeArray = [56, 87, 99, 40];
gradeArray.push(68);
gradeArray.shift();
gradeArray[2] = 60;
console.log(`Grade List after Modifications = ${gradeArray}`);
let sum = 0;
for (i in gradeArray) {
    sum += gradeArray[i];
}
let average = sum / gradeArray.length;
console.log(`Sum = ${sum}; Grade Average = ${average}`);



/*Q2:
1. Create an object called vehicle with following properties:
    a. name (String)
    b. brand (String)
    c. year of make (Number)
    b. number of wheels (Number)
    e. isEnvironmentFriendly (Boolean)
Feel free to put any value.
2. Use the for-in loop to display both the properties and values of the object.
*/
const vehicle = {
    name: "C 300 AMG",
    brand: "Mercedes",
    yearOfMake: 2022,
    numberOfWheels: 4,
    isEnvironmentFriendly: false
}
for (i in vehicle) {
    console.log(`${i} = ${vehicle[i]}`);
}