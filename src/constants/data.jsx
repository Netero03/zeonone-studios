import { Anamika, Buried, Firozpur, Firozpur2, KA, LaalRang, Masuriya, PubaliPfp, RajPfp, SevenhrToGo, ShonaliBose, SolidPatels, SubhroChowdhary, SumanDirector } from "../assets/photos";

export const teamMembers = [
  {
    id: 1,
    name: "Subhro Chowdhary",
    position: "Company Director",
    image: `${SubhroChowdhary}`,
    description: "A Film & TV Industry Leader with 20 + years of experience. As the former Head of Film Vertical of Ramoji Group, produced Films for Ushakiron Movies and managed the Studio operations of Ramoji Film City. During 2007-2010 played a key role as the ‘Vice President-Creative & Production’ of Zee Motion Pictures (the Film Vertical of Zee group). During 2000-2006 as a key member of the core team, launched & lead ETV Bangla, ETV Hindi, ETV Marathi etc. These extensive experiences have helped him to develop a tenacious commitment to WOW the audience by facilitating the production of unique & engaging content, combined with an in depth understanding of the creative process and audience preferences."
  },
  {
    id: 2,
    name: "Raj Singh Chaudhary",
    position: "Creative Director",
    image: `${RajPfp}`,
    description: "Chaudhary’s recent release on Netflix THAR starring Anil Kapoor, Fatima Sana Sheikh, Harshvardhan Kapoor, Satish Kaushik etc. created waves in the Indian media space with its hard-hitting story and visuals. He has also written films like GULAAL, NO SMOKING (starring John Abraham) etc. directed by Anurag Kashyap. THAR, considered as a path-breaking content, established Chaudhary as a director in-demand in a very short span of time."
  },
  {
    id: 3,
    name: "Shonali Bose",
    position: "Film Director",
    image: `${ShonaliBose}`,
    description: "Shonali Bose is the director of multiple successful and critically acclaimed films such as the latest Amazon Original MODERN LOVE, THE SKY IS PINK starring Farhan Akhtar, Priyanka Chopra MARGARITA WITH A STRAW, AMU etc. and has won such accolades as the National Film Award, Sundance Mahindra Global Film-maker Award etc."
  },
  {
    id: 4,
    name: "Suman Mukhopadhyaya",
    position: "Film Director",
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
    director: [{
      name: 'Raj Singh Chaudhary',
      image: null,
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm1234567/',
        linkedin: 'https://www.linkedin.com/in/rajsinghchaudhary/'
      }
    }],
    writer: [{
      name: 'Pubali Chaudhuri',
      image: null,
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm7654321/'
      }
    }],
    producer: [{
      name: 'Subhro Chowdhary',
      image: null,
      socialLinks: {
        linkedin: 'https://www.linkedin.com/in/subhrochowdhary/'
      }
    }],
    releaseDate: '',
    story: 'An online exchange...',
    cast: null,
    trailers: null
  },
  {
    id: 2,
    title: '7 HOURS TO GO!',
    genre: 'Thriller | Action',
    status: 'Released',
    image: `${SevenhrToGo}`,
    director: [{
      name: 'Saurabh Varma',
      image: null,
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm7894561/',
        linkedin: 'https://www.linkedin.com/in/saurabhvarma/'
      }
    }],
    writer: [],
    producer: [],
    releaseDate: '24th Jun 2016',
    story: 'The film is a fast-paced investigative thriller...',
    cast: [
      {
        name: 'Vipin Sharma',
        image: 'https://example.com/cast1.jpg',
        socialLinks: {
          imdb: 'https://www.imdb.com/name/nm1234567/',
          linkedin: 'https://www.linkedin.com/in/castmember1/'
        }
      },
      {
        name: 'Sandeepa Dhar',
        image: 'https://example.com/cast2.jpg',
        socialLinks: {
          imdb: 'https://www.imdb.com/name/nm7654321/'
        }
      },
      {
        name: 'Natasa Stankovic',
        image: 'https://example.com/cast2.jpg',
        socialLinks: {
          imdb: 'https://www.imdb.com/name/nm7654321/'
        }
      }
    ],
    trailers: ['ZmkoRZNlzQo?si=6KYvH9zlUS7aTWIf']
  },
  {
    id: 3,
    title: 'Anamika (Hindi)',
    genre: 'Edge-of-the-seat Thriller',
    status: 'Upcoming',
    image: `${Anamika}`,
    director: {
      name: 'SIRAJ KALLA',
      image: null,
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm1122334/',
      }
    },
    writer: null,
    producer: {
      name: ['AASHISH SINGH', 'SUBHRO CHOWDHARY'],
      image: null,
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm2233445/',
        linkedin: 'https://www.linkedin.com/in/aashishsingh/'
      }
    },
    releaseDate: null,
    story: 'A Lady police officer must convince...',
    cast: null,
    trailers: null
  },
  {
    id: 4,
    title: 'Mussouriya (Hindi)',
    genre: 'Romantic | Comedy',
    status: 'Upcoming',
    image: `${Masuriya}`,
    director: {
      name: 'Shonali Bose',
      image: null,
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm4455667/',
        linkedin: 'https://www.linkedin.com/in/shonalibose/'
      }
    },
    writer: {
      name: 'Sheetal Kapoor',
      image: null,
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm9988776/',
      }
    },
    producer: null,
    scriptAdvisor: {
      name: 'Anjum Rajabali',
      image: null,
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm7788990/',
      }
    },
    releaseDate: '',
    story: 'A powerpacked Rom-Com musical...',
    cast: null,
    trailers: null
  },
  {
    id: 5,
    title: 'Ferozpur',
    genre: 'Investigative Thriller | Emotional | Action',
    status: 'Upcoming',
    image: `${Firozpur2}`,
    director: {
      name: 'Mandeep Chaahal',
      image: null,
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm5544332/',
      }
    },
    writer: null,
    producer: {
      name: 'Subhro Chowdhary',
      image: null,
      socialLinks: {
        linkedin: 'https://www.linkedin.com/in/subhrochowdhary/'
      }
    },
    releaseDate: '',
    story: 'The film would appeal to a wider audience...',
    cast: null,
    trailers: null
  },
  {
    id: 6,
    title: '"BURIED" Remake',
    genre: "Edge-of-the-seat thriller",
    status: 'Upcoming',
    image: `${Buried}`,
    director: {
      name: 'Under Discussions',
      image: null,
      socialLinks: null
    },
    writer: {
      name: ['Anand Prakash'],
      image: null,
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm6655443/',
      }
    },
    producer: null,
    releaseDate: '',
    story: 'The company has acquired the Indian remake rights...',
    cast: null,
    trailers: null
  },
  {
    id: 7,
    title: 'Laal Rang',
    genre: "Edge-of-the-seat thriller",
    status: 'Released',
    releaseDate: '22nd April 2016',
    image: `${LaalRang}`,
    director: [{
      name: 'Syed Ahmad Afzal',
      image: null,
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm8877665/',
      }
    }],
    writer: [
      {
      name: ['Syed Ahmad Afzal'],
      image: null,
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm8877665/',
      }
    },
    {
    name: ['Pankaj Matta'],
      image: null,
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm8877665/',
      }
    }
  ],
    producer: [
      {
      name: ['Nitika Thakur'],
      image: null,
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm9988776/',
      }
    },
    {
      name: ['Krian Media'],
      image: null,
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm9988776/',
      }
    },
  ],
    story: 'The realistic tale on Blood Mafia...',
    cast: [
      'Randeep Hooda',
      'Akshay Oberoi',
      'Rajneesh Duggal',
      'Pia Bajpai',
      'Meenakshi Dixit',
      'Shreya Narayan',
      {
        name: 'Randeep Hooda',
        image: 'https://example.com/cast1.jpg',
        socialLinks: {
          imdb: 'https://www.imdb.com/name/nm1234567/',
          linkedin: 'https://www.linkedin.com/in/castmember1/'
        }
      },
      {
        name: 'Akshay Oberoi',
        image: 'https://example.com/cast2.jpg',
        socialLinks: {
          imdb: 'https://www.imdb.com/name/nm7654321/'
        }
      },
      {
        name: 'Rajneesh Duggal',
        image: 'https://example.com/cast2.jpg',
        socialLinks: {
          imdb: 'https://www.imdb.com/name/nm7654321/'
        }
      },
      {
        name: 'Pia Bajpai',
        image: 'https://example.com/cast1.jpg',
        socialLinks: {
          imdb: 'https://www.imdb.com/name/nm1234567/',
          linkedin: 'https://www.linkedin.com/in/castmember1/'
        }
      },
      {
        name: 'Meenakshi Dixit',
        image: 'https://example.com/cast2.jpg',
        socialLinks: {
          imdb: 'https://www.imdb.com/name/nm7654321/'
        }
      },
      {
        name: 'Shreya Narayan',
        image: 'https://example.com/cast2.jpg',
        socialLinks: {
          imdb: 'https://www.imdb.com/name/nm7654321/'
        }
      }
    ],
    trailers: ['KzWsMbLwZ1M?si=nZAMNjXjz28XHDfV']
  },
  {
    id: 8,
    title: 'Solid Patels',
    genre: "Comedy",
    status: 'Released',
    releaseDate: '22 May 2015',
    image: `${SolidPatels}`,
    director: {
      name: 'Saurabh Varma',
      image: null,
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm7894561/',
        linkedin: 'https://www.linkedin.com/in/saurabhvarma/'
      }
    },
    writer: {
      name: ['Rahul Patel'],
      image: null,
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm6655443/',
      }
    },
    producer: {
      name: ['Raj Malik', 'Krian Media'],
      image: null,
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm4455667/',
      }
    },
    story: 'A hilarious comedy...',
    cast: [
      'Shiv Panditt',
      'Shazahn Padamsee',
      'Kettan Singh',
    ],
    trailers: ['gNnlGLE1WEE?si=Ci_uYvnetd987XKA']
  },
];


