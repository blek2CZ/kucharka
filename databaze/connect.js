const { configDotenv } = require("dotenv");
const Mongoose = require("mongoose");
const dotenv =  require ('dotenv');
dotenv.config();
URL = process.env.REACT_APP_SECRECT;

class dbConnect {
  async connect() {
    try {
      await Mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
       
      });

      console.log('Připojeno úspěšně k databázi');
    } catch (error) {
      console.error('Chyba při připojování k databázi:', error.message);
    }
  }
}

module.exports = new dbConnect();
