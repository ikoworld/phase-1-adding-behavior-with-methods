// Your code here
class Cat {
    constructor(name,sex) {
        this.name=name;
        this.sex=sex;
    }
    speak(){
        return  `${this.name} says meow!`;
    }
  }
 const cat = new Cat("Sasha", "female");
  class Dog {
    constructor(name,sex) {
        this.name=name;
        this.sex=sex;
    }
    speak(){
        return  `${this.name} says woof!`;
    }
  }
 const dog = new Dog("Rufio", "male");

  class Bird {
    constructor(name,sex) {
        this.name=name;
        this.sex=sex;
    }
    speak(){
        return this.sex==='male'? `It's me! ${this.name}, the parrot!`: `${this.name} says squawk!`;
    }
  }
 const bird = new Bird("Pablo", "male");
  const bird2 = new Bird("Mable", "female");