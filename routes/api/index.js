const router = require("express").Router();
// const bookRoutes = require("./books");

const callRoutes = require("./calls");
const protegeRoutes = require("./protege");
const supervisorRoutes = require("./supervisor");

router.use("/calls", callRoutes);
router.use("/protege", protegeRoutes);
router.use("/supervisor", supervisorRoutes);

module.exports = router;