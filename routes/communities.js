// routes/communities.js
const express = require("express");
const router = express.Router();
const communitiesController = require("../controllers/communitiesController");

// POST route for toggling follow/unfollow on a community
router.post("/:id/follow", communitiesController.toggleFollowCommunity);

// GET route for a specific community detail (if needed)
router.get("/:id", communitiesController.showCommunityDetail);

// GET route for listing all communities
router.get("/", communitiesController.listCommunities);

module.exports = router;
