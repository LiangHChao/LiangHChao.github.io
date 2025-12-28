![thumbnail](https://awesomescreenshot.s3.amazonaws.com/image/6171274/53100357-9a5237efdc5e8fc11fee8bcff878d9d4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20250224%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250224T140733Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=5985566598d0627063790b385ac7667effeccc5eb90158c077024962d06597c9)

# React Vite Portfolio Template

A lightweight, modern, and customizable portfolio template built with [React](https://reactjs.org/) and [Vite](https://vitejs.dev/). This template is designed to help developers quickly showcase their projects, skills, and personal information in a clean and responsive layout. It uses `pnpm` for fast and efficient package management and includes a `portfolio.json` file to easily manage your portfolio data.

## Features
- Built with React and Vite for fast development and optimal performance
- Fully responsive design
- Centralized portfolio data management via `portfolio.json`
- Easy to customize and extend
- Uses `pnpm` for lightweight and efficient dependency management

## Prerequisites
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [pnpm](https://pnpm.io/) (install globally with `npm install -g pnpm`)

## Getting Started

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/react-vite-portfolio-template.git
   cd react-vite-portfolio-template
   ```
2. Install dependencies using `pnpm`:
   ```bash
   pnpm install
   ```
3. Customize the `portfolio.json` file located in the `/src/configs`:
   ```json
   {
    "name": "Your Name",
    "title": "Your Job Title",
    "bio": "A short bio about yourself",
    "contacts": {
      "github": "https://github.com/your-username",
      "twitter": "https://twitter.com/your-username"
    },
   "education": {
      "logo": "University Logo",
      "degree": "Your Degree",
      "university": "Your University",
      "location": "Location",
      "graduation": "2025/01/01 00:00:00",
      "courseWork": [
         "Algorithms"
      ],
      "project": "Your senior project"
   },
    "meetingLink": "Calendly link",
    "projects": [
        {
        "name": "Project Name",
        "bio": "A short bio about the project",
        "logo": "Project Logo",
        "description": "The detailed descripion about the project",
        "skills": ["Used skills in an array"]
      }
    ],
    "skills": ["React", "Vite", "JavaScript", "CSS"]
   }
   ```
4. Build
   ```bash
   pnpm build
   ```
5. Run
   ```bash
   pnpm dev
   ```