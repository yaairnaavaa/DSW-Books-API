const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://iryanavahe:G3yByw2SHkocFPLb@books.ti6h16y.mongodb.net/?retryWrites=true&w=majority&appName=Books')
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err.message));

module.exports = mongoose;