const router = require("express").Router();

const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.get("/edit", (req, res) => {
  res.render("edit");
});

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
