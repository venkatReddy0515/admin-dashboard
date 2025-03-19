import React, { useState } from "react";
import SettingsInfo from "./SettingsInfo";
import TermsPopup from "./TermsPopup";
import Privacy from "./Privacy";
import PersonalizationManager from "./Persolization";
// import AddressDeliveryPreferences from "./AddressDeliveryPreferences"
// import PaymentsAndSubscriptions from "./PaymentsAndSubscriptions"

const WebsiteManager = () => {
  const [currentTab, setCurrentTab] = useState("settings");

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 fixed h-full">
        <h1 className="text-2xl font-bold mb-6 text-blue-500">Settings</h1>
        <nav className="space-y-4">
          <button
            onClick={() => setCurrentTab("settings")}
            className={`block w-full text-left px-4 py-2 rounded-md ${
              currentTab === "settings" ? "bg-blue-500 text-white" : "hover:bg-gray-200"
            }`}
          >
            Settings
          </button>
          <button
            onClick={() => setCurrentTab("terms")}
            className={`block w-full text-left px-4 py-2 rounded-md ${
              currentTab === "terms" ? "bg-blue-500 text-white" : "hover:bg-gray-200"
            }`}
          >
            Terms and Conditions
          </button>
          <button
            onClick={() => setCurrentTab("privacy")}
            className={`block w-full text-left px-4 py-2 rounded-md ${
              currentTab === "privacy" ? "bg-blue-500 text-white" : "hover:bg-gray-200"
            }`}
          >
            Privacy & Security
          </button>
          <button
            onClick={() => setCurrentTab("personalization")}
            className={`block w-full text-left px-4 py-2 rounded-md ${
              currentTab === "personalization" ? "bg-blue-500 text-white" : "hover:bg-gray-200"
            }`}
          >
            Personalization
          </button>
          {/* Uncomment if needed */}
          {/* <button
            onClick={() => setCurrentTab("address")}
            className={`block w-full text-left px-4 py-2 rounded-md ${
              currentTab === "address" ? "bg-blue-500 text-white" : "hover:bg-gray-200"
            }`}
          >
            Delivery Preferences
          </button>
          <button
            onClick={() => setCurrentTab("payment")}
            className={`block w-full text-left px-4 py-2 rounded-md ${
              currentTab === "payment" ? "bg-blue-500 text-white" : "hover:bg-gray-200"
            }`}
          >
            Payments & Subscription
          </button> */}
        </nav>
      </aside>

      {/* Main Content */}
      <div className=" flex-1 p-6">
        <header className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-700">
            {currentTab === "settings" && "Settings"}
            {currentTab === "terms" && "Terms and Conditions"}
            {currentTab === "privacy" && "Privacy & Security"}
            {currentTab === "personalization" && "Personalization"}
            {/* Uncomment if needed */}
            {/* {currentTab === "address" && "Delivery Preferences"} */}
            {/* {currentTab === "payment" && "Payments & Subscription"} */}
          </h2>
        </header>
        <main>
          {/* Tab Content */}
          {currentTab === "settings" && <SettingsInfo />}
          {currentTab === "terms" && <TermsPopup />}
          {currentTab === "privacy" && <Privacy />}
          {currentTab === "personalization" && <PersonalizationManager />}
          {/* Uncomment if needed */}
          {/* {currentTab === "address" && <AddressDeliveryPreferences />} */}
          {/* {currentTab === "payment" && <PaymentsAndSubscriptions />} */}
        </main>
      </div>
    </div>
  );
};

export default WebsiteManager;
