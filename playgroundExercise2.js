/*
Exercise 2 — Shopping Cart

Create an object called customer.

The customer should contain:

name
email
cart

The cart must be an array of objects






function calculateTotal(customer) {
    // Calculate the total price
}

function displayCart(customer) {
    // Display each product
}

function addProduct(customer, product) {
    // Add a new product to the cart
}

function findProduct(customer, productName) {
    // Find a product by its name
}
* */

const customer = {name:"Mildred",
    email:"milly@gmail.com",
    cart:[
        {itemName:"RAM card",pricePerItem:950,itemQuantity:2},
        {itemName:"Mouse",pricePerItem:130,itemQuantity: 1},
        {itemName:"External drive",pricePerItem: 1200,itemQuantity: 1}
    ]};

function calculateTotal(customerObject){
    let totalAmountDue = 0;
    const {cart} = customerObject;
    cart.forEach(item => {
        totalAmountDue += (item.pricePerItem * item.itemQuantity);
    });
    console.log(`\n\n\nThe total price for all the items in the cart is R ${totalAmountDue}`);
}

calculateTotal(customer);

function displayCart(customerObject){
    const {cart} = customerObject;
    if (cart.length > 0){
        cart.forEach(item => {
            console.log(`\n${item.itemQuantity} ${item.itemName}/s for a unit price of R ${item.pricePerItem}`);
        });
    } else {
        console.log("There are no items to display, as the cart is empty");
    }
}

displayCart(customer);

function addProduct(customerObject, productObject){
    const cart = customerObject.cart;
    cart.push(productObject);
    customerObject.cart = cart;
    console.log("\n\nHere is the updated cart:")
    customerObject.cart.map(item => console.log(`\n${item.itemQuantity} ${item.itemName}/s for a unit price of R ${item.pricePerItem}`))
}

addProduct(customer,{itemName:" Wireless Headphones",pricePerItem:2100,itemQuantity:1});

function findProduct(customerObject, productName){
    const {cart} = customerObject;
    const product = cart.filter(item => item.itemName === productName);
    if (product.length === 0){
        console.log(`${productName} could not be found!`);
    } else {
        product.map(prod => console.log(`\nFound ${prod.itemName}, it is priced at ${prod.pricePerItem} per unit.`));
    }
}

findProduct(customer,"RAM card");