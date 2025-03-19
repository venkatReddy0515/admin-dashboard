import { useEffect, useState } from "react";

function AccountManagement({active,handleActive}) {
  const [isActive, setIsActive] = useState(active);

  const handleToggleStatus = () => {
    if (isActive === "Active") {
      handleActive("inactive");
      setIsActive("Inactive");
    } else {
      handleActive("active");
      setIsActive("Active")
    }
  };
  
  useEffect(()=>{
    setIsActive(active)
  },[active])

  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete this account? This action cannot be undone.")) {
      alert("Account deleted successfully.");
      
    }
  };

  return (
    <div className="p-4 flex gap-6">
      

      <div className="mb-4 ">
        
        <button
        className={`px-4 py-2 rounded text-white ${
            isActive === "Active" ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
        }`}
        onClick={() => handleToggleStatus()}
        >
        {isActive === "Active" ? "Deactivate Account" : "Activate Account"}
        </button>

      </div>

      <div>
        <button
          className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded"
          onClick={handleDeleteAccount}
        >
          Delete Account
        </button>
      </div>
    </div>
  );
}

export default AccountManagement;
