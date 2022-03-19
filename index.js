/*document.write("mohammad ali<br/>");
document.write("01626213833<br/>");
document.write("germany<br/>");
//variable
var name="mohammad ali"
document.write(name);
var num1=10;
var num2=20;
var sum=num1+num2;
document.write(sum);

var num1=10;
var num2=20;
var sum=num1%num2;
document.write(sum);

var num=20;
num=toString(num)
document.write(typeof(num));
var number=2.5678;
console.log(number.toFixed(2));

var firstName="mohammad";
var lastName="ali";
var fullName=firstName+lastName;
document.write("my name is" +fullName);

var text="bangladesh";
var len=text.length;
document.write("number of character" +text.length);

var text=prompt("enter your name");
document.write("number of character" +text.length);

var text="ali"
text=text.toUpperCase();
document.write(text);

var base=prompt("enter base= ");
var height=prompt("enter height= ");
var area=base*height;
document.write("area =" +area);
//> grater then
//<less then

document.write(num1>num2);

// letter grade
var marks=prompt("enter your marks: ");
if(marks>100 || marks<0)
document.write("invalid marks");
else if(marks>=80 && marks<=100)
document.write("A+");
else if(marks>=70 && marks<+79)
document.write("A");
else if(marks>=60 && marks<+69)
document.write("A1");
else if(marks>=50 && marks<+59)
document.write("B");
else if(marks>=40 && marks<+49)
document.write("C");
else if(marks>=33 && marks<+39)
document.write("D");
else
document.write("fail");

var digit =prompt("enter any digit:");
switch(digit){
    case"0":
    console.log("zero");
    break;
    case"1"
    console.log("one");

}


for(var x=1;x<=10; x=x+1){
    document.write(" " +x);
}
document.write("<h1>end</h1>");


var sum=0;
for(var x=1;x<=5;x=x+1){
    sum=sum+x;
}
document.write(sum);


var num1=parseInt(prompt("enter your first number"));
var num2=parseInt(prompt("enter your second number"));
var sum=num1+num2;
document.write(sum);

var i=1;
while(i<=100){
    document.write(" "+i);
    i=i+1;
}

var i=1;
var sum=0;
while(i<=5){
sum=sum+i;
i=i+1;
}
document.write(sum);
*/

var i=1;
var sum=0;
while(i<=100){
    if(i%3==0 && i%5==0){
        document.write("" +i);
        sum=sum+i;
    }
    i=i+1;
}
document.write("" +sum);
