import React, { useState } from "react";
import axios from "axios";

const AuctionForm = () => {
  const [itemName, setItemName] = useState("");
  const [itemModel, setItemModel] = useState("");
  const [modelYear, setModelYear] = useState("");
  const [date, setDate] = useState("");
  const [details, setDetails] = useState("");
  const [startingPrice, setStartingPrice] = useState("");
  const [auctionStartTime, setAuctionStartTime] = useState("");
  const [auctionEndTime, setAuctionEndTime] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")).email
      : ""
  );

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

  

    try {
      const { data } = await axios.post(
        "http://localhost:3001/api/auctoin/createauction",
        {
          itemName,
          email,
          modelName: itemModel,
          modelYear,
          date,
          details,
          startingPrice,
          auctionStartTime,
          auctionEndTime,
          image: image,
        }
      );

      alert("Form Submited");
    } catch (err) {
      alert("For Submitted due");
    }

    // Reset the form
    setItemName("");
    setItemModel("");
    setModelYear("");
    setDate("");
    setDetails("");
    setStartingPrice("");
    setAuctionStartTime("");
    setAuctionEndTime("");
    setImage(null);
  };

  return (
    <div>
      <form
        className="w-full max-w-lg my-10 md:px-0 px-5"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="itemName"
            >
              Item Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="ItemName"
              type="text"
              placeholder="Enter your item name"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="ItemModel"
            >
              Item model
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="itemModel"
              type="text"
              placeholder="Enter your item model"
              value={itemModel}
              onChange={(e) => setItemModel(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="modelYear"
            >
              Model Year
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="modelYear"
              type="text"
              placeholder="Enter your model year"
              value={modelYear}
              onChange={(e) => setModelYear(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="date"
            >
              Date
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-white font-bold mb-2"
              htmlFor="Details"
            >
              Item Details
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="Details"
              type="text"
              placeholder="Enter item details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
    
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="startPrice"
            >
              Start Price
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="startPrice"
              type="text"
              placeholder="Enter start price"
              value={startingPrice}
              onChange={(e) => setStartingPrice(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="auctionStartTime"
            >
              Auction Start Time
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="auctionStartTime"
              type="date"
              value={auctionStartTime}
              onChange={(e) => setAuctionStartTime(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="auctionEndTime"
            >
              Auction End Time
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="auctionEndTime"
              type="date"
              value={auctionEndTime}
              onChange={(e) => setAuctionEndTime(e.target.value)}
            />
          </div>
          <div className="w-full px-3 mt-2">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="item-image"
            >
              Add Image
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="item-image"
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <p className="text-gray-600 text-xs italic mt-2">
              Upload an image for the item
            </p>
          </div>
        </div>

        <div className="flex md:justify-end justify-center">
          <button
            type="submit"
            className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuctionForm;
