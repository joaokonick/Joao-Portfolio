//  icons
import {
  
  FiInstagram,
  FiGithub,
  
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiLinkedin,
} from 'react-icons/fi';

// projects images
import Project1 from './assets/img/projects/proj1.png';
import Project2 from './assets/img/projects/proj2.png';
import Project3 from './assets/img/projects/proj3.png';
import Project4 from './assets/img/projects/proj4.png';
import Project5 from './assets/img/projects/proj5.png';
import Project6 from './assets/img/projects/proj6.png';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/bootstrap.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/python2.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/doug.jpg';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'testimonials',
    href: 'testimonials',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/jo%C3%A3o-k-36990a1b7/',
  },
  {
    icon: <FiInstagram />,
    href: 'https://www.instagram.com/joaokonickuffa/',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/joaokonick',
  },
  
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'Liverpool Experience',
    category: 'UI/UX design',
  },
  {
    id: '2',
    image: Project2,
    name: 'Brazil Magazine',
    category: 'web development',
  },
  {
    id: '3',
    image: Project3,
    name: 'Memory Game',
    category: 'UI/UX design',
  },
  {
    id: '4',
    image: Project4,
    name: 'project name 4',
    category: 'branding',
  },
  {
    id: '5',
    image: Project5,
    name: 'project name 5',
    category: 'web development',
  },
  {
    id: '6',
    image: Project6,
    name: 'project name 6',
    category: 'web development',
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'UI/UX Design',
  },
  {
    name: 'web development',
  },
  {
    name: 'branding',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:'I always seek the best design, prioritizing usability and user comfort so that they can make the most of the product and have a pleasant and clear experience.'
    },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'My projects use the technologies I studied and I have the ability to identify and solve problems. I am always up to date with modern and effective solutions to offer the best result for my clients.',
  },
  {
    icon: <FiPenTool />,
    name: 'Branding',
    description:
      'My brand is always looking for knowledge, working to make the best decisions when I`m building web applications, both for the client and for the user.',
  },
  {
    icon: <FiTag />,
    name: 'SEO',
    description:
      'The projects I`ve developed are based on what I`ve studied and researched, always looking to improve my skills and stand out in my field.',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Joao the site was very nice and meets exactly what my company offers....',
    authorName: 'James Douglas',
    authorPosition: 'Owner, Liverpool Experiencia',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Joao the site was very nice and meets exactly what my company offers...',
    authorName: 'Claudia',
    authorPosition: 'Event Organizer, Manchester',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Fictitious person',
    authorPosition: 'Head of Design, Anonymous',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at joaokonicksilva@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Liverpool, Uk',
    description: 'Let`s work together! 🤝',
  },
  
];
