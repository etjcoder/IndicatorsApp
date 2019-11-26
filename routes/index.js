const path = require("path");
// const axios = require("axios");
const router = require("express").Router();
const apiRoutes = require("./api")

//API Routes
router.use("/api", apiRoutes);

//IF no API routes are hit, send the React app
//**///**///**///
///EDITED TO SWITCH ROUTE
//**////****/888*?/**/ */ */ */
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

module.exports = router;