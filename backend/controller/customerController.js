require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Customer = require("../models/customer");

const registerCustomer = async (req, res) => {
  const { name, email, password } = req.body;
  const isAdded = await Customer.findOne({ email: email });

    const newUser = new Customer({
      name,
      email,
      password: bcrypt.hashSync(password),
    });
    newUser.save();
    const token = signInToken(newUser);
    res.send({
      token,
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
    });
  
};


const loginCustomer = async (req, res) => {
  try {
    const customer = await Customer.findOne({ email: req.body.registerEmail });
    console.log("customer:", req.body.registerEmail);

    if (
      customer &&
      customer.password &&
      bcrypt.compareSync(req.body.password, customer.password)
    ) {
      const token = signInToken(customer);
      res.send({
        token,
        _id: customer._id,
        name: customer.name,
        email: customer.email,
        address: customer.address,
        phone: customer.phone,
        image: customer.image,
        isAdmin: customer.isAdmin,
      });
    } else {
      res.status(401).send({
        message: "Invalid user or password!",
      });
    }
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};




const signUpWithProvider = async (req, res) => {
  try {
    // const { user } = jwt.decode(req.body.params);
    const user = jwt.decode(req.params.token);

    // console.log("user", user);
    const isAdded = await Customer.findOne({ email: user.email });
    if (isAdded) {
      const token = signInToken(isAdded);
      res.send({
        token,
        _id: isAdded._id,
        name: isAdded.name,
        email: isAdded.email,
        address: isAdded.address,
        phone: isAdded.phone,
        image: isAdded.image,
      });
    } else {
      const newUser = new Customer({
        name: user.name,
        email: user.email,
        image: user.picture,
      });

      const signUpCustomer = await newUser.save();
      const token = signInToken(signUpCustomer);
      res.send({
        token,
        _id: signUpCustomer._id,
        name: signUpCustomer.name,
        email: signUpCustomer.email,
        image: signUpCustomer.image,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getAllCustomers = async (req, res) => {
  try {
    const users = await Customer.find({}).sort({ _id: -1 });
    res.send(users);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    res.send(customer);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const updateCustomer = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (customer) {
      customer.name = req.body.name;
      customer.email = req.body.email;
      customer.address = req.body.address;
      customer.phone = req.body.phone;
      customer.image = req.body.image;
      const updatedUser = await customer.save();
      const token = signInToken(updatedUser);
      res.send({
        token,
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        address: updatedUser.address,
        phone: updatedUser.phone,
        image: updatedUser.image,
      });
    }
  } catch (err) {
    res.status(404).send({
      message: "Your email is not valid!",
    });
  }
};

const deleteCustomer = (req, res) => {
  Customer.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.status(500).send({
        message: err.message,
      });
    } else {
      res.status(200).send({
        message: "User Deleted Successfully!",
      });
    }
  });
};

module.exports = {
  loginCustomer,
  registerCustomer,
  addAllCustomers,
  signUpWithProvider,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};
