import React, { useState } from "react";

function PaymentsAndSubscriptions() {
  const [paymentMethods, setPaymentMethods] = useState([
    { id: 1, type: "UPI", details: "venkat@upi" },
    { id: 2, type: "Card", details: "**** **** **** 1234 (Visa)" },
    { id: 3, type: "Wallet", details: "Paytm Wallet" },
  ]);

  const [subscriptions, setSubscriptions] = useState([
    { id: 1, name: "Premium Plan", status: "Active", nextBilling: "2025-03-15" },
    { id: 2, name: "Basic Plan", status: "Cancelled", nextBilling: "-" },
  ]);

  const [invoices, setInvoices] = useState([
    { id: 1, date: "2025-02-15", amount: "$10", status: "Paid" },
    { id: 2, date: "2025-01-15", amount: "$10", status: "Paid" },
  ]);

  const handleDeletePaymentMethod = (id) => {
    setPaymentMethods((prev) => prev.filter((method) => method.id !== id));
  };

  const cancelSubscription = (id) => {
    setSubscriptions((prev) =>
      prev.map((sub) =>
        sub.id === id ? { ...sub, status: "Cancelled", nextBilling: "-" } : sub
      )
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">Payments & Subscriptions</h1>

      {/* Payment Methods */}
      <section className="mb-6 bg-white rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold mb-4">Saved Payment Methods</h2>
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className="flex items-center justify-between p-2 border-b last:border-b-0"
          >
            <p>
              <strong>{method.type}:</strong> {method.details}
            </p>
            <button
              onClick={() => handleDeletePaymentMethod(method.id)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          onClick={() => alert("Add Payment Method modal opened!")}
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Add Payment Method
        </button>
      </section>

      {/* Active Subscriptions */}
      <section className="mb-6 bg-white rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold mb-4">Manage Active Subscriptions</h2>
        {subscriptions.map((sub) => (
          <div
            key={sub.id}
            className="p-2 border-b last:border-b-0 flex items-center justify-between"
          >
            <div>
              <p className="font-semibold">{sub.name}</p>
              <p className="text-sm text-gray-600">Status: {sub.status}</p>
              <p className="text-sm text-gray-600">Next Billing: {sub.nextBilling}</p>
            </div>
            {sub.status === "Active" && (
              <button
                onClick={() => cancelSubscription(sub.id)}
                className="text-red-500 hover:text-red-700"
              >
                Cancel Subscription
              </button>
            )}
          </div>
        ))}
      </section>

      {/* Billing & Invoices */}
      <section className="bg-white rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold mb-4">Billing & Invoices</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Date</th>
              <th className="border border-gray-300 p-2">Amount</th>
              <th className="border border-gray-300 p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id} className="text-center">
                <td className="border border-gray-300 p-2">{invoice.date}</td>
                <td className="border border-gray-300 p-2">{invoice.amount}</td>
                <td className="border border-gray-300 p-2">{invoice.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default PaymentsAndSubscriptions;
