// Filter

const arr = [5, 1, 3, 2, 6];

const output = arr.filter((x) => {
    return x < 3

})

//console.log(output)

// Reduce

const findSum = arr.reduce(function(acc, curr) {
    acc = acc + curr;
    return acc;
},0)

//console.log(findSum)

const findMax = arr.reduce(function(acc, curr){
    if(acc < curr){
        acc = curr
    }

    return acc
},0)

//console.log(findMax)

/*********************************/

const users = [
  { firstName: "Kobe", lastName: "Bryant", age: 42 },
  { firstName: "Lebron", lastName: "James", age: 37 },
  { firstName: "Shaquille", lastName: "O'neil", age: 50 },
  { firstName: "Luka", lastName: "Doncic", age: 23 },

];

const output3 = users.reduce(function(acc, curr){
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age]
    } else {
    acc[curr.age] = 1
    }
    return acc
}, {})

//console.log(output3)

const lessThan30 = users.filter(x => x.age < 45).map((x => x.firstName));

console.log(lessThan30);