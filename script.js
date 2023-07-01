// myProducts.filter((item)=>item.title.includes(search.value))

// myCartProductArray = myProducts.filter((item)=> myCartIDs.includes(item.id))
// const user = {
//     fname:"divya",
//     age:22,
// };
// user.fname="def";
// delete user.age;
// console.log(user);

// const value = (function(a) { //Immediate invoke function
//     delete a; //delete wont work in this only work in obj
//     return a;
// })(5);
// console.log(value);

// let a = {b:10};
// console.log(a.b);
//redirecting to login page

const loginBtn = document.getElementById("log");
const signupBtn = document.getElementById("signup");

loginBtn.addEventListener("click", function () {
  console.log("Login button clicked");
  window.location.href = "./login/index.html";
});

signupBtn.addEventListener("click", function () {
  console.log("signup button clicked");
  window.location.href = "./signup/index.html";
});
function entry(){
  if(localStorage.getItem("currentUser")){
      window.location.href = "./shop/shop.html";    
  }
}
entry();