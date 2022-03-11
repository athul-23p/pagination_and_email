const User = require("../models/user.model");
const express = require("express");

const router = express.Router();

// create user
router.post("/", async (req, res) => {
  try {
    let user = await User.create(req.body);

    return res.status(200).send(user);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error.message });
  }
});

// list users
router.get("/", async (req, res) => {
  try {
    let users = await User.find();

    return res.status(200).send(users);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error.message });
  }
});

// update user
router.patch("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.status(200).send(user);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error.message });
  }
});

// delete user
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id)
    .lean()
    .exec();

    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
