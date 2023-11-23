


const createNewUser = async (reqBody: any) => {
  console.log(reqBody);
};
type GetUsersType = {name:string, roll:number}
const getAllUsers = async (reqBody:GetUsersType ) => {
  return reqBody
};
const getUser = async (query: any) => {
  console.log(query);
};
const updateUser = async (query: any) => {
  console.log(query);
};
const removeUser = async (query: any) => {
  console.log(query);
};
const getUserOrders = async (query: any) => {
  console.log(query);
};
const updateUserOrder = async (query: any) => {
  console.log(query);
};
const getTotalAmountOfOrders = async (query: any) => {
  console.log(query);
};

export {
  createNewUser,
  getAllUsers,
  getUser,
  updateUser,
  removeUser,
  getUserOrders,
  updateUserOrder,
  getTotalAmountOfOrders,
};
