let announcements = [
  { id: 1, title: "Gaming Tournament", shortDescription: "Join our annual gaming tournament.", details: "Full details about the event.", imageUrl: "", bookings: ["user1@gmail.com"], eventDate: "Apr 10, 2025", prize: 5000, comments: [] },
  { id: 2, title: "New Game Launch", shortDescription: "Experience the new game before anyone else!", details: "Exclusive demos and giveaways.", imageUrl: "", bookings: [], eventDate: "Apr 15, 2025", prize: 2000, comments: [] },
  { id: 3, title: "Esports Meetup", shortDescription: "Meet fellow esports enthusiasts.", details: "Panel talks and networking.", imageUrl: "", bookings: ["a@gmail.com", "b@gmail.com"], eventDate: "Apr 20, 2025", prize: 0, comments: [] },
  { id: 4, title: "VR Expo", shortDescription: "Discover the latest in VR tech.", details: "Experience cutting-edge VR demos.", imageUrl: "", bookings: ["c@gmail.com"], eventDate: "Apr 25, 2025", prize: 1500, comments: [] },
  { id: 5, title: "Retro Gaming Night", shortDescription: "A night for classic games.", details: "Relive the golden age of gaming.", imageUrl: "", bookings: ["d@gmail.com"], eventDate: "May 1, 2025", prize: 3000, comments: [] },
  { id: 6, title: "Indie Game Showcase", shortDescription: "Support indie developers.", details: "See the latest indie games.", imageUrl: "", bookings: [], eventDate: "May 5, 2025", prize: 2500, comments: [] },
  { id: 7, title: "Speedrun Competition", shortDescription: "Test your speedrun skills.", details: "Compete for prizes.", imageUrl: "", bookings: ["e@gmail.com", "f@gmail.com"], eventDate: "May 10, 2025", prize: 1000, comments: [] },
  { id: 8, title: "Cosplay Convention", shortDescription: "Show off your cosplay.", details: "Fun event for cosplay lovers.", imageUrl: "", bookings: ["g@gmail.com"], eventDate: "May 15, 2025", prize: 0, comments: [] },
  { id: 9, title: "Mobile Gaming Fest", shortDescription: "Celebrate mobile gaming.", details: "Demos and tournaments.", imageUrl: "", bookings: [], eventDate: "May 20, 2025", prize: 1200, comments: [] },
  { id: 10, title: "Esports Charity", shortDescription: "Play for a good cause.", details: "Join the charity event.", imageUrl: "", bookings: ["h@gmail.com"], eventDate: "May 25, 2025", prize: 0, comments: [] },
  { id: 11, title: "Gaming Awards", shortDescription: "Celebrate the best in gaming.", details: "Vote for your favorites.", imageUrl: "", bookings: ["i@gmail.com", "j@gmail.com"], eventDate: "May 30, 2025", prize: 500, comments: [] }
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
  if (!event) return res.status(404).send("Event not found");

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
