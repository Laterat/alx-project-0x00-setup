# ALX Project: 0x00 Next.js Frontend Setup

This project demonstrates how to scaffold a Next.js app using TypeScript, Tailwind CSS, and ESLint. It includes basic routing, reusable components, prop typing, and modular design.

## Project Setup

1. Created a new project using:
   npx create-next-app@latest alx-project-0x00 --typescript

2. Selected:

   - Yes: ESLint, Tailwind CSS, Import Alias
   - No: App Router, /src directory

3. Ran the app using:
   npm run dev -- -p 3000

---

## Task 1: Simple Routing

- Created pages:

  - pages/landing.tsx
  - pages/about.tsx

- Each file has a basic component with a heading.

- Checked URLs:
  - http://localhost:3000/landing
  - http://localhost:3000/about

---

## Task 2: Card and Pill Components

- Created Card.tsx in components folder
- Card includes:

  - Image
  - Title
  - Location
  - Rating
  - Features
  - 3 Pill components used with titles like “Top Villa”, etc.

- Created basic Pill.tsx component

---

## Task 3: Reusing Components

- Imported and used the Card component inside pages/landing.tsx
- Duplicated Card component multiple times
- Confirmed cards render correctly on /landing route

---

## Task 4: Typing Pill Component

- Added to interfaces/index.ts:
  export interface PillProps {
  title: string
  }

- In Pill.tsx:

  - Imported PillProps
  - Updated component to accept title as a prop and display it

- VS Code no longer shows prop errors
- Card renders correctly with dynamic pill titles

---

## Task 5: Button Component with Props

- Added to interfaces/index.ts:
  export interface ButtonProps {
  title: string
  styles: string
  }

- Created Button.tsx in components folder:
  Accepts title and styles as props and renders a styled button

- Used in landing.tsx:
  <Button title="Small" styles="text-sm rounded-sm" />
  <Button title="Medium" styles="text-base rounded-md" />
  <Button title="Large" styles="text-lg rounded-full" />

- Buttons render correctly on /landing route

---

## Files

- interfaces/index.ts
- components/Card.tsx
- components/Pill.tsx
- components/Button.tsx
- pages/landing.tsx
- pages/about.tsx
- pages/index.tsx

---

## Repository

GitHub repo: alx-project-0x00-setup  
Local directory: alx-project-0x00
