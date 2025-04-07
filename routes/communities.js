// routes/communities.js
const express = require("express");
const router = express.Router();
const communitiesController = require("../controllers/communitiesController");

router.post("/:id/follow", communitiesController.toggleFollowCommunity);
router.get("/:id", communitiesController.showCommunityDetail);
router.get("/", communitiesController.listCommunities);

module.exports = router;
