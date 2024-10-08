const express = require("express");
const router = express.Router();
const {
  createAuction,
  getAllAuctions,
  getAuctionById,
  updateAuction,
  deleteAuction,
  bidAuctionbyId,
  bidpayId,
  bidpayStripe,
} = require("../controller/auctionController");

// create auction
router.post("/createauction", createAuction);

// get all auctions
router.get("/getallauction", getAllAuctions);

// get a specific auction by ID
router.get("/:email", getAuctionById);

// update an auction by ID
router.put("/:id", updateAuction);

router.put("/bid/:id", bidAuctionbyId);

router.put("/bid/pay/:id", bidpayId);

router.post("/bid/pay/stripe/:id",bidpayStripe)

// delete an auction by ID
router.delete("/:id", deleteAuction);

module.exports = router;
