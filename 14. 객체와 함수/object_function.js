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

// sum();
console.log("sum.call(kim)", sum.call(kim, '=> ')); //비슷한 기능을 하는 apply 함수가 있음.
console.log("lee.call(lee)", sum.call(lee, ': '));
