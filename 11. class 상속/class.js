class Person{
    constructor(name, first, second) {
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum() {
        return this.first + this.second;
    }
/*     avg() {
        return (this.first + this.second) / 2
    } */
}

class PersonPlus extends Person{
    avg() {
        return (this.first + this.second) / 2
    } 
}
var kim = new PersonPlus('kim', 10, 20);
console.log("kim.sum()", kim.sum());
console.log("kim.avg()", kim.avg());