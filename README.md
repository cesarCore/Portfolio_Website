# Personal Portfolio Workshop Template (React + Vite)

Welcome! This starter repository gives you a clean, customizable personal portfolio website built with **React**, **HTML**, and **CSS**.

---

## 1. Getting Started

After cloning this repository, run the following commands in your terminal:

```bash
# 1. Install dependencies
npm install

# 2. Start the local development server
npm run dev
```

Open the local URL shown in your terminal (usually `http://localhost:5173`) to view your portfolio in the browser.

---

## 2. How to Customize Your Portfolio

All of your personal info and projects live in **`src/data/projectsData.js`**.

### Step A: Update Your "About Me" & Contact Info
Open `src/data/projectsData.js` and edit the `profileData` object at the top of the file:

```js
export const profileData = {
  name: "Your Name",
  role: "Your Role / Major",
  aboutMe: "Write a short introduction about yourself here!",
  email: "you@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
};
```

### Step B: Add a New Project
In `src/data/projectsData.js`, scroll down to the `projectsData` array and add a new object:

```js
{
  id: 3,
  title: "My New Project",
  description: "A brief description of what the project does and how you built it.",
  repoLink: "https://github.com/yourusername/my-new-project",
  videoUrl: "https://www.youtube.com/watch?v=YOUR_YOUTUBE_ID",
}
```
> **Tip:** `videoUrl` accepts both regular YouTube links (`https://www.youtube.com/watch?v=...` or `https://youtu.be/...`) and embed links (`https://www.youtube.com/embed/...`).

---

## 3. Making the Style Your Own

- **Change Colors & Fonts:** Open `src/index.css` and edit the CSS variables inside `:root` (such as `--bg-color`, `--accent-color`, and `--card-radius`).
- **Adjust Layouts & Cards:** Open `src/App.css` to customize the header, project grid, card hover effects, or footer.
- **Edit Components:** Explore `src/components/` (`Header.jsx`, `ProjectCard.jsx`, `Footer.jsx`) if you want to add new fields like project tags or live site links!
