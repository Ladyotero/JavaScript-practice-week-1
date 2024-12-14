/*Start 
Declare variables for the $ of each cafe
-Set expressoPrice to the fixxed $ of an expresso
-Set americanoPrice to the fixxed $ of an americano
-Set saltcaramelPrice to the fixxed $ of an salt caramel 
-Set lattePrice to the fixxed $ of an latte
-Set mochaPrice to the fixxed $ of an mocha
-Set cappuccinoPrice to the fixxed $ of an americano/*

//calculate the subtotal (assuming the ordering one of each)
-add the $ of one expressoPrice to the fixed price on an expresso, americano, salt caramel, latte, mocha, americano and store the result in subtotal.

//calculate the tax
-Multiply the subtotal by the tax rate (18%) and store the result in taxAmount

//Calcualte the total cost
=Add the subtotal and taxAmount to get totalCost


//Print the total cost
End 





'use strict'

//Declare coffes $
const expressoPrice = 2.55 //Price of a expresso
const americanoPrice =3.75 // Price of a americano
const saltcaramelPrice = 4.25// Price of a salt caramel 
const lattePrice = 4.55 //Price of a latte
const mochaPrice = 5.25 //Price of an mocha
const cappuccinoPrice =4.75 //Price of cappucino

//Calcualte subtotal (assuming you are ordering on of each)
const subtotal = expressoPrice + americanoPrice + saltcaramelPrice + lattePrice + mochaPrice + cappuccinoPrice;

//Calculate tax
const taxRate =.18; //18% tax rate
const taxAmount = subtotal * taxRate;

//Calculate total cost
const totalCost = subtotal + taxAmount;

//Print the total cost
console.log(`The total for your order is $${totalCost.toFixed(2)}`);