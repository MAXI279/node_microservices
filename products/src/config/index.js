const dotEnv  = require("dotenv");

if (process.env.NODE_ENV.trim() !== 'prod') {
    const configFile =  `./.env.${process.env.NODE_ENV.trim()}`;
    dotEnv.config({ path:  configFile });
} else {
    dotEnv.config();
}

module.exports = {
    PORT: process.env.PORT,
    DB_URL: process.env.MONGODB_URI,
    APP_SECRET: process.env.APP_SECRET,
    MESSAGE_BROKER_URL: process.env.MESSAGE_BROKER_URL,
    EXCHANGE_NAME: process.env.EXCHANGE_NAME,
    SHOPPING_BINDING_KEY: process.env.SHOPPING_BINDING_KEY,
    CUSTOMER_BINDING_KEY: process.env.CUSTOMER_BINDING_KEY,
}