const data = {
  users: require("../model/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};

const getAllUsers = () => {};

const createNewUser = (body) => {
  // create newUser

  //update data users created new user

  return data.users;
};

const updateUser = (body) => {
  // data users find user

  // update user

  // filter data users !user

  //update data users with updated user

  return data.users;
};

const deleteUser = (body) => {
  // data users find user

  // filter data users !user

  //update data users

  return data.users;
};

const getUser = (body) => {
  // data users find user

  return user;
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
  getUser,
};
