import axios from "axios";
import React, { useState,useEffect } from "react";
function SettingsPage() {
  const [logo, setLogo] = useState("");
  const [status, setStatus] = useState("Online");
  const [maintenanceEnabled, setMaintenanceEnabled] = useState(false);
  const [maintenanceMessage, setMaintenanceMessage] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [preferredLanguage, setPreferredLanguage] = useState("English");
  const [timeZone, setTimeZone] = useState("");
  const [dateFormat, setDateFormat] = useState("DD/MM/YYYY");
  const [timeFormat, setTimeFormat] = useState("24-hour");
  const [name,setName]=useState("Zomato")

  
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await axios.get("http://localhost:5000/settings");
        const data = response.data.settings;

        // Update state with fetched settings
        setLogo(data.logo || "");
        setName(data.websiteName || "Zomato");
        setStatus(data.status || "Online");
        setMaintenanceEnabled(data.maintenanceEnabled || false);
        setMaintenanceMessage(data.maintenanceMessage || "");
        setStartTime(data.startTime || "");
        setEndTime(data.endTime || "");
        setPreferredLanguage(data.preferredLanguage || "English");
        setTimeZone(data.timeZone || "");
        setDateFormat(data.dateFormat || "DD/MM/YYYY");
        setTimeFormat(data.timeFormat || "24-hour");
      } catch (error) {
        console.error("Error fetching settings:", error);
      }
    };

    fetchSettings();
  }, []);

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogo(file);
    }
  };

  const handleSimulateStatus = () => {
    if (status === "Online") {
      setStatus("Degraded");
    } else if (status === "Degraded") {
      setStatus("Offline");
    } else {
      setStatus("Online");
    }
  };

  const handleSaveMaintenance = () => {
    alert("Maintenance settings saved.");
    console.log("Maintenance Enabled:", maintenanceEnabled);
    console.log("Message:", maintenanceMessage);
    console.log("Start Time:", startTime);
    console.log("End Time:", endTime);
  };
  

  const handleSaveSettings = async () => {
    try {
      const formData = new FormData();
      if (typeof logo === "object" && logo !== null || logo) {
        formData.append("logo", logo);
      }
      formData.append("websiteName", name);
      formData.append("status", status);
      formData.append("maintenanceEnabled", maintenanceEnabled);
      formData.append("maintenanceMessage", maintenanceMessage);
      formData.append("startTime", startTime);
      formData.append("endTime", endTime);
      formData.append("preferredLanguage", preferredLanguage);
      formData.append("timeZone", timeZone);
      formData.append("dateFormat", dateFormat);
      formData.append("timeFormat", timeFormat);
      console.log(formData);
      axios.post("http://localhost:5000/settings/settings", formData)
      .then((response)=>{
        console.log(response.data);
      })
    
    } catch (error) {
      console.error("Error saving settings:", error);
    }
  };

  return (
    <div className="p-2 space-y-8">
      
      {/* Website Logo Upload */}
      <div className="space-y-4 bg-white p-4 rounded-md w-full">
        <h2 className="text-lg font-semibold text-black-600">Website Logo</h2>
        <input
          type="file"
          accept="image/*"
          className="block w-full border border-gray-300 rounded-md p-2"
          onChange={handleLogoUpload}
        />
      <img
        src={`data:image/png;base64,${logo}`}
        alt="Website Logo"
        className="w-[150px] h-[150px] rounded p-2 m-1"
      />

      </div>

      <div className="space-y-4 bg-white p-4 rounded-md w-full">
        <h2 className="text-lg font-semibold text-black-600">Website Name</h2>
        <input
          type="text"
          className="block w-full border border-gray-300 rounded-md p-2"
          onChange={(e)=>setName(e.target.value)}
          value={name}
        />
        
      </div>


      {/* Website Status */}
      <div className="space-y-4 bg-white p-4 rounded-md w-full">
        <h2 className="text-lg font-semibold text-black-600">Website Status</h2>
        <p className="flex items-center space-x-2">
          <span
            className={`inline-block w-3 h-3 rounded-full ${
              status === "Online"
                ? "bg-green-500"
                : status === "Degraded"
                ? "bg-yellow-500"
                : "bg-red-500"
            }`}
          ></span>
          <span className="capitalize">{status}</span>
        </p>
        <button
          onClick={handleSimulateStatus}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-black-600 transition"
        >
          Simulate Status Change
        </button>
      </div>

      {/* Maintenance Mode */}
      <div className="space-y-4 bg-white p-4 rounded-md w-full">
        <h2 className="text-lg font-semibold text-black-600">Maintenance Mode</h2>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={maintenanceEnabled}
            onChange={() => setMaintenanceEnabled(!maintenanceEnabled)}
            className="mr-2 form-checkbox h-5 w-5 text-black-600"
          />
          <label className="text-sm">Enable Maintenance Mode</label>
        </div>
        {maintenanceEnabled && (
          <div className="space-y-4 mt-4">
            <textarea
              rows="3"
              placeholder="Enter maintenance message"
              value={maintenanceMessage}
              onChange={(e) => setMaintenanceMessage(e.target.value)}
              className="block w-full border border-gray-300 rounded-md p-2"
            ></textarea>
            <div>
              <label className="block text-sm font-medium mb-1">Start Time:</label>
              <input
                type="datetime-local"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">End Time:</label>
              <input
                type="datetime-local"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <button
              onClick={handleSaveMaintenance}
              className="bg-black-500 text-white px-4 py-2 rounded hover:bg-black-600 transition"
            >
              Save Settings
            </button>
          </div>
        )}
      </div>

      {/* Time & Language */}
      <div className="space-y-4 bg-white p-4 rounded-md w-full">
        <h2 className="text-lg font-semibold text-black-600">Time & Language</h2>
        <div>
          <label className="block text-sm font-medium mb-1">Preferred Language:</label>
          <select
            value={preferredLanguage}
            onChange={(e) => setPreferredLanguage(e.target.value)}
            className="block w-full border border-gray-300 rounded-md p-2"
          >
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Time Zone:</label>
          <select
            value={timeZone}
            onChange={(e) => setTimeZone(e.target.value)}
            className="block w-full border border-gray-300 rounded-md p-2"
          >
            <option value="">Select Time Zone</option>
            <option value="IST">IST (India Standard Time)</option>
            <option value="EST">EST (Eastern Standard Time)</option>
            <option value="PST">PST (Pacific Standard Time)</option>
            <option value="GMT">GMT (Greenwich Mean Time)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Date Format:</label>
          <select
            value={dateFormat}
            onChange={(e) => setDateFormat(e.target.value)}
            className="block w-full border border-gray-300 rounded-md p-2"
          >
            <option value="DD/MM/YYYY">DD/MM/YYYY</option>
            <option value="MM/DD/YYYY">MM/DD/YYYY</option>
            <option value="YYYY-MM-DD">YYYY-MM-DD</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Time Format:</label>
          <select
            value={timeFormat}
            onChange={(e) => setTimeFormat(e.target.value)}
            className="block w-full border border-gray-300 rounded-md p-2"
          >
            <option value="24-hour">24-hour</option>
            <option value="12-hour">12-hour</option>
          </select>
        </div>
      </div>
      <button className="w-28 h-8 bg-blue-500 rounded text-white " onClick={()=>handleSaveSettings()}>Update Settings</button>
    </div>
  );
}

export default SettingsPage;
