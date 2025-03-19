import React, { useRef, useState,useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Axios from "axios"

function Faq() {
  const [videos, setVideos] = useState([]);
  const [editVideoName, setEditVideoName] = useState(null);
  const [faqs,setFaqs]=useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editedAnswer, setEditedAnswer] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(()=>{
    handleFetchMails();
  })

  const [type, setType] = useState("");
  const videoRef = useRef();
  const handleFetchMails=()=>{
    Axios.get("https://admin-dashboard-2-ck9x.onrender.com/faq")
    .then((response)=>{
      setFaqs(response.data.faqs)
    })
  }
  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditedAnswer(faqs[index].a);
  };

  const handleInputChange = (e) => {
    setEditedAnswer(e.target.value);
  };

  const handleSaveClick = (index) => {
    console.log(editedAnswer)
    Axios.post(`https://admin-dashboard-2-ck9x.onrender.com/faq/${index}`,{a:editedAnswer})
    .then((response)=>{
      console.log(response.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  };

  const handleDeleteClick = (index) => {
    setFaqs(faqs.filter((_, i) => i !== index));
  };

  const filteredFaqs = selectedCategory
    ? faqs.filter((faq) => faq.category === selectedCategory)
    : faqs;

  const handleVideoSubmit = (event) => {
    const video = event.target.files[0];
    if (video) {
      const videoUrl = URL.createObjectURL(video);
      setVideos((prevVideos) => [...prevVideos, { type: type, video: videoUrl }]);
    }
  };

  const handleVideoPlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  const handleVideoDeleteClick = (indexToDelete) => {
    const remainVideos = videos.filter((_, index) => index !== indexToDelete);
    setVideos(remainVideos);
  };

  const handleVideoEditClick = (editIndex) => {
    setEditVideoName(editIndex);
    setType(videos[editIndex].type);
  };
  const handleSendToDashboard = () => {
    console.log("Sending FAQs to Dashboard:", faqs);
    alert("FAQs sent to Dashboard!");
  };

  return (
    <div className="bg-gray-50 min-h-screen w-full p-6">
      <div className="max-w-full mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Frequently Asked Questions and Support Resources
        </h1>

        <div className="mb-6">
          <select
            className="block w-full p-3 text-sm font-semibold border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Tiffin">Tiffin</option>
            <option value="Live Event">Live Event</option>
            <option value="Restaurant Dashboard">Restaurant Dashboard</option>
            <option value="Modulator Dashboard">Modulator Dashboard</option>
            <option value="Marketing">Marketing</option>
            <option value="clam Restaurant">Clam Restaurant</option>
          </select>
        </div>

        <div className="space-y-6">
          {filteredFaqs.map((item, i) => (
            <div key={i} className="border-b pb-4 last:border-0">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium text-gray-700">
                  {i + 1}. {item.q}
                </span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEditClick(i)}
                    className="p-2 bg-blue-100 rounded-full hover:bg-blue-200"
                  >
                    <FaEdit className="text-blue-600" />
                  </button>
                  <button
                    onClick={() => handleDeleteClick(i)}
                    className="p-2 bg-red-100 rounded-full hover:bg-red-200"
                  >
                    <FaTrash className="text-red-600" />
                  </button>
                </div>
              </div>
              {editIndex === i ? (
                <div className="mt-3">
                  <input
                    type="text"
                    value={editedAnswer}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <button
                    onClick={() => handleSaveClick(item._id)}
                    className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <p className="text-base text-gray-600 mt-2">{item.a}</p>
              )}
            </div>
          ))}
        </div>

        {/* "Send to Dashboard" Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleSendToDashboard}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
          >
            Send to Dashboard
          </button>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Upload Videos</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <select
              className="block w-full p-3 text-sm font-semibold border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => setType(e.target.value)}
            >
              <option value="">Choose a category</option>
              <option value="Tiffin">Tiffin</option>
              <option value="Live Event">Live Event</option>
              <option value="Restaurant Dashboard">Restaurant Dashboard</option>
              <option value="Modulator Dashboard">Modulator Dashboard</option>
              <option value="Marketing">Marketing</option>
            </select>
            <input
              type="file"
              accept="video/*"
              onChange={handleVideoSubmit}
              className="file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:text-blue-700 hover:file:bg-blue-200"
            />
          </div>

          {videos.length > 0 && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <div key={index} className="bg-gray-100 rounded-lg shadow-md p-4">
                  <video
                    src={video.video}
                    onClick={handleVideoPlay}
                    ref={videoRef}
                    className="w-full rounded-md cursor-pointer"
                    controls
                  />
                  <p className="text-center text-sm font-medium text-gray-700 mt-2">
                    {video.type || "Uncategorized"}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Faq;
