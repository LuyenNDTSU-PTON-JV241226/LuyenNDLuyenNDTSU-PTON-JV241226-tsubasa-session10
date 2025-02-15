let a = +prompt("hãy nhập vào số a");
let b = +prompt("hãy nhập vào số b");
let c = +prompt("hãy nhập vào số c");
if (a > b && a > c){
    alert("số lớn nhất là số a: " + a);
}else if (b > a && b > c){
    alert("số lớn nhất là số b: " + b);
}else {
    alert("số lớn nhất là số c: " + c);
}