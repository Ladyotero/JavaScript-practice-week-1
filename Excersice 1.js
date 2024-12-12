// PseudoCode//
Begin
//declare variables
declare numberOfToppings AS INTEGER
declare basePizzaCost AS REAL
declare toppingCost AS REAL
declare totalCost AS REAL

//Define the constants 
 SET basePizzaCost TO  10.00
 SET toppingCost TO 1.50

//Prompt user for the number of toppings
 PRINT "Enter the number of Toppings you want in your Pizza;"
 Input numberOfToppings

// validation of input
IF numberOfToppings IS NOT A VALID NUMBER OR numberOfToppings < 0 THEN
 PRINT "Please enter a valid number of toppings."
 RETURN
END IF 

//Calculate the entire cost of the Pizza
SET totalCost TO basePizzaCost + (numberOfToppings * toppingCost)

//Check out the cart
PRINT"Base pizza cost: $", basePizzaCost
PRINT "Cost of toppings:", (numberOfToppings * toppingCost)
PRINT "The Total Cost of the Pizza; $", totalCost

//Return totalCost
RETURN totalCost
      
END 






'use strict'

function orderPIZZA() {
console.log("Thank you for your Pizza's Order!");

    //declare variables
    let numberOfToppings;
    const basePizzaCost = 10.0;
    const toppingCost = 1.50;
    let totalCost;


    //prompt the number of toppings
    numberOfToppings = prompt("Enter the number of toppings:");

    //total of the toppings
    numberOfToppings = parseInt(numberOfToppings, 10);
    
    //validate the number of toppings
    if (isNaN(numberOfToppings) || numberOfToppings < 0) {
    console.log("Please enter a valid number of toppings.");
    return;
    }

    //calculate the cost of the pizza
    totalCost = basePizzaCost + (numberOfToppings * toppingCost);


    //print the detail of the order
    console.log("Base Pizza cost: $", basePizzaCost.toFixed(2));
    console.log("Cost of toppings: $", (numberOfToppings * toppingCost).toFixed(2));
    console.log("The Total cost of your Pizza: $", totalCost.toFixed(2));

    return totalCost;
}

//calling the function
orderPIZZA();