const router = require("express").Router();
// const bookRoutes = require("./books");

const dialRoutes = require("./dial");
// const protegeRoutes = require("./protege");
// const supervisorRoutes = require("./supervisor");
// console.log("On API Page")

router.use("/dials", dialRoutes);
// router.use("/protege", protegeRoutes);
// router.use("/supervisor", supervisorRoutes);

module.exports = router;