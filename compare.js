//Q1

var a = 10
var b = 5
var c = 12
var e = 8
var d
f= (a*(c-b)/e+(b+c))
g= (e*(c+a)/(b+c)+a)
d= f<=g
console.log(d)
if(d==1){
  console.log(f)
}else{
  console.log(g)
}

//Q2

var n = 2
var p = 4
var q = 5
var w = 3
r=((p*q)/n)
console.log(r)
s=((q*w)+n/p)
console.log(s)

// u=(-p + q- + '' + -n)
// console.log(u)

// console.log(!(r<=s))
// t=(++p + w++ + '' + ++n)
// console.log(t)

if (!(r<=s)){
  console.log(++p + w++ + '' + ++n)
}
else {
console.log(-p + q- + '' + -n)
}

