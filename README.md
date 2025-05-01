# 🧠 Zustand + Next.js Practice Project

This project is a simple practice exercise to learn how to use **Zustand**, a lightweight state management library, inside a **Next.js** App Router setup.

---

## 📌 Purpose

> **"I PRACTICE HOW TO USE Zustand"**

This app demonstrates how to:
- Create a global store using Zustand
- Access and update state across components
- Use Tailwind CSS for UI design

---

## 🧱 Project Structure

/app └── page.tsx → Home page showing components

/components ├── TestComponent.tsx → Uses Zustand to update and display count └── MyComponent.tsx → Another component reading count

/stores └── count-store/ └── countStore.ts → Zustand store for count, increment, decrement

yaml
Copy
Edit

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
2. Run the Development Server
bash
Copy
Edit
npm run dev
Then open your browser and go to:
👉 http://localhost:3000

🧪 Features
✅ Global state using Zustand

✅ Shared count between multiple components

✅ Functional components using hooks

✅ Styled with Tailwind CSS

✅ Clean layout with centered content

🛠️ Tech Stack
Next.js

Zustand

React

Tailwind CSS

📷 Screenshots
Optional — you can add screenshots here if you'd like.

📚 Learning Goal
This is a personal learning project to become comfortable with using Zustand in modern React + Next.js apps.

