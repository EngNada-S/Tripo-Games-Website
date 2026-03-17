// Path Builder Function
const imgPath = (name, file) => `../assets/images/games/${name}/${file}`;

// ================== Games Data ==================
export const gamesDetails = [
  {
    id: 1,
    name: "Kipon",
    category: "Casual - Free",
    seo: {
      title: "Kipon | Tripo Games",
      description:
        "Play Kipon, a colorful casual mobile game packed with fun levels and fast challenges. Enjoy quick gameplay and exciting moments wherever you are.",
    },
    hero: {
      title:
        "A One-of-a-Kind Game That Offers Endless Excitement at Your Fingertips.",
      description:
        "Step into the colorful world of Kipon and enjoy a playful adventure full of exciting challenges. Guide your character through creative levels, overcome tricky obstacles, and discover fun surprises along the way. With smooth gameplay and charming visuals, Kipon offers a relaxing yet engaging experience for players of all ages.",
    },
    images: {
      gameImg: imgPath("Kipon", "Kipon.webp"),
      heroCover: imgPath("Kipon", "kiponCover.webp"),
      screenshots: [
        imgPath("Kipon", "screenshot1.webp"),
        imgPath("Kipon", "screenshot2.webp"),
      ],
      promoImg: imgPath("Kipon", "end.webp"),
    },
    promoText: {
      title:
        "Challenge a Friend or Race Against the Clock as You Battle Through 20 Levels of Endless Fun",
      text: "Dive deeper into the world of Kipon and test your skills across a series of colorful and creative levels. Each challenge brings new obstacles and surprises that keep the gameplay fresh and exciting. Whether you're competing with friends or trying to beat your own high score, every round is packed with fast-paced fun and rewarding moments.",
    },
    reviews: [
      {
        user: "Wang Wai",
        stars: 5,
        text: "Kipon is the perfect game to kill time. The levels are creative and keep getting better. I've been playing for weeks and still not bored!",
      },
      {
        user: "Jose Pablo",
        stars: 3,
        text: "Fun and colorful game, easy to pick up. Would love to see more levels added in future updates, but overall a solid casual experience.",
      },
      {
        user: "Priya Gunga",
        stars: 4,
        text: "Super cute visuals and smooth controls. My kids and I play it together — it's challenging enough to be exciting but not too hard for beginners.",
      },
      {
        user: "Lena Park",
        stars: 5,
        text: "One of the most addictive casual games I've played. The colorful levels and smooth controls make it impossible to put down.",
      },
      {
        user: "Tom Reeves",
        stars: 4,
        text: "Great game for short sessions. Every level introduces something new which keeps it fresh. Looking forward to future updates.",
      },
    ],
  },

  {
    id: 2,
    name: "Robotrix",
    category: "RPG - Free",
    seo: {
      title: "Robotrix | Tripo Games",
      description:
        "Enter the futuristic world of Robotrix, an action RPG filled with tactical combat, powerful upgrades, and exciting missions waiting to be explored.",
    },
    hero: {
      title: "Enjoy Tactical Combat and Secrets to Find With Robotrix.",
      description:
        "Enter the futuristic world of Robotrix and prepare for thrilling battles and strategic gameplay. Explore mysterious environments, upgrade your robotic abilities, and uncover hidden secrets as you progress. With immersive action and challenging missions, Robotrix delivers an exciting adventure for fans of tactical combat.",
    },
    images: {
      gameImg: imgPath("Robotrix", "Robotrix.webp"),
      heroCover: imgPath("Robotrix", "RobotrixCover.webp"),
      screenshots: [
        imgPath("Robotrix", "screenshot1.webp"),
        imgPath("Robotrix", "screenshot2.webp"),
      ],
      promoImg: imgPath("Robotrix", "end.webp"),
    },
    promoText: {
      title: "Open-world playability wherever you are",
      text: "Step into a futuristic battlefield where strategy and quick thinking are the keys to survival. In Robotrix, every mission pushes you to upgrade your abilities, explore hidden areas, and defeat powerful enemies. Discover new technologies, unlock advanced skills, and shape your own path as you fight to dominate the robotic world.",
    },
    reviews: [
      {
        user: "Omar Zaine",
        stars: 3,
        text: "Good RPG with interesting mechanics. The upgrade system keeps you hooked, though some missions feel repetitive after a while.",
      },
      {
        user: "Jay Jay",
        stars: 3,
        text: "Decent tactical game. The combat is fun but I wish there were more enemy types. Still worth playing if you're into robot-themed RPGs.",
      },
      {
        user: "Danni Lopez",
        stars: 5,
        text: "Absolutely love Robotrix! The strategy element is deep and rewarding. Upgrading my robot and dominating each mission never gets old.",
      },
      {
        user: "Kai Müller",
        stars: 4,
        text: "The depth of the upgrade system is impressive. Each mission feels different and the robotic world is really well designed.",
      },
      {
        user: "Sara Nunes",
        stars: 5,
        text: "Best RPG I've played on mobile. The combat is strategic and satisfying — every win feels truly earned.",
      },
    ],
  },

  {
    id: 3,
    name: "Treasure Box",
    category: "Adventure - Free",
    seo: {
      title: "Treasure Box | Tripo Games",
      description:
        "Discover hidden treasures and exciting adventures in Treasure Box. Solve puzzles, unlock rewards, and explore mysterious locations in this fun adventure game.",
    },
    hero: {
      title: "A Free-to-Play Adventure Game That Seriously Packs a Punch",
      description:
        "Embark on an exciting journey in Treasure Box and discover a world full of mystery and rewards. Solve puzzles, explore unique locations, and collect valuable treasures as you progress through the adventure. With engaging challenges and rewarding discoveries, every step brings a new surprise waiting to be uncovered.",
    },
    images: {
      gameImg: imgPath("TreasureBox", "TreasureBox.webp"),
      heroCover: imgPath("TreasureBox", "TreasureBoxCover.webp"),
      screenshots: [
        imgPath("TreasureBox", "screenshot1.webp"),
        imgPath("TreasureBox", "screenshot2.webp"),
      ],
      promoImg: imgPath("TreasureBox", "end.webp"),
    },
    promoText: {
      title: "Set Sail On Adventures to Win Tokens and Unlock Rare Items",
      text: "Adventure awaits as you explore mysterious lands filled with hidden treasures and clever puzzles. Each level introduces new challenges that reward curiosity and skill. Collect valuable items, unlock special rewards, and continue your journey through exciting environments where every discovery brings you closer to legendary treasures.",
    },
    reviews: [
      {
        user: "Max Ottis",
        stars: 4,
        text: "Really enjoyed the puzzle design in Treasure Box. Each level feels handcrafted and the reward system keeps you motivated to push further.",
      },
      {
        user: "Charlie K",
        stars: 3,
        text: "Nice adventure game with a good variety of locations. Some puzzles are a bit tricky but that's what makes it satisfying when you solve them.",
      },
      {
        user: "Sofie Zacks",
        stars: 4,
        text: "Treasure Box surprised me — way more depth than I expected. Collecting rare items and unlocking new areas is genuinely exciting.",
      },
      {
        user: "Nico Ferri",
        stars: 5,
        text: "The puzzle variety is amazing. I love how each location feels unique and the rare item rewards make you want to keep exploring.",
      },
      {
        user: "Mia Johansson",
        stars: 4,
        text: "Treasure Box is a hidden gem. The mystery element keeps you engaged and the level design is genuinely clever.",
      },
    ],
  },
];

// ================== Careers Data ==================
export const careerJobs = [
  {
    id: 1,
    img: "../assets/images/Careers/job1.webp",
    JobName: "Community Manager",
    location: "San Francisco, CA",
    emType: "Contract",
    desc: "Help grow and engage our player community across social platforms.",
    metaDesc:
      "Join us as a Community Manager and help engage, grow, and support our player community.",
    whatYoullDo: [
      "Build and nurture a thriving online community across Discord, Reddit, and social media platforms.",
      "Act as the primary voice between our players and internal teams, relaying feedback and insights.",
      "Plan and execute community events, contests, and campaigns to drive engagement.",
      "Monitor community sentiment and escalate issues to the appropriate teams.",
      "Create and moderate community guidelines to maintain a welcoming environment.",
    ],
    whoYouAre: [
      "You have 2+ years of experience in community management, preferably in gaming.",
      "You are an excellent communicator with a passion for building relationships.",
      "You are deeply familiar with gaming culture and online communities.",
      "You are highly organized and able to manage multiple platforms simultaneously.",
      "You thrive in a fast-paced environment and can handle feedback constructively.",
    ],
  },
  {
    id: 2,
    img: "../assets/images/Careers/job2.webp",
    JobName: "QA Tester",
    location: "San Francisco, CA",
    emType: "Contract",
    desc: "Ensure top-quality game releases through testing and bug tracking.",
    metaDesc:
      "We're hiring a QA Tester to ensure high-quality game releases through testing and debugging.",
    whatYoullDo: [
      "Execute manual and automated test cases across multiple platforms and game builds.",
      "Identify, document, and track bugs using internal bug-tracking tools.",
      "Collaborate closely with developers to reproduce and verify bug fixes.",
      "Participate in regression testing before major releases and patches.",
      "Contribute to improving testing pipelines and QA documentation.",
    ],
    whoYouAre: [
      "You have hands-on experience in game or software QA testing.",
      "You have a sharp eye for detail and a methodical approach to problem-solving.",
      "You are comfortable working with bug-tracking tools such as Jira or similar.",
      "You have a genuine passion for games and understand player expectations.",
      "You communicate clearly and can write concise, reproducible bug reports.",
    ],
  },
  {
    id: 3,
    img: "../assets/images/Careers/job3.webp",
    JobName: "Game Designer",
    location: "San Francisco, CA",
    emType: "Contract",
    desc: "Design engaging mechanics and experiences that bring game worlds to life.",
    metaDesc:
      "Join our team as a Game Designer and help create engaging game concepts, mechanics, and user experiences that bring ideas to life.",
    whatYoullDo: [
      "Design and iterate on core gameplay mechanics, systems, and player progression loops.",
      "Create detailed game design documents (GDDs) and communicate vision to the development team.",
      "Collaborate with artists and developers to ensure design intent is faithfully implemented.",
      "Conduct playtesting sessions and use feedback to refine gameplay experiences.",
      "Stay up to date with industry trends and bring fresh ideas to the team.",
    ],
    whoYouAre: [
      "You have 2+ years of experience in game design with a portfolio of shipped titles or prototypes.",
      "You have a strong understanding of game mechanics, UX principles, and player psychology.",
      "You are proficient in writing clear and structured design documentation.",
      "You are a collaborative team player who can take and give constructive feedback.",
      "You have a passion for games across multiple genres and platforms.",
    ],
  },
  {
    id: 4,
    img: "../assets/images/Careers/job4.webp",
    JobName: "Game Developer",
    location: "San Francisco, CA",
    emType: "Contract",
    desc: "Build and optimize gameplay features using Unity or Unreal Engine.",
    metaDesc:
      "We're hiring a Game Developer to build and optimize gameplay features, implement mechanics, and deliver high-performance interactive experiences.",
    whatYoullDo: [
      "Develop and implement gameplay systems, mechanics, and features using Unity or Unreal Engine.",
      "Write clean, maintainable, and well-documented code following team standards.",
      "Optimize game performance across target platforms to meet frame rate and memory requirements.",
      "Collaborate with designers and artists to bring game concepts to life.",
      "Participate in code reviews and contribute to technical decision-making.",
    ],
    whoYouAre: [
      "You have 3+ years of professional game development experience.",
      "You are proficient in C# (Unity) or C++ (Unreal Engine).",
      "You have a solid understanding of game architecture, design patterns, and performance optimization.",
      "You are a team player with strong problem-solving skills and attention to detail.",
      "You have shipped at least one commercial game title.",
    ],
  },
];
