/*
    ES6 classes are a major feature of the EcmaScript 6 version release.
    ES6 classes are a syntax that provides more familiar approach to object
    inheritance models that features a 'class' like syntax.
*/
class Person {
    
    // constructor keyword used for initializing values
    constructor(firstName, birthdate) {
        this.firstName = firstName;
        this.birthdate = birthdate;
    }
    
    // Method definitions
    sayHello() {
        console.log(`Hello, my name is ${this.firstName}`);
    }
}

const billy = new Person('Billy', new Date());
billy.sayHello();


class Student extends Person {
    
    constructor(firstName, birthdate, schoolName) {
        // calls parent constructor with its parameters
        super(firstName, birthdate);
        this.schoolName = schoolName;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.firstName} and I am a student at ${this.schoolName}`)
    }
}

const cindy = new Student('Cindy', new Date(), 'Billy School');
cindy.sayHello();


class CollegeStudent extends Student {
    constructor(firstName, birthdate, schoolName, major) {
        super(firstName, birthdate, schoolName);
        this.major = major;
    }

    sayHello(basicHello = false) {
        if(basicHello) {
            super.sayHello();
            return;
        }

        console.log(`Hello, my name is ${this.firstName} and I am a student majoring \
in ${this.major} at ${this.schoolName}`)
    }
}

const danny = new CollegeStudent('Danny', new Date(), 
                                'the University of South Florida', 'Computer Engineering');
danny.sayHello();
danny.sayHello(true);