import React from "react";
import { IoMdClose } from "react-icons/io";

const Modal = ({ isOpen, onClose, order }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-800">Order Details</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 transition"
          >
            <IoMdClose className="h-5 w-5" />
          </button>
        </div>

        {/* Order Details */}
        <div className="space-y-2">
          <h2>
            <span className="font-semibold">Order ID:</span> {order.id || "N/A"}
          </h2>
          <h2>
            <span className="font-semibold">Name:</span> {order.Name || "Guest User"}
          </h2>
          <h2>
            <span className="font-semibold">Category:</span> {order.category || "General"}
          </h2>
          <h2>
            <span className="font-semibold">Subcategory:</span>{" "}
            {order.subcategory || "Miscellaneous"}
          </h2>
          <h2>
            <span className="font-semibold">Items:</span> {order.item || "Unknown"} x{" "}
            {order.quantity || 1}
          </h2>
          <h2>
            <span className="font-semibold">Pick-up Time:</span>{" "}
            {order.pickuptime || "Not Specified"}
          </h2>
          <h2>
            <span className="font-semibold">Status:</span>{" "}
            <span
              className={`${
                order.status === "pending"
                  ? "text-yellow-500"
                  : order.status === "confirmed"
                  ? "text-green-500"
                  : "text-red-500"
              } font-bold`}
            >
              {order.status || "Unknown"}
            </span>
          </h2>
          <h2>
            <span className="font-semibold">Coupon Code:</span>{" "}
            {order.couponCode || "WELCOME50"}
          </h2>
          <h2>
            <span className="font-semibold">Offers:</span>{" "}
            {order.offers || "Flat 50% off on your first order"}
          </h2>
          <h2>
            <span className="font-semibold">Address:</span>{" "}
            {order.address || "123 Main Street, Springfield"}
          </h2>
          <h2>
            <span className="font-semibold">Total Price:</span> $
            { order.price || "29.99"}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Modal;
