var kim = {
    name: 'kim',
    first: 10,
    second: 20
}

var lee = {
    name: 'lee',
    first: 10,
    second: 10
}
function sum(prefix) {
    return prefix + (this.first + this.second);
}

var kimSum = sum.bind(kim, '-> ');
console.log('kimSum()', kimSum());
