const { signupHandler,LoginHandler } = require("../controllers/userAuth");
const router = require("express").Router();


router.post("/signup", signupHandler);
router.post("/login", LoginHandler);

module.exports = router;

