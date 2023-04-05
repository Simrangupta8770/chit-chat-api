const mongoose = require("mongoose");
const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://simrangupta9630:KrDj0QCXmg8L1eP3@cluster0.w2gwycm.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error : ${error.message}`);
        process.exit();
    }

};
module.exports = connectDB;