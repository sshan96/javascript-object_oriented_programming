function Person(name, first, second, third) {
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
    this.sum = function() {
        return this.first + this.second + this.third;
    }
}

var kim = new Person('kim', 10, 20, 30);
kim.sum = function() {
    return 'modified : ' + (this.first + this.second);
}
var lee = new Person('lee', 10, 10, 10);
lee.sum = function() {
    return 'modified : ' + (this.first + this.second);
}
console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());