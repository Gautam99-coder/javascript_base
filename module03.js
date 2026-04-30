//arrays and objects
//this module is very important for MERN.
//Products,users,cart items, and orders are all objects and arrays.

/**object basics */
//an object stores related data.


// const product={
//     brand:"stridex",
//     price:2499,
//     category:"men",
//     inStock:true,
// }

// console.log(product.brand);
// console.log(product.price);

/**Updating object values */
// const product ={
//     name:"Sneaker",
//     price:2000,
//     stock:10,
// };
// product.stock=2;
// product.name="Sport Shoes";
// console.log(product);


/**Array Basics*/
//An array stores many values.

// const categories = ['men','women','kids','trending'];

// console.log(categories[0])
// console.log(categories.length);

/**Array of Objects */
//This is the most important structure for e-commerce.

// const products=[
//     {id:1,name:'Sneaker',price:2499,category:'men'},
//     {id:2, name:"Sandal",price:999,category:"kids"},
//     {id:3,name:"Heel",price:2999,category:"women"},
// ]

// console.log(products[0].name)


/**map */
//map creates a new array
//in React, map is used to show lists.

// const products =[
//     {id:1,name:"Sneaker",price:2499},
//     {id:2,name:"Sandal",price:999}
// ];

// const productName=products.map((product)=>product.name);
// const productPrice=products.map((product)=>product.price);

// console.log(productName,productPrice);


/**filter */
//filter keeps matching items

// const products=[
//     {id:1,name:"Sneaker",price:2499,category:"men"},
//     {id:1,name:"Sneaker",price:2499,category:"men"},
//     {id:2,name:"Sandal",price:999,category:"kids"},
//     {id:2,name:"Sandal",price:999,category:"kids"},
//     {id:2,name:"Sandal",price:999,category:"kids"},
//     {id:2,name:"Sandal",price:999,category:"kids"},
//     {id:3,name:"Heel",price:2999,category:"women"},
// ]
// const menProducts = products.filter((product)=>product.category==="kids");

// console.log(menProducts)


/**find */
//find returns the first matching item.
// const products=[
//     {id:1,name:"Sneaker",price:2499},
//     {id:2,name:"Sandal",price:999},
// ]

// const product = products.find((item)=>item.id===2);
// console.log(product)

/**reduce */
//reduce combines many values into one value.
//used for cart total.

// const cartItems=[
//     {name:"Sneaker",price:1000,quantity:2},
//     {name:"Sandal",price:500,quantity:1}
// ]

// const cartTotal = cartItems.reduce((total,item)=>{
//     return total + item.price *  item.quantity;
// },0);

// console.log(cartTotal);


/**Product Search and cat total */
// const products = [
//   { id: 1, name: "Urban Runner", price: 2499, category: "men" },
//   { id: 2, name: "CloudWalk", price: 2199, category: "women" },
//   { id: 3, name: "Tiny Trek", price: 999, category: "kids" }
// ];

// const category = "kids";
// const filteredProducts = products.filter((product) => product.category === category);

// const searchText = "urban";
// const searchedProducts = products.filter((product) =>
//   product.name.toLowerCase().includes(searchText.toLowerCase())
// );

// const cartItems = [
//   { id: 1, name: "Urban Runner", price: 2499, quantity: 1 },
//   { id: 3, name: "Tiny Trek", price: 999, quantity: 2 }
// ];

// const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

// console.log(filteredProducts);
// console.log(searchedProducts);
// console.log(cartTotal);


/**from this array,get only whomen category products */
// const products =[
//     {name:"Sneaker",category:"men"},
//     {name:"Heel",category:"women"},
//     {name:"Flat",category:"women"},
// ]

// const womenProduct=products.filter((product)=>product.category==="women"
// );
// console.log(womenProduct)


/**find product with id 3 */

// const products = [
//   { id: 1, name: "Sneaker" },
//   { id: 2, name: "Sandal" },
//   { id: 3, name: "Heel" }
// ];

// const findProduct=products.find((item)=>
//     item.id===3
// );

// console.log(findProduct)


/**Calculate total Cart Qunatity */
// const cartItems = [
//   { name: "Sneaker", quantity: 2 },
//   { name: "Sandal", quantity: 1 },
//   { name: "Heel", quantity: 3 }
// ];

// const totalQuantity=cartItems.reduce((total,item)=>total + item.quantity,0
// )
// console.log(totalQuantity)


/**this part is importan and difficult.create a new cart array where product id 2 quantity
 * increases by 1
 */

// const cartItems = [
//   { id: 1, name: "Sneaker", quantity: 1 },
//   { id: 2, name: "Sandal", quantity: 2 }
// ];

// const updateCart=cartItems.map((item)=>
// {
//     if(item.id===2){
//         return {...item,quantity:item.quantity+1}
//     }
//     return item;
// });

// console.log(updateCart)


/** Search products by name using .includes()*/
// const products = [
//   { name: "Urban Runner" },
//   { name: "CloudWalk Trainer" },
//   { name: "Tiny Trek Sandal" }
// ];

// const search="trainer";
// const searchItems=products.filter((product)=>
//     product.name.toLowerCase().includes(search.toLowerCase())
// );
// console.log(searchItems)


