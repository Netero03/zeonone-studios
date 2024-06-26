import { AashishSingh, AkshayOberoi, AnjumRajabali, KettanSingh, KrianPictures, MandeepChaahal, NatasaStankovic, RahulPatel, RajneeshDuggal, RandeepHooda, SandeepaDhar, SaurabhVarma, ShazahnPadamsee, ShivPanditt, SirajKalla, SyedAhmadAfzal, VipinSharma } from "../assets/people";
import { Anamika, Arjan, Buried, DforDopidi, Firozpur2, Gulaal, Gulam, HasnaManaHain, Herbert, KA, KaiPoChe, LaalRang, Margarita, Masuriya, Nidarr, NoSmoking, PoshamPa, PubaliPfp, Raajneeti, RajPfp, RajPfp2, RockOn, SevenHrToGo2, SevenhrToGo, Shaadistan, ShonaliBose, SolidPatels, SubhroChowdhary, SumanDirector, Thar, TheFamilyMan, TheSkyIsPink, Toofaan, VickyVelingkar } from "../assets/photos";

export const statuses = [
  { id: 0, status: "Released" },
  { id: 1, status: "Upcoming" },
  { id: 2, status: "All" }
]

export const teamMembers = [
  {
    id: 1,
    name: "Subhro Chowdhary",
    position: "Director",
    image: `${SubhroChowdhary}`,
    description: "A Film & TV Industry Leader with 20 + years of experience. As the former Head of Film Vertical of Ramoji Group, produced Films for Ushakiron Movies and managed the Studio operations of Ramoji Film City. During 2007-2010 played a key role as the ‘Vice President-Creative & Production’ of Zee Motion Pictures (the Film Vertical of Zee group). During 2000-2006 as a key member of the core team, launched & lead ETV Bangla, ETV Hindi, ETV Marathi etc. These extensive experiences have helped him to develop a tenacious commitment to WOW the audience by facilitating the production of unique & engaging content, combined with an in depth understanding of the creative process and audience preferences.",
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/subhro-chowdhary-95406a15/',
      twitter: 'https://x.com/subh555'
    },
    projects:[]

  },
  {
    id: 2,
    name: "Raj Singh Chaudhary",
    position: "Creative Director",
    image: `${RajPfp}`,
    description: "Raj’s recent release on Netflix THAR starring Anil Kapoor, Fatima Sana Sheikh, Harshvardhan Kapoor, Satish Kaushik etc. created waves in the Indian media space with its hard-hitting story and visuals. He has also written films like GULAAL, NO SMOKING (starring John Abraham) etc. directed by Anurag Kashyap. THAR, considered as a path-breaking content, established Raj as a director in-demand in a very short span of time.",
    socialLinks: {
      imdb: 'https://www.imdb.com/name/nm1758779/?ref_=ext_shr_lnk',
      instagram: 'https://www.instagram.com/rajsingh_chaudhary?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      website: 'https://www.rajsinghchaudhary.com/',
      wikipedia: 'https://en.wikipedia.org/wiki/Raj_Singh_Chaudhary'
    },
    projects: [
      { name: 'Thar', image: `${Thar}` },
      { name: 'Gulaal', image: `${Gulaal}` },
      { name: 'No Smoking', image: `${NoSmoking}` },
      { name: 'Shaadistan', image: `${Shaadistan}` }
    ]

  }
  // {
  //   id: 3,
  //   name: "Shonali Bose",
  //   position: "Film Director",
  //   image: `${ShonaliBose}`,
  //   description: "Shonali Bose is the director of multiple successful and critically acclaimed films such as the latest Amazon Original MODERN LOVE, THE SKY IS PINK starring Farhan Akhtar, Priyanka Chopra MARGARITA WITH A STRAW, AMU etc. and has won such accolades as the National Film Award, Sundance Mahindra Global Film-maker Award etc."
  // },
  // {
  //   id: 4,
  //   name: "Suman Mukhopadhyaya",
  //   position: "Film Director",
  //   image: `${SumanDirector}`,
  //   description: "Suman began his journey as a director with the path-breaking film HERBERT in 2006 which went onto win the National Award. He directed multiple films and Hindi web-series after that. Renowned film critic and historian Ms. Anupama Chopra rated his film HERBERT as one of the top Indian debut made during the last 20 years. He is the contemporary of Anirudh Roy Chowdhury who made his Hindi debut with PINK starring Amitabh Bachchan, Tapsee Pannu etc."
  // },
  // {
  //   id: 5,
  //   name: "Pubali Chaudhari",
  //   position: "Writer",
  //   image: `${PubaliPfp}`,
  //   description: "Pubali is one of the most prolific screenwriters in the Hindi Film space. She has written critically acclaimed Films like ROCK ON, KAI PO CHE etc. which are also big commercial successes, amongst several other of her works."
  // },
  // Add more members as needed
];

export const films = [
  {
    id: 1,
    title: 'KA',
    genre: 'Romantic Drama | Sci-Fi | Mystery',
    status: 'Upcoming',
    image: `${KA}`,
    director: [{
      name: 'Raj Singh Chaudhary',
      image: `${RajPfp2}`,
      // description: 'Raj’s recent release on Netflix THAR starring Anil Kapoor, Fatima Sana Sheikh, Harshvardhan Kapoor, Satish Kaushik etc. created waves in the Indian media space with its hard-hitting story and visuals. He has also written films like GULAAL, NO SMOKING (starring John Abraham) etc. directed by Anurag Kashyap. THAR, considered as a path-breaking content, established Raj as a director in-demand in a very short span of time.',
      description: 'Raj recently made waves in India and Internationally with his Netflix film THAR starring Anil Kapoor, Harshwardhan Kapoor and Fatima Sana Sheikh, which he wrote and directed. Before Thar, Raj wrote and directed another critics’ favourite film SHADISTAAN for Hotstar starring Kirti Kulhari and Kaykay Menon. For a long time, Raj collaborated with ace filmmaker Anurag Kashyap. He wrote the story and screenplay of cult classic GULAAL and also played the main lead in that. Apart from writing and directing, Raj has a long list of films he has been a part of as an actor and a producer. He has directed commercials with well-known stars including Virat Kohli etc.',
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm1758779/?ref_=ext_shr_lnk',
      },
      projects: [
        { poster: `${Thar}` },
        { poster: `${Gulaal}` },
        { poster: `${NoSmoking}` },
        { poster: `${Shaadistan}` }
      ]
    }],
    writer: [{
      name: 'Pubali Chaudhuri',
      image: `${PubaliPfp}`,
      // description: 'Pubali is one of the most prolific screenwriters in the Hindi Film space. She has written critically acclaimed Films like ROCK ON, KAI PO CHE etc. which are also big commercial successes, amongst several other of her works.',
      description: 'A writer and teacher, Pubali Chaudhuri, is best known as the screenwriter for Rock On which won the National Film Award for Best Hindi Film in 2008; and Kai Po Che which won her the Filmfare Award for Best Screenplay in 2014. She has served as Mentor and Honorary H.O.D at the Screenplay Writing Department at FTII and has previously taught at Whistling Woods International. She has been a mentor at various script labs, offers screenwriting workshops across India and continues to learn from the mystery of the blank page. Presently she is working on multiple projects with production houses such as RSVP Movies, Maddock Films, etc.',
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm3306073/?ref_=ext_shr_lnk'
      },
      projects: [
        { poster: `${RockOn}` },
        { poster: `${KaiPoChe}` },
      ]
    }],
    producer: [],
    releaseDate: '',
    story: 'Upcoming',
    cast: null,
    trailers: null
  },
  {
    id: 2,
    title: 'Laal Rang',
    genre: 'Comedy | Thriller',
    status: 'Released',
    image: `${LaalRang}`,
    director: [{
      name: 'Syed Ahmad Afzal',
      image: `${SyedAhmadAfzal}`,
      description: 'Syed Ahmad Afzal is known for YOU and I (2017), Laal Rang (2016) and Youngistaan (2014).',
      description2: 'Syed Ahmad Afzal is known for YOU and I (2017), Laal Rang (2016) and Youngistaan (2014).',
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm6269768/?ref_=ext_shr_lnk',
      }
    }],
    writer: [{
      name: 'Syed Ahmad Afzal',
      image: `${SyedAhmadAfzal}`,
      description: 'Syed Ahmad Afzal is known for YOU and I (2017), Laal Rang (2016) and Youngistaan (2014).',
      description2: 'Syed Ahmad Afzal is known for YOU and I (2017), Laal Rang (2016) and Youngistaan (2014).',
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm6269768/?ref_=ext_shr_lnk',
      }
    },
    {
      name: 'Pankaj Matta',
      image: null,
      description: 'Pankaj Matta is known for Chidi Balla (2019), Laal Rang (2016) and Good Luck Jerry (2022).',
      description2: 'Pankaj Matta is known for Chidi Balla (2019), Laal Rang (2016) and Good Luck Jerry (2022).',
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm6165016/?ref_=ext_shr_lnk',
      }
    }],
    producer: [{
      name: 'Krian Pictures with association of Zenone Studioz',
      image: `${KrianPictures}`,
      description: 'A production house which is involved in producing Bollywood films. Laal Rang, 7 Hours To Go and unINDIAN are their projects.',
      description2: 'A production house which is involved in producing Bollywood films. Laal Rang, 7 Hours To Go and unINDIAN are their projects.',
      socialLinks: {
        twitter: 'https://x.com/krianpictures'
      }
    }
    ],
    releaseDate: '22nd Apr 2016',
    story: 'The film is a social drama with elements of dark humor set in the milieu of Karnal’s blood mafia. The film takes a peep into the life and times of the protagonist Shankar, an enigmatic young man. It is the story of friendship, love, greed and of course blood.',
    cast: [{
      name: 'Randeep Singh Hooda',
      image: `${RandeepHooda}`,
      description: 'Randeep Hooda is a prominent Indian actor known for his versatility and powerful performances. He gained critical acclaim for his roles in films like "Highway," "Sarbjit," and "Sultan." With a strong presence in both mainstream and independent cinema, Hooda has established himself as a significant talent in Bollywood.',
      description2: 'Randeep Hooda is a prominent Indian actor known for his versatility and powerful performances. He gained critical acclaim for his roles in films like "Highway," "Sarbjit," and "Sultan." With a strong presence in both mainstream and independent cinema, Hooda has established himself as a significant talent in Bollywood.',
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm0393535/?ref_=ext_shr_lnk',
      }
    },
    {
      name: 'Akshay Oberoi',
      image: `${AkshayOberoi}`,
      description: 'Akshay Oberoi, is an accomplished actor trained in theater arts and dance. He debuted in "Isi Life Mein" and gained recognition for roles in "Pizza," "Laal Rang," and the critically acclaimed "Gurgaon." Akshay has also starred in notable digital series like "Selection Day" and "The Test Case."',
      description2: 'Akshay Oberoi, is an accomplished actor trained in theater arts and dance. He debuted in "Isi Life Mein" and gained recognition for roles in "Pizza," "Laal Rang," and the critically acclaimed "Gurgaon." Akshay has also starred in notable digital series like "Selection Day" and "The Test Case."',
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm0643348/?ref_=ext_shr_lnk',
      }
    },
    {
      name: 'Rajneesh Duggal',
      image: `${RajneeshDuggal}`,
      description: 'Rajneesh Duggal is known for 1920 (2008), Inspector Avinash (2023) and Dangerous Ishq (2012).',
      description2: 'Rajneesh Duggal is known for 1920 (2008), Inspector Avinash (2023) and Dangerous Ishq (2012).',
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm3152983/?ref_=ext_shr_lnk',
      }
    }],
    trailers: ['KzWsMbLwZ1M?si=RS_31D-NMrQzWBBC']
  },
  {
    id: 3,
    title: '"BURIED" REMAKE',
    genre: 'Edge-of-the-seat thriller.',
    status: 'Upcoming',
    image: `${Buried}`,
    director: [{
      name: 'Saurabh Varma',
      image: `${SaurabhVarma}`,
      description: 'With 25 years of experience in the Filmed Entertainment industry, Saurabh Varma is a distinguished director, writer, and marketeer. He has contributed to over 950 films across Indian languages and received the prestigious Philip Kotler Award.',
      description2: 'With 25 years of experience in the Filmed Entertainment industry, Saurabh Varma is a distinguished director, writer, and marketeer. He has contributed to over 950 films across Indian languages and received the prestigious Philip Kotler Award.',
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm2735803/?ref_=ext_shr_lnk',
      },
      projects: [
        { poster: `${SevenHrToGo2}` },
        { poster: `${VickyVelingkar}` },
        
      ]
    }],
    creativeProducer: [{
      name: 'Raj Singh Chaudhary',
      image: `${RajPfp2}`,
      // description: 'Raj’s recent release on Netflix THAR starring Anil Kapoor, Fatima Sana Sheikh, Harshvardhan Kapoor, Satish Kaushik etc. created waves in the Indian media space with its hard-hitting story and visuals. He has also written films like GULAAL, NO SMOKING (starring John Abraham) etc. directed by Anurag Kashyap. THAR, considered as a path-breaking content, established Raj as a director in-demand in a very short span of time.',
      description: 'Raj recently made waves in India and Internationally with his Netflix film THAR starring Anil Kapoor, Harshwardhan Kapoor and Fatima Sana Sheikh, which he wrote and directed. Before Thar, Raj wrote and directed another critics’ favourite film SHADISTAAN for Hotstar starring Kirti Kulhari and Kaykay Menon. For a long time, Raj collaborated with ace filmmaker Anurag Kashyap. He wrote the story and screenplay of cult classic GULAAL and also played the main lead in that. Apart from writing and directing, Raj has a long list of films he has been a part of as an actor and a producer. He has directed commercials with well-known stars including Virat Kohli etc.',
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm1758779/?ref_=ext_shr_lnk',
      },
      projects: [
        { poster: `${Thar}` },
        { poster: `${Gulaal}` },
        { poster: `${NoSmoking}` },
        { poster: `${Shaadistan}` }
      ]
    }],
    writer: [
      {
        name: 'Anand Prakash',
        image: null,
        description: 'An FTII alumni, Anand has an impressive body of work in the thriller genre in various South Indian languages.',
        description2: 'An FTII alumni, Anand has an impressive body of work in the thriller genre in various South Indian languages.',

        socialLinks: {
          imdb: null
        }
      }
    ],
    scriptConsultant: [{
      name: 'Anjum Rajabali',
      image: `${AnjumRajabali}`,
      description: 'ANJUM RAJABALI is a veteran screenwriter. He started his career with writings Films like GHULAM (starring Amir Khan etc.), continued with films like RAJ NEETI (starring Ajay Devgn, Ranbir Kapoor etc.), his latest being TOOFAN in 2021 (starring Farhan Akhtar etc). He is well respected as a Script Advisor.',
      description2: 'ANJUM RAJABALI is a veteran screenwriter. He started his career with writings Films like GHULAM (starring Amir Khan etc.), continued with films like RAJ NEETI (starring Ajay Devgn, Ranbir Kapoor etc.), his latest being TOOFAN in 2021 (starring Farhan Akhtar etc). He is well respected as a Script Advisor.',

      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm0707304/?ref_=ext_shr_lnk',
      },
      projects: [
        {poster: `${Gulam}`,},
        {poster: `${Raajneeti}`,},
        {poster: `${Toofaan}`,},
      ]
    }],
    producer: [],
    releaseDate: '',
    story: 'The company has secured the Indian remake rights for the acclaimed thriller film BURIED. Known as one of the finest thrillers ever made, BURIED holds an iconic status within the global Film Fraternity. The film features Hollywood actor Ryan Reynolds in a captivating lead role. With the remake rights secured, the company aims to create a powerful Indian version of BURIED, adding thrilling twists and cultural nuances that resonate with Indian audiences. Fans can look forward to an engaging adaptation that pays homage to the original while infusing its own unique flavor.',
    cast: [],
    trailers: null
  },
  {
    id: 4,
    title: 'Anamika',
    genre: 'Edge-of-the-seat Thriller | Emotional',
    status: 'Upcoming',
    image: `${Anamika}`,
    director: [{
      name: 'Siraj Kalla',
      image: `${SirajKalla}`,
      // description: 'Siraj Kalla is an Indian film artist, who has worked predominantly in the Telugu movie industry. He is known for 2018 (2023), D for Dopidi (2013) and Darr Sabko Lagta Hai (2015).',
      description: 'Siraj is a well-known Writer & Director in the Telugu, Malayalam and Hindi Film industries. He was the 2nd Unit Director for one of the most watched Amazon original series, ‘The Family Man’. He debuted as a Writer-Director with his commercially successful Telugu feature film ‘D for Dopidi’ produced by the respected filmmaker duo Raj & DK. Siraj has been a part of many films as a Writer, Co-director and Chief-associate director as well. He has also directed a Hindi TV series ‘2AM’ starring Bipasha Basu. Siraj has been a part of many acclaimed films as a Writer, Co-director and Chief-associate director. A few of the films he has been a part of: "2018", "Mammootty", "A Gentleman" and "Monster" by Vysakh',
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm5409032/?ref_=ext_shr_lnk',
      },
      projects: [
        {
          poster: `${TheFamilyMan}`,
          link: 'https://www.imdb.com/title/tt9544034/?ref_=ext_shr_lnk'
        },
        {
          poster: `${DforDopidi}`,
          link: 'https://www.imdb.com/title/tt2504086/?ref_=ext_shr_lnk'
        }
      ]
    }],
    writer: null,
    producer: [],
    releaseDate: null,
    story: 'Upcoming',
    cast: null,
    trailers: null
  },
  {
    id: 5,
    title: 'Masuriya',
    genre: 'Romantic | Comedy',
    status: 'Upcoming',
    image: `${Masuriya}`,
    director: [{
      name: 'Shonali Bose',
      image: `${ShonaliBose}`,
      // description: 'Shonali Bose is the director of multiple successful and critically acclaimed films, including the latest Amazon Original "Modern Love", "The Sky is Pink" starring Farhan Akhtar and Priyanka Chopra, "Margarita with a Straw", "Amu", etc. and has won such accolades as the National Film Award, Sundance Mahindra Global Film-maker Award etc.',
      description: "Shonali Bose is an Indian film director, writer and film producer. Having made her feature film debut in 2005, she has since won such accolades as a National Film Award, a Bridgestone Narrative Award, and a Sundance Mahindra Global Filmmaker Award. Bose earned her breakthrough with her first feature film, the 2005 biographical drama Amu, which was based on her own novel of the same name. It garnered critical acclaim and won the National Film Award for Best Feature Film in English. Bose's status as a filmmaker grew following the critical and commercial success of films like Margarita with a Straw (2015), The Sky Is Pink (2019) starring Farhan Akhtar Priyanka Chopra, Modern Love anthology (2022) for Amazon Prime etc. Presently she is in the pre production of a major series of Excel Entertainment for Amazon Prime.",
      socialLinks: {
        linkedin: 'https://www.imdb.com/name/nm1773569/?ref_=ext_shr_lnk'
      },
      projects: [
        { poster: `${TheSkyIsPink}` },
        { poster: `${Margarita}` },
      ]
    }],
    writer: [{
      name: 'Sheetal Kapoor',
      image: null,
      description: 'SHEETAL KAPOOR is an alumna of the Screen Writing faculty of FTII Pune. She is a qualified software engineer but left her lucrative job to follow her passion of writing. She has been associated with writers like Jyoti Kapoor etc. After writing the initial drafts of this Film, she wrote multiple dialogue drafts under the active supervision of the Director of the Film, Shonali Bose.',
      description2: 'SHEETAL KAPOOR is an alumna of the Screen Writing faculty of FTII Pune. She is a qualified software engineer but left her lucrative job to follow her passion of writing. She has been associated with writers like Jyoti Kapoor etc. After writing the initial drafts of this Film, she wrote multiple dialogue drafts under the active supervision of the Director of the Film, Shonali Bose.',
      socialLinks: {
      }
    }],
    producer: null,
    scriptConsultant: [{
      name: 'Anjum Rajabali',
      image: `${AnjumRajabali}`,
      description: 'ANJUM RAJABALI is a veteran screenwriter. He started his career with writings Films like GHULAM (starring Amir Khan etc.), continued with films like RAJ NEETI (starring Ajay Devgn, Ranbir Kapoor etc.), his latest being TOOFAN in 2021 (starring Farhan Akhtar etc). He is well respected as a Script Advisor.',
      description2: 'ANJUM RAJABALI is a veteran screenwriter. He started his career with writings Films like GHULAM (starring Amir Khan etc.), continued with films like RAJ NEETI (starring Ajay Devgn, Ranbir Kapoor etc.), his latest being TOOFAN in 2021 (starring Farhan Akhtar etc). He is well respected as a Script Advisor.',
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm0707304/?ref_=ext_shr_lnk',
      },
      projects: [
        {poster: `${Gulam}`,},
        {poster: `${Raajneeti}`,},
        {poster: `${Toofaan}`,},
      ]
    }],
    releaseDate: '',
    story: 'A powerpacked Rom-Com musical. ',
    story2: '"It was a million of tiny little things that, when you added them all up, they meant we were supposed to be together " – Sleepless in Seattle',
    cast: null,
    trailers: null
  },
  {
    id: 6,
    title: 'Ferozpur',
    genre: 'Investigative Thriller | Emotional | Action',
    status: 'Upcoming',
    image: `${Firozpur2}`,
    director: [{
      name: 'Mandeep Chaahal',
      image: `${MandeepChaahal}`,
      // description: "Mandeep has navigated between Punjabi and Hindi cinema, directing successful Punjabi films like 'Just U & Me' and 'Nidarr', while also working as a chief assistant director on notable Bollywood projects like 'Lamhaa', 'Humko Deewana Kar Gaye', and 'Andaaz'.",
      description: "Mandeep has been successfully straddling between Punjabi and Hindi, for quite a few years now. After assisting well- known Directors from the Hindi Film industry, he directed his 1st Punjabi Film ‘Just U & Me’, a romantic comedy that became a Hit. Subsequently, he directed 4 more films ‘Arjan’, ‘Punjabian Da King’, ‘And Munda Faridkotia’.His 2023 release is ‘Nidarr’, an action thriller, wherein actor Mukesh Rishi entrusted Mandeep with the responsibility of introducing his son Raghav Rishi as the Protagonist. Presently, Mandeep is directing three films in various stages of production. He worked as the Chief Assistant Director in multiple films like ‘Lamhaa’ (2010), directed by Rahul Dholkia starring Sanjay Dutt, Bipasha Basu, and Anupam Kher, etc., ‘Humko Deewana Kar Gaye’ (2006), directed by Raj Kanwar, starring Akshay Kumar, Katrina Kaif, Anil Kapoor, etc. ‘Andaaz’ directed by Raj Kanwar starring Akshay Kumar, Priyanka Chopra, Lara Dutt etc. ",
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm1401789/?ref_=ext_shr_lnk',
      },
      projects: [
        {
          poster: `${Nidarr}`,
          link: 'https://www.imdb.com/title/tt11952964/?ref_=ext_shr_lnk'
        },
        {
          poster: `${Arjan}`,
          link: 'https://www.imdb.com/title/tt6369298/?ref_=ext_shr_lnk'
        }
      ]
    }],
    writer: null,
    producer: [],
    releaseDate: '',
    story: 'Upcoming',
    cast: null,
    trailers: null
  },
  {
    id: 7,
    title: '7 HOURS TO GO!',
    genre: 'Thriller | Action',
    status: 'Released',
    image: `${SevenhrToGo}`,
    director: [{
      name: 'Saurabh Varma',
      image: `${SaurabhVarma}`,
      description: 'With 25 years of experience in the Filmed Entertainment industry, Saurabh Varma is a distinguished director, writer, and marketeer. He has contributed to over 950 films across Indian languages and received the prestigious Philip Kotler Award.',
      description2: 'With 25 years of experience in the Filmed Entertainment industry, Saurabh Varma is a distinguished director, writer, and marketeer. He has contributed to over 950 films across Indian languages and received the prestigious Philip Kotler Award.',
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm2735803/?ref_=ext_shr_lnk',
      }
    }],
    writer: [{
      name: 'Saurabh Varma',
      image: `${SaurabhVarma}`,
      description: 'With 25 years of experience in the Filmed Entertainment industry, Saurabh Varma is a distinguished director, writer, and marketeer. He has contributed to over 950 films across Indian languages and received the prestigious Philip Kotler Award.',
      description2: 'With 25 years of experience in the Filmed Entertainment industry, Saurabh Varma is a distinguished director, writer, and marketeer. He has contributed to over 950 films across Indian languages and received the prestigious Philip Kotler Award.',
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm2735803/?ref_=ext_shr_lnk',
      }
    }],
    producer: [
      {
        name: 'Krian Pictures with association of Zenone Studioz',
        image: `${KrianPictures}`,
        description: 'A production house which is involved in producing Bollywood films. Laal Rang, 7 Hours To Go and unINDIAN are their projects.',
        description2: 'A production house which is involved in producing Bollywood films. Laal Rang, 7 Hours To Go and unINDIAN are their projects.',
        socialLinks: {
          x: 'https://x.com/krianpictures'
        }
      }
    ],
    releaseDate: '24th Jun 2016',
    story: 'The film is a fast paced investigative thriller set in Mumbai, present day. Inspired by true event, the film revolves around a hostage crisis and what happens within 7 hours after that incident.',
    cast: [
      {
        name: 'Vipin Sharma',
        image: `${VipinSharma}`,
        description: ' He is an actor and writer, known for Like Stars on Earth (2007), Gangs of Wasseypur (2012) and Hotel Mumbai (2018).',
        description2: ' He is an actor and writer, known for Like Stars on Earth (2007), Gangs of Wasseypur (2012) and Hotel Mumbai (2018).',
        socialLinks: {
          imdb: 'https://www.imdb.com/name/nm1479650/?ref_=ext_shr_lnk',
        }
      },
      {
        name: 'Sandeepa Dhar',
        image: `${SandeepaDhar}`,
        description: 'Sandeepa Dhar is an Indian actress who debuted in "Isi Life Mein," earning multiple award nominations. She received critical acclaim for her roles in "Dabangg 2," "Global Baba," and "Heropanti," and trained in MMA for her role in "7 Hours To Go."',
        description2: 'Sandeepa Dhar is an Indian actress who debuted in "Isi Life Mein," earning multiple award nominations. She received critical acclaim for her roles in "Dabangg 2," "Global Baba," and "Heropanti," and trained in MMA for her role in "7 Hours To Go."',
        socialLinks: {
          imdb: 'https://www.imdb.com/name/nm4191182/?ref_=ext_shr_lnk'
        }
      },
      {
        name: 'Natasa Stankovic',
        image: `${NatasaStankovic}`,
        description: 'Natasa Stankovic, a Serbian-born model, dancer, and actress, gained fame in Bollywood with a dance number in "Satyagraha" (2013) and ads, including one with Ranveer Singh. She also appeared in "Bigg Boss 8" in 2014.',
        description2: 'Natasa Stankovic, a Serbian-born model, dancer, and actress, gained fame in Bollywood with a dance number in "Satyagraha" (2013) and ads, including one with Ranveer Singh. She also appeared in "Bigg Boss 8" in 2014.',
        socialLinks: {
          imdb: 'https://www.imdb.com/name/nm5788330/?ref_=ext_shr_lnk'
        }
      }
    ],
    trailers: ['ZmkoRZNlzQo?si=6KYvH9zlUS7aTWIf']
  },
  {
    id: 8,
    title: 'Solid Patels',
    genre: 'Comedy',
    status: 'Released',
    image: `${SolidPatels}`,
    director: [{
      name: 'Saurabh Varma',
      image: `${SaurabhVarma}`,
      description: 'With 25 years of experience in the Filmed Entertainment industry, Saurabh Varma is a distinguished director, writer, and marketeer. He has contributed to over 950 films across Indian languages and received the prestigious Philip Kotler Award.',
      description2: 'With 25 years of experience in the Filmed Entertainment industry, Saurabh Varma is a distinguished director, writer, and marketeer. He has contributed to over 950 films across Indian languages and received the prestigious Philip Kotler Award.',
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm2735803/?ref_=ext_shr_lnk',
      }
    }],
    writer: [
      {
        name: 'Rahul Patel',
        image: `${RahulPatel}`,
        description: 'Rahul Patel is known for Saat Phero Ki Hera Pherie (2018), Made in India and Vaahlam Jaao Ne (2022).',
        description2: 'Rahul Patel is known for Saat Phero Ki Hera Pherie (2018), Made in India and Vaahlam Jaao Ne (2022).',
        socialLinks: {
          imdb: 'https://www.imdb.com/name/nm3542231/?ref_=ext_shr_lnk',
        }
      }
    ],
    producer: [],
    releaseDate: '24th Apr 2015',
    story: 'Tom Patel & Jerry Patel are two Gujarati’s who continuously keep getting into trouble because of Jerry’s misadventures. Their life takes a hilarious turn when Jerry botches up a get-rich-quick scheme. The only way to fix it is to execute the most outrageous plan, causing a laugh riot.',
    cast: [
      {
        name: 'Shiv Panditt',
        image: `${ShivPanditt}`,
        description: 'Shiv Panditt is an actor, known for Shershaah (2021), Shaitan (2011) and Laal Singh Chaddha (2022).',
        description2: 'Shiv Panditt is an actor, known for Shershaah (2021), Shaitan (2011) and Laal Singh Chaddha (2022).',
        socialLinks: {
          imdb: 'https://www.imdb.com/name/nm3109407/?ref_=ext_shr_lnk',
        }
      },
      {
        name: 'Shazahn Padamsee',
        image: `${ShazahnPadamsee}`,
        description: 'Shazahn Padamsee, daughter of actors Alyque Padamsee and Sharon Prabhakar, is an Indian actress and model. She debuted in "Rocket Singh: Salesman of the Year" (2009) and earned acclaim for the Telugu hit "Orange" (2010). She also appeared in "Dil Toh Baccha Hai Ji" (2011) and "Housefull 2" (2012).',
        description2: 'Shazahn Padamsee, daughter of actors Alyque Padamsee and Sharon Prabhakar, is an Indian actress and model. She debuted in "Rocket Singh: Salesman of the Year" (2009) and earned acclaim for the Telugu hit "Orange" (2010). She also appeared in "Dil Toh Baccha Hai Ji" (2011) and "Housefull 2" (2012).',
        socialLinks: {
          imdb: 'https://www.imdb.com/name/nm3724228/?ref_=ext_shr_lnk',
        }
      },
      {
        name: 'Kettan Singh',
        image: `${KettanSingh}`,
        description: 'Kettan Singh is known for Johnny Jumper, Partners (2017) and Vicky Velingkar (2019).',
        description2: 'Kettan Singh is known for Johnny Jumper, Partners (2017) and Vicky Velingkar (2019).',
        socialLinks: {
          imdb: 'https://www.imdb.com/name/nm6747743/?ref_=ext_shr_lnk',
        }
      }
    ],
    trailers: ['gNnlGLE1WEE?si=uB1LjKetcUseWoMH']
  },

  {
    id: 9,
    title: 'Hasna Mana Hain',
    genre: 'Romance | Drama | Comedy',
    status: 'Upcoming',
    image: `${HasnaManaHain}`,
    director: [{
      name: 'Suman Mukhopadhyay',
      image: `${SumanDirector}`,
      // description: "Suman's directorial debut HERBERT (2006) won a National Award and was praised by Anupama Chopra as a top Indian debut of the last 20 years. He is a contemporary of Anirudh Roy Chowdhury, who directed PINK starring Amitabh Bachchan, Tapsee Pannu etc.",
      description: "Suman, a national award winning director and a respected contemporary of Aniruddha Roychoudhury (Director, Pink etc.), Srijit Mukherjee (Director, Shabash Mithu etc.) has directed more than 7 films which have been commercially successful as well as nominated for various film festivals such as Busan, Melbourne, New York. His digital film Posham Pa (Hindi) on Zee 5 was nominated for FilmFare OTT 2020. Reputed film historian and journalist Ms. Anupama Chopra has placed his debut film Herbert (ranked 5th) in the 40 break-through Indian Directorial debut after Dil Chahta Hain, Black Friday, Munna Bhai MBBS etc.",
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm2655736/?ref_=ext_shr_lnk',
      },
      projects: [
        { poster: `${Herbert}` },
        { poster: `${PoshamPa}` },
      ]
    }],
    writer: [{
      name: 'Pubali Chaudhuri',
      image: `${PubaliPfp}`,
      // description: 'Pubali is one of the most prolific screenwriters in the Hindi Film space. She has written critically acclaimed Films like ROCK ON, KAI PO CHE etc. which are also big commercial successes, amongst several other of her works.',
      description: 'Renowned writer Pubali Choudhurie is known for her commercially successful and critically acclaimed films such as Rock On, Kai Po Che, Rock On 2 etc. She is known for her true-to-life story telling and layered characters. She has been the HOD for Screen writing faculty at FTII, Pune. Presently, she is working on multiple projects with well-known production houses. One of her recent films is going to the floors soon with the talented Sonali Bose as the director (The Sky is Pink etc.).',
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm3306073/?ref_=ext_shr_lnk'
      },
      projects: [
        { poster: `${RockOn}` },
        { poster: `${KaiPoChe}` },
      ]
    }],
    producer: null,
    releaseDate: null,
    story: 'Upcoming',
    cast: null,
    trailers: null
  }
];
