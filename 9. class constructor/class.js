class Person {
    constructor(name, first, second) {
        this.name = name;
        this.first = first;
        this.second = second;
    }
}

var kim = new Person('kim', 10, 20);
console.log('kim', kim);

/* var kim = new Person('kim', 10, 20);
kim.sum = function() {
    return 'this : ' + (this.first + this.second);
}
var lee = new Person('lee', 10, 10); 
console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum()); */