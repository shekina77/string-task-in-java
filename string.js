var string1="  good";
var string2="morning  ";
var trimstr1=string1.trim();
var trimstr2=string2.trim();
console.log(trimstr1)
console.log(trimstr2)
var concatstr=trimstr1.concat(trimstr2)
console.log(concatstr)
var uppercase=concatstr.toUpperCase();
console.log(uppercase);

var string="  GoodMorning  ";
var trimstr1=string.trim();
console.log(trimstr1);
console.log(trimstr1.length)
var middleportion=trimstr1.slice(3,7)
console.log(middleportion);
var lastindex=middleportion.lastIndexOf('r');
console.log(lastindex);
var lowercase=middleportion.toLocaleLowerCase();
console.log(lowercase);

var a="a";
var string="hello";
var concatstr=a.concat(string);
console.log(concatstr);
var uppercasestr=concatstr.toUpperCase();
console.log(uppercasestr);
console.log(uppercasestr.length);
var a1=uppercasestr.charAt(4);
console.log(a1)


var a="GoodMorning";
var b="Helloworld";
var a1=a.slice(0,3);
var b1=b.slice(7,10);
console.log(a1)
console.log(b1)
var concatstr=a1.concat(b1);
console.log(concatstr)
var uppercase=concatstr.charAt(0).toUpperCase()+concatstr.slice(1);
console.log(uppercase)
var uppercase=uppercase.slice(0,-1)+concatstr.charAt(uppercase.length-1).toUpperCase();
console.log(uppercase);


var string="  good morning  ";
var trim=string.trim();
var string1=trim.charAt(0).toUpperCase()+trim.slice(1);
console.log(string1)
console.log(trim.length)
var string1=string1.slice(0,-1)+trim.charAt(string1.length-1).toUpperCase();
console.log(string1)
var a=string1.slice(2,6);
var b="nice";
var a1=a.concat(b);
console.log(a1);

var a="hello there, how are you";
var b="are";
var index=a.indexOf(b);
console.log(index);