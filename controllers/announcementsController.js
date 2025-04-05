// controllers/announcementsController.js

// Dummy announcements (Events) data with extra fields for demonstration
let announcements = [
  { 
    id: 1, 
    title: "Gaming Tournament", 
    shortDescription: "Join our annual gaming tournament for awesome prizes.", 
    details: "Full details: Date, Time, Venue, and prize info for our annual gaming tournament.", 
    imageUrl: "", 
    bookings: ["user1@gmail.com"], 
    eventDate: "Apr 10, 2025", 
    prize: 5000,
    comments: []
  },
  { 
    id: 2, 
    title: "New Game Launch", 
    shortDescription: "Experience the new game before anyone else!", 
    details: "Full details: Pre-launch event with exclusive demos and giveaways.", 
    imageUrl: "", 
    bookings: [], 
    eventDate: "Apr 15, 2025", 
    prize: 2000,
    comments: []
  },
  { 
    id: 3, 
    title: "Esports Meetup", 
    shortDescription: "Meet fellow esports enthusiasts and professionals.", 
    details: "Full details: Join our community meetup, enjoy panel talks, and networking.", 
    imageUrl: "", 
    bookings: ["a@gmail.com", "b@gmail.com"], 
    eventDate: "Apr 20, 2025", 
    prize: 0,
    comments: []
  },
  { 
    id: 4, 
    title: "VR Expo", 
    shortDescription: "Discover the latest in VR technology.", 
    details: "Full details: Explore the newest VR devices and demos.", 
    imageUrl: "", 
    bookings: ["c@gmail.com"], 
    eventDate: "Apr 25, 2025", 
    prize: 1500,
    comments: []
  },
  { 
    id: 5, 
    title: "Retro Gaming Night", 
    shortDescription: "A night dedicated to classic games and nostalgia.", 
    details: "Full details: Relive the golden age of gaming with classic titles.", 
    imageUrl: "", 
    bookings: ["d@gmail.com"], 
    eventDate: "May 1, 2025", 
    prize: 3000,
    comments: []
  },
  { 
    id: 6, 
    title: "Indie Game Showcase", 
    shortDescription: "Support indie developers at our showcase event.", 
    details: "Full details: See the latest creations from independent game developers.", 
    imageUrl: "", 
    bookings: [], 
    eventDate: "May 5, 2025", 
    prize: 2500,
    comments: []
  },
  { 
    id: 7, 
    title: "Speedrun Competition", 
    shortDescription: "Test your skills in our speedrun contest.", 
    details: "Full details: Compete in a speedrun challenge and win prizes.", 
    imageUrl: "", 
    bookings: ["e@gmail.com", "f@gmail.com"], 
    eventDate: "May 10, 2025", 
    prize: 1000,
    comments: []
  },
  { 
    id: 8, 
    title: "Cosplay Convention", 
    shortDescription: "Show off your cosplay and meet fellow fans.", 
    details: "Full details: A fun event for all cosplay enthusiasts.", 
    imageUrl: "", 
    bookings: ["g@gmail.com"], 
    eventDate: "May 15, 2025", 
    prize: 0,
    comments: []
  },
  { 
    id: 9, 
    title: "Mobile Gaming Fest", 
    shortDescription: "Celebrate mobile games with demos and tournaments.", 
    details: "Full details: Experience the best of mobile gaming.", 
    imageUrl: "", 
    bookings: [], 
    eventDate: "May 20, 2025", 
    prize: 1200,
    comments: []
  },
  { 
    id: 10, 
    title: "Esports Charity", 
    shortDescription: "Join us in raising money for a good cause through esports.", 
    details: "Full details: Participate in esports to support charity.", 
    imageUrl: "", 
    bookings: ["h@gmail.com"], 
    eventDate: "May 25, 2025", 
    prize: 0,
    comments: []
  },
  { 
    id: 11, 
    title: "Gaming Awards", 
    shortDescription: "Celebrate the best in gaming at our awards show.", 
    details: "Full details: Nominate and vote for your favorite games and creators.", 
    imageUrl: "", 
    bookings: ["i@gmail.com", "j@gmail.com"], 
    eventDate: "May 30, 2025", 
    prize: 500,
    comments: []
  }
];

exports.listAnnouncements = (req, res) => {
  res.render("announcements", { title: "Events", announcements });
};

exports.showAnnouncementDetail = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const event = announcements.find(a => a.id === id);
  if (!event) return res.status(404).send("Event not found");
  res.render("announcement", { title: event.title, event });
};

exports.bookAnnouncement = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const event = announcements.find(a => a.id === id);
  if (!event) return res.status(404).send("Event not found");

  const email = req.body.email;
  if (!email) return res.render("announcement", { title: event.title, event, error: "Email is required" });

  if (event.bookings.includes(email)) {
    res.render("announcement", { title: event.title, event, error: "You have already booked this event." });
  } else {
    event.bookings.push(email);
    res.render("announcement", { title: event.title, event, success: "Successfully booked! Check your email for confirmation." });
  }
};

exports.addComment = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const event = announcements.find(a => a.id === id);
  if (!event) {
    return res.status(404).send("Event not found");
  }
  
  const { comment } = req.body;
  if (!comment) {
    return res.render("announcement", { title: event.title, event, error: "Comment cannot be empty." });
  }
  
  const newComment = {
    user: req.session.user ? req.session.user.username : "Guest",
    text: comment,
    date: new Date().toLocaleDateString()
  };
  
  event.comments.push(newComment);
  
  res.redirect(`/announcements/${id}`);
};

exports.__getAnnouncements = () => announcements;
