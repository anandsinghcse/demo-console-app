export {};
    const prompt = require('prompt-sync')({sigint: true});

    let stock: number = 1;
    let price: number = 1.20;


    console.log("\nHi, you are using Vanguard's Vending Machine");
    while (1) {
        let action: number = prompt('\nPlease Enter 1 for Purchase, 2 for Resupply, 9 to Exit: ');
        while (isNaN(action)) {
            console.log('Invalid Input! Please enter Numeric value only.');
            action = prompt('\nPlease Enter 1 for Purchase, 2 for Resupply, 9 to Exit:');
        }
        if (Number(action) === 1) {
            let quantity: number = prompt('\nPlease Enter Number of Cans: ');
            while (isNaN(quantity)) {
                console.log('\nInvalid Input! Please Enter integer numbers only for number of cans.');
                quantity = prompt('\nPlease Enter Number of Cans: ');
            }
            quantity = Math.floor(quantity);
            let cash = prompt('\nPlease Enter Cash Amount: ');
            while (isNaN(cash)) {
                console.log('\nInvalid Input! Please Enter numeric value only for cash amount.');
                cash = prompt('\nPlease Enter Number of Cans: ');
            }
            cash = Number(cash).toFixed(2);
            if (stock >= quantity) {
                if (cash >= price * quantity) {
                    stock = stock - quantity;
                    let change: number = cash - (price * quantity);
                    console.log('Enjoy your can! Your change is $' + change.toFixed(2));
                } else {
                    console.log('Insufficient money');
                }
            } else {
                console.log('Out of stock');
            }
        } else if (Number(action) === 2) {
            let resupply = prompt('Please Enter Number of Resupply: ');
            while (isNaN(resupply)) {
                console.log('Invalid Input! Please Enter integer numbers only for resupply of cans.');
                resupply = prompt('Please Enter Number of Cans: ');
            }
            resupply = Math.floor(resupply);
            stock = stock + resupply;
            console.log('Resupplied with ' + resupply + ' cans');
        } else if (Number(action) === 9) {
            process.exit(0);
        }
    }