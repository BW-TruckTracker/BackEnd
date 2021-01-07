const express = require("express");
const router = express.Router();
const Favorites = require("./favorites-model");

///ENDPOINTS
router.get("/:id", (req, res) => {
  //baseurl/api/favorites/:id
  //where id is user_id

  const { id } = req.params;

  Favorites.getById(id)
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res
          .status(404)
          .json({ message: `Provided user_id has no saved favorites.` });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.post("/", (req, res, next) => {
  //baseurl/api/favorites/

  const { user_id, truck_id } = req.body;

  //first, check if user already faved it
  Favorites.getById(user_id)
    .then((response) => {
      const matches = response.filter((element) => element.truck_id === truck_id);
      if (matches.length) {
        //if matches has length, then already faved.
        res.status(403).json({ message: "This user_id has already faved this truck_id." });
      } else {
        // if no duplicate found, then add fav to db
        Favorites.add({ user_id, truck_id })
          .then((data) => {
            res.status(201).json({ message: "Successfully updated user favorites." });
          })
          .catch((err) => {
            res.status(500).json({ message: err.message });
          });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.delete("/:id", (req, res) => {
  //baseurl/api/favorites/:id
  const { id } = req.params;
  Favorites.delete(id)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;
