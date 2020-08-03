const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 9999,
        dbURL: "mongodb+srv://workshop:workshop@cookme.ij3t4.gcp.mongodb.net/CookMe?retryWrites=true&w=majority",
        authCookieName: 'x-auth-token'
    },
    production: {}
};

module.exports = config[env];