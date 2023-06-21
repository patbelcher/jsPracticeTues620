class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
compareAge(otherPerson) {
    if (this.age < otherPerson.age) {
        return `${otherPerson.name} is older than me`;
    } else if (this.age > otherPerson.age) {
        return `${otherPerson.name} is younger than me.`;
    } else {
        return `${otherPerson.name} is the same age as me`;
    }
}
}

//example usage
const p1 = new Person("John", 30);
const p2 = new Person("Sarah", 35);
const p3 = new Person("Michael", 30);

console.log(p1.compareAge(p2));//sarah is older than me
console.log(p2.compareAge(p1));//John is younger than me