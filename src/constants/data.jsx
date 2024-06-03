import { AashishSingh, AkshayOberoi, AnjumRajabali, KettanSingh, KrianPictures, MandeepChaahal, NatasaStankovic, RahulPatel, RandeepHooda, SandeepaDhar, SaurabhVarma, ShazahnPadamsee, ShivPanditt, SirajKalla, SyedAhmadAfzal, VipinSharma } from "../assets/people";
import { Anamika, Buried, Firozpur2, KA, LaalRang, Masuriya, PubaliPfp, RajPfp6, SevenhrToGo, ShonaliBose, SolidPatels, SubhroChowdhary, SumanDirector } from "../assets/photos";

export const teamMembers = [
  {
    id: 1,
    name: "Subhro Chowdhary",
    position: "Company Director",
    image: `${SubhroChowdhary}`,
    description: "A Film & TV Industry Leader with 20 + years of experience. As the former Head of Film Vertical of Ramoji Group, produced Films for Ushakiron Movies and managed the Studio operations of Ramoji Film City. During 2007-2010 played a key role as the ‘Vice President-Creative & Production’ of Zee Motion Pictures (the Film Vertical of Zee group). During 2000-2006 as a key member of the core team, launched & lead ETV Bangla, ETV Hindi, ETV Marathi etc. These extensive experiences have helped him to develop a tenacious commitment to WOW the audience by facilitating the production of unique & engaging content, combined with an in depth understanding of the creative process and audience preferences.",
    linkedin: 'https://www.linkedin.com/in/subhro-chowdhary-95406a15/'

  },
  {
    id: 2,
    name: "Raj Singh Chaudhary",
    position: "Creative Director",
    image: `${RajPfp6}`,
    description: "Chaudhary’s recent release on Netflix THAR starring Anil Kapoor, Fatima Sana Sheikh, Harshvardhan Kapoor, Satish Kaushik etc. created waves in the Indian media space with its hard-hitting story and visuals. He has also written films like GULAAL, NO SMOKING (starring John Abraham) etc. directed by Anurag Kashyap. THAR, considered as a path-breaking content, established Chaudhary as a director in-demand in a very short span of time."
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
    genre: 'Sci-Fi | Romantic Drama',
    status: 'Upcoming',
    image: `${KA}`,
    director: [{
      name: 'Raj Singh Chaudhary',
      image: `${RajPfp6}`,
      description: 'Chaudhary’s recent release on Netflix THAR starring Anil Kapoor, Fatima Sana Sheikh, Harshvardhan Kapoor, Satish Kaushik etc. created waves in the Indian media space with its hard-hitting story and visuals. He has also written films like GULAAL, NO SMOKING (starring John Abraham) etc. directed by Anurag Kashyap. THAR, considered as a path-breaking content, established Chaudhary as a director in-demand in a very short span of time.',
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm1758779/?ref_=ext_shr_lnk',
      }
    }],
    writer: [{
      name: 'Pubali Chaudhuri',
      image: `${PubaliPfp}`,
      description: 'Pubali is one of the most prolific screenwriters in the Hindi Film space. She has written critically acclaimed Films like ROCK ON, KAI PO CHE etc. which are also big commercial successes, amongst several other of her works.',
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm3306073/?ref_=ext_shr_lnk'
      }
    }],
    producer: [{
      name: 'Subhro Chowdhary',
      image: `${SubhroChowdhary}`,
      description: 'A Film & TV Industry Leader with 20 + years of experience. As the former Head of Film Vertical of Ramoji Group, produced Films for Ushakiron Movies and managed the Studio operations of Ramoji Film City. During 2007-2010 played a key role as the ‘Vice President-Creative & Production’ of Zee Motion Pictures (the Film Vertical of Zee group). During 2000-2006 as a key member of the core team, launched & lead ETV Bangla, ETV Hindi, ETV Marathi etc. These extensive experiences have helped him to develop a tenacious commitment to WOW the audience by facilitating the production of unique & engaging content, combined with an in depth understanding of the creative process and audience preferences.',
      socialLinks: {
        linkedin: 'https://www.linkedin.com/in/subhrochowdhary/'
      }
    }],
    releaseDate: '',
    story: 'An online exchange, that soon becomes a fairy tale romance when the boy is challenged to find the girl in the real world, leads to life changing journeys for both of them and questions the very idea of the ‘real world’',
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
      image: `${SaurabhVarma}`,
      description: 'With 25 years of experience in the Filmed Entertainment industry, Saurabh Varma is a distinguished director, writer, and marketeer. He has contributed to over 950 films across Indian languages and received the prestigious Philip Kotler Award.',
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm2735803/?ref_=ext_shr_lnk',
      }
    }],
    writer: [{
      name: 'Saurabh Varma',
      image: `${SaurabhVarma}`,
      description: '',
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm2735803/?ref_=ext_shr_lnk',
      }
    }],
    producer: [
      {
        name: 'Krian Pictures',
        image: `${KrianPictures}`,
        description: 'A production house which is involved in producing Bollywood films. Laal Rang, 7 Hours To Go and unINDIAN are their projects.',
        socialLinks: {
          x:'https://x.com/krianpictures'
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
        socialLinks: {
          imdb: 'https://www.imdb.com/name/nm1479650/?ref_=ext_shr_lnk',
        }
      },
      {
        name: 'Sandeepa Dhar',
        image: `${SandeepaDhar}`,
        description: 'Sandeepa Dhar is an Indian actress who debuted in "Isi Life Mein," earning multiple award nominations. She received critical acclaim for her roles in "Dabangg 2," "Global Baba," and "Heropanti," and trained in MMA for her role in "7 Hours To Go."',
        socialLinks: {
          imdb: 'https://www.imdb.com/name/nm4191182/?ref_=ext_shr_lnk'
        }
      },
      {
        name: 'Natasa Stankovic',
        image: `${NatasaStankovic}`,
        description: 'Natasa Stankovic, a Serbian-born model, dancer, and actress, gained fame in Bollywood with a dance number in "Satyagraha" (2013) and ads, including one with Ranveer Singh. She also appeared in "Bigg Boss 8" in 2014.',
        socialLinks: {
          imdb: 'https://www.imdb.com/name/nm5788330/?ref_=ext_shr_lnk'
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
    director: [{
      name: 'Siraj Kalla',
      image: `${SirajKalla}`,
      description: 'Siraj Kalla is an Indian film artist, who has worked predominantly in the Telugu movie industry. He is known for 2018 (2023), D for Dopidi (2013) and Darr Sabko Lagta Hai (2015).',
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm5409032/?ref_=ext_shr_lnk',
      }
    }],
    writer: null,
    producer: [{
      name: 'Aashish Singh',
      image: `${AashishSingh}`,
      description: 'Aashish Singh is a highly accomplished veteran in the Film and Digital Content industry in India. During his 15+ years at Yash Raj Films as Sr. Vice President, he co-produced hits like "Ek Tha Tiger," "Dhoom 3," and "Chak De India." He has also served as CEO of Balaji Telefilms, Director of Original Films at Netflix, and CEO of Lyca Productions (Non-Tamil segment). Now, he is an independent producer creating content in multiple languages.',
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm0802088/?ref_=ext_shr_lnk',
      }
    },
    {
      name: 'Subhro Chowdhary',
      image: `${SubhroChowdhary}`,
      description: 'A Film & TV Industry Leader with 20 + years of experience. As the former Head of Film Vertical of Ramoji Group, produced Films for Ushakiron Movies and managed the Studio operations of Ramoji Film City. During 2007-2010 played a key role as the ‘Vice President-Creative & Production’ of Zee Motion Pictures (the Film Vertical of Zee group). During 2000-2006 as a key member of the core team, launched & lead ETV Bangla, ETV Hindi, ETV Marathi etc. These extensive experiences have helped him to develop a tenacious commitment to WOW the audience by facilitating the production of unique & engaging content, combined with an in depth understanding of the creative process and audience preferences.',
      socialLinks: {
        linkedin: 'https://www.linkedin.com/in/subhro-chowdhary-95406a15/'
      }
    }
    ],
    releaseDate: null,
    story: 'A Lady police officer must convince a female serial killer, who has been sentenced to death, to reveal the whereabouts of her last victim, the officer’s daughter.',
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
      image: `${ShonaliBose}`,
      description: 'Shonali Bose is the director of multiple successful and critically acclaimed films such as the latest Amazon Original MODERN LOVE, THE SKY IS PINK starring Farhan Akhtar, Priyanka Chopra MARGARITA WITH A STRAW, AMU etc. and has won such accolades as the National Film Award, Sundance Mahindra Global Film-maker Award etc.',
      socialLinks: {
        linkedin: 'https://www.imdb.com/name/nm1773569/?ref_=ext_shr_lnk'
      }
    },
    writer: {
      name: 'Sheetal Kapoor',
      image: null,
      description: 'SHEETAL KAPOOR is an alumna of the Screen Writing faculty of FTII Pune. She is a qualified software engineer but left her lucrative job to follow her passion of writing. She has been associated with writers like Jyoti Kapoor etc. After writing the initial drafts of this Film, she wrote multiple dialogue drafts under the active supervision of the Director of the Film, Shonali Bose.',
      socialLinks: {
      }
    },
    producer: null,
    scriptConsultant: {
      name: 'Anjum Rajabali',
      image: `${AnjumRajabali}`,
      description: 'ANJUM RAJABALI is a veteran screenwriter. He started his career with writings Films like GHULAM (starring Amir Khan etc.), continued with films like RAJ NEETI (starring Ajay Devgn, Ranbir Kapoor etc.), his latest being TOOFAN in 2021 (starring Farhan Akhtar etc). He is well respected as a Script Advisor.',
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm0707304/?ref_=ext_shr_lnk',
      }
    },
    releaseDate: '',
    story: 'A powerpacked Rom-Com musical. "It was a million of tiny little things that, when you added them all up, they meant we were supposed to be together " – Sleepless in Seattle',
    cast: null,
    trailers: null
  },
  {
    id: 5,
    title: 'Ferozpur (Hindi)',
    genre: 'Investigative Thriller | Emotional | Action',
    status: 'Upcoming',
    image: `${Firozpur2}`,
    director: {
      name: 'Mandeep Chaahal',
      image: `${MandeepChaahal}`,
      description: "Mandeep has navigated between Punjabi and Hindi cinema, directing successful Punjabi films like 'Just U & Me' and 'Nidarr', while also working as a chief assistant director on notable Bollywood projects like 'Lamhaa', 'Humko Deewana Kar Gaye', and 'Andaaz'.",
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm1401789/?ref_=ext_shr_lnk',
      }
    },
    writer: null,
    producer: [{
      name: 'Subhro Chowdhary',
      image: `${SubhroChowdhary}`,
      description: 'A Film & TV Industry Leader with 20 + years of experience. As the former Head of Film Vertical of Ramoji Group, produced Films for Ushakiron Movies and managed the Studio operations of Ramoji Film City. During 2007-2010 played a key role as the ‘Vice President-Creative & Production’ of Zee Motion Pictures (the Film Vertical of Zee group). During 2000-2006 as a key member of the core team, launched & lead ETV Bangla, ETV Hindi, ETV Marathi etc. These extensive experiences have helped him to develop a tenacious commitment to WOW the audience by facilitating the production of unique & engaging content, combined with an in depth understanding of the creative process and audience preferences.',
      socialLinks: {
        linkedin: 'https://www.linkedin.com/in/subhro-chowdhary-95406a15/'
      }
    }],
    releaseDate: '',
    story: 'In the background of 1971 India-Pakistan war, a group of Punjab villagers accidentally find an old radio, through which they can listen to Radio Lahore! While the villagers get excited about it, the family of army personnel in the village are torn between patriotism and the love of their son.',
    cast: null,
    trailers: null
  },
  {
    id: 6,
    title: '"BURIED" REMAKE',
    genre: 'Edge-of-the-seat thriller.',
    status: 'Upcoming',
    image: `${Buried}`,
    director: [{
      name: 'Under Discussions. The remake demands one of the most talented Directors.',
      image: null,
      description: '',
      socialLinks: {
        imdb: null
      }
    }],
    writer: [
      {
        name: 'Anand Prakash',
        image: null,
        description: 'An FTII alumni, Anand has an impressive body of work in the thriller genre in various South Indian languages.',
        socialLinks: {
          imdb: null
        }
      }
    ],
    scriptConsultant: {
      name: 'Anjum Rajabali',
      image: `${AnjumRajabali}`,
      description: 'ANJUM RAJABALI is a veteran screenwriter. He started his career with writings Films like GHULAM (starring Amir Khan etc.), continued with films like RAJ NEETI (starring Ajay Devgn, Ranbir Kapoor etc.), his latest being TOOFAN in 2021 (starring Farhan Akhtar etc). He is well respected as a Script Advisor.',
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm0707304/?ref_=ext_shr_lnk',
      }
    },
    producer: [],
    releaseDate: '',
    story: 'The company has acquired the Indian remake rights of the film BURIED. BURIED is considered as one of the best thrillers ever made and enjoys an iconic status across the globe within the Film Fraternity. The film enjoys 87% approval rating on Rotten Tomatoes. It stars Ryan Reynolds. Now being transformed into a powerful Indian adaptation.',
    cast: [],
    trailers: null
  },
  {
    id: 7,
    title: 'Solid Patels',
    genre: 'Comedy',
    status: 'Released',
    image: `${SolidPatels}`,
    director: [{
      name: 'Saurabh Varma',
      image: `${SaurabhVarma}`,
      description: 'With 25 years of experience in the Filmed Entertainment industry, Saurabh Varma is a distinguished director, writer, and marketeer. He has contributed to over 950 films across Indian languages and received the prestigious Philip Kotler Award.',
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm2735803/?ref_=ext_shr_lnk',
      }
    }],
    writer: [
      {
        name: 'Rahul Patel',
        image: `${RahulPatel}`,
        description: 'Rahul Patel is known for Saat Phero Ki Hera Pherie (2018), Made in India and Vaahlam Jaao Ne (2022).',
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
        socialLinks: {
          imdb: 'https://www.imdb.com/name/nm3109407/?ref_=ext_shr_lnk',
        }
      },
      {
        name: 'Shazahn Padamsee',
        image: `${ShazahnPadamsee}`,
        description: 'Shazahn Padamsee, daughter of actors Alyque Padamsee and Sharon Prabhakar, is an Indian actress and model. She debuted in "Rocket Singh: Salesman of the Year" (2009) and earned acclaim for the Telugu hit "Orange" (2010). She also appeared in "Dil Toh Baccha Hai Ji" (2011) and "Housefull 2" (2012).',
        socialLinks: {
          imdb: 'https://www.imdb.com/name/nm3724228/?ref_=ext_shr_lnk',
        }
      },
      {
        name: 'Kettan Singh',
        image: `${KettanSingh}`,
        description: 'Kettan Singh is known for Johnny Jumper, Partners (2017) and Vicky Velingkar (2019).',
        socialLinks: {
          imdb: 'https://www.imdb.com/name/nm6747743/?ref_=ext_shr_lnk',
        }
      }
    ],
    trailers: ['gNnlGLE1WEE?si=uB1LjKetcUseWoMH']
  },
  {
    id: 8,
    title: 'Laal Rang',
    genre: 'Comedy | Thriller',
    status: 'Released',
    image: `${LaalRang}`,
    director: [{
      name: 'Syed Ahmad Afzal',
      image: `${SyedAhmadAfzal}`,
      description: 'Syed Ahmad Afzal is known for YOU and I (2017), Laal Rang (2016) and Youngistaan (2014).',
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm6269768/?ref_=ext_shr_lnk',
      }
    }],
    writer: [{
      name: 'Syed Ahmad Afzal',
      image: `${SyedAhmadAfzal}`,
      description: '',
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm6269768/?ref_=ext_shr_lnk',
      }
    },
    {
      name: 'Pankaj Matta',
      image: null,
      description: 'Pankaj Matta is known for Chidi Balla (2019), Laal Rang (2016) and Good Luck Jerry (2022).',
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm6165016/?ref_=ext_shr_lnk',
      }
    }],
    producer: [
      {
        name: 'Krian Pictures',
        image: `${KrianPictures}`,
        description: 'A production house which is involved in producing Bollywood films. Laal Rang, 7 Hours To Go and unINDIAN are their projects.',
        socialLinks: {
          twitter:'https://x.com/krianpictures'
        }
      }
    ],
    releaseDate: '22nd Apr 2016',
    story: 'The film is a social drama with elements of dark humor set in the milieu of Karnal’s blood mafia. The film takes a peep into the life and times of the protagonist Shankar, an enigmatic young man. It is the story of friendship, love, greed and of course blood.',
    cast: [{
      name: 'Randeep Singh Hooda',
      image: `${RandeepHooda}`,
      description: 'Randeep Hooda is a prominent Indian actor known for his versatility and powerful performances. He gained critical acclaim for his roles in films like "Highway," "Sarbjit," and "Sultan." With a strong presence in both mainstream and independent cinema, Hooda has established himself as a significant talent in Bollywood.',
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm0393535/?ref_=ext_shr_lnk',
      }
    },
    {
      name: 'Akshay Oberoi',
      image: `${AkshayOberoi}`,
      description: 'Akshay Oberoi, is an accomplished actor trained in theater arts and dance. He debuted in "Isi Life Mein" and gained recognition for roles in "Pizza," "Laal Rang," and the critically acclaimed "Gurgaon." Akshay has also starred in notable digital series like "Selection Day" and "The Test Case."',
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm0643348/?ref_=ext_shr_lnk',
      }
    },
    {
      name: 'Rajneesh Duggal',
      image: null,
      description: '',
      socialLinks: {
        imdb: 'https://www.imdb.com/name/nm3152983/?ref_=ext_shr_lnk',
      }
    }],
    trailers: ['KzWsMbLwZ1M?si=RS_31D-NMrQzWBBC']
  }
];
