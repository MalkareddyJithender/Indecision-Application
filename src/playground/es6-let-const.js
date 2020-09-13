var nameVar = 'Jithender';
var nameVar = 'jithu2';
console.log('nameVar',nameVar);

let nameLet = 'Sandeep';
 nameLet = 'sandy';
console.log('nameLet',nameLet);

const nameConst = 'Mittu';
console.log('nameConst',nameConst)

function jithu()
{
    const petName = 'puppy';
    return petName;
}

const petName = jithu();
console.log(petName);

//Block Scoping

const fullName = 'Malkareddy Jithender';
let firstName;
if(fullName)
{
     firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);


// function jithu()
// {
//   for(let i=0;i<4;i++)
//   {
//       console.log(i);
//   }
//   console.log(i);
// }
// jithu();

