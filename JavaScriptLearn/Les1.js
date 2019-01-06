//原始值: number,boolean,string,undefined,null. 存储位置:栈
var a = 5;
var c = false;
var b = 20.5;
var str = 'sdfasgerwer';
var u;
var n = null;
f = '1579846';
// document.write(c);
//引用值: array function Object ... date Regexp  存储位置：堆
var ar = [1,1.5,3];
arr = [2,5,6];
arr2 = arr;
arr = [1,5];
// arr2指向arr原有的堆空间，arr新赋值后arr有了新的空间，便指向了新的空间
document.write(arr2);   //arr2 = [2,5,6]
arr3 = arr;
arr.push(10);
// arr3 指向arr原有堆空间，arr push后在原有空间添加了一个数字，所以arr3的数值也跟着变更
document.write(arr3);