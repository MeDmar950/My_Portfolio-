# 🚀 Ziad Ahmed — Personal Portfolio

A premium, interactive personal portfolio website built with **React 19**, **Three.js**, **GSAP**, and **Framer Motion**. Features a dark-only UI with 3D hero animations, smooth scroll transitions, animated skill progress bars, and a fully functional contact form.

**GitHub:** [github.com/MeDmar950/My_Portfolio-](https://github.com/MeDmar950/My_Portfolio-)

---

## ✨ Features

- 🎨 **Premium dark UI** — Deep dark theme with maroon/rose accent colors and glowing effects
- 🌐 **3D Hero Scene** — Interactive animated sphere powered by React Three Fiber & Three.js
- 🎬 **GSAP & Framer Motion animations** — Smooth scroll-triggered reveals and micro-interactions
- 📊 **Animated skill progress bars** — Bars animate into view as you scroll to the Skills section
- 💼 **Projects section** — Filterable project cards with a click-to-expand detail modal
- 📬 **Contact form** — Validated with React Hook Form + Zod schema
- 🖼️ **Custom loading screen** — Profile photo + animated progress bar on first load
- 📱 **Fully responsive** — Works on mobile, tablet, and desktop
- ⚡ **Vite + React 19** — Lightning-fast development and production builds

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| **Framework** | React 19, Vite 8 |
| **Routing** | React Router DOM v7 |
| **3D Graphics** | Three.js, React Three Fiber, Drei |
| **Animations** | GSAP 3, Framer Motion 12 |
| **Styling** | Tailwind CSS v4, Vanilla CSS Variables |
| **Forms** | React Hook Form, Zod |
| **Icons** | Lucide React |
| **SEO** | React Helmet Async |

---

## 📁 Project Structure

```
My_Portfolio/
└── client/
    ├── public/
    │   └── profile.jpg          # Your profile photo
    ├── src/
    │   ├── components/
    │   │   ├── layout/          # Navbar, Footer
    │   │   ├── shared/          # LoadingScreen, CustomCursor
    │   │   ├── three/           # HeroScene (3D animated sphere)
    │   │   └── ui/              # Button, Card, Modal, etc.
    │   ├── data/
    │   │   └── portfolioData.js # 🔧 Edit this to personalize your portfolio
    │   ├── features/
    │   │   ├── home/            # Hero section
    │   │   ├── about/           # About me + experience timeline
    │   │   ├── skills/          # Animated skill progress bars
    │   │   ├── projects/        # Filterable project cards + modal
    │   │   ├── services/        # Services section
    │   │   └── contact/         # Contact form
    │   ├── hooks/               # useInView, useMousePosition
    │   ├── router/              # App routes
    │   └── index.css            # Global CSS variables & design tokens
    ├── index.html
    └── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/MeDmar950/My_Portfolio-.git
cd My_Portfolio/client

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

The site will be available at **http://localhost:5173**

### Build for Production

```bash
npm run build
npm run preview
```

---

## ⚙️ Personalizing the Portfolio

All portfolio content lives in one file — just open it and update with your info:

📄 **`client/src/data/portfolioData.js`**

| Export | What to Edit |
|---|---|
| `PERSONAL` | Your name, title, bio, email, location |
| `SKILLS` | Your skills and proficiency levels (0–100) |
| `PROJECTS` | Project titles, descriptions, images, links |
| `SERVICES` | What services you offer |
| `EXPERIENCE` | Your work/education timeline |
| `SOCIALS` | GitHub, LinkedIn, Twitter URLs |

---

## 🎨 Customizing the Theme

The entire color palette is controlled by CSS variables in one place:

📄 **`client/src/index.css`** — find the `:root` block:

```css
:root {
  --bg-primary: #0a0a0a;
  --accent: #be123c;              /* Main accent — change to switch themes */
  --accent-light: #f43f5e;
  --accent-glow: rgba(190, 18, 60, 0.25);
}
```

Change `--accent` to any color to instantly re-theme the entire site.

---

## 📦 Deploying to Vercel

1. Push your code to GitHub *(already done!)*
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import the `MeDmar950/My_Portfolio-` repository
4. Set the **Root Directory** to `client`
5. Click **Deploy** ✅

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> Built with ❤️ by **Ziad Ahmed** — Computer Science Student @ AAST Aswan
