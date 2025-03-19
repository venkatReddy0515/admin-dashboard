import React, { useState } from "react";

function Maintenance() {
  const [status, setStatus] = useState("online");

  const [maintenanceEnabled, setMaintenanceEnabled] = useState(false);
  const [maintenanceMessage, setMaintenanceMessage] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleSimulateStatus = () => {
    if (status === "online") {
      setStatus("degraded");
    } else if (status === "degraded") {
      setStatus("offline");
    } else {
      setStatus("online");
    }
  };

  const handleToggle = () => {
    setMaintenanceEnabled(!maintenanceEnabled);
  };

  const handleSave = () => {
    console.log("Maintenance Mode Enabled:", maintenanceEnabled);
    console.log("Maintenance Message:", maintenanceMessage);
    console.log("Start Time:", startTime);
    console.log("End Time:", endTime);
    alert("Maintenance settings saved.");
  };

  const getStatusIndicator = () => {
    let indicatorClass = "inline-block w-3 h-3 rounded-full mr-2";
    if (status === "online") return <span className={`${indicatorClass} bg-green-500`}></span>;
    if (status === "degraded") return <span className={`${indicatorClass} bg-yellow-500`}></span>;
    if (status === "offline") return <span className={`${indicatorClass} bg-red-500`}></span>;
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl">
        {/* Web Status Section */}
        <div className="bg-white rounded border mb-6 p-4">
          <h2 className="text-lg font-semibold mb-4">Web Status</h2>
          <p className="mb-4 flex items-center">
            {getStatusIndicator()}
            <span className="capitalize">{status}</span>
          </p>
          <button
            onClick={handleSimulateStatus}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Simulate Status Change
          </button>
        </div>

        {/* Maintenance Mode Section */}
        <div className="bg-white rounded border p-4">
          <h2 className="text-lg font-semibold mb-4">Maintenance Mode</h2>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="maintenanceToggle"
              checked={maintenanceEnabled}
              onChange={handleToggle}
              className="mr-2 form-checkbox h-5 w-5 text-blue-600"
            />
            <label htmlFor="maintenanceToggle" className="text-sm">
              Enable Maintenance Mode
            </label>
          </div>
          {maintenanceEnabled && (
            <div id="maintenanceSettings" className="space-y-4">
              <div>
                <label
                  htmlFor="maintenanceMessage"
                  className="block text-sm font-medium mb-1"
                >
                  Custom Maintenance Message:
                </label>
                <textarea
                  id="maintenanceMessage"
                  rows="4"
                  className="w-[400px] border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter maintenance details here"
                  value={maintenanceMessage}
                  onChange={(e) => setMaintenanceMessage(e.target.value)}
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="startTime"
                  className="block text-sm font-medium mb-1"
                >
                  Start Time:
                </label>
                <input
                  type="datetime-local"
                  id="startTime"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="w-[400px] border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="endTime"
                  className="block text-sm font-medium mb-1"
                >
                  End Time:
                </label>
                <input
                  type="datetime-local"
                  id="endTime"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  className="w-[400px] border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                Save Maintenance Settings
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Maintenance;
