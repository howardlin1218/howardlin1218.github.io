# Portfolio Site Specification & Architecture Document

> **Document Purpose**: Comprehensive blueprint and design specification of Howard Lin's personal portfolio website. This document serves as the single source of truth and entry point for any coding agent or developer to understand, rebuild, or prototype a modern, next-generation iteration of the portfolio.

---

## 1. Executive Summary & Site Metadata

- **Owner / Developer**: Howard Lin
- **Current Site Domain / CNAME**: `me.howard1218.site`
- **GitHub Repository**: `howardlin1218/howardlin1218.github.io`
- **Deployment Platform**: GitHub Pages (Static site hosting)
- **Primary Social Profiles**:
  - **GitHub**: [https://github.com/howardlin1218](https://github.com/howardlin1218)
  - **LinkedIn**: [https://www.linkedin.com/in/howardlin1218](https://www.linkedin.com/in/howardlin1218)
  - **Email**: `howlin1218@gmail.com`
- **Core Technology Stack**:
  - **HTML5**: Semantic markup with clean section IDs and ARIA attributes
  - **CSS3**: Custom properties (variables), Glassmorphism, CSS Grid, Flexbox, Media queries
  - **JavaScript (Vanilla ES6+)**: DOM manipulation, interactive filtering, typewriter animation, clipboard API, scroll listeners
- **Asset Directory Structure (`/assets`)**:
  - Profile Imagery: `pf.jpg` (Favicon), `profile_photo_full.jpg`, `profile_photo.jpg`, `pfp_2.PNG`
  - Project Thumbnails: `tracky.png`, `article_summarizer.png`, `pdf_converter.png`, `heart_disease.png`, `steam.png`, `p_sketch.png`, `rps.png`, `windows_ad.png`, `syn100.png`
  - Organization Logos: `msi-logo.png`, `magikid_lab_logo.jpeg`, `magikid_logo.png`, `ucsd_logo.png`
  - Document Downloads: `howard_lin.pdf` (Resume)

---

## 2. Design System & Style Guidelines

### 2.1 Color Palette & Theme Tokens

The site implements dynamic runtime theme switching (Dark Mode by default, toggleable to Light Mode) via CSS variables on `:root` and `body.dark`.

| CSS Custom Variable | Dark Mode (Default) | Light Mode | Usage / Component Target |
| :--- | :--- | :--- | :--- |
| `--mainColor` | `#1A202C` (Deep Slate Navy) | `#f0f2f5` (Light Slate Gray) | Page background, base container backgrounds |
| `--fontColor` | `white` (`#FFFFFF`) | `black` (`#000000`) | Main headings, body text, primary icons |
| `--backgroundColor` | `rgba(255, 255, 255, 0.05)` | `white` (`#FFFFFF`) | Frosted card backgrounds, input containers, buttons |
| `--borderColor` | `rgba(255, 255, 255, 0.3)` | `transparent` | Subtle borders for search bar & cards |
| `--borderHoverColor` | `rgba(99, 102, 241, 0.15)` | `rgba(35, 29, 28, 0.146)` | Hover glows, active card focus outlines, box-shadows |
| `--changingColor` | `rgba(56, 56, 219, 0.929)` | `gray` (`#808080`) | Dynamic hero typewriter animated text |
| `--navColor` | `rgb(6, 6, 7)` (Obsidian) | `white` (`#FFFFFF`) | Floating navigation capsule pill background |
| `--navBorderColor` | `rgba(255, 255, 255, 0.3)` | `transparent` | Nav pill border definition |
| `--filterColor` | `lightblue` (`#ADD8E6`) | `yellow` (`#FFFF00`) | Tag search match indicator & active badge highlight |
| **Accent Text (`<b>`)** | `#996ad3` (Soft Violet) | `#d4922e` (Warm Amber) | Keyword callouts in experience bullet points |

#### Interactive Brand Colors
- **LinkedIn Blue**: `#2c84e7` (Used on hover states for LinkedIn buttons)
- **PDF Red**: `#e72c2c` (Used on hover states for PDF download buttons)
- **Email Gold**: `#ed9a15` (Used on hover states for Email contact card)
- **GitHub Gray/Charcoal**: `#3f3838` / `#6c5353` (Used on hover states for GitHub card)
- **Theme Toggle Icon**: `rgb(206, 186, 6)` (Dark mode sun) / `rgb(11, 11, 217)` (Light mode moon)

---

### 2.2 Typography & Hierarchy

- **Primary Font Stack**: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- **Type Hierarchy**:
  - **Section Titles (`h1`)**: `50px` font size, bold, centered, `#proj-title`, `#exp-title`, `#contact-title`.
  - **Hero Title (`.intro-text`)**: `50px` font size (scales down to `35px` and `25px` on mobile), font weight bold.
  - **Hero Typewriter Text (`#changing-title`)**: `50px` font size, colored with `--changingColor`, character-by-character fade animation.
  - **Hero Description (`.title-desc p`)**: `1.1rem` (~17.6px), bold, max-width `600px`.
  - **Navigation Links**: `1.5rem` (~24px), regular weight, clean pill spacing.
  - **Company / Institution Names**: `2rem` (~32px) desktop (scales to `18px`/`15px`/`13px` on mobile).
  - **Job Titles / Role Badges**: `1.5rem` (~24px), bold.
  - **Experience Dates & Locations**: `1.5rem` (~24px), regular weight.
  - **Bullet Point Descriptions**: `1.3rem` (~20.8px), regular weight with `<b>` emphasis tags.
  - **Project Card Titles**: `20px`, bold, centered.
  - **Project Card Summaries**: `15px`, regular weight, comfortable line-height.
  - **Tech Stack Badges / Attribute Items**: `0.8rem` (~12.8px), `font-weight: 600`, pill capsules.

---

### 2.3 Visual Design, Layout & Micro-Interactions

1. **Floating Navigation Capsule**:
   - Fixed position top-right (`top: 50px; right: 0; z-index: 100`).
   - Pill-shaped (`border-radius: 50px`), dark obsidian background (`rgb(6, 6, 7)`).
   - Smart scroll animation: When user scrolls down past 100px, the full nav pill smoothly collapses into a circular hamburger toggle button (`hamburger-nav-abs`). Hovering or clicking reveals the full bar.
   - Separate floating circular theme toggle pill (Sun/Moon SVG toggle) adjacent to nav.
2. **Glassmorphism & Frosted Effects**:
   - Cards and overlay panels utilize translucent alpha channels (`rgba(...)`) with `backdrop-filter: blur(5px)` to `blur(10px)`.
   - Hover states add elevation: `transform: translateY(-4px)` with soft indigo drop-shadows `box-shadow: 0 4px 20px var(--borderHoverColor)`.
3. **Interactive Project Card Hover Overlays**:
   - Each project card contains an image header and a lower description area.
   - On hover (desktop) or tap (mobile touch events), a translucent frosted dark overlay (`rgba(0, 0, 0, 0.35)`, `backdrop-filter: blur(5px)`) fades in over the image displaying quick-action circular SVG buttons (GitHub link, Live Demo link, or Jupyter Notebook link).
4. **Interactive Experience vs. Education Tab Switcher**:
   - Section header: `Experience | Education`
   - Seamless JS tab switching: Clicking either header tab toggles display between `#resume` and `#education` view without page reloads, adjusting active/inactive text opacity.
5. **Back to Top Floating Action Button**:
   - Fixed button at `bottom: 20px; right: 30px`.
   - Automatically appears when scroll position > 20px.
   - Smooth scroll to top when clicked.

---

## 3. Detailed Site Structure & Section Breakdown

```
├── #prev-about (Scroll anchor)
├── Header / Floating Nav Bar
│   ├── Desktop Nav (About, Projects, Experience, Contact)
│   ├── Collapsed Floating Hamburger Menu (Desktop on scroll)
│   ├── Theme Toggle (Light/Dark mode)
│   └── Mobile Hamburger Menu (Viewport < 750px)
├── #about (Hero & Profile Section)
│   ├── Circular Profile Image (assets/profile_photo_full.jpg)
│   ├── Quick Action Links (GitHub, LinkedIn, Resume PDF)
│   ├── Hero Headline ("Hi! I'm Howard.")
│   ├── Typewriter Animated Subtitle ("I'm a Software Engineer. / Designer. / Student.")
│   └── Bio Summary Paragraph
├── #proj-title & Tag Search Filter Bar
│   ├── Skill Search Input ("Filter by tags...")
│   └── Clear Search Button (×)
├── #projects (Projects Grid - 3-Column Card Layout)
│   ├── Tracky
│   ├── Article Summarizer
│   ├── PDF Converter
│   ├── Heart Disease Predictor
│   ├── Video Game Likability Prediction
│   ├── Pixel Sketch
│   ├── Rock Paper Scissors
│   ├── Email Marketing Ad - Windows
│   ├── Glacier Retreat Research Project
│   └── CSE 135 Placeholder ("Coming Soon")
├── #exp-title (Experience | Education Interactive Tab Switcher)
├── #resume (Work Experience View)
│   ├── MSI Computer Corp. (Software Engineer Intern)
│   └── Magikid Robotics Lab (Coding/Robotics Instructor)
├── #education (Education View)
│   └── University of California, San Diego (B.S. Computer Science)
├── #contact-sect (Contact / Social Connect Grid)
│   ├── GitHub Button Card
│   ├── LinkedIn Button Card
│   └── Email Address Card (One-click copy to clipboard)
└── Footer (Copyright notice)
```

---

## 4. Section-by-Section Content Specifications

### 4.1 Header & Navigation

- **Navigation Links**:
  - `about` -> `#prev-about`
  - `projects` -> `#prev-projects`
  - `experience` -> `#prev-resume`
  - `contact` -> `#prev-contact`
- **Mobile Menu Drawer**:
  - Trigger: Animated 3-bar hamburger icon (`span` rotation to X on active).
  - Drawer: Dropdown overlay with smooth max-height animation.
- **Theme Switcher**:
  - SVG moon icon (visible in light mode).
  - SVG sun icon (visible in dark mode).

---

### 4.2 Hero & About Section (`#about`)

- **Avatar Image**: `assets/profile_photo_full.jpg` (300px × 300px, border-radius: 50%).
- **Social Action Buttons**:
  - GitHub: `https://github.com/howardlin1218`
  - LinkedIn: `https://www.linkedin.com/in/howardlin1218`
  - Resume Download: `assets/howard_lin.pdf` (Download attribute enabled)
- **Headlines & Bio**:
  - Greeting: `"Hi! I'm Howard."`
  - Dynamic Typewriter Prefix: `"I'm a "`
  - Dynamic Typewriter Rotating Roles:
    1. `Software Engineer.`
    2. `Designer.`
    3. `Student.`
  - Bio Paragraph:
    > *"I’m a fourth-year Computer Science student at UC San Diego, interested in full-stack development, web development, machine learning, and other software engineering opportunities."*

---

### 4.3 Projects Section (`#projects`)

#### Live Tag Search Bar
- **Input Placeholder**: `Filter by tags (e.g. Python, TypeScript, ...)`
- **Behavior**: Real-time filtering. Supports multi-tag comma-separated searches. Matches against card `data-tags` attribute and highlights matching `.proj-attr-item` pill tags.

#### Project Portfolio Catalog

| Project Name | Summary | Tech Stack Tags / Badges | Links & Action Buttons | Thumbnail Asset |
| :--- | :--- | :--- | :--- | :--- |
| **Tracky** | Web analytics and reporting platform. | `HTML`, `CSS`, `JavaScript`, `Node.js`, `Express.js`, `Apache2`, `Digital Ocean`, `MySQL`, `Fullstack` | • Live Site: `https://www.reporting.howard1218.site/` | `assets/tracky.png` |
| **Article Summarizer** | Web app that lets users search and filter articles from a selection of websites and generate summaries and sentiment analyses. Includes database to save and retrieve articles. Built with HTML/CSS/TypeScript frontend and Python Flask backend. | `Python`, `TypeScript`, `Flask`, `HTML`, `CSS`, `Supabase`, `Render`, `Groq API`, `Fullstack` | • GitHub: `howardlin1218/article-summarizer`<br>• Live Site: `https://summarizer.howard1218.site` | `assets/article_summarizer.png` |
| **PDF Converter** | Internal tool web app that extracts key structured information from PDF files and outputs downloadable .csv format. Python Flask backend parser hosted on Render. | `Python`, `TypeScript`, `Flask`, `HTML`, `CSS`, `Render`, `Fullstack` | • GitHub: `howardlin1218/pdf_parser`<br>• Live Site: `https://pdf-parser-1-yogt.onrender.com/` | `assets/pdf_converter.png` |
| **Heart Disease Predictor** | Quarter-long data science project analyzing relationships between heart disease and demographics, income, and lifestyle factors. Python data preprocessing and logistic regression modeling. | `Python`, `Sklearn`, `Pandas`, `Numpy`, `Logistic Regression`, `Seaborn`, `Matplotlib`, `Jupyter Notebook`, `Machine Learning` | • GitHub: `howardlin1218/Heart-Disease-Predictor`<br>• Notebook: View Jupyter Notebook | `assets/heart_disease.png` |
| **Video Game Likability Prediction** | Machine learning project predicting Steam game likability using metadata, descriptions, prices, and reviews. Built ensemble model combining Naive Bayes, Logistic Regression, and Random Forest. | `Python`, `Sklearn`, `Pandas`, `Numpy`, `Matplotlib`, `Random Forest`, `Logistic Regression`, `Naive Bayes`, `Machine Learning` | • GitHub: `howardlin1218/steam-video-game-prediction`<br>• Notebook: View Jupyter Notebook | `assets/steam.png` |
| **Pixel Sketch** | Interactive pixel-art sketching canvas tool with resizable grid, dynamic color picker, and eraser tool. | `HTML`, `CSS`, `JavaScript`, `GitHub Pages` | • GitHub: `howardlin1218/pixel-sketch`<br>• Live Site: `howardlin1218.github.io/pixel-sketch/` | `assets/p_sketch.png` |
| **Rock Paper Scissors** | Interactive Rock Paper Scissors browser game against computer AI (first to 5 wins). | `HTML`, `CSS`, `JavaScript`, `GitHub Pages` | • GitHub: `howardlin1218/rock_paper_scissors`<br>• Live Site: `howardlin1218.github.io/rock_paper_scissors/` | `assets/rps.png` |
| **Email Marketing Ad - Windows** | HTML email template recreation based on commercial design graphics, cross-client email compatible. | `HTML`, `CSS`, `Graphic Design` | • GitHub: `howardlin1218/windows_ad`<br>• Live Site: `howardlin1218.github.io/windows_ad/` | `assets/windows_ad.png` |
| **Glacier Retreat Research** | Quarter-long research project on glacier retreat in Glacier National Park utilizing GIS tools and spatial research data. | `ArcGIS`, `Data Visualization`, `Graphics`, `Research` | • StoryMaps: `storymaps.arcgis.com/stories/f13e3c84d31d4c87a106d00bac19ecc1` | `assets/syn100.png` |
| **CSE 135 Project** | Upcoming full-stack web application project. | `Fullstack`, `Web Dev` | • Status: *Coming Soon* | *N/A* |

---

### 4.4 Experience & Education Section

Header toggle: **`<a id="exp-tab">Experience</a> | <a id="edu-tab">Education</a>`**

#### View A: Work Experience (`#resume`)

##### 1. MSI Computer Corp. (MSI USA)
- **Logo**: `assets/msi-logo.png`
- **Role**: Software Engineer Intern
- **Location**: City of Industry, CA
- **Dates**: `6/27/25 - 9/18/25`
- **Bullet Points**:
  - **Increased marketing efficiency** by **developing an automated pipeline (Flask/TypeScript)** that uses **LLM-powered summarization** and **web scraping** to replace manual data collection, leveraging **Supabase** and **Render** for scalable deployment.
  - **Optimized processing times and reduced data entry errors** through developing a Flask and TypeScript parsing tool that **automates data extraction** from **PDFs into Google Sheets and Excel**.
  - **Boosted user engagement** on the Student Program landing page by collaborating with UI/UX designers to implement an **intuitive, user-friendly** interface that **streamlined the end-user experience**.

##### 2. Magikid Robotics Lab
- **Logo**: `assets/magikid_lab_logo.jpeg`
- **Role**: Coding/Robotics Instructor
- **Location**: San Marino, CA
- **Dates**: `7/23 - 1/24`
- **Bullet Points**:
  - Instructed elementary and middle school students in foundational programming concepts using Python, Scratch, and introductory robotics kits.
  - Guided small groups of 3 to 6 students through structured coding lessons, clarifying basic computer science principles and helping students troubleshoot logic errors.

---

#### View B: Education (`#education`)

##### University of California, San Diego
- **Logo**: `assets/ucsd_logo.png`
- **Degree**: B.S. Computer Science
- **Location**: La Jolla, CA
- **Dates**: `09/2024 - 06/2026`
- **Bullet Points**:
  - Graduated June 2026
  - **GPA**: 3.83
  - **Relevant Coursework**: C++ Programming, Data Structures & Algorithms, Calculus I–III / Multi-variable Calculus, Linear Algebra, Software Construction, Discrete Structures, Machine Learning, Computer Graphics, Operating Systems.

---

### 4.5 Contact Section (`#contact-sect`)

- **Section Heading**: `"Let's Connect!"`
- **Layout**: 3-column card grid (scales to 1 column on mobile).
- **Cards**:
  1. **GitHub**: Links to `https://github.com/howardlin1218` (Opens in new tab)
  2. **LinkedIn**: Links to `https://www.linkedin.com/in/howardlin1218` (Opens in new tab)
  3. **Email**: `howlin1218@gmail.com`
     - Interactive click-to-copy behavior.
     - Replaces text with `"Copied!"` for 2 seconds upon successful clipboard write.

---

### 4.6 Footer

- **Content**: `© 2026 Howard Lin. All rights reserved.`
- **Styling**: Centered text, subtle opacity, generous top padding to allow clean scrolling room.

---

## 5. JavaScript Logic & Interaction Architecture (`script.js`)

1. **Typewriter Effect (`typewriterEffect()`)**:
   - Cycles through words: `['Software Engineer.', 'Designer.', 'Student.']`.
   - Appends characters wrapped in `<span>` tags with CSS animation class `.char` (`fadeInChar` 0.4s).
   - Pauses for 1000ms.
   - Deletes backwards using `.char-delete` (`fadeOutChar` 0.4s) in a wave cascade.
   - Pauses for 500ms before typing the next word in an infinite async loop.
2. **Theme Toggle (`modeToggle()`)**:
   - Inspects `body.classList.contains('dark')`.
   - Modifies CSS custom property values on `document.documentElement.style` (`--mainColor`, `--fontColor`, `--backgroundColor`, `--borderColor`, `--borderHoverColor`, etc.).
   - Toggles `dark` class on `document.body`.
3. **Live Tag Filtering (`searchInput.addEventListener('input')`)**:
   - Parses comma-separated keywords into lowercased search terms array.
   - Iterates through `.proj-card` elements checking `data-tags` attribute against all search terms (`searchTerms.every(term => tags.includes(term))`).
   - Dynamically highlights matching `.proj-attr-item` badges with class `.filtered-skill`.
   - Displays/hides `#noResults` message based on match count.
   - Shows/hides clear (`×`) button with auto-reset functionality.
4. **Experience vs Education Tab Switcher**:
   - Adds click listeners to `#edu-tab` and `#exp-tab`.
   - Switches `style.display` between `'flex'` and `'none'` for `#education` and `#resume`.
   - Adjusts active/inactive text color (`var(--fontColor)` vs `'darkgray'`).
5. **Scroll & Smart Navbar Listeners**:
   - Monitors `window.scrollY`.
   - Displays `#myBtn` (scroll to top) when scroll distance > 20px.
   - When scrolling down (> 100px) on screens > 750px, hides full nav capsule (`.nav-hidden`) and reveals compact icon (`.nav-shown`).
   - Mouse hover or click triggers expand (`revealNavBar()`) and collapse (`hideNavBar()`).
6. **Copy to Clipboard (`copyToClipboard()`)**:
   - Uses `navigator.clipboard.writeText('howlin1218@gmail.com')`.
   - Provides temporary visual UI feedback (`"Copied!"`) for 2000ms.

---

## 6. Responsive Breakpoints & Adaptive Layouts (`media.css`)

- **`> 1264px` (Large Desktop)**:
  - 3-column project grid (`grid-template-columns: repeat(3, 1fr)`).
  - 3-column contact grid.
  - Horizontal side-by-side hero layout (Profile photo left, bio text right).
  - Horizontal experience cards (Logo left 30%, description right 70%).
- **`880px - 1264px` (Desktop & Small Desktop)**:
  - 2-column project grid.
  - Horizontal experience layout with reduced padding and typography scaling.
- **`750px - 879px` (Tablet)**:
  - 1-column project grid.
  - Hero layout switches to centered column (Photo centered on top, bio below).
  - Search bar expands to 100% width.
- **`< 750px` (Mobile Standard)**:
  - Full desktop nav hidden; mobile hamburger drawer active.
  - Experience cards switch to vertical layout (Logo on top, job details below).
  - Contact grid switches to 1-column stack.
- **`< 542px` (Mobile Compact)**:
  - Hero profile photo scaled down to 250px.
  - Typography scales down (`intro-text`: 25px, company names: 13px, bullet points: 13px).
  - Top navigation simplified.

---

## 7. Recommendations & Opportunities for Next Prototype / Redesign

When building the modern redesign or next-generation prototype for this portfolio:
1. **Modern Typography & Google Fonts**:
   - Upgrade from system fonts to a curated typeface pairing (e.g., `Outfit` or `Plus Jakarta Sans` for headers, `Inter` or `Geist` for body copy, `Fira Code` or `JetBrains Mono` for tech tags).
2. **Enhanced Glassmorphism & Micro-animations**:
   - Utilize subtle border gradients (`linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.02))`).
   - Add Framer Motion / CSS keyframe entrance animations (staggered fade-in on scroll).
3. **Interactive Project Card Previews**:
   - Enhance the project cards with live preview dialogs, video demo modals, or interactive tech stack filter chips with active count badges.
4. **Direct Contact Form / Web3Forms**:
   - In addition to the copy-to-clipboard email card, consider adding an inline contact/inquiry form with instant client-side validation.
5. **Modern Build System (Vite / React / Next.js / Tailwind or Vanilla CSS Modules)**:
   - If migrating from vanilla HTML/CSS to a component-driven architecture, preserve clean routing, static metadata, and SEO meta tags (`og:title`, `og:description`, `og:image`).
