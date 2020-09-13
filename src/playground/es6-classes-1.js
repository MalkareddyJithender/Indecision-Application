class Person 
{
   constructor(name='Anonymous',age=0)
   {
       this.name = name;
       this.age=age;
   }

   getGretting()
   {
       return `I am ${this.name}!`;
   }

   getDescription()
   {
       return `${this.name} has ${this.age} year(s) old !`
   }
}

class Student extends Person
{
    constructor(name,age,group)
    {
        super(name,age);
        this.group = group;
    }

    hasGroup()
    {
        return !!this.group;
    }

    getDescription()
    {
        let description = super.getDescription();

        if(this.hasGroup())
        {
            description = description + `Their group is ${this.group}.`
        }
        return description;
    }
}

    class Traveller extends Person
    {
        constructor(name,age,homeLocation)
        {
            super(name,age);
            this.homeLocation = homeLocation;
        }

        hashomeLocation()
        {
            return !!this.homeLocation;
        }

        getGretting()
        {
        let Gretting= super.getGretting();
        
        if(this.hashomeLocation())
        {
            Gretting = Gretting + `I am visiting from ${this.homeLocation}.`
        }
        return Gretting;
        }
    }

// const me = new Student('Malkareddy Jithender',20,'Computer Science');
// console.log(me.getDescription());

// const another = new Student();
// console.log(another.getDescription());

const me = new Traveller('Naveen',24,'Mentrajpally');
console.log(me.getGretting());

const another = new Traveller();
console.log(another.getGretting());