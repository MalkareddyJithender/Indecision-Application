//Es5 standard function 

 const square = function (x)
{
    return x*x;
}

console.log(square(4));

//Es6 arrow function
// const squareArrow = (x)  =>
// {
//       x*x;
// }

//Es6 arrow function - short-hand syntax
const squareArrow = (x)  =>  x*x;

console.log(squareArrow(5));

//Challenge
const fullName = 'Malkareddy Jithender';
const getFirstName = (fullname) => fullname.split(' ')[0];

console.log(getFirstName('Malkareddy Jithender'))
