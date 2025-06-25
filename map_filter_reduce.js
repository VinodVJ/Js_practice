const arr = [5,2,1,6,7];

// map
const double = arr.map((x) => x*2);
console.log('double', double, 'original', arr);

//filter
const even = arr.filter((x) => x%2 === 0);
console.log('even', even, 'original', arr);

//reduce
const total = arr.reduce((acc, cur) => acc = acc + cur);
console.log('arr total', total, 'original', arr);

const largest = arr.reduce((max, cur) => max = cur > max? cur : max);
console.log('arr largesr', largest, 'original', arr);

const personalData = [
    {firstName: 'Vinod', lastName: 'J', age: 30},
    {firstName: 'Ranjitha', lastName: 'P', age: 28},
    {firstName: 'Kavya', lastName: 'J', age: 40},
    {firstName: 'Kehav', lastName: 'K', age: 50},

]

//reduce to print first name and lastname of people less than 35 age
// ex output [vinod, ranjitha]

const output = personalData.reduce(((acc, cur) => 
{
    acc = [];
    if (cur.age < 35){
        acc.push('cur.firstName + cur.lastName')
    }
    return acc;
}))
console.log('output', output, 'original', personalData);

//foreach
// const triple = arr.forEach((x) => x*3);
// console.log('triple', triple, 'original', arr);