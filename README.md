# ReadMe AI
A Story-telling application that uses LLM to create stories according to the categories and description of what the user is looking for.

## Getting Started

<div>
  <h3 align="center">ReadMe AI</h3>
</div>

## 📋 <a name="table">Table of Contents</a>

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Screenshots](#screenshots)
4. [Features](#features)
5. [Quick Start](#quick-start)
6. [Deploy](#deploy)

## <a name="introduction"> Introduction</a>

Built with the latest Next.js and TypeScript, ReadMe AI is an advanced AI storytelling tool. It allows users to input a brief summary of what they are looking for in a book and delivers a page-turner consisting of 5 chapters, a cover image, and a title!

## <a name="tech-stack"> Tech Stack</a>

- Next.js
- TypeScript
- Gemini API
- OpenAI API
- Clerk authorization
- Drizzle ORM
- HeroUI
- Tailwind CSS
- Framer Motion
- Autoprefixer
- ESLint
- Turbopack

## <a name="screenshots"> Screenshots</a>

![Screenshot1](./public/screenshot1.PNG)

![Screenshot2](./public/screenshot2.PNG)

## <a name="features">🔋 Features</a>

 **Categories**: Select different story categories like adventure, romance, horror, drama, and even story for kids!

 **Age Group**: Users may select a desired age group for stories, i.e. young adult romance.

 **Image style**: Provides a cover image using OpenAI's DALL-E or GeminiAI's model depending on the users liking. For Example: 8-bit, watercolor, neon.

 **Custom Story Prompt**: Start your adventure your way, type a subject of your liking -- whether it's a "magical dragon who is lost" or "a shy robots first day of school".

## <a name="quick-start"> How To Run</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/louisvincelli/ai-finance-advisor.git
cd ai-finance-advisor
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=p
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
NEXT_PUBLIC_OPENAI_API_KEY=
NEXT_PUBLIC_GEMINI_API_KEY=

NEXT_PUBLIC_DATABASE_URL=

DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"

```

Replace the placeholder values with your actual OpenAI credentials. You can obtain these credentials by signing up on the [OpenAI website](https://openai.com/).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="deploy"> Deploy on Vercel</a>

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

[Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying)