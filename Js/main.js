var a = 1;
var b = 2;
if (a == b) {
  console.log("dk dung");
} else {
  console.log("dk sai");
}

var a = 1;
var b = 2;
/*Kết quả của phép so sánh chỉ trả về true or false*/
var isSuccess = a > b;

console.log(isSuccess);

/*
    - 0
    - false
    - ' ' - " "
    - underfined
    - NaN
    - null
    Đây là những giá trị false
*/

if (false) {
  console.log("dk dung");
} else {
  console.log("dk sai");
}

var c = -1;

if (!(a > 0 && b < 0) || c > 0) {
  console.log("dung");
}

var isUnderfined;
/* chỉ khai báo biến thì giá trị chả về sẽ là underfined*/
console.log(isUnderfined);

var isNull = null;
console.log(isNull);

var a = 1;
var b = 2;
var c = a + b;
console.log(c);
