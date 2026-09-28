// ============================================================
// EDIT ONLY THIS FILE to update your portfolio.
// Add a skill, project, or experience entry and the site updates.
// ============================================================

export const profile = {
  name: 'Aditya Chauhan',
  photo: '/profile.jpg',
  quote: 'Only unburdened may rise, the rest are weighed by unseen hands.',
  title: 'Full Stack Developer',
  tagline: 'B.Tech CSE student (2023–2027) who builds MERN apps that stay correct under concurrent load.',
  openToRoles: ['Full Stack Developer', 'Software Developer', 'Backend Developer', 'Frontend Developer'],
  about:
    'I am a Computer Science student at MIET, Meerut, and a fresher looking for my first developer role. I build full-stack apps with the MERN stack, and I care about the parts that break in production: race conditions, access control, and slow requests.',
  ambition:
    'I want to start my career as a software developer on a team where I can own backend and full-stack features, ship them, and grow into an engineer who designs reliable systems.',
  languages: ['Hindi', 'English'],
  location: 'Meerut, Uttar Pradesh, India',
  email: 'adityachauhan.ind1@gmail.com', // resume email; change if you prefer the other one
  phone: '+91 8766271149',
  showPhone: false, // keep false to hide your number from scrapers
  resume: 'https://drive.google.com/file/d/1cszh_DJwYke4ldGtCl_qJvjb7VnF0w1r/view?usp=sharing',
  socials: {
    LinkedIn: 'https://www.linkedin.com/in/adityachauhan00/',
    GitHub: 'https://github.com/adityachauhan1-in',
    Medium: 'https://medium.com/@adityachauhan.ind1',
  },
}

export const skills = {
  Languages: ['Java', 'JavaScript (ES6+)'],
  Frontend: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
  Backend: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'RBAC'],
  Database: ['MongoDB', 'Mongoose'],
  Tools: ['Git', 'Docker', 'Postman', 'VS Code', 'Cursor'],
  'CS Fundamentals': ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'],
}

export const experience = [
  {
    role: 'MERN Full Stack Development, Virtual Internship',
    org: 'AICTE – EduSkills',
    period: 'Jan 2026 – Mar 2026',
    link: 'https://drive.google.com/file/d/14AAwn-AfWcet7TMMQukrWQuRer-_Xzli/view?usp=sharing',
    points: [
      'Completed a 10-week MERN program covering React.js, Node.js, Express.js, MongoDB, REST APIs, and JWT authentication through lessons, exercises, and assessments.',
      'Built a capstone project applying full-stack concepts across the React frontend, Node/Express backend, and MongoDB.',
    ],
  },
]

export const education = [
  { degree: 'B.Tech, Computer Science and Engineering', org: 'Meerut Institute of Engineering and Technology (MIET), Meerut', period: '2023 – 2027 (expected)' },
  { degree: 'Class XII, Science Stream', org: 'SDHT Saraswati Vidya Mandir, Meerut', period: '2023 · Score: 90%' },
]

export const achievements = ['Solved 500+ problems on LeetCode with a focus on Data Structures & Algorithms.']

export const projects = [
  {
    name: 'MetroFlow',
    subtitle: 'Full-stack metro ticketing platform',
    stack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'Docker', 'Render'],
    points: [
      'JWT authentication, User/Admin role-based access, QR ticket display, and automated booking confirmation emails.',
      'RESTful APIs with 90-minute ticket expiry, fare preview, ticket lifecycle management, and travel history.',
      'Prevented booking and validation race conditions with atomic database operations and a MongoDB partial unique index: one active ticket per user, single-use validation under concurrent requests.',
      'Booking completes in 2–3 seconds; backend is Dockerized and deployed on Render.',
    ],
    github: 'https://github.com/adityachauhan1-in/MetroFlow',
    live: 'https://metroflow-1.onrender.com/',
  },
  {
    name: 'MagicCoupon',
    subtitle: 'Full-stack coupon management platform',
    stack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'Google OAuth', 'Docker', 'Render'],
    points: [
      'JWT and Google OAuth sign-in; users create, save, search, and redeem coupons.',
      'Blocks users from redeeming their own coupons using backend ownership checks plus MongoDB constraints.',
      'User, Coupon, and SavedCoupon collections with indexes on frequently queried fields to speed up email lookup and coupon search.',
      'Debounced search reduces unnecessary API calls; Dockerized and deployed on Render.',
    ],
    github: 'https://github.com/adityachauhan1-in/MagicCoupon',
    live: 'https://magiccouponfrontend.onrender.com/auth',
  },
]

export const writing = {
  blurb: 'I write about what I build and learn on Medium.',
  link: 'https://medium.com/@adityachauhan.ind1',
}
