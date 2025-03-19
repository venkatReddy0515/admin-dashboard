import React, { useState, useEffect } from "react";
import PolicyManager from "./PolicyManager";
import Axios from "axios";

function TermsAdd() {
  const [selectedCategory, setSelectedCategory] = useState("adminDashboard");
  const [policies, setPolicies] = useState({
    privacyPolicies: [],
    termsOfService: [],
  });

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  useEffect(() => {
    const fetchPolicies = async () => {
      try {
        const response = await Axios.get(`http://localhost:5000/policy/policies/${selectedCategory}`);
        if (response.data) {
          setPolicies({
            privacyPolicies: response.data.privacyPolicies || [],
            termsOfService: response.data.termsOfService || [],
          });
        }
      } catch (error) {
        console.error("Error fetching policies:", error);
      }
    };

    fetchPolicies();
  }, [selectedCategory]);

  return (
    <div className="p-6 space-y-8">
      <div className="space-y-4">
        <label htmlFor="category" className="block text-lg font-semibold">
          Select Policy Category
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="block w-full p-2 border rounded-md"
        >
          <option value="adminDashboard">Admin Dashboard</option>
          <option value="liveEvents">Live Events</option>
          <option value="customer">Customer</option>
          <option value="tiffen">Tiffen</option>
          <option value="marketing">Marketing</option>
          <option value="modulatorDashboard">Modulator Dashboard</option>
        </select>
      </div>

      <PolicyManager
        title="Privacy Policy Management"
        title1="privacyPolicies"
        defaultPolicies={policies.privacyPolicies}
        category={selectedCategory}
      />
      <PolicyManager
        title="Terms of Service Management"
        title1="termsOfService"
        defaultPolicies={policies.termsOfService}
        category={selectedCategory}
      />
    </div>
  );
}

export default TermsAdd;
