const router = require("express").Router();
const astroidRoutes = require("./astroids");


router.use("/saved", astroidRoutes);

module.exports = router;
