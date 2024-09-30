const mongoose = require("mongoose");

const mongoURI = "mongodb+srv://gowrinarayanannarayanan:gowri123@cluster0.nkwvy.mongodb.net/blogs?retryWrites=true&w=majority&appName=Cluster0'"; // Replace with your database URI


mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB successfully");
});