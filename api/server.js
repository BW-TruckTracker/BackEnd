const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// const restrict = require('./middleware/restricted.js');

/// IMPORT ROUTERS
const authRouter = require('./auth/auth-router.js');
const trucksRouter = require('./trucks/trucks-router.js');
const reviewsRouter = require('./reviews/reviews-router')
const menusRouter = require('./menus/menus-router')
const favoritesRouter = require('./favorites/favorites-router')


const server = express();
server.use(helmet());
server.use(cors());
server.use(express.json());

/// API Routes
server.use('/api/auth', authRouter); // for register and login. generates token.
server.use('/api/menu', menusRouter)
server.use('/api/trucks', trucksRouter);
server.use('/api/reviews', reviewsRouter);
server.use('/api/favorites', favoritesRouter)


// TEST that the server is up and running
server.get("/api", (req, res) => {
    res.status(200).json({ message: "API is up and running. For full list of endpoints see README on Github."})
})

module.exports = server;
