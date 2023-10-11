const fx = require("./controllers/usersController");

//getAllUsers
console.log(fx.getAllUsers());

//creatNewUser
let body = { firstname: "D", lastname: "D" };
fx.createNewUser(body);
console.log(fx.getAllUsers());

//updateUser
body = { id: "3", firstname: "Dupont", lastname: "D" };
fx.updateUser(body);
console.log(fx.getAllUsers());

//delete
fx.deleteUser(body);
console.log(fx.getAllUsers());

//get User
console.log(fx.getUser({ id: "1" }));
