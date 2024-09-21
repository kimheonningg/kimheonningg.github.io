import koreaFlag from "$lib/images/flag/koreaFlag.svg";
import chinaFlag from "$lib/images/flag/chinaFlag.svg";
import ukFlag from "$lib/images/flag/ukFlag.svg";

export enum educationStatus {
  ATTENDING,
  GRADUATED,
}

export enum educationType {
  OFFICIAL_DEGREE,
  SHORT_TERM_STUDY,
}

export enum currentStatus {
  WORKING,
  FINISHED,
}

export enum locationType {
  REMOTE,
  ONSITE,
  HYBRID,
}

export enum developmentType {
  WEB,
  MOBILE_APPLICATION,
  SOFTWARE,
}

export enum languageType {
  KOREAN,
  ENGLISH,
  CHINESE_MANDARIN,
}

export enum languageProficiency {
  NATIVE = 5,
  FULL_PROFESSIONAL = 4,
  PROFESSIONAL = 3,
  LIMITED = 2,
  ELEMENTARY = 1,
}

export const content = {
  contact: {
    email: "hannahkhw@snu.ac.kr",
    linkedIn: "https://www.linkedin.com/in/kimheonningg/",
    gitHub: "https://github.com/kimheonningg",
    instagram: "https://www.instagram.com/heonningg_/",
  },
  education: [
    {
      level: "High School",
      type: educationType.OFFICIAL_DEGREE,
      officialName: "Korean Minjok Leadership Academy",
      shortName: "KMLA",
      koreanName: "민족사관고등학교",
      url: "http://english.minjok.hs.kr/contents/main.php",
      location: "Hoengseong, Republic of Korea",
      gpa: "4.95 / 5.0",
      studyingYears: "Feb 2018 - Feb 2021",
      status: educationStatus.GRADUATED,
      awardsAndHonors: [
        {
          name: "First Class Honor in Elementary Linear Algebra",
          date: "July 2019",
        },
        {
          name: "Yeongjae Scholarship",
          date: "May 2020",
          description: "Scholarship rewarded to top 10%",
        },
        {
          name: "First Class Honor in AP Computer Science A",
          date: "Sep 2020",
        },
        {
          name: "President of Hoengseong County Award",
          date: "Feb 2021",
          descripyion: "Graduation award",
        },
      ],
      activitiesAndSocieties:
        "Minjok Orchestra (Fusion Orchestra), 사무침 (Samulnori), Head of 가야금 (gayageum) quartet team, Psyche (psychology), MUN, MUNESCO, 고궁 (Korean historical site tour for foreigners volunteer), 즐거운 학교 (teaching volunteer), Interact (teaching volunteer), MPT(peer tutoring)",
    },
    {
      level: "Bachelor's Degree",
      type: educationType.OFFICIAL_DEGREE,
      officialName: "Seoul National University",
      shortName: "SNU",
      koreanName: "서울대학교",
      url: "https://www.snu.ac.kr/",
      location: "Seoul, Republic of Korea",
      gpa: "",
      major: "Electrical and Computer Engineering",
      studyingYears: "March 2021 - Present",
      status: educationStatus.ATTENDING,
      awardsAndHonors: [
        {
          name: "Additional College Scholarship",
          date: "Dec 2021",
        },
        {
          name: "Short-Term Overseas Studying Grant",
          date: "Sep 2023",
        },
      ],
      activitiesAndSocieties:
        "SNUtor (mentoring volunteer), GIV (volunteer), Video Subtitle Generation Intern of Programming Methodology course video lecture series",
    },
    {
      level: "Visiting Student",
      type: educationType.SHORT_TERM_STUDY,
      officialName: "Stanford University",
      url: "https://www.stanford.edu/",
      location: "Stanford, CA, United States of America",
      gpa: "3.93 / 4.3",
      studyingYears: "June 2023 – Aug 2023",
      status: educationStatus.GRADUATED,
    },
  ],
  experience: [
    {
      employmentType: "Internship",
      positionName: "Frontend Developer",
      companyNameEn: "SIMACRO",
      companyNameKr: "시마크로",
      developmentType: [developmentType.SOFTWARE],
      techStack: "Node JS",
      location: "Seoul, Republic of Korea",
      locationType: locationType.ONSITE,
      url: "https://simacro.com/",
      duration: "July 2024 - Aug 2024",
      status: currentStatus.FINISHED,
      description: [
        "Improved the functionality of the process canvas and the meta pfd within the process metaverse software by creating new features and enhancing prewritten codes.",
        "Created the management window and the features within it. This section is used by admin users to manage users, groups, roles, etc.",
        "Enhanced the 3D widget which used the three.js library. Created the static datasheet widget, and developed the connection between the widgets.",
      ],
    },
    {
      employmentType: "Freelance",
      positionName: "Undergraduate Journalist",
      companyNameEn: "KISIA",
      companyNameKr: "한국정보보호산업협회",
      location: "Seoul, Republic of Korea",
      locationType: locationType.HYBRID,
      url: "https://www.kisia.or.kr/",
      duration: "May 2024 - Dec 2024",
      status: currentStatus.WORKING,
      description: [
        "KISIA Security Reporter (KSR)",
        "Created monthly card news on security topics",
      ],
    },
    {
      employmentType: "Internship",
      positionName: "Backend Developer",
      companyNameEn: "Platypus Soft",
      companyNameKr: "플래티푸스소프트",
      developmentType: [developmentType.SOFTWARE],
      techStack: "Spring Boot, MySQL, Redis, Ubuntu, Python",
      location: "Seoul, Republic of Korea",
      locationType: locationType.ONSITE,
      duration: "Jan 2024 - April 2024",
      status: currentStatus.FINISHED,
      description: [
        "Designed and implemented the backend architecture of a chatbot utilizing ChatGPT API that performs vector search to look for relevant documents within the database to generate answers.",
      ],
    },
    {
      employmentType: "Internship",
      positionName: "Frontend Developer",
      companyNameEn: "Bside Korea",
      companyNameKr: "비사이드 코리아",
      developmentType: [
        developmentType.WEB,
        developmentType.MOBILE_APPLICATION,
      ],
      techStack: "Redwood JS, Flutter",
      location: "Seoul, Republic of Korea",
      locationType: locationType.ONSITE,
      url: "https://corp.bside.ai/",
      duration: "Oct 2023 - Jan 2024",
      status: currentStatus.FINISHED,
      description: [
        "Enhanced and maintained the company website and mobile application dedicated to facilitating shareholder activism.",
        "Contributed to customizing an open-source form builder tailored to the company for non-developers’ use.",
        "Improved the functionality of the WYSIWYG editor used on the company website.",
      ],
    },
    {
      employmentType: "Freelance",
      positionName: "Undergraduate Venture Partner",
      companyNameEn: "The Ventures",
      companyNameKr: "더벤처스",
      location: "Seoul, Republic of Korea",
      locationType: locationType.REMOTE,
      url: "https://www.theventures.co/",
      duration: "May 2023 - June 2023",
      status: currentStatus.FINISHED,
      description: [
        "Employed a variety of analytical methods, including top-down and bottom-up approaches, for deal sourcing diverse start-ups on a weekly basis.",
      ],
    },
    {
      employmentType: "Self-employed",
      positionName: "Academic Tutor",
      companyNameEn: "Place5",
      companyNameKr: "플레이스5(김과외)",
      location: "Seoul, Republic of Korea",
      locationType: locationType.ONSITE,
      url: "https://inc.place5.com/",
      duration: "March 2021 - June 2023",
      status: currentStatus.FINISHED,
      description: [
        "Used the 김과외 platform, and other various methods to secure tutoring positions.",
        "Tutored math to a 1st grade student at middle school (7th grade student) for 7 months (March ‘21 ~ Sep ‘21)",
        "Tutored math to a 1st grade student at middle school (7th grade student) for 3 months (May ‘21 ~ July ‘21)",
        "Tutored math to a 5th grade student at Elementary school for 2 months (July ‘21 ~ Aug ‘21)",
        "Tutored math to a 3rd grade student at middle school (9th grade student) for 5 months (Aug ‘21 ~ Dec ‘21)",
        "Tutored math (SSAT, Prealgebra, etc.) and Java to a student at Korea International School (KIS) for 1 year 10 months (Aug ‘21 ~ June ‘23)",
        "Tutored Java to a 10th grade student at KMLA for 1 month (Jan ‘22)",
        "Tutored math to a 5th grade student at elementary school for 9 months (Jan ‘22 ~ Sep ‘22)",
        "Tutored math to a 4th grade student at elementary school for 9 months (Jan ‘22 ~ Sep ‘22)",
        "Tutored math to a 1st grade student at middle school (7th grade student) for 10 months (April ‘22 ~ Jan ‘23)",
        "Tutored AP Computer Science A to a 11th grade student at KMLA for 1 month (Aug ‘23)",
        "Tutored differential equations to a 12th grade student at KMLA for 1 month (Jan ‘23)",
      ],
    },
  ],
  organization: [
    {
      name: "Sustainable Development Program",
      url: "https://www.sdpglobal.org/",
      position: "Tech team member",
      duration: "Sep 2024 - Present",
      status: currentStatus.WORKING,
      description: [""],
    },
  ],
  language: {
    spokenLanguage: [
      {
        type: languageType.KOREAN,
        typeString: "Korean",
        proficiency: languageProficiency.NATIVE,
        flagImg: koreaFlag,
      },
      {
        type: languageType.ENGLISH,
        typeString: "English",
        proficiency: languageProficiency.FULL_PROFESSIONAL,
        flagImg: ukFlag,
      },
      {
        type: languageType.CHINESE_MANDARIN,
        typeString: "Chinese",
        proficiency: languageProficiency.ELEMENTARY,
        flagImg: chinaFlag,
      },
    ],
    computerLanguage: [],
  },
  volunteer: [
    {
      role: "Mentor",
      organization: "Seoul National University Social Responsibility",
      url: "https://snusr.snu.ac.kr/",
      duration: "April 2024 - Present",
      status: currentStatus.WORKING,
      description: "Provided online mentoring and onsite campus tours.",
    },
    {
      role: "English Tutor",
      organization: "책N꿈도서관",
      duration: "March 2023 - June 2023",
      status: currentStatus.FINISHED,
      description: "Tutored English to a 5th grade student.",
    },
    {
      role: "Samulnori Performance",
      organization: "국립횡성숲체원",
      duration: "Dec 2018",
      status: currentStatus.FINISHED,
    },
    {
      role: "Tutor",
      organization: "둔내삼육지역아동센터",
      duration: "Sep 2018 - Nov 2019",
      status: currentStatus.FINISHED,
      description:
        "Tutored math, Korean, PE, etc. to elementary school students.",
    },
    {
      role: "Orchestra Performance",
      organization: "행복마을",
      duration: "July 2018 - Aug 2019",
      status: currentStatus.FINISHED,
    },
    {
      role: "Tour Guide",
      organization: "강원도사회복지협의회",
      url: "https://www.kwcsw.or.kr/",
      duration: "March 2018 - Aug 2019",
      status: currentStatus.FINISHED,
      description:
        "Provided tours of Korean historical sites like 경복궁(Gyeongbokgung palace), etc. to foreigners.",
    },
    {
      role: "Tour Guide",
      organization: "YMCA LIFE",
      url: "https://www.ymcalife.com/",
      duration: "May 2016 - Aug 2016",
      status: currentStatus.FINISHED,
      description:
        "Provided tours of Korean historical sites like 경복궁(Gyeongbokgung palace), etc. to foreigners.",
    },
    {
      role: "English Translation",
      organization: "WENEEDS",
      url: "https://weneeds.modoo.at/",
      duration: "Mar 2016 - Jun 2017",
      status: currentStatus.FINISHED,
      description: "Translated Korean traditional fairy tales to English.",
    },
    {
      role: "Patient Care Associate",
      organization: "Asan Medical Center",
      url: "https://www.amc.seoul.kr/",
      duration: "Jan 2016",
      status: currentStatus.FINISHED,
      description: "",
    },
  ],
};
