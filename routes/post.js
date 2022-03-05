const express = require('express');
const { getPosts,createUser } = require('../controllers/post');
const validator = require('../validator');

const router = express.Router();

router.get("/users", getPosts);
router.post("/create",validator.createUserValidator, createUser);

module.exports = router;