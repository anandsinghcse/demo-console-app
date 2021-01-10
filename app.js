"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require('prompt-sync')({ sigint: true });
var stock = 1;
var price = 1.20;
console.log("\nHi, you are using Vanguard's Vending Machine");
while (1) {
    var action = prompt('\nPlease Enter 1 for Purchase, 2 for Resupply, 9 to Exit: ');
    while (isNaN(action)) {
        console.log('Invalid Input! Please enter Numeric value only.');
        action = prompt('\nPlease Enter 1 for Purchase, 2 for Resupply, 9 to Exit:');
    }
    if (Number(action) === 1) {
        var quantity = prompt('\nPlease Enter Number of Cans: ');
        while (isNaN(quantity)) {
            console.log('\nInvalid Input! Please Enter integer numbers only for number of cans.');
            quantity = prompt('\nPlease Enter Number of Cans: ');
        }
        quantity = Math.floor(quantity);
        var cash = prompt('\nPlease Enter Cash Amount: ');
        while (isNaN(cash)) {
            console.log('\nInvalid Input! Please Enter numeric value only for cash amount.');
            cash = prompt('\nPlease Enter Number of Cans: ');
        }
        cash = Number(cash).toFixed(2);
        if (stock >= quantity) {
            if (cash >= price * quantity) {
                stock = stock - quantity;
                var change = cash - (price * quantity);
                console.log('Enjoy your can! Your change is $' + change.toFixed(2));
            }
            else {
                console.log('Insufficient money');
            }
        }
        else {
            console.log('Out of stock');
        }
    }
    else if (Number(action) === 2) {
        var resupply = prompt('Please Enter Number of Resupply: ');
        while (isNaN(resupply)) {
            console.log('Invalid Input! Please Enter integer numbers only for resupply of cans.');
            resupply = prompt('Please Enter Number of Cans: ');
        }
        resupply = Math.floor(resupply);
        stock = stock + resupply;
        console.log('Resupplied with ' + resupply + ' cans');
    }
    else if (Number(action) === 9) {
        process.exit(0);
    }
}
//# sourceMappingURL=app.js.map