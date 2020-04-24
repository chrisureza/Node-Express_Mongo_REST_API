const express = require("express");
const router = express.Router();

router.get("/", (req, resp) => {
  resp.status(200).json({ success: true, msg: "Show all bootcamps" });
});

router.get("/:id", (req, resp) => {
  resp
    .status(200)
    .json({ success: true, msg: `Get bootcamp ${req.params.id}` });
});

router.put("/:id", (req, resp) => {
  resp
    .status(200)
    .json({ success: true, msg: `Update bootcamp ${req.params.id}` });
});

router.post("/", (req, resp) => {
  resp.status(200).json({ success: true, msg: "Create new bootcamp" });
});

router.delete("/:id", (req, resp) => {
  resp
    .status(200)
    .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
});

module.exports = router;
