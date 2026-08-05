/* BOLT. portfolio — data + interactions */

// ---------- config ----------
const CONFIG = {
  email: "devbolt19@gmail.com",
  discordId: "1465964458282188820",
  github: "https://github.com/DEvBOLT19",
};

// ---------- watchlist ----------
const WATCHLIST = {
  currentlyWatching: [],

  franchises: [
    {
      name: "Marvel Cinematic Universe",
      shortName: "MCU",
      movies: [
        {
          title: "Iron Man",
          releaseDate: "2008",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "The Incredible Hulk",
          releaseDate: "2008",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Iron Man 2",
          releaseDate: "2010",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Thor",
          releaseDate: "2011",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Captain America: The First Avenger",
          releaseDate: "2011",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Marvel One-Shot: The Consultant",
          releaseDate: "2011",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Marvel One-Shot: A Funny Thing Happened on the Way to Thor's Hammer",
          releaseDate: "2011",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "The Avengers",
          releaseDate: "2012",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Item 47",
          releaseDate: "2012",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Iron Man 3",
          releaseDate: "2013",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Thor: The Dark World",
          releaseDate: "2013",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Marvel One-Shot: Agent Carter",
          releaseDate: "2013",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Captain America: The Winter Soldier",
          releaseDate: "2014",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Guardians of the Galaxy",
          releaseDate: "2014",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Agent Carter – Season 1",
          releaseDate: "2015",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Avengers: Age of Ultron",
          releaseDate: "2015",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Ant-Man",
          releaseDate: "2015",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Agent Carter – Season 2",
          releaseDate: "2016",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Captain America: Civil War",
          releaseDate: "2016",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Doctor Strange",
          releaseDate: "2016",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Guardians of the Galaxy Vol. 2",
          releaseDate: "2017",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Spider-Man: Homecoming",
          releaseDate: "2017",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Thor: Ragnarok",
          releaseDate: "2017",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Black Panther",
          releaseDate: "2018",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Avengers: Infinity War",
          releaseDate: "2018",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Ant-Man and the Wasp",
          releaseDate: "2018",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Captain Marvel",
          releaseDate: "2019",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Avengers: Endgame",
          releaseDate: "2019",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Spider-Man: Far From Home",
          releaseDate: "2019",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "WandaVision",
          releaseDate: "2021",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "The Falcon and the Winter Soldier",
          releaseDate: "2021",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Loki – Season 1",
          releaseDate: "2021",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Black Widow",
          releaseDate: "2021",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "What If...? – Season 1",
          releaseDate: "2021",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Shang-Chi and the Legend of the Ten Rings",
          releaseDate: "2021",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Eternals",
          releaseDate: "2021",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Hawkeye",
          releaseDate: "2021",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Spider-Man: No Way Home",
          releaseDate: "2021",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Moon Knight",
          releaseDate: "2022",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Doctor Strange in the Multiverse of Madness",
          releaseDate: "2022",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Ms. Marvel",
          releaseDate: "2022",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Thor: Love and Thunder",
          releaseDate: "2022",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "I Am Groot – Season 1",
          releaseDate: "2022",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "She-Hulk: Attorney at Law",
          releaseDate: "2022",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Werewolf by Night",
          releaseDate: "2022",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Black Panther: Wakanda Forever",
          releaseDate: "2022",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "The Guardians of the Galaxy Holiday Special",
          releaseDate: "2022",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Ant-Man and the Wasp: Quantumania",
          releaseDate: "2023",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Guardians of the Galaxy Vol. 3",
          releaseDate: "2023",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Secret Invasion",
          releaseDate: "2023",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Loki – Season 2",
          releaseDate: "2023",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "The Marvels",
          releaseDate: "2023",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "What If...? – Season 2",
          releaseDate: "2023",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Echo",
          releaseDate: "2024",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Deadpool & Wolverine",
          releaseDate: "2024",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Agatha All Along",
          releaseDate: "2024",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "What If...? – Season 3",
          releaseDate: "2024",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Your Friendly Neighborhood Spider-Man",
          releaseDate: "2025",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Daredevil: Born Again – Season 1",
          releaseDate: "2025",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Captain America: Brave New World",
          releaseDate: "2025",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Thunderbolts*",
          releaseDate: "2025",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Ironheart",
          releaseDate: "2025",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "The Fantastic Four: First Steps",
          releaseDate: "2025",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Eyes of Wakanda",
          releaseDate: "2025",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Wonder Man",
          releaseDate: "2025",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Marvel Zombies",
          releaseDate: "2025",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Daredevil: Born Again – Season 2",
          releaseDate: "2026",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "The Punisher: One Last Kill",
          releaseDate: "2026",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Spider-Man: Brand New Day",
          releaseDate: "2026",
          availableInIndia: true,
          where: "Disney+ Hotstar",
          watched: false,
          currentlyWatching: false
        }
      ]
    },
    {
      name: "The Dark Knight Trilogy",
      shortName: "TDK",
      movies: [
        {
          title: "Batman Begins",
          releaseDate: "2005",
          availableInIndia: true,
          where: "Prime Video",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "The Dark Knight",
          releaseDate: "2008",
          availableInIndia: true,
          where: "Prime Video",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "The Dark Knight Rises",
          releaseDate: "2012",
          availableInIndia: true,
          where: "Prime Video",
          watched: false,
          currentlyWatching: false
        }
      ]
    },
    {
      name: "Jurassic Park / Jurassic World",
      shortName: "Jurassic",
      movies: [
        {
          title: "Jurassic Park",
          releaseDate: "1993",
          availableInIndia: true,
          where: "Netflix",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "The Lost World: Jurassic Park",
          releaseDate: "1997",
          availableInIndia: true,
          where: "Netflix",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Jurassic Park III",
          releaseDate: "2001",
          availableInIndia: true,
          where: "Netflix",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Jurassic World",
          releaseDate: "2015",
          availableInIndia: true,
          where: "JioHotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Jurassic World: Fallen Kingdom",
          releaseDate: "2018",
          availableInIndia: true,
          where: "JioHotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Jurassic World: Dominion",
          releaseDate: "2022",
          availableInIndia: true,
          where: "JioHotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Jurassic World: Rebirth",
          releaseDate: "2025",
          availableInIndia: true,
          where: "JioHotstar",
          watched: false,
          currentlyWatching: false
        }
      ]
    },
        {
      name: "Wizarding World",
      shortName: "HP",
      movies: [
        {
          title: "Harry Potter and the Philosopher's Stone",
          releaseDate: "2001",
          availableInIndia: true,
          where: "JioHotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Harry Potter and the Chamber of Secrets",
          releaseDate: "2002",
          availableInIndia: true,
          where: "JioHotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Harry Potter and the Prisoner of Azkaban",
          releaseDate: "2004",
          availableInIndia: true,
          where: "JioHotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Harry Potter and the Goblet of Fire",
          releaseDate: "2005",
          availableInIndia: true,
          where: "JioHotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Harry Potter and the Order of the Phoenix",
          releaseDate: "2007",
          availableInIndia: true,
          where: "JioHotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Harry Potter and the Half-Blood Prince",
          releaseDate: "2009",
          availableInIndia: true,
          where: "JioHotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Harry Potter and the Deathly Hallows – Part 1",
          releaseDate: "2010",
          availableInIndia: true,
          where: "JioHotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Harry Potter and the Deathly Hallows – Part 2",
          releaseDate: "2011",
          availableInIndia: true,
          where: "JioHotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Fantastic Beasts and Where to Find Them",
          releaseDate: "2016",
          availableInIndia: true,
          where: "JioHotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Fantastic Beasts: The Crimes of Grindelwald",
          releaseDate: "2018",
          availableInIndia: true,
          where: "JioHotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Fantastic Beasts: The Secrets of Dumbledore",
          releaseDate: "2022",
          availableInIndia: true,
          where: "JioHotstar",
          watched: false,
          currentlyWatching: false
        }
      ]
    },
        {
      name: "Mission: Impossible",
      shortName: "MI",
      movies: [
        {
          title: "Mission: Impossible",
          releaseDate: "1996",
          availableInIndia: true,
          where: "JioHotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Mission: Impossible 2",
          releaseDate: "2000",
          availableInIndia: true,
          where: "JioHotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Mission: Impossible III",
          releaseDate: "2006",
          availableInIndia: true,
          where: "JioHotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Mission: Impossible – Ghost Protocol",
          releaseDate: "2011",
          availableInIndia: true,
          where: "JioHotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Mission: Impossible – Rogue Nation",
          releaseDate: "2015",
          availableInIndia: true,
          where: "JioHotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Mission: Impossible – Fallout",
          releaseDate: "2018",
          availableInIndia: true,
          where: "JioHotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Mission: Impossible – Dead Reckoning Part One",
          releaseDate: "2023",
          availableInIndia: true,
          where: "JioHotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Mission: Impossible – The Final Reckoning",
          releaseDate: "2025",
          availableInIndia: true,
          where: "JioHotstar",
          watched: false,
          currentlyWatching: false
        }
      ]
    },
        {
      name: "Marvel Animated Universe",
      shortName: "MAU",
      movies: [
        {
          title: "X-Men: The Animated Series",
          releaseDate: "1992",
          availableInIndia: true,
          where: "JioHotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Iron Man",
          releaseDate: "1994",
          availableInIndia: true,
          where: "JioHotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Fantastic Four",
          releaseDate: "1994",
          availableInIndia: true,
          where: "JioHotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Spider-Man",
          releaseDate: "1994",
          availableInIndia: true,
          where: "JioHotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "The Incredible Hulk",
          releaseDate: "1996",
          availableInIndia: true,
          where: "JioHotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Fantastic Four: World's Greatest Heroes",
          releaseDate: "2006",
          availableInIndia: true,
          where: "JioHotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "The Super Hero Squad Show",
          releaseDate: "2009",
          availableInIndia: true,
          where: "JioHotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "The Avengers: Earth's Mightiest Heroes",
          releaseDate: "2010",
          availableInIndia: true,
          where: "JioHotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Ultimate Spider-Man",
          releaseDate: "2012",
          availableInIndia: true,
          where: "JioHotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Avengers Assemble",
          releaseDate: "2013",
          availableInIndia: true,
          where: "JioHotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Hulk and the Agents of S.M.A.S.H.",
          releaseDate: "2013",
          availableInIndia: true,
          where: "JioHotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Guardians of the Galaxy",
          releaseDate: "2015",
          availableInIndia: true,
          where: "JioHotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Marvel's Spider-Man",
          releaseDate: "2017",
          availableInIndia: true,
          where: "JioHotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "Marvel Future Avengers",
          releaseDate: "2017",
          availableInIndia: true,
          where: "JioHotstar",
          watched: false,
          currentlyWatching: false
        },
        {
          title: "X-Men '97",
          releaseDate: "2024",
          availableInIndia: true,
          where: "JioHotstar",
          watched: false,
          currentlyWatching: false
        }
      ]
    }
  ],

  standalone: [
    {
      title: "Inception",
      releaseDate: "2010",
      availableInIndia: true,
      where: "Netflix",
      watched: true,
      currentlyWatching: false
    },
    {
      title: "The Pursuit of Happyness",
      releaseDate: "2006",
      availableInIndia: true,
      where: "Netflix",
      watched: true,
      currentlyWatching: false
    },
    {
      title: "The Wolf of Wall Street",
      releaseDate: "2013",
      availableInIndia: true,
      where: "Prime Video",
      watched: true,
      currentlyWatching: false
    },
    {
      title: "The Social Network",
      releaseDate: "2010",
      availableInIndia: true,
      where: "Netflix",
      watched: true,
      currentlyWatching: false
    },
    {
      title: "Whiplash",
      releaseDate: "2014",
      availableInIndia: true,
      where: "Prime Video",
      watched: true,
      currentlyWatching: false
    },
    {
      title: "The Odyssey",
      releaseDate: "2026",
      availableInIndia: false,
      where: "Theatres",
      watched: false,
      currentlyWatching: false
    },
    {
      title: "The Backrooms",
      releaseDate: "2026",
      availableInIndia: false,
      where: "A24 / Theatres",
      watched: false,
      currentlyWatching: false
    },
    {
      title: "Obsession",
      releaseDate: "2026",
      availableInIndia: false,
      where: "TBA",
      watched: false,
      currentlyWatching: false
    },
    {
      title: "Frankenstein",
      releaseDate: "2025",
      availableInIndia: false,
      where: "TBA",
      watched: false,
      currentlyWatching: false
    }
  ]
};

// ---------- projects (from github.com/DEvBOLT19) ----------
const PROJECTS = [
  {
    name: "CRICKET_PREDICTOR",
    description:
      "Machine Learning web app that predicts the winning probability of the chasing team in a T20 (IPL) cricket match.",
    tags: ["Python", "ML", "Streamlit"],
    url: "https://github.com/DEvBOLT19/CRICKET_PREDICTOR",
  },
  {
    name: "BOLT-AI",
    description: "Personal AI assistant project built in Python.",
    tags: ["Python", "AI"],
    url: "https://github.com/DEvBOLT19/BOLT-AI",
  },
  {
    name: "task-tracker",
    description: "Minimal command-line task tracking utility.",
    tags: ["Python", "CLI"],
    url: "https://github.com/DEvBOLT19/task-tracker",
  },
  {
    name: "russian_roullete",
    description: "A small game of chance — pull the trigger if you dare.",
    tags: ["Game"],
    url: "https://github.com/DEvBOLT19/russian_roullete",
  },
  {
    name: "devbolt19.github.io",
    description: "This very portfolio website. Raw HTML, CSS and JavaScript.",
    tags: ["HTML", "CSS", "JS"],
    url: "https://github.com/DEvBOLT19/devbolt19.github.io",
  },
];

// ---------- render projects ----------
function renderProjects() {
  const list = document.getElementById("project-list");
  if (!list) return;

  list.innerHTML = PROJECTS.map(function (p, i) {
    const index = String(i + 1).padStart(2, "0");
    const tags = p.tags
      .map(function (t) {
        return '<span class="tag">' + t + "</span>";
      })
      .join("");

    return (
      '<li class="project-item">' +
      '<a class="project-link" href="' + p.url + '" target="_blank" rel="noopener noreferrer">' +
      '<span class="project-index mono">' + index + "</span>" +
      "<span>" +
      '<span class="project-name">' + p.name + "</span>" +
      '<span class="project-desc mono">' + p.description + "</span>" +
      "</span>" +
      '<span class="project-meta">' +
      tags +
      '<span class="project-arrow" aria-hidden="true">&#8599;</span>' +
      "</span>" +
      "</a>" +
      "</li>"
    );
  }).join("");
}

// ---------- copy helpers ----------
function wireCopyButton(buttonId, getValue) {
  const btn = document.getElementById(buttonId);
  if (!btn) return;

  const label = btn.querySelector("span:last-child");
  const original = label ? label.textContent : "";

  btn.addEventListener("click", function () {
    navigator.clipboard.writeText(getValue()).then(function () {
      btn.classList.add("copied");
      if (label) label.textContent = "Copied";
      setTimeout(function () {
        btn.classList.remove("copied");
        if (label) label.textContent = original;
      }, 1600);
    });
  });
}

// ---------- render watchlist ----------
function renderWatchlist() {
  // Currently watching
  const currentlyWatchingList = document.getElementById("currently-watching-list");
  if (currentlyWatchingList) {
    const currentMovies = [];
    WATCHLIST.franchises.forEach(function (f) {
      f.movies.forEach(function (m) {
        if (m.currentlyWatching) currentMovies.push({ ...m, franchise: f.name });
      });
    });
    WATCHLIST.standalone.forEach(function (m) {
      if (m.currentlyWatching) currentMovies.push(m);
    });

    if (currentMovies.length === 0) {
      currentlyWatchingList.innerHTML = '<p class="empty-state mono">No movies currently being watched</p>';
    } else {
      currentlyWatchingList.innerHTML = currentMovies.map(function (m) {
        return renderMovieCard(m);
      }).join("");
    }
  }

  // Franchises
  const franchisesList = document.getElementById("franchises-list");
  const franchisesSummary = document.getElementById("franchises-summary");
  if (franchisesList) {
    franchisesList.innerHTML = WATCHLIST.franchises.map(function (f) {
      return renderFranchise(f);
    }).join("");
    
    // Generate summary for franchises
    if (franchisesSummary) {
      const franchiseSummaryHtml = generateFranchisesSummary();
      franchisesSummary.innerHTML = franchiseSummaryHtml;
      
      // Add click handler to toggle
      franchisesSummary.addEventListener("click", function () {
        const isHidden = franchisesList.style.display === "none";
        franchisesList.style.display = isHidden ? "block" : "none";
        franchisesSummary.innerHTML = isHidden ? '<span style="color: var(--muted-2);">Click to collapse ↑</span>' : generateFranchisesSummary();
      });
    }
  }
  const franchiseCount = document.getElementById("franchise-count");
  if (franchiseCount) franchiseCount.textContent = WATCHLIST.franchises.length + " franchises";

  // Standalone
  const standaloneList = document.getElementById("standalone-list");
  const standaloneSummary = document.getElementById("standalone-summary");
  if (standaloneList) {
    standaloneList.innerHTML = WATCHLIST.standalone.map(function (m) {
      return renderMovieCard(m);
    }).join("");
    
    // Generate summary for standalone
    if (standaloneSummary) {
      const standaloneSummaryHtml = generateStandaloneSummary();
      standaloneSummary.innerHTML = standaloneSummaryHtml;
      
      // Add click handler to toggle
      standaloneSummary.addEventListener("click", function () {
        const isHidden = standaloneList.style.display === "none";
        standaloneList.style.display = isHidden ? "block" : "none";
        standaloneSummary.innerHTML = isHidden ? '<span style="color: var(--muted-2);">Click to collapse ↑</span>' : generateStandaloneSummary();
      });
    }
  }
  const standaloneCount = document.getElementById("standalone-count");
  if (standaloneCount) standaloneCount.textContent = WATCHLIST.standalone.length + " films";

  // Stats
  updateWatchlistStats();
}

function generateFranchisesSummary() {
  const summary = WATCHLIST.franchises.map(function (f) {
    const totalMovies = f.movies.length;
    const watched = f.movies.filter(function (m) { return m.watched; }).length;
    return (
      '<div style="display: flex; gap: 2rem; align-items: center; padding: 0.5rem 0; border-bottom: 1px solid var(--line-2);">' +
      '<strong>' + f.name + '</strong>' +
      '<span style="color: var(--muted-2); font-size: 0.85rem;">Total: ' + totalMovies + ' • Watched: ' + watched + '</span>' +
      '</div>'
    );
  }).join("");
  return '<span style="color: var(--muted-2);">Click to expand ↓</span><div style="margin-top: 1rem;">' + summary + '</div>';
}

function generateStandaloneSummary() {
  const totalMovies = WATCHLIST.standalone.length;
  const watched = WATCHLIST.standalone.filter(function (m) { return m.watched; }).length;
  return (
    '<span style="color: var(--muted-2);">Click to expand ↓</span><div style="margin-top: 1rem;">' +
    '<div style="display: flex; gap: 2rem; align-items: center; padding: 0.5rem 0;">' +
    '<strong>Total: ' + totalMovies + ' • Watched: ' + watched + '</strong>' +
    '</div>' +
    '</div>'
  );
}

function renderFranchise(franchise) {
  const moviesHtml = franchise.movies.map(function (m) {
    return renderMovieInFranchise(m);
  }).join("");

  return (
    '<div class="franchise-card">' +
    '<div class="franchise-header">' +
    '<h3 class="franchise-name">' + franchise.name + '</h3>' +
    '<span class="franchise-tag mono">' + franchise.shortName + '</span>' +
    '</div>' +
    '<div class="franchise-movies">' +
    moviesHtml +
    '</div>' +
    '</div>'
  );
}

function renderMovieInFranchise(movie) {
  const statusClass = movie.watched ? 'watched' : movie.currentlyWatching ? 'watching' : 'pending';
  const statusText = movie.watched ? '✓ Watched' : movie.currentlyWatching ? '▶ Watching' : 'Pending';
  
  return (
    '<div class="movie-in-franchise">' +
    '<div class="movie-info">' +
    '<p class="movie-title">' + movie.title + '</p>' +
    '<p class="movie-meta mono">' + movie.releaseDate + ' • ' + movie.where + '</p>' +
    '</div>' +
    '<span class="movie-status ' + statusClass + ' mono">' + statusText + '</span>' +
    '</div>'
  );
}

function renderMovieCard(movie) {
  const statusClass = movie.watched ? 'watched' : movie.currentlyWatching ? 'watching' : 'pending';
  const statusText = movie.watched ? '✓ Watched' : movie.currentlyWatching ? '▶ Watching' : 'Pending';
  const franchiseText = movie.franchise ? ' • ' + movie.franchise : '';
  
  return (
    '<div class="movie-card">' +
    '<div class="movie-card-content">' +
    '<h3 class="movie-card-title">' + movie.title + '</h3>' +
    '<p class="movie-card-meta mono">' + movie.releaseDate + franchiseText + '</p>' +
    '<p class="movie-card-location mono">' + movie.where + '</p>' +
    '</div>' +
    '<span class="movie-card-status ' + statusClass + ' mono">' + statusText + '</span>' +
    '</div>'
  );
}

function updateWatchlistStats() {
  let total = 0;
  let watched = 0;
  let watching = 0;

  WATCHLIST.franchises.forEach(function (f) {
    f.movies.forEach(function (m) {
      total += 1;
      if (m.watched) watched += 1;
      else if (m.currentlyWatching) watching += 1;
    });
  });

  WATCHLIST.standalone.forEach(function (m) {
    total += 1;
    if (m.watched) watched += 1;
    else if (m.currentlyWatching) watching += 1;
  });

  const pending = total - watched - watching;

  const totalEl = document.getElementById("stat-total");
  const watchedEl = document.getElementById("stat-watched");
  const watchingEl = document.getElementById("stat-watching");
  const pendingEl = document.getElementById("stat-pending");

  if (totalEl) totalEl.textContent = String(total);
  if (watchedEl) watchedEl.textContent = String(watched);
  if (watchingEl) watchingEl.textContent = String(watching);
  if (pendingEl) pendingEl.textContent = String(pending);
}

// ---------- init ----------
document.addEventListener("DOMContentLoaded", function () {
  renderProjects();
  renderWatchlist();

  const emailEl = document.getElementById("email-value");
  if (emailEl) emailEl.textContent = CONFIG.email;

  wireCopyButton("copy-email", function () {
    return CONFIG.email;
  });

  wireCopyButton("copy-discord", function () {
    return CONFIG.discordId;
  });

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
});
