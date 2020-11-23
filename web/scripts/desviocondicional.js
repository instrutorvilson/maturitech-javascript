/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*var idade = 18;

if(idade < 18){
    document.write("Vc é menor de idade");
}else{
    document.write("Vc é maior de idade");
}*/

var x = 10;
var y = "10";

//testar igualdade de valor
document.write(x == y);
document.write("<br />");
//testar igualdade valor e de tipo
document.write(x === y);
document.write("<br />");

//testar desigualdade de valor
document.write(x != y);
document.write("<br />");
//desigualdade de valor e tipo
document.write(x !== y);
document.write("<br />");

var a = 10;
var b = 20;
var c = "30";
var r = a + b + c;
document.write("<br />");
document.write(r);

document.write("<hr />");

var time = 20;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
document.write(greeting);
