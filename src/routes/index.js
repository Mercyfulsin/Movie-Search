const { join } = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const htmlRoutes = require("./html");
// API Routes
router.use("/api", apiRoutes);
router.use("/", htmlRoutes);
// If no API routes are hit, send the React app
router.use(function (req, res) {
    console.log(join(__dirname, "../../build/index.html"));
    res.sendFile(join(__dirname, "../../build/index.html"));
});

export default router;