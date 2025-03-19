const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connect = require("./Routes/connect");
const userRoutes = require("./Routes/UserLogin");
const mailRoutes = require("./Routes/MailRouter");
const faqRoutes = require("./Routes/FaqRoutes");
const settingsRoutes = require("./Routes/SettingRoute");
const PolicyRoutes=require("./Routes/PolicyRoutes")
const AckRoutes=require("./Routes/AckRoutes")
const AgreementRoutes=require("./Routes/Agreement")
const TwoFARoutes=require("./Routes/TwoFARoute");
const ProfleRoutes=require("./Routes/ProfileRoutes");
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
connect();

// Routes
app.use("/user", userRoutes);
app.use("/email", mailRoutes);
app.use("/faq", faqRoutes);
app.use("/settings", settingsRoutes);
app.use("/policy",PolicyRoutes)
app.use("/ack",AckRoutes)
app.use("/agree",AgreementRoutes)
app.use("/2fa",TwoFARoutes)
app.use("/profile",ProfleRoutes)
// Default Route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
