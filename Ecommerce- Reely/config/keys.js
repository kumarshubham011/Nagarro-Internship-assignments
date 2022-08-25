require('dotenv').config()
dbPassword = process.env.MONGOURL

module.exports = {
    mongoURI: dbPassword
};
