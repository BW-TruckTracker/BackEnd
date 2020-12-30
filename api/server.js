const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// const restrict = require('./middleware/restricted.js');

const authRouter = require('./auth/auth-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter); // for register and login. generates token.
// server.use('/api/trucks', restrict, operatorRouter); // only logged-in operators should have access!

server.get("/api", (req, res) => {
    res.status(200).json({ message: "API is up and running. For full list of endpoints see README on Github."})
})

module.exports = server;
