//**********************************************
//You should pick either declaration or expression functions. Only use 1 of these types in your code:
//FUNCTION DECLARATION
function foo() {
  console.log(“function declaration”);
}

//FUNCTION EXPRESSION - Assigns anonymous expression to a variable
var bar = function() {
  console.log(“function expression”);
}
//(it is recommended that you start with expressions only)

//**********************************************
//ARGUMENTS VS PARAMTERS
//Here, input is an argument:
var bar = function(input) {
  console.log(input);
}

//Here, x is a variable:
var x = ‘Hello world!’;
bar(x);

//**********************************************
//Does order matter with parameters?
// YES - IT DOES MATTER
bar(1, 2, 3);
// is different than
bar(3, 2, 1);


//**********************************************
//SCOPE
//Think of a pyramid. This is known as a "call stack."
//Inner functions can see variables in outer functions.
function a() {
  var x = 5;
  function b() {
    var y = 10;
    function c() {
      var z = 15;
    }
    function d() {
      console.log(x);//this equals 5
      console.log(y);//this equals 10
      console.log(z);//this is undefined
    }
  }
}
// In the above example, var z in function c is otuside of function d's scope.

//**********************************************
//METHOD VS FUNCTION
var obj = {};
obj.foo = function(){};//method
var bar = function(){};//function

