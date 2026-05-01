/**Async JavaScript */

//this module is  difficult and important.
//in MERN, async JavaScript is used for:
/**
    calling backend APIs
    reading MongoDB data
    login/register requests
    Stripe checkout
    loading product lists
 */

/**1. Synchronous code */
//Synchronous code runs line by line.
// console.log("Start");
// console.log("Middle");
// console.log("End");

/**2. Asynchronous Code */
//Async code may finish later.
// console.log("Start");
// setTimeout(() => {
//     console.log("loading finished");
// }, 2000);

// console.log("End");

/**3. Promise */
//A promise represents a future result.
// const paymentPromise = new Promise((resolve,reject)=>{
//     const paymentSuccess = true;
//     if(paymentSuccess){
//         resolve("payment successful");
//     }else{
//         reject("Payment failed");
//     }
// });

// paymentPromise
//     .then((message)=>console.log(message))
//     .catch((error)=>console.log(error));

/**4 async/await */
//async/await makes async code easer to read.

// function fakeApiCall(){
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve(['Sneaker','Sandal','Heel']);
//         }, 2000);
//     });
// }

// async function loadProducts() {
//     const products = await fakeApiCall();
//     console.log(products);
// }
// loadProducts()

/**try/catch */
//Use try/catch to handle errors.
// async function loadProducts() {
//     try{
//         const products = await fakeApiCall();
//         console.log(products);
//     }catch(error){
//         console.log("Something went wrong",error);
//     }
// }

/**fetch */
//fetch calls an API.

// async function getProducts(){
//     const response = await fetch("http://localhost:5000/api/products");
//     const data = await response.json();
//     console.log(data);
// }
// getProducts();


/**
    fake product api
 */

// function fetchProducts(){
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve([
//                 {id:1,name:"Sneaker",price:2499},
//                 {id:2,name:"Sandal",price:999}
//             ]);
//         }, 1000);
//     })
// }
// async function showProducts() {
//     try{
//         console.log("Loading products....");

//         const products = await fetchProducts();
//         console.log("Products loaded");
//         console.log(products);
//     }catch(error){
//         console.log("Failed to load Products");
//     }
// }
// showProducts()


/**Question 1 */
//Create a promise that resolves "Order placed" after 1 second.
// const orderPromise = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve("Order placed");
//     },1000)
// });
// orderPromise.then((message)=>console.log(message))


/**Question 2 */
// //convet this promise call to async/await
// FetchProducts().then((products)=>console.log(products));
// function FetchProducts(){
//     setTimeout(() => {
//     console.log("Mobile")
//     }, 2000);
// }
// async function loadProducts() {
//     const products = await FetchProducts();
//     console.log(products)
// }
// loadProducts()


/**Question 3 */
//Use try/catch around an async function.
// async function loadProducts() {
//   try {
//     const products = await fetchProducts();
//     console.log(products);
//   } catch (error) {
//     console.log("Could not load products");
//   }
// }
// loadProducts()

/**Question 4 */
//this is difficult Explain why this output happens:
// console.log("A");
// setTimeout(() => {
//     console.log("B")
// }, 1000);
// console.log("C")

/**
    Question 5
 */
//Write a fake login function that resolves if email and passowrd exist.

function fakeLogin(email, password) {
  return new Promise((resolve, reject) => {
    if (email && password) {
      resolve({ token: "demo-token", email });
    } else {
      reject("Email and password are required");
    }
  });
}

async function loginUser() {
  try {
    const user = await fakeLogin("test@example.com", "123456");
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}

loginUser();

/**

synchronous
asynchronous
promise
resolve
reject
async
await
try/catch
fetch
 */