const express = require("express");
const router = express.Router();
const {
  loginAdmin,

} = require("../controller/adminController");
const { passwordVerificationLimit } = require("../lib/email-sender/sender");

//login a admin
router.post("/login", loginAdmin);

module.exports = router;
