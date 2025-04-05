// routes/announcements.js
const express = require("express");
const router = express.Router();
const announcementsController = require("../controllers/announcementsController");

router.get("/", announcementsController.listAnnouncements);
router.get("/:id", announcementsController.showAnnouncementDetail);
router.post("/:id/book", announcementsController.bookAnnouncement);
router.post("/:id/comment", announcementsController.addComment);

module.exports = router;
