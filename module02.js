//conditions
//conditions help your code make decisions.
// const stock=10;
// if(stock>0)
// {
//     console.log("Product is available");
// }else{
// console.log("Product is out of stock")
// }


/**else if */
//use else if when you have many possible decisions.

// const rating=4.6;

// if(rating >=4.5){
//     console.log("Top rated");
// }else if(rating >=4){
//     console.log("Good Product");
// }else{
//     console.log("Average product")
// }


/**switch */
//switch is useful when one value has many possible cases

// const category="men";

// switch(category){
//     case "men":
//         console.log("show men's footwear");
//         break;
//     case "women":
//         console.log("show women's footwear");
//         break;
//     case "kids":
//         console.log("show kids footwear");
//         break;
//     default:
//         console.log("show all footwear");
// }


/**loops */
//loops repeat work.
//for loop
// for(let i=1; i<=5; i++){
//     console.log(`Product number ${i}`);
// }

// const sizes=[6,7,8,9,10];
// for(const size of sizes){
//     console.log(`Available size: ${size}`);
// }

/**Functions */
//functions are reusable blocks of code.

// function calculateDiscount(originalPirce,price){
//     return originalPirce - price;
// }

// const discount=calculateDiscount(3999,2499);

// console.log(discount);

/**Arrow functions */
//modern javascript often uses arrow functions.

// const calculateTotal=(price,quantity)=>{
//     return price * quantity;
// };
// console.log(calculateTotal(1500,2));


//short version
// const calculateTotal=(price,quantity)=>price*quantity;
// console.log(calculateTotal(2499,2))
/** \
 *mini project cart calculator
*/

// function calculateItemTotal(price,quantity){
//     return price*quantity;
// }

// function calculateDelivery(cartTotal){
//     if(cartTotal>=999){
//         return 0;
//     }
//     return 99;
// }
// function calculateFinalTotal(price,quantity){
//     const itemTotal=calculateItemTotal(price,quantity);
//     const delivery=calculateDelivery(itemTotal);
//     return itemTotal + delivery;
// }

// console.log(calculateFinalTotal(499,1))
// console.log(calculateFinalTotal(1200,1))





/** write a function that checks product stock */
// function checkstock(stock){
//     if(stock>0){
//         return "In stock";
//     }else{
//         return "Out of stock";
//     }
// }

// console.log(checkstock(9))
// console.log(checkstock(0))


/**write a function that returns discount amount. */
// function discountAmount(originalPirce,price){
//     return originalPirce - price;
// }

// console.log(discountAmount(5000,4500));

/**print all available shoe sizes from this array */

//const sizes=[ 6,7,8,9,10]

// const sizes=[6,7,8,9,10]
// for(const size of sizes){
//     console.log(`size ${size} is available`);
// }