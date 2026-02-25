# MarcYourMind Portfolio & Resume Hub 🚀

A premium, high-performance, and visually stunning portfolio and multi-track resume website built for elite software engineers. This site is designed to showcase expertise across multiple domains (Quant, Backend, Web3, AI, and Fullstack) with a focus on polish, interactivity, and modern design principles.

![Portfolio Preview](public/images/og-image.jpg) *(Replace with your actual OG image or screenshot)*

## ✨ Key Features

-   **🎯 Multi-Track Resume Hub**: Specialized views and downloadable PDFs for different roles:
    -   Backend Engineering
    -   Quant / Trading Systems
    -   Web3 / Blockchain
    -   AI / Machine Learning Engineering
    -   Fullstack Web
-   **🌍 Advanced I18n**: Full multilingual support for **English**, **Spanish**, and **French** with smooth transitions and localized content.
-   **🎨 Premium UI/UX**:
    -   Deep dark theme with glassmorphism and neon accents.
    -   Fluid animations powered by **Framer Motion**.
    -   Responsive design using **Tailwind CSS**.
    -   Stripe/Vercel-level polish and interactive micro-interactions.
-   **📚 Case-Study Projects**: Detailed project pages with problem/solution breakdowns and technical deep dives.
-   **✍️ MDX-Powered Articles**: A professional blog/article section with syntax highlighting and reading time estimations.
-   **⌨️ Developer Console**: A hidden "Easter Egg" command palette (Ctrl + J) for quick navigation and power users.

## 🛠️ Tech Stack

-   **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Content**: [MDX](https://mdxjs.com/)
-   **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)

## 🚀 Getting Started

### Prerequisites

-   Node.js 18.x or later
-   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/MarcYourMind/MarcYourMind.github.io.git
    cd MarcYourMind.github.io
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```text
├── app/              # Next.js App Router (pages and layouts)
├── components/       # Reusable UI components (Navbar, ProjectCard, etc.)
├── content/          # MDX content for articles
├── data/             # Structured data (projects, resumes, socials)
├── lib/              # Utility functions and shared logic
├── locales/          # Translation files (en.json, es.json, fr.json)
├── public/           # Static assets (images, PDFs)
└── styles/           # Global styles and Tailwind configuration
```

## 🚢 Deployment

The site is optimized for deployment on **Vercel** or **GitHub Pages**.

### Vercel (Recommended)
Simply connect your repository to Vercel. It will automatically detect Next.js and handle the build process.

### GitHub Pages
Ensure your `next.config.mjs` is configured for static export if you are not using a custom server.

## 📝 License

This project is [ISC](LICENSE) licensed.

---

Built with ❤️ by [MarcYourMind](https://github.com/MarcYourMind)