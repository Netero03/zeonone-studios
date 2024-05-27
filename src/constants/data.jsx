import { Anamika, Buried, Firozpur, Firozpur2, KA, LaalRang, Masuriya, PubaliPfp, RajPfp, SevenhrToGo, ShonaliBose, SolidPatels, SubhroChowdhary, SumanDirector } from "../assets/photos";

export const teamMembers = [
  {
    id: 1,
    name: "Subhro Chowdhary",
    position: "Director",
    image: `${SubhroChowdhary}`,
    description: "A Film & TV Industry Leader with 20 + years of experience. As the former Head of Film Vertical of Ramoji Group, produced Films for Ushakiron Movies and managed the Studio operations of Ramoji Film City. During 2007-2010 played a key role as the ‘Vice President-Creative & Production’ of Zee Motion Pictures (the Film Vertical of Zee group). During 2000-2006 as a key member of the core team, launched & lead ETV Bangla, ETV Hindi, ETV Marathi etc. These extensive experiences have helped him to develop a tenacious commitment to WOW the audience by facilitating the production of unique & engaging content, combined with an in depth understanding of the creative process and audience preferences."
  },
  {
    id: 2,
    name: "Raj Singh Chaudhary",
    position: "Director",
    image: `${RajPfp}`,
    description: "Chaudhary’s recent release on Netflix THAR starring Anil Kapoor, Fatima Sana Sheikh, Harshvardhan Kapoor, Satish Kaushik etc. created waves in the Indian media space with its hard-hitting story and visuals. He has also written films like GULAAL, NO SMOKING (starring John Abraham) etc. directed by Anurag Kashyap. THAR, considered as a path-breaking content, established Chaudhary as a director in-demand in a very short span of time."
  },
  {
    id: 3,
    name: "Shonali Bose",
    position: "Director",
    image: `${ShonaliBose}`,
    description: "Shonali Bose is the director of multiple successful and critically acclaimed films such as the latest Amazon Original MODERN LOVE, THE SKY IS PINK starring Farhan Akhtar, Priyanka Chopra MARGARITA WITH A STRAW, AMU etc. and has won such accolades as the National Film Award, Sundance Mahindra Global Film-maker Award etc."
  },
  {
    id: 4,
    name: "Suman Mukhopadhyaya",
    position: "Director",
    image: `${SumanDirector}`,
    description: "Suman began his journey as a director with the path-breaking film HERBERT in 2006 which went onto win the National Award. He directed multiple films and Hindi web-series after that. Renowned film critic and historian Ms. Anupama Chopra rated his film HERBERT as one of the top Indian debut made during the last 20 years. He is the contemporary of Anirudh Roy Chowdhury who made his Hindi debut with PINK starring Amitabh Bachchan, Tapsee Pannu etc."
  },
  {
    id: 5,
    name: "Pubali Chaudhari",
    position: "Writer",
    image: `${PubaliPfp}`,
    description: "Pubali is one of the most prolific screenwriters in the Hindi Film space. She has written critically acclaimed Films like ROCK ON, KAI PO CHE etc. which are also big commercial successes, amongst several other of her works."
  },
  // Add more members as needed
];

export const films = [

  {
    id: 1,
    title: 'KA',
    genre: 'Sci-Fi | Romantic Drama',
    status: 'Upcoming',
    image: `${KA}`,
    director: 'Raj Singh Chaudhary',
    writer: 'Pubali Chaudhuri',
    producer: 'Subhro Chowdhary',
    releaseDate: '',
    story: 'An online exchange, that soon becomes a fairy tale romance when the boy is challenged to find the girl in the real world, leads to life changing journeys for both of them and questions the very idea of the ‘real world’',
  },
  {
    id: 2,
    title: '7 HOURS TO GO!',
    genre: 'Thriller | Action',
    status: 'Released',
    image: `${SevenhrToGo}`,
    director: 'Saurabh Varma',
    releaseDate: '24th Jun 2016',
    story: 'The film is a fast paced investigative thriller set in Mumbai, present day. Inspired by true event, the film revolves around a hostage crisis and what happens within 7 hours after that incident.',
    cast: ['Vipin Sharma', 'Sandeepa Dhar', 'Natasa Stankovic'],
    trailers: ['ZmkoRZNlzQo?si=6KYvH9zlUS7aTWIf']
  },
  {
    id: 3,
    title: 'Anamika (Hindi)',
    genre: 'Edge-of-the-seat Thriller',
    status: 'Upcoming',
    image: `${Anamika}`,
    director: 'SIRAJ KALLA',//IMDB- https://www.imdb.com/name/nm5409032/
    producer: ['AASHISH SINGH', 'SUBHRO CHOWDHARY'],
    story: 'A Lady police officer must convince a female serial killer, who has been sentenced to death, to reveal the whereabouts of her last victim, the officer’s daughter.',
  },
  {
    id: 4,
    title: 'Mussouriya (Hindi)',
    genre: 'Romantic | Comedy',
    status: 'Upcoming',
    image: `${Masuriya}`,
    director: 'Shonali Bose',
    writer: 'Sheetal Kapoor',
    scriptAdvisor: 'Anjum Rajabali',
    note: 'He is one of the most respected names in the Hindi industry who has written films like the to be released TOOFAN starring Farhan Akhtar, RAJNEETI starring Ajay Devgn, Ranbir Kapoor etc.',
    releaseDate: '',
    story: 'A powerpacked Rom-Com musical. "It was a million of tiny little things that, when you added them all up, they meant we were supposed to be together " – Sleepless in Seattle',
  },
  {
    id: 5,
    title: 'FEROZPUR',
    genre: 'Investigative Thriller | Emotional | Action',
    status: 'Upcoming',
    image: `${Firozpur2}`,
    director: 'MandeepChaahal',
    writer: '',
    producer: 'Subhro Chowdhary',
    scriptAdvisor: '',
    releaseDate: '',
    story: 'The film would appeal to a wider audience, including fans of thrillers & and engaging dramas. It is fast-paced and suspenseful, and it features complex characters and compelling plots.',
  },
  {
    id: 6,
    title: '"BURIED" REMAKE',
    genre: "Edge-of-the-seat thriller",
    status: 'Upcoming',
    image: `${Buried}`,
    director: 'Under Discussions. The remake demands one of the most talented Directors.',
    writer: ['Anand Prakash'],
    producer: '',
    co_producer: "",
    note: 'An FTII alumni, Anand has an impressive body of work in the thriller genre in various South Indian languages.',
    scriptAdvisor: '',
    releaseDate: '',
    story: 'The company has acquired the Indian remake rights of the film BURIED. BURIED is considered as one of the best thrillers ever made and enjoys an iconic status across the globe within the Film Fraternity. The film enjoys 87% approval rating on Rotten Tomatoes. It stars Ryan Reynolds. Now being transformed into a powerful Indian adaptation.',
  },
  {
    id: 7,
    title: 'Laal Rang',
    genre: "Edge-of-the-seat thriller",
    status: 'Released',
    releaseDate: '22nd April 2016',
    image: `${LaalRang}`,
    director: 'Syed Ahmad Afzal',
    writer: ['Syed Ahmad Afzal', 'Pankaj Matta'],
    producer: ['Nitika Thakur', 'Krian Media'],
    co_producer: "",
    note: '',
    scriptAdvisor: '',
    releaseDate: '',
    story: 'The realistic tale on Blood Mafia, ‘Laal Rang’, starring Randeep Hooda, Akshay Oberoi, Rajneesh Duggal and others, directed by Syed Ahmed Afzal.',
    cast: [
      'Randeep Hooda',
      'Akshay Oberoi',
      'Rajneesh Duggal',
      'Pia Bajpai',
      'Meenakshi Dixit',
      'Shreya Narayan'
    ]
  },
  {
    id: 8,
    title: 'Solid Patels',
    genre: "Comedy",
    status: 'Released',
    releaseDate: '22 May 2015',
    image: `${SolidPatels}`,
    director: 'Saurabh Varma',
    writer: ['Rahul Patel'],
    producer: ['Raj Malik', 'Krian Media'],
    co_producer: "",
    note: '',
    scriptAdvisor: '',
    releaseDate: '',
    story: 'The realistic tale on Blood Mafia, ‘Laal Rang’, starring Randeep Hooda, Akshay Oberoi, Rajneesh Duggal and others, directed by Syed Ahmed Afzal.',
    cast: [
      'Shiv Panditt',
      'Shazahn Padamsee',
      'Kettan Singh',
    ]
  },
  // Add more films as needed
];
