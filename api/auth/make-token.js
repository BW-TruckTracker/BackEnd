const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET;

module.exports = {
    makeToken(userObj) {
        const payload = {
            subject: userObj.id,
            username: userObj.username,
        };

        const options = {
            expiresIn: '1d',
        };
        return jwt.sign(payload, jwtSecret, options);
    }
};