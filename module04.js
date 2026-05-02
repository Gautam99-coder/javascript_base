/**Modern JavaScript */
//modern JavaScript appears everywhere in React and Express
//1. Destructuring objects
//Destructuring extracts values from objects.

// const product= {
//     name:"Urban Runner",
//     price: 2499,
//     category:"men"
// }

// const {name,price,category}=product;
// console.log(name);
// console.log(price)
// console.log(category);


/**Destructuring Arrays */
// const sizes=[6,7,8];
// const [firstSize,secondSize,third]=sizes;
// console.log(firstSize);
// console.log(secondSize);
// console.log(third);

/**Spread Operator */
//Spread copies values.

// const sizes = [6,7,8]
// const newSizes=[...sizes,9];
// console.log(newSizes)

// const product={name:"Sneaker",price:2000};
// const updatedProduct ={...product,price:1800};
// console.log(updatedProduct);

/**Default parameters */
// function getProducts(category="all"){
//     console.log(`showing category:${category}`);
// }
// getProducts();
// getProducts("men");
// getProducts("hello");

/**Short Circuit */
//Useful for conditional UI.
// const cartCount = 2;
// cartCount > 0 &&  console.log("Show cart badge");

/**Ternary Operator */
//short if/else
// const stock =1;
// const message = stock >  0 ? "In stock":"out of stock";
// console.log(message)

/**Product Formatter */
// function formatProduct(product){
//     const {name,price,originalPrice,stock} = product;
//     const discount = originalPrice - price;
//     const stockMessage = stock >0?  "In stock":"Out of stock";

//     return{
//         ...product,
//         discount,
//         stockMessage,
//         displayText:`${name} const Rs.${price}`
//     };
// }

// const product = {
//     name:"Urban Runner",
//     price:2499,
//     originalPrice:3999,
//     stock:0
// };

// console.log(formatProduct(product))


/**Use destructuring to get name and price. */
// const products ={
//     name:"Sneaker",
//     price:2000,
//     brand:"Nike"
// };

// const {name,price,brand}=products;

// console.log(`Name : ${name} price: Rs.${price}`);

/**Object destructuring extracts properties into variables. */
//use spread to add one new size to this array
// const sizes=[6,7,8];
// const newSizes=[...sizes,9];
// console.log(newSizes)

/**Use ternary operator to create stock message. */
// const stock = 4;
// const message = stock >0 ?"In stock":"Out of stock";
// console.log(message)

/**
object destructuring
array destructuring
spread operator
default parameter
short circuit
ternary
 */