import Joi from "joi";

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const emailMessage =
  "Invalid email Address. try to [ user@example.com, alice_smith@company.co.uk, my.email@domain.com ] way";

const userNameValidator = Joi.object({
  firstName: Joi.string()
    .required()
    .trim()
    .max(20)
    .regex(/^[A-Z][a-z]*$/, { name: "capitalize" }),
  lastName: Joi.string().required().trim(),
});
const userAddressValidator = Joi.object({
  street: Joi.string().required().trim(),
  city: Joi.string().required().trim(),
  country: Joi.string().required().trim(),
});
const userOrdersValidator = Joi.object({
  productName: Joi.string().required(),
  price: Joi.number().required(),
  quantity: Joi.number().required(),
});

const userValidator = Joi.object({
  userId: Joi.number(),
  username: Joi.string().required().trim(),
  password: Joi.string().required().trim(),
  fullName: userNameValidator.required(),
  age: Joi.number().required(),
  email: Joi.string().trim().regex(emailRegex).message(emailMessage).required(),
  isActive: Joi.boolean().required(),
  hobbies: Joi.array().items(Joi.string().required()).required(),
  address: userAddressValidator.required(),
  orders: Joi.array().items(userOrdersValidator.required()).required(),
});

export default userValidator;
