var superObj = {superVal: 'super'};
var subObj = {subVal: 'sub'};
subObj.__proto__ = superObj;
console.log('subObj.subVal =>', subObj.subVal);
console.log('subObj.superVal =>', subObj.superVal);
subObj.superVal = 'sub';
console.log('superObj.superVal =>', superObj.superVal); //output: super 객체를 바꾸는 것이지 객체의 proto를 바꾸는 것이 아님.
