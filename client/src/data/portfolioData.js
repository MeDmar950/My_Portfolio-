// Portfolio static data — edit to personalise

export const PERSONAL = {
  name: 'Ziad Ahmed',
  title: 'Computer Science Student & Web Developer',
  subtitle: 'I love building websites that look amazing and work perfectly.',
  email: 'zezoasw2006@gmail.com',
  location: 'Aswan, Egypt',
  resume: '/resume.pdf',
  bio: `Hi, I'm Ziad! I'm a 21-year-old Computer Science student at AAST Aswan. I spend my time building things for the web, from eye-catching 3D animations to solid backend systems. I enjoy turning complex problems into simple, beautiful designs.`,
  availability: true,
}

export const SOCIALS = [
  { label: 'GitHub', url: 'https://github.com/MeDmar950', icon: 'Github' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/ziad-ahmed-44a4a539b/', icon: 'Linkedin' },
  // { label: 'Twitter', url: 'https://twitter.com', icon: 'Twitter' },
  { label: 'Email', url: 'mailto:zezoasw2006@gmail.com', icon: 'Mail' },
]

export const STATS = [
  { value: '21', label: 'Years Old' },
  { value: 'AAST', label: 'Computer Science' },
  { value: '15+', label: 'Projects Completed' },
  { value: '100%', label: 'Passion for UI/UX' },
]

export const SKILLS = [
  {
    category: 'Frontend & UI/UX',
    color: '#0070f3',
    icon: '✨',
    items: [
      { name: 'ReactJS', level: 90 },
      { name: 'JavaScript', level: 95 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'GSAP Animations', level: 85 },
      { name: 'Three.js / WebGL', level: 80 },
    ],
  },
  {
    category: 'Backend Architecture',
    color: '#38bdf8',
    icon: '⚙️',
    items: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 85 },
      { name: 'FastAPI', level: 80 },
      { name: 'REST APIs', level: 90 },
      { name: 'WebSockets', level: 75 },
    ],
  },
  {
    category: 'Database & Tools',
    color: '#f472b6',
    icon: '🛠️',
    items: [
      { name: 'Mongoose (MongoDB)', level: 85 },
      { name: 'Git & Version Control', level: 90 },
      { name: 'Software Testing', level: 80 },
      { name: 'Agile & Scrum', level: 85 },
    ],
  },
]

export const PROJECTS = [
  {
    id: 1,
    title: 'Personal Portfolio',
    slug: 'modern-portfolio',
    description: 'My personal website, designed to show off what I can do with 3D graphics and modern web design.',
    longDescription: 'I built this site from scratch to play around with Three.js and GSAP. It features a custom dark mode, smooth animations, and a responsive layout.',
    category: 'web',
    tags: ['ReactJS', 'Three.js', 'GSAP', 'Tailwind CSS'],
    imageUrl: 'https://cdn.discordapp.com/attachments/1059735797080797194/1526039783355187200/image.png?ex=6a5592cc&is=6a54414c&hm=8da86fab8232fc73e632c98467aee7072403b932f94e3b469792332a011059b6&',
    liveUrl: 'http://localhost:5173/#home',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 2,
    title: 'Port Scanner - Physical Display',
    slug: 'port-scanner-physical-display',
    description: 'A modern, interactive web application for visualizing port scanning results with logic-gate simulation and hardware circuit visualization.',
    category: 'web',
    tags: ['ReactJS', 'Node.js', 'Express.js', 'MongoDB'],
    imageUrl: 'https://cdn.discordapp.com/attachments/1059735797080797194/1526037673058500638/image.png?ex=6a5590d5&is=6a543f55&hm=f0bb3af2e2fe6a5b9ec0c0dd86af90662f330936ba54a09e2ff9ed20e5894f8b&',
    liveUrl: 'https://port-scanner-sand.vercel.app/',
    githubUrl: 'https://github.com/MeDmar950/PortScanner',
    featured: false,
  },
  {
    id: 3,
    title: 'Pharmacy Management System',
    slug: 'pharmacy-management-system',
    description: 'A bilingual pharmacy inventory management system for El-Doctor Sayed Saber Pharmacy featuring real-time stock tracking, medicine data management, and a clean dark-themed UI built with React.',
    longDescription: 'Built a full-stack pharmacy management system for a real pharmacy client (El-Doctor Sayed Saber Pharmacy, Aswan) with comprehensive inventory control capabilities. The application tracks medicine stock levels, pricing, manufacturer details, and supports both English and Arabic interfaces with RTL layout support. Features include dynamic form management, stock record management, and a legacy data table view for historical tracking. Deployed on Vercel with a modern dark-themed UI for optimal pharmacy staff usability.',
    category: 'web',
    tags: ['React.js', 'Node.js', 'SQL', "Express.js", 'Vercel'],
    imageUrl: 'https://cdn.discordapp.com/attachments/1059735797080797194/1526036369657561088/image.png?ex=6a558f9e&is=6a543e1e&hm=080ca58a49248dac26b82d6718f441ec9ae8f6979a2ea9a5f52d27da9f65f86a&',
    liveUrl: 'https://pharmacy-inventory-aast.vercel.app/',
    githubUrl: 'https://github.com/MeDmar950/DataBase_Phase3',
    featured: false,
  },
]

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Dr. Ahmed',
    role: 'Professor',
    company: 'AAST Aswan',
    avatar: 'https://i.pravatar.cc/150?img=11',
    rating: 5,
    content: "Ziad is an exceptional student with a rare talent for blending aesthetic design with robust software engineering principles.",
  }
]

export const SERVICES = [
  {
    id: 1,
    icon: '💻',
    title: 'Frontend Development',
    description: 'I build fast, responsive, and beautiful websites using React and Tailwind.',
    features: ['ReactJS', 'Tailwind CSS', 'GSAP Animations', 'Responsive Design'],
    color: '#0070f3',
  },
  {
    id: 2,
    icon: '🌐',
    title: 'Backend Systems',
    description: 'I write clean server code and APIs to make sure apps run smoothly behind the scenes.',
    features: ['Node.js & Express', 'FastAPI', 'MongoDB', 'WebSockets'],
    color: '#38bdf8',
  },
  {
    id: 3,
    icon: '🎲',
    title: '3D Web Design',
    description: 'I create interactive 3D experiences right in the browser to make websites stand out.',
    features: ['Three.js', 'React Three Fiber', 'Interactive Canvas'],
    color: '#f472b6',
  },
]

export const EXPERIENCE = [
  {
    year: 'Present',
    role: 'Computer Science Student',
    company: 'AAST Aswan',
    description: 'Studying core computer science concepts, software engineering, and actively building full-stack web applications.',
    tags: ['CS', 'Agile', 'Testing'],
  },
  {
    year: '2023 — Present',
    role: 'Freelance Web Developer',
    company: 'Self-Employed',
    description: 'Designing and developing custom web solutions for various clients, focusing on premium UI/UX.',
    tags: ['ReactJS', 'Node.js', 'Tailwind'],
  }
]

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export const PROJECT_CATEGORIES = [
  { label: 'All', value: 'all' },
  { label: 'Web', value: 'web' },
  { label: 'API', value: 'api' },
]
