
var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));

var add = function(number1, number2) {
  return number1 + number2;
};

var result = add(number1, number2);
alert(result);




var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));

var subtract = function(number1, number2) {
  return number1 - number2;
};

var result = subtract(number1, number2);
alert(result);




var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));

var multiply = function(number1, number2) {
  return number1 * number2;
};

var result = multiply(number1, number2);
alert(result);




var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));

var divide = function(number1, number2) {
  return number1 + number2;
};

var result = divide(number1, number2);
alert(result);


add (5,3);
subtract(7,6);
multiply(6,6);
divide(6,2);



var myHeight = prompt("Enter height");
var myWeight = prompt("enter weight");

var BMI = function(height,weight) {
    alert (parseFloat((weight/height)*703));
}

BMI (myHeight, myWeight);




var fahrenheit = prompt("Enter temp in fahrenheit: ");

var convertFtoC = function(fahrenheit) {
    return parseFloat(((fahrenheit - 32) * 5) / 9);
}

alert(convertFtoC(fahrenheit));




var celsius = prompt("Enter temp in Celsius: ");

var convertCtoF = function(celsius) {
  return parseFloat((celsius * 1.8) + 32);
}

alert(convertCtoF(celsius));




var gallonsToConvert = prompt("Enter gallons to convert to litres: ");

var gallonsToLiters = function(gallons) {
  return parseFloat(gallons / 0.26417);
}

alert(gallonsToLiters(gallonsToConvert));




var litresToConvert = prompt("Enter litres to convert: ");

var litresToGallons = function(litres) {
  return parseFloat(litres * 0.26417);
}

alert(litresToGallons(litresToConvert));
