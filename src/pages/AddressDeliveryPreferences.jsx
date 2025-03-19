import React, { useState } from "react";

function AddressDeliveryPreferences() {
  const [addresses, setAddresses] = useState([
    { id: 1, type: "Home", address: "123 Main St, Springfield" },
    { id: 2, type: "Work", address: "456 Office Park, Metropolis" },
  ]);
  const [newAddress, setNewAddress] = useState("");
  const [newAddressType, setNewAddressType] = useState("Home");
  const [deliveryInstructions, setDeliveryInstructions] = useState(
    "Leave at the doorstep."
  );
  const [autoSave, setAutoSave] = useState(false);

  const handleAddAddress = () => {
    if (!newAddress) {
      console.error("Address cannot be empty.");
      return;
    }
    const newEntry = {
      id: addresses.length + 1,
      type: newAddressType,
      address: newAddress,
    };
    setAddresses((prev) => [...prev, newEntry]);
    setNewAddress("");
    setNewAddressType("Home");

    if (autoSave) {
      console.log("New address auto-saved:", newEntry);
    }
  };

  const handleDeleteAddress = (id) => {
    setAddresses((prev) => prev.filter((addr) => addr.id !== id));
    console.log(`Address with ID ${id} deleted.`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Address & Delivery Preferences</h1>

      {/* Saved Addresses Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Saved Addresses</h2>
        <ul className="space-y-4">
          {addresses.map((addr) => (
            <li
              key={addr.id}
              className="p-4 border border-gray-300 rounded-md flex justify-between items-center"
            >
              <div>
                <p className="font-semibold">{addr.type}</p>
                <p className="text-gray-600">{addr.address}</p>
              </div>
              <button
                onClick={() => handleDeleteAddress(addr.id)}
                className="px-3 py-1 bg-red-500 text-white rounded-md"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Add New Address Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Add New Address</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Address Type:</label>
            <select
              value={newAddressType}
              onChange={(e) => setNewAddressType(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="Home">Home</option>
              <option value="Work">Work</option>
              <option value="Custom">Custom</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Address:</label>
            <input
              type="text"
              value={newAddress}
              onChange={(e) => setNewAddress(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
        <button
          onClick={handleAddAddress}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Add Address
        </button>
      </section>

      {/* Delivery Instructions Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Preferred Delivery Instructions</h2>
        <textarea
          value={deliveryInstructions}
          onChange={(e) => setDeliveryInstructions(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </section>

      {/* Auto-Save New Addresses Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Auto-Save Preferences</h2>
        <div className="flex items-center space-x-4">
          <input
            type="checkbox"
            checked={autoSave}
            onChange={(e) => setAutoSave(e.target.checked)}
            className="w-5 h-5"
          />
          <label className="text-sm">Enable Auto-Save for New Addresses</label>
        </div>
      </section>
    </div>
  );
}

export default AddressDeliveryPreferences;
