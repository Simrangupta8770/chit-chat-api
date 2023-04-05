const express = require("express");

const { allUsers, registerUser, authUser } = require('../controllers/userControllers');
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/",registerUser);
router.post('/login',authUser)
router.route("/").get(protect, allUsers);
module.exports = router;