const {default: mongoose} = require("mongoose");

const dbConnect = () => {
  mongoose
    .connect(`${process.env.DB_CONNECTION}/Inventory-practice`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`DB Connection Successfull!`.bgGreen.white.bold);
    })
    .catch((err) => {
      console.log("DB Connection Failed!".bgRed.white.bold);
      console.log(`${err.message}`.red.bolod);
    });
};
module.exports = dbConnect;
