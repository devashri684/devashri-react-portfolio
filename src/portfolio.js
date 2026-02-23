/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Devashri",
  title: "Hi,I'm Devashri",
  subTitle: emoji(
    `A passionate Full Stack Developer 🚀 with a strong academic background (CGPA 9.05) and Honors in IoT, driven to build impactful and scalable software solutions.

I specialize in Java, SQL, React, and RESTful APIs, and I enjoy developing responsive web applications and IoT-integrated systems that solve real-world problems with clean architecture and efficient design.`
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  // github: "https://github.com/devashri684",
  linkedin: "https://www.linkedin.com/in/devashri-rewanwar-281a64259/",
  gmail: "devashrirewanwar@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Education Section

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Walchand Institute of Technology, Solapur",
      logo: require("./assets/images/witLogo.png"), 
      subHeader: "B-Tech in Electronics & Telecommunication Engineering | IoT Honors",
      duration: "2022 – 2026",
      desc: "Currently pursuing B-Tech with a strong academic record.",
      descBullets: [
        "CGPA: 9.05",
        "Focused on IoT systems, full stack development, and core electronics subjects"
      ]
    },
    {
      schoolName: "K.D. High School, Pusad",
      // logo: require("./assets/images/schoolLogo.png"),
      subHeader: "Class X",
      duration: "2019 – 2020",
      desc: "Completed secondary education with distinction.",
      descBullets: [
        "Percentage: 91.20%"
      ]
    },
    {
      schoolName: "K.D. High School and G.M. Junior College, Pusad",
      // logo: require("./assets/images/juniorCollegeLogo.png"),
      subHeader: "Class XII",
      duration: "2021 – 2022",
      desc: "Completed higher secondary education.",
      descBullets: [
        "Percentage: 71.50%"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF THE IMPACTFUL PROJECTS I HAVE BUILT",
  projects: [
    {
      image: require("./assets/images/Project1.webp"),
      projectName: "Smart Autonomous Agricultural Disease Detection",
      projectDesc:
        "Engineered an AI-enabled autonomous agricultural system for tomato plant disease detection using deep learning and computer vision (Python, TensorFlow). Designed scalable architecture integrating IoT sensors, camera modules, ESP32/Raspberry Pi, and real-time data pipelines. Implemented crop health analytics, grid-based field mapping, and precision spraying automation for smart farming."
    },
    {
     image: require("./assets/images/Project2.png"),
      projectName: "Weather Dashboard Web Application",
      projectDesc:
        "Built a real-time weather dashboard using REST APIs with dynamic data rendering. Designed a responsive, cross-browser compatible UI using modern frontend practices in React. Optimized performance and implemented a clean component-based architecture for scalable development."
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Extracurricular Activities 🏆"),
  subtitle:
    "Competitions, Hackathons, and Leadership Experiences that showcase my skills beyond academics.",

  achievementsCards: [
    {
      title: "1st Prize – Intercollege UI/UX Competition",
      subtitle:
        "Secured first place for designing an intuitive, user-centric interface in a competitive design event. Demonstrated strong problem-solving, creativity, and user experience design principles.",
      image: require("./assets/images/Figma-Logo.png"),
      imageAlt: "UI UX Competition Logo",
      footerLink: []
    },
    {
      title: "Hackathon Participant",
      subtitle:
        "Participated in 2+ hackathons, collaborating in fast-paced environments to develop innovative technology solutions under strict time constraints.",
      image: require("./assets/images/hackthon.jpg"),
      imageAlt: "Hackathon Logo",
      footerLink: []
    }
  ],
  display: true
};
// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  
  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// YouTube / Content Creation Section

const youtubeSection = {
  title: "Technical Content Creation 🎥",
  subtitle:   "  Sharing knowledge and simplifying technology for learners.",
  display: true,
  details:
    "Currently building my journey as a technical content creator, sharing educational tech videos."
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Let's Connect 🤝",
  subtitle:
    "I am actively seeking opportunities in software development and IoT-based systems. Whether it's a project collaboration, internship, or full-time role — my inbox is always open.",
  email_address: "devashrirewanwar@gmail.com"
};
// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  youtubeSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
