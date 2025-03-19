import React, { useEffect, useState } from "react";
import { FaCheck, FaPhoneAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FiAlertCircle } from "react-icons/fi";
import Modal from "./OrderModel";

export const DisplayOrder = ({ heading, order }) => {
  const [orderStatus, setOrderStatus] = useState(order);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    setOrderStatus(order);
  }, [heading, order]);

  const handleAlertClick = (order) => {
    setSelectedOrder(order);
  };

  const closeModal = () => {
    setSelectedOrder(null);
  };

  const handleConform = (id) => {
    setOrderStatus((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: "confirmed" } : item
      )
    );
  };

  const handleCancel = (id) => {
    setOrderStatus((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: "cancelled" } : item
      )
    );
  };

  return (
    <div className="p-4">
      {/* Heading */}
      <h1 className="font-bold text-4xl uppercase text-gray-800 mb-6">
        {heading}
      </h1>

      {/* Orders Container */}
      <div className="flex gap-6 flex-wrap">
        {orderStatus.map((item, index) => (
          <div
            key={index}
            className="w-64 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 transition-transform transform hover:scale-105"
          >
            {/* Order Header */}
            <div className="bg-gray-100 p-4 border-b border-gray-200 relative">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-lg text-gray-700">
                  Order ID: {item.id}
                </h2>
                <div className="text-right text-sm text-gray-500">
                  <button
                    className="relative -top-2 right-2 p-1 text-gray-500 hover:text-gray-800 transition"
                    title="More Info"
                    onClick={() => handleAlertClick(item)}
                  >
                    <FiAlertCircle className="w-4 h-4" />
                  </button>
                  <h2>{item.time}</h2>
                  <h2>{item.date}</h2>
                </div>
              </div>
            </div>

            {/* Order Details */}
            <div className="p-4 space-y-2">
              <div className="flex justify-between">
                <h2 className="text-gray-600">{item.subcategory}</h2>
                <div>
                  <h2 className="text-gray-600">
                    {item.item} x {item.quantity}
                  </h2>
                </div>
              </div>
              <h2 className="text-gray-700 font-medium">{item.Name}</h2>
              <h2 className="text-gray-600 text-sm">
                Pick-up Time:{" "}
                <span className="text-gray-800">{item.pickuptime}</span>
              </h2>
              <h2 className="text-gray-600 text-sm">
                Category: <span className="text-gray-800">{item.category}</span>
              </h2>
              <h2 className="text-gray-600 text-sm">
                Subcategory:{" "}
                <span className="text-gray-800">{item.subcategory}</span>
              </h2>
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-gray-800">
                  Price: ${item.price}
                </h2>
                <h2 className="text-gray-600">{item.payment}</h2>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-around items-center p-1">
              {/* Confirm Order */}
              <button
                className="flex items-center justify-center w-8 h-8 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
                title="Confirm Order"
                onClick={() => handleConform(item.id)}
              >
                <FaCheck className="h-5 w-5" />
              </button>
              {/* Cancel Order */}
              <button
                className="flex items-center justify-center w-8 h-8 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
                title="Cancel Order"
                onClick={() => handleCancel(item.id)}
              >
                <IoMdClose className="h-5 w-5" />
              </button>
              {/* Call Icon */}
              <button
                className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
                title="Call"
              >
                <FaPhoneAlt className="h-5 w-5" />
              </button>
            </div>

            {/* Status */}
            <div className="bg-gray-50 p-4 border-t border-gray-200">
              <h2 className="font-medium text-gray-700">
                Status:{" "}
                <span
                  className={`${
                    item.status === "pending"
                      ? "text-yellow-500"
                      : item.status === "confirmed"
                      ? "text-green-500"
                      : "text-red-500"
                  } font-bold`}
                >
                  {item.status}
                </span>
              </h2>
            </div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={!!selectedOrder}
        onClose={closeModal}
        order={selectedOrder}
      />
    </div>
  );
};
