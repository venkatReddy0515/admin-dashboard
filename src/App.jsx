import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardHome from "./pages/DashboardHome";
import Help from "./pages/Help";
import RestaurantList from "./pages/RestaurantList";
import Upload from "./pages/Upload";
import EventList from "./pages/EventList";
import ChatPanel from "./pages/ChatPanel";
import UserAccessControl from "./components/Admin/UserAccessControl";
import FormSwitch from "./components/Form/index/FormSwitch";

import Notifications from "./pages/Notifications";
import HistoryLogs from "./pages/HistoryLogs";
import Analytics from "./pages/Analytics";
import OrderManagement from "./pages/OrderManagement";
import UserManagement from "./pages/UserManagement";
import Support from "./pages/Support";
import ManageAdmin from "./pages/ManageAdmin";
import OrderDetails from "./cards/OrderDetails";
// import AddNewRestaurant from "./pages/AddNewRestaurant";
import RestuarantRegistration from "./components/RestuarantRegistration/RestuarantRegistration";
import AddRestaurant from "./components/Form/AddRestaurant";
import ClaimRestaurant from "./pages/ClaimRestaurant";
import CollectionManagement from "./pages/CollectionManagement";
import Offers from "./pages/Offers";
import TaxesAndCharges from "./pages/TaxesAndCharges";
import EventManagement from "./pages/EventManagement";
import AddTiffin from "./pages/Add-Tiffin";
import TiffinRegistrationForm from "./components/Form/Tiffin/TiffinRegistrationForm";
import MessageDetail from "./pages/MessageDetail";
import Faq from "./pages/Faq";
import Settings from "./pages/Settings"
import ManageCustomers from "./components/ManageCustomers/ManageCustomers"
import { ManageDriver } from "./components/ManageDrivers/ManageDriver";
export const dummyOrders = [
  // Tiffin Orders
  {
    id: 1,
    Name: "John Doe",
    date: "2025-01-01",
    time: "12:30 PM",
    pickuptime: "1:00 PM",
    item: "Pizza",
    quantity: 2,
    payment: "Credit Card",
    price: 29.99,
    status: "pending",
    restaurant: "Italian Bistro",
    category: "Main Course",
    subcategory: "Pizza",
    typeOfOrder: "tiffin",
  },
  {
    id: 2,
    Name: "Jane Smith",
    date: "2025-01-02",
    time: "1:30 PM",
    pickuptime: "2:00 PM",
    item: "Burger",
    quantity: 1,
    payment: "Cash",
    price: 15.5,
    status: "pending",
    restaurant: "Burger King",
    category: "Fast Food",
    subcategory: "Burger",
    typeOfOrder: "tiffin",
  },
  {
    id: 3,
    Name: "Alice Green",
    date: "2025-01-03",
    time: "2:00 PM",
    pickuptime: "2:30 PM",
    item: "Sushi",
    quantity: 3,
    payment: "Debit Card",
    price: 45.75,
    status: "pending",
    restaurant: "Sushi World",
    category: "Japanese",
    subcategory: "Sushi",
    typeOfOrder: "tiffin",
  },
  {
    id: 4,
    Name: "Bob White",
    date: "2025-01-04",
    time: "3:00 PM",
    pickuptime: "3:30 PM",
    item: "Tacos",
    quantity: 5,
    payment: "Paypal",
    price: 22.0,
    status: "pending",
    restaurant: "Mexican Grill",
    category: "Mexican",
    subcategory: "Tacos",
    typeOfOrder: "tiffin",
  },
  {
    id: 5,
    Name: "Grace Red",
    date: "2025-01-09",
    time: "8:00 PM",
    pickuptime: "8:30 PM",
    item: "Fried Rice",
    quantity: 3,
    payment: "Paypal",
    price: 25.5,
    status: "expired",
    restaurant: "Asian Delights",
    category: "Chinese",
    subcategory: "Rice",
    typeOfOrder: "tiffin",
  },
  {
    id: 6,
    Name: "Olivia Pink",
    date: "2025-01-12",
    time: "9:00 AM",
    pickuptime: "9:30 AM",
    item: "Dosa",
    quantity: 3,
    payment: "Cash",
    price: 18.0,
    status: "confirmed",
    restaurant: "South Indian Tiffin",
    category: "Breakfast",
    subcategory: "Dosa",
    typeOfOrder: "tiffin",
  },
  {
    id: 7,
    Name: "Mia Yellow",
    date: "2025-01-14",
    time: "11:30 AM",
    pickuptime: "12:00 PM",
    item: "Idli",
    quantity: 4,
    payment: "Debit Card",
    price: 12.0,
    status: "pending",
    restaurant: "Healthy Breakfast",
    category: "Breakfast",
    subcategory: "Idli",
    typeOfOrder: "tiffin",
  },
  {
    id: 8,
    Name: "Ethan Orange",
    date: "2025-01-15",
    time: "1:00 PM",
    pickuptime: "1:30 PM",
    item: "Pongal",
    quantity: 2,
    payment: "Credit Card",
    price: 20.0,
    status: "confirmed",
    restaurant: "Tiffin Express",
    category: "Lunch",
    subcategory: "Pongal",
    typeOfOrder: "tiffin",
  },
  {
    id: 9,
    Name: "Sophia Blue",
    date: "2025-01-16",
    time: "7:30 AM",
    pickuptime: "8:00 AM",
    item: "Upma",
    quantity: 3,
    payment: "Paypal",
    price: 10.5,
    status: "confirmed",
    restaurant: "Breakfast Corner",
    category: "Breakfast",
    subcategory: "Upma",
    typeOfOrder: "tiffin",
  },
  {
    id: 10,
    Name: "Liam Black",
    date: "2025-01-17",
    time: "9:00 PM",
    pickuptime: "9:30 PM",
    item: "Chapati",
    quantity: 5,
    payment: "Cash",
    price: 15.0,
    status: "pending",
    restaurant: "Night Tiffin",
    category: "Dinner",
    subcategory: "Chapati",
    typeOfOrder: "tiffin",
  },

  // Orders
  {
    id: 11,
    Name: "Diana Blue",
    date: "2025-01-06",
    time: "5:00 PM",
    pickuptime: "5:30 PM",
    item: "Salad",
    quantity: 1,
    payment: "Cash",
    price: 9.99,
    status: "pending",
    restaurant: "Healthy Eats",
    category: "Salads",
    subcategory: "Veg",
    typeOfOrder: "order",
  },
  {
    id: 12,
    Name: "Frank Black",
    date: "2025-01-08",
    time: "7:00 PM",
    pickuptime: "7:30 PM",
    item: "Chicken Wings",
    quantity: 4,
    payment: "Credit Card",
    price: 18.0,
    status: "pending",
    restaurant: "Wings",
    category: "Appetizers",
    subcategory: "Wings",
    typeOfOrder: "order",
  },
  {
    id: 13,
    Name: "John Doe",
    date: "2025-01-01",
    time: "12:30 PM",
    pickuptime: "1:00 PM",
    item: "Pizza",
    quantity: 2,
    payment: "Credit Card",
    price: 29.99,
    status: "pending",
    restaurant: "Italian Bistro",
    category: "Main Course",
    subcategory: "Pizza",
    typeOfOrder: "takeaway",
  },
  {
    id: 14,
    Name: "Jane Smith",
    date: "2025-01-02",
    time: "1:30 PM",
    pickuptime: "2:00 PM",
    item: "Burger",
    quantity: 1,
    payment: "Cash",
    price: 15.5,
    status: "pending",
    restaurant: "Burger King",
    category: "Fast Food",
    subcategory: "Burger",
    typeOfOrder: "dining",
  },
  {
    id: 15,
    Name: "Alice Green",
    date: "2025-01-03",
    time: "2:00 PM",
    pickuptime: "2:30 PM",
    item: "Sushi",
    quantity: 3,
    payment: "Debit Card",
    price: 45.75,
    status: "pending",
    restaurant: "Sushi World",
    category: "Japanese",
    subcategory: "Sushi",
    typeOfOrder: "takeaway",
  },
  {
    id: 16,
    Name: "Bob White",
    date: "2025-01-04",
    time: "3:00 PM",
    pickuptime: "3:30 PM",
    item: "Tacos",
    quantity: 5,
    payment: "Paypal",
    price: 22.0,
    status: "pending",
    restaurant: "Mexican Grill",
    category: "Mexican",
    subcategory: "Tacos",
    typeOfOrder: "tiffin",
  },
  {
    id: 17,
    Name: "Charlie Brown",
    date: "2025-01-05",
    time: "4:30 PM",
    pickuptime: "5:00 PM",
    item: "Pasta",
    quantity: 2,
    payment: "Credit Card",
    price: 34.5,
    status: "pending",
    restaurant: "Pasta Palace",
    category: "Italian",
    subcategory: "Pasta",
    typeOfOrder: "order",
  },
  {
    id: 18,
    Name: "Diana Blue",
    date: "2025-01-06",
    time: "5:00 PM",
    pickuptime: "5:30 PM",
    item: "Salad",
    quantity: 1,
    payment: "Cash",
    price: 9.99,
    status: "pending",
    restaurant: "Healthy Eats",
    category: "Salads",
    subcategory: "Veg",
    typeOfOrder: "takeaway",
  },
  {
    id: 19,
    Name: "Eve Gray",
    date: "2025-01-07",
    time: "6:00 PM",
    pickuptime: "6:30 PM",
    item: "Steak",
    quantity: 1,
    payment: "Debit Card",
    price: 59.99,
    status: "pending",
    restaurant: "Steakhouse Grill",
    category: "Main Course",
    subcategory: "Wings",
    typeOfOrder: "dining",
  },
  {
    id: 20,
    Name: "Frank Black",
    date: "2025-01-08",
    time: "7:00 PM",
    pickuptime: "7:30 PM",
    item: "Chicken Wings",
    quantity: 4,
    payment: "Credit Card",
    price: 18.0,
    status: "pending",
    restaurant: "Wings",
    category: "Appetizers",
    subcategory: "Wings",
    typeOfOrder: "order",
  },
  {
    id: 21,
    Name: "Grace Red",
    date: "2025-01-09",
    time: "8:00 PM",
    pickuptime: "8:30 PM",
    item: "Fried Rice",
    quantity: 3,
    payment: "Paypal",
    price: 25.5,
    status: "expired",
    restaurant: "Asian Delights",
    category: "Chinese",
    subcategory: "Rice",
    typeOfOrder: "tiffin",
  },
  {
    id: 22,
    Name: "Henry Silver",
    date: "2025-01-10",
    time: "9:00 PM",
    pickuptime: "9:30 PM",
    item: "Ice Cream",
    quantity: 6,
    payment: "Debit Card",
    price: 12.99,
    status: "confirmed",
    restaurant: "Dessert Haven",
    category: "Desserts",
    subcategory: "Ice Cream",
    typeOfOrder: "dining",
  },
];


export default function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<DashboardHome />} />
        <Route path="/restaurants" element={<RestaurantList />} />
        <Route path="/restaurants/comments" element={<RestaurantList />} />
        <Route path="/add-restaurant" element={<AddRestaurant />} />
        <Route path="/switch" element={<FormSwitch />} />
        <Route path="/add-tiffin" element={<AddTiffin />} />
        <Route path="/new-restaurant" element={<RestuarantRegistration />} />
        <Route
          path="/tiffin-registration"
          element={<TiffinRegistrationForm />}
        />
        <Route path="/events" element={<EventList />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/event" element={<EventManagement />} />
        <Route path="/offers" element={<Offers />} />

        {/* Orders route */}
        <Route
          path="/orders"
          element={<OrderManagement orders={dummyOrders} />}
        />

        {/* Dynamic route for OrderDetails with orderId */}

        <Route path="/historylogs" element={<HistoryLogs />} />
        <Route path="/usermanagement" element={<UserManagement />} />
        <Route path="/manage-admins" element={<ManageAdmin />} />
        <Route path="cards/OrderDetails/:orderId" element={<OrderDetails />} />
        <Route path="/taxes" element={<TaxesAndCharges />} />
        <Route path="/claim-restaurant" element={<ClaimRestaurant />} />

        <Route
          path="/collection-management"
          element={<CollectionManagement />}
        />
        <Route path="/settings" element={<Settings />} />
        <Route path="/upload" element={<Upload />} />
        {/* <Route path="/support" element={<Support />} /> */}
        <Route path="/help" element={<Help />} />
        <Route path="/log" element={<Help />} />
        <Route path="/message/:id" element={<MessageDetail/>}/>
        <Route path="faqs" element={<Faq/>}/>
        <Route path="/control" element={<UserAccessControl />} />
        <Route path="/manage-customers" element={<ManageCustomers/>}/>
        
        {/* Add more pages as needed */}
      </Route>
    </Routes>
  );
}
