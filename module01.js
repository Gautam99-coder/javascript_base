/**
 *JavaScript controls ui behavior
    javascript runs withNode.js and creates APIs.
    showing products
    filtering products
    adding to cart
    calling backend APIs
    creating Express routes
    handling MongoDB data
 */

const { type } = require("firebase/firestore/pipelines");

/**
 *Variables
    Use const when the variable should not be reassigned.
 */

//     const webisteName="Footwears shppy";
//     const category="men";
//     // const price=2499;

//     console.log(webisteName);
//     console.log(category);
//     console.log(price);

// //use let when the value can change,
// let cartCount=0;

// cartCount = cartCount+1;
// cartCount = cartCount +1;

// console.log(cartCount);


//avoid var in modern javascript

//Dataypes 
// const productName="urban Runner Sneakers";
// const price=2488;
// const inStock=true;
// const selectedSize=null;
// let couponCode;

// console.log(typeof productName)
// console.log(typeof price)
// console.log(typeof inStock)
// console.log(selectedSize)
// console.log(couponCode)


/**Operators */
// const price=2499;
// const deliveryCharge=99;
// const total =  price + deliveryCharge;
// console.log(total);


/**Comparison */
// const price=2499;
// console.log(price>1000);
// console.log(price===2499);
// console.log(price!==3000);

/**logical */
// const isLoggedIn = true;
// const hasCartItems = true;

// console.log(isLoggedIn && hasCartItems);
// console.log(isLoggedIn || hasCartItems);
// console.log(!isLoggedIn);

/**Template Strings */
//Template strings help combine text and variavles.
// const productName="Urban Runner Sneakers";
// const price= 2499;
// const message=`${productName} costs Rs.${price}`;
// console.log(message)


// const productName="Urban Runner Sneakers";
// const price=2499;
// const originalPrice=3999;
// const deliveryCharge=0;

// const discount=originalPrice - price;
// const finalPrice= price + deliveryCharge;

// console.log(`Product: ${productName}`);
// console.log(`Price: ${price}`);
// console.log(`Orginal Price: ${originalPrice}`);
// console.log(`Discount: ${discount}`)
// console.log(`Final Price: Rs.${finalPrice}`);




//pratice Questions
/**Create variables for:
 *product Name
    brand
    price
    stock
    is avaiable
 */

//     const productName="Nike Sneaker";
//     const brand="Nike";
//     const price=3000;
//     const stock=12;
//     const isAvailable=true;


// console.log(`${productName} by ${brand} costs Rs.${price} and stock is ${stock}`);
// console.log(isAvailable);

/**question 2 */
//A product price is 2000. Delivery charge is 100.Coupon discount is 300.Calculate final price.
// const price=2000;
// const deliveryCharge=100;
// const discount=100;
// const finalPrice=price+deliveryCharge-discount;

// console.log(finalPrice)


/**question 3 */
//check if a product can be sold. Product can be sod only if:
// const stock=8;
// const isActive=true;
// const canSell=stock>0 &&  isActive;
// console.log(canSell)

//both condition must be true