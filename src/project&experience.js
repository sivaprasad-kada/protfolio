import dog from './assets/dog.svg';
import globe from './assets/globe.svg';
import shoe from'./assets/shoe.svg';
import todo from './assets/todolist.svg';
export const projects = [
  {
    title: "To-Do List App",
    tagline: "Conquer your day with just 3 goals!",
    description:
      "A focused to-do app where users set 3 key goals each day. Built with HTML, CSS, and JavaScript for dynamic interactions and smooth form validation.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Set exactly 3 daily goals",
      "Form validation with JavaScript",
      "Smooth CSS transitions for better UX",
    ],
    learnings: [
      "How to manipulate the DOM using JavaScript",
      "Client-side form validation techniques",
      "Using CSS transitions for smoother UI interactions",
    ],
    github: "https://github.com/sivaprasad-kada/focus_on_today",
    live: "https://sivaprasad-kada.github.io/focus_on_today/",
    logo:todo,
   
  },
  {
    title: "Tim Dog Startup",
    tagline: "Helping you meet friendly paws nearby!",
    description:
      "A static website prototype for a dog meetup startup. Designed using HTML, CSS, and Bootstrap to enhance front-end structure and layout skills.",
    technologies: ["HTML", "CSS", "Bootstrap"],
    features: [
      "Clean and responsive design",
      "Enhanced CSS layout understanding",
      "Static prototype for startup concept",
    ],
    learnings: [
      "Basics of responsive design with Bootstrap",
      "Improved understanding of HTML and CSS structure",
      "Working with container, grid, and layout components",
    ],
    github: "https://github.com/sivaprasad-kada/TinDog-Startup",
    live: "https://sivaprasad-kada.github.io/TinDog-Startup/",
    logo : dog
  },
  {
    title: "ShoeCompany Prototype",
    tagline: "Step into style with a smooth scroll!",
    description:
      "A professional-looking shoe brand landing page with smooth scroll, hamburger menu, and embedded Google Maps. Built using Tailwind CSS.",
    technologies: ["HTML", "CSS", "Tailwind CSS"],
    features: [
      "Hamburger menu for mobile navigation",
      "Smooth scrolling interaction",
      "Learned Tailwind basics and positioning",
      "Integrated Google Maps iframe",
    ],
    learnings: [
      "Introduction to Tailwind CSS utility-first classes",
      "Positioning elements using modern CSS",
      "Revisiting and strengthening HTML/CSS concepts",
      "Embedding and customizing Google Maps with iframes",
    ],
    github: "https://github.com/sivaprasad-kada/Shoe_Comapany",
    live: "https://shoecompany-by-sivaprasadkada.netlify.app",
    logo : shoe
  },
  {
    title: "Where In The World",
    tagline: "Explore every country — one click at a time!",
    description:
      "A dynamic ReactJS web app that displays data for every country in the world. Includes search, filter, dark mode, and individual country pages with routing.",
    technologies: ["HTML", "CSS", "ReactJS"],
    features: [
      "React routing for country pages",
      "Search and filter functionality",
      "Dark and light theme toggle",
      "API integration with useEffect and state management",
    ],
    learnings: [
      "Working with APIs and async data fetching",
      "Using useEffect and useState hooks in React",
      "Implementing client-side routing with React Router",
      "Creating reusable components and managing UI state",
      "Building a dark/light theme toggle feature",
    ],
    github: "https://github.com/sivaprasad-kada/countries_app_",
    live: "https://where-in-the-world-by-sivaprasad.netlify.app",
    logo: globe
  },
];
