# Aditya Chauhan | Developer Portfolio

Personal portfolio of Aditya Chauhan, a B.Tech CSE student (2023–2027) at MIET, Meerut, looking for full stack, backend, frontend and software developer roles.

**Live site:** [https://adityachauhanportfolio.onrender.com/]

## Features

- Sections for About, Skills, Experience, Projects and Contact
- Dark and light theme toggle, remembered between visits
- Responsive layout with a mobile menu and full-width buttons on small screens
- Hover and press effects on buttons, cards and skill tags
- Every detail (bio, skills, projects, links) is kept in one data file, so updating the site never means touching the components
- Respects `prefers-reduced-motion` and has visible keyboard focus styles

## Tech stack

- React 18
- Vite 5
- Tailwind CSS 3

## Project structure

```
portfolio/
├── public/
│   └── profile.jpg          # profile photo (replace with the same file name)
├── src/
│   ├── data/
│   │   └── portfolio.js     # all content lives here
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Quote.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Section.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## Getting started

Requires Node.js 18 or newer.

```bash
git clone https://github.com/adityachauhan1-in/AdityaChauhanPortfolio.git
cd <portfolio>
npm install
npm run dev
```

The site runs at `http://localhost:5173`.

| Command           | What it does                             |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the development server             |
| `npm run build`   | Create a production build in `dist/`     |
| `npm run preview` | Preview the production build locally     |

## Updating your details

Open `src/data/portfolio.js` and edit the section you need:

| To change...            | Edit                                              |
| ----------------------- | ------------------------------------------------- |
| Name, bio, quote, links | `profile`                                         |
| Show your phone number  | set `profile.showPhone` to `true`                 |
| Skills                  | `skills` (add an item to a group or add a group)  |
| Internships or jobs     | `experience`                                      |
| Education               | `education`                                       |
| Projects                | `projects` (add another object to the list)       |
| Profile photo           | replace `public/profile.jpg`                      |

Save the file and the page updates automatically while `npm run dev` is running.

## Deployment

**Render**

1. Push the project to a GitHub repository.
2. Import the repository on [Render](https://adityachauhanportfolio.onrender.com/).
3. Use these settings:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy, then add the live link at the top of this file.

## Projects featured

- **[MetroFlow](https://github.com/adityachauhan1-in/MetroFlow):** full-stack metro ticketing platform ([live demo](https://metroflow-1.onrender.com/))
- **[MagicCoupon](https://github.com/adityachauhan1-in/MagicCoupon):** full-stack coupon management platform ([live demo](https://magiccouponfrontend.onrender.com/auth))

## Contact

- Email: adityachauhan.ind1@gmail.com
- LinkedIn: [adityachauhan00](https://www.linkedin.com/in/adityachauhan00/)
- GitHub: [adityachauhan1-in](https://github.com/adityachauhan1-in)
- Medium: [@adityachauhan.ind1](https://medium.com/@adityachauhan.ind1)