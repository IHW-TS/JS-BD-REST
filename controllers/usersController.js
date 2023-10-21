const data = {
  users: require("../model/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};

const getAllUsers = () => {
  return data.users;
};

const createNewUser = (body) => {
  // create newUser
  const newUser = {
    id: data.users.length + 1,
    firstname: body.firstname,
    lastname: body.lastname
  };

  //update data users created new user
  data.users.push(newUser);

  return data.users;
};

const updateUser = (body) => {
  // data users find user
  const user = data.users.find(user => user.id === body.id);

  // update user
  user.firstname = body.firstname;
  user.lastname = body.lastname;

  // filter data users !user
  const updatedUsers = data.users.filter(user => user.id !== body.id);

  //update data users with updated user
  data.users = [...updatedUsers, user];

  return data.users;
};

const deleteUser = (body) => {
  // data users find user
  const user = data.users.find(user => user.id === body.id);

  // filter data users !user
  const updatedUsers = data.users.filter(user => user.id !== body.id);

  //update data users
  data.users = updatedUsers;

  return data.users;
};

const getUser = (body) => {
  // data users find user
  const user = data.users.find(user => user.id === body.id);

  return user;
};

console.log(getAllUsers());
console.log(createNewUser({ firstname: 'D', lastname: 'D' }));
console.log(updateUser({ id: 3, firstname: 'Dupont', lastname: 'D' }));
console.log(deleteUser({ id: 3 }));
console.log(getUser({ id: 1 }));

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
  getUser,
};
