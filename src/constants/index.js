import {
  contact,
  css,
  git,
  github,
  html,
  javascript,
  linkedin,
  nextjs,
  nodejs,
  react,
  tailwindcss,
  python,
  java,
  cpp,
  php,
  c,
  sql,
  jquery,
  bash,
  ruby,
  perl,
  initials,
  linux,
  mapmymoments,
  moviemixer,
  portcreditpost,
  figma,
  flask,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Backend",
  },
  {
    imageUrl: java,
    name: "Java",
    type: "Backend",
  },
  {
    imageUrl: cpp,
    name: "C++",
    type: "Backend",
  },
  {
    imageUrl: php,
    name: "PHP",
    type: "Backend",
  },
  {
    imageUrl: c,
    name: "C",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: jquery,
    name: "jQuery",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: flask,
    name: "Flask",
    type: "Backend",
  },
  {
    imageUrl: sql,
    name: "SQL",
    type: "Backend",
  },
  {
    imageUrl: bash,
    name: "Bash",
    type: "Backend",
  },
  {
    imageUrl: ruby,
    name: "Ruby",
    type: "Backend",
  },
  {
    imageUrl: perl,
    name: "Perl",
    type: "Backend",
  },
  {
    imageUrl: linux,
    name: "Linux",
    type: "Operating System",
  },
  {
    imageUrl: figma,
    name: "Figma",
    type: "Design",
  },
];

export const experiences = [];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Abeer05",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/abeermalik",
  },
];

export const projects = [
  {
    iconUrl: mapmymoments,
    theme: "btn-back-green",
    name: "Map My Moments",
    description:
      "Built a web application using the Google Maps JavaScript API that lets users explore and interact with a dynamic map by adding custom pins, showcasing their travel history. Each marker lets you add photos, write custom descriptions, and tag your friends! Future plans include integrating AI-powered features such as automatic catchy title + blurb generation based on location and photos uploaded, as well as future travel destination ideas!. Link coming soon.",
    link: null,
  },
  {
    iconUrl: moviemixer,
    theme: "btn-back-red",
    name: "MovieMixer",
    description:
      "Developed a full-stack web app using Flask that resolves the common dilemma of choosing a movie with friends! By inputting two movie titles, users receive personalized recommendations tailored to both preferences. Using The Movie Database (TMDB) API, Python, and scikit-learn, this website compares 55+ movie attributes for accurate matchmaking. Built a dynamic UI with JavaScript for real-time data retrieval, search functionality, and popular content prioritization, with all artwork and images custom-edited by me.",
    link: "https://github.com/Abeer05/MovieMixer",
  },
  {
    iconUrl: portcreditpost,
    theme: "btn-back-blue",
    name: "The Port Credit Post",
    description:
      "Developed a newsletter website for my local high school using React, delivering timely event updates and articles to 200+ active users within three months. Designed a fully responsive UI with React, HTML, and CSS, ensuring optimal performance across all devices and boosting mobile traffic by 15% within a month. Achieved a perfect Google Lighthouse score of 100 for SEO and best practices, guaranteeing an excellent user experience and performance on both desktop and mobile.",
    link: "https://github.com/theportcreditpost/theportcreditpost.github.io",
  },
  {
    iconUrl: initials,
    theme: "btn-back-pink",
    name: "Portfolio",
    description:
      "Developed a unique, interactive 3D portfolio website to showcase my skills and projects in a visually captivating way! Built with React, React Three Fiber for 3D rendering, and styled using Tailwind CSS, the site features a floating island and engaging elements that respond to mouse and keyboard inputs. The portfolio includes sections for my projects, an about me page, and a contact form, all seamlessly integrated into an immersive user experience. Mobile view added soon.",
    link: "https://github.com/Abeer05/Portfolio",
  },
];
