# demo-console-app
Demo Console App for Vending Machine. This app is written is Typescript and runs on nodejs environment.

PRE REQUISITE:
Please ensure nodejs (v8.x or above) and npm (v6.x or above) are installed on your system.

DOWNLOAD AND INSTALLATION:
1. git clone https://github.com/anandsinghcse/demo-console-app.git
2. run command "npm install" in root directory

START:
To start application run command "npm start" in root directory.


This is a console / terminal based application written in TypeScript that represents a soft drink can vending machine. Input from the user is given via the console/terminal.

The vending machine contains an initial stock of cans and will be able to accept purchases, respond with change and stock, as well as accept resupply. The cost of a can is $1.20.

Scenarios
Initial stock: 1 can

Action 1
Input: Purchase 1 can with $2.
Expected output: Return 1 can with correct change.

Action 2 (This scenario to be tested when available stock is >= 1)
Input: Purchase 1 can with $1
Expected output: Return error, “Insufficient money”

Action 3
Input: Purchase 1 can with $1.50
Expected output: Return error, “Out of stock”

Action 4
Input: Resupply with 10 cans
Expected output: “Resupplied with 10 cans”

Action 5
Input: Purchase 3 cans with $5.00
Expected output: Return 3 can with correct change.

