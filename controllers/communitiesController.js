// controllers/communitiesController.js

// Dummy communities data with 9 sample communities
let communities = [
    { 
      id: 1, 
      name: "Gamers United", 
      description: "A community for passionate gamers.", 
      history: "Founded in 2020, this community brings gamers together.", 
      imageUrl: "", // fallback will be used if empty
      members: [] 
    },
    { 
      id: 2, 
      name: "Indie Devs", 
      description: "For independent game developers.", 
      history: "Started as a small meetup and grown into a vibrant online community.", 
      imageUrl: "", 
      members: [] 
    },
    { 
      id: 3, 
      name: "VR Enthusiasts", 
      description: "Exploring the world of VR.", 
      history: "A group of early adopters and innovators in VR.", 
      imageUrl: "", 
      members: [] 
    },
    { 
      id: 4, 
      name: "Esports Arena", 
      description: "Competitive gaming community.", 
      history: "Where champions are born.", 
      imageUrl: "", 
      members: [] 
    },
    { 
      id: 5, 
      name: "Retro Gamers", 
      description: "Fans of classic games.", 
      history: "Nostalgia at its best.", 
      imageUrl: "", 
      members: [] 
    },
    { 
      id: 6, 
      name: "Mobile Masters", 
      description: "Mobile gaming community.", 
      history: "Where mobile meets mastery.", 
      imageUrl: "", 
      members: [] 
    },
    { 
      id: 7, 
      name: "Strategy Central", 
      description: "For strategy game enthusiasts.", 
      history: "Plan and conquer.", 
      imageUrl: "", 
      members: [] 
    },
    { 
      id: 8, 
      name: "Puzzle Pros", 
      description: "Solve puzzles and have fun.", 
      history: "Brain teasers and more.", 
      imageUrl: "", 
      members: [] 
    },
    { 
      id: 9, 
      name: "Action Heroes", 
      description: "Fast-paced gaming community.", 
      history: "Adrenaline rush.", 
      imageUrl: "", 
      members: [] 
    }
  ];
  
  exports.listCommunities = (req, res) => {
    // Initialize the followedCommunities array in the session if it doesn't exist
    if (!req.session.followedCommunities) {
      req.session.followedCommunities = [];
    }
    res.render("communities", { 
      title: "Communities", 
      communities, 
      followedCommunities: req.session.followedCommunities 
    });
  };
  
  exports.showCommunityDetail = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const community = communities.find(c => c.id === id);
    if (!community) return res.status(404).send("Community not found");
    res.render("community", { title: community.name, community });
  };
  
  exports.toggleFollowCommunity = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const community = communities.find(c => c.id === id);
    if (!community) return res.status(404).send("Community not found");
  
    // Initialize followedCommunities if not defined
    if (!req.session.followedCommunities) {
      req.session.followedCommunities = [];
    }
    
    const followed = req.session.followedCommunities;
    const user = req.session.user ? req.session.user.username : "Guest";
    
    const index = followed.indexOf(id);
    if (index > -1) {
      // Unfollow: remove community id from session and remove user from community.members
      followed.splice(index, 1);
      community.members = community.members.filter(m => m !== user);
    } else {
      // Follow: add community id to session and add user to community.members
      followed.push(id);
      if (!community.members.includes(user)) {
        community.members.push(user);
      }
    }
    
    res.redirect("/communities");
  };
  
  exports.leaveCommunity = (req, res) => {
    const user = req.session.user ? req.session.user.username : "Guest";
    const appliedId = req.session.followedCommunities; // Not used now; we allow multiple follows.
    // For now, leaveCommunity could clear all follows if desired.
    req.session.followedCommunities = [];
    communities.forEach(c => {
      c.members = c.members.filter(m => m !== user);
    });
    res.redirect("/communities");
  };
  
  exports.__getCommunities = () => communities;
  