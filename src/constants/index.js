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
      "Built a sleek, interactive web application using the Google Maps JavaScript API that allows users to document and visualize their travel history. Users can place custom pins on a dynamic map, attach personalized descriptions, and upload photos! Integrated localStorage to ensure all pins persist across sessions, and designed a clean and intuitive UI focused on user experience and visual appeal.",
    link: "https://github.com/Abeer05/MapMyMoments",
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
      "Developed a unique, interactive 3D portfolio website to showcase my skills and projects in a visually captivating way! Built with React, React Three Fiber for 3D rendering, and styled using Tailwind CSS, the site features a floating island and engaging elements that respond to mouse and keyboard inputs. The portfolio includes sections for my projects, an about me page, and a contact form, all seamlessly integrated into an immersive user experience on all devices!",
    link: "https://github.com/Abeer05/Portfolio",
  },
];

export const weatherConditions = [
  {
    name: "rainy",
    skyColor: "#5a6b7a",
    hemisphereLight: {
      intensity: 1.2,
      color: "#8a9bb0",
      groundColor: "#6b7280",
    },
    directionalLight: {
      intensity: 0.8,
      color: "#9ca3af",
      position: [2.5, 3, 0.5],
    },
    ambientLight: { intensity: 0.6 },
    color: "bg-[#0a0f2c]",
    opacity: "opacity-100",
  },
  {
    name: "clear",
    skyColor: "#87ceeb",
    hemisphereLight: {
      intensity: 2.2,
      color: "#ffffff",
      groundColor: "#d4a574",
    },
    directionalLight: {
      intensity: 2.5,
      color: "#fff5e6",
      position: [2.5, 3, 0.5],
    },
    ambientLight: { intensity: 0.8 },
    color: "bg-yellow-400",
    opacity: "opacity-100",
  },
  {
    name: "cloudy",
    skyColor: "#a8b5c2",
    hemisphereLight: {
      intensity: 1.5,
      color: "#e5eaf0",
      groundColor: "#9ca3af",
    },
    directionalLight: {
      intensity: 1.2,
      color: "#d6dae0",
      position: [2.5, 3, 0.5],
    },
    ambientLight: { intensity: 0.9 },
    color: "bg-[#708090]",
    opacity: "opacity-60",
  },
];
