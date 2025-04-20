# Vite + React (TSX/JSX) + Tailwind v4 CSS‑First Starter

A step‑by‑-step template you can use (or fork via GitHub) for new projects supporting both `.tsx` and `.jsx` components.

---

## 📦 1. Prerequisites

- **Node.js ≥ 18** and **npm ≥ 8**  
- (Optional) **GitHub CLI** (`gh`) authenticated  

Verify:

```bash
node --version   # ≥18.x
npm --version    # ≥8.x
gh --version     # if using GitHub CLI
```

---

## 🏗 2. Scaffold & Install

```bash
# 2.1 Create & enter your folder
mkdir vite-tailwind-template && cd vite-tailwind-template

# 2.2 Initialize Vite React+TS template
npm create vite@latest . -- --template react-ts

# 2.3 Install Tailwind v4 & PostCSS plugins
npm install -D   tailwindcss   @tailwindcss/postcss   postcss   postcss-import   autoprefixer
```

---

## ⚙️ 3. Configure PostCSS

Create `postcss.config.cjs` at the project root:

```js
// postcss.config.cjs
module.exports = {
  plugins: [
    require('postcss-import'),
    require('@tailwindcss/postcss'),
    require('autoprefixer'),
  ],
};
```

---

## 🎨 4. Tailwind CSS‑First Entry

Replace (or create) `src/index.css`:

```css
/* 4.1 Pull in Tailwind’s base, components & utilities */
@import "tailwindcss";

/* 4.2 (Optional) Theme overrides via CSS variables */
@theme {
  --font-sans: "Inter", sans-serif;
}

/* 4.3 (Optional) Custom components/utilities */
@layer components {
  .btn {
    @apply inline-block px-4 py-2 rounded bg-blue-600 text-white;
  }
}
```

---

## 🔗 5. Wire CSS into React

Edit `src/main.tsx` to import your CSS first:

```ts
import './index.css';        // ← Tailwind
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(
  document.getElementById('root')!
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

## 🧩 6. Enable TSX & JSX & Path Aliases

1. **`tsconfig.json`** — ensure you include both TSX and JSX, and add a path alias:

   ```jsonc
   {
     "compilerOptions": {
       "target": "ESNext",
       "module": "ESNext",
       "moduleResolution": "Node",
       "jsx": "react-jsx",
       "baseUrl": ".",
       "paths": {
         "@/*": ["src/*"]
       },
       "strict": true,
       "esModuleInterop": true,
       "skipLibCheck": true,
       "forceConsistentCasingInFileNames": true
     },
     "include": ["src/**/*.{ts,tsx,js,jsx}"]
   }
   ```

2. **`vite.config.ts`** — mirror the alias for runtime:

   ```ts
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';
   import path from 'path';

   export default defineConfig({
     plugins: [react()],
     resolve: {
       alias: {
         '@': path.resolve(__dirname, 'src'),
       },
       extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
     },
   });
   ```

---

## 🛠 7. Add Sample Components

1. **TSX component**: `src/components/Hello.tsx`

   ```tsx
   import React from 'react';

   export function Hello({ name }: { name: string }) {
     return <h2 className="text-2xl">Hello, {name}!</h2>;
   }
   ```

2. **JSX component**: `src/components/Greeting.jsx`

   ```jsx
   import React from 'react';

   export default function Greeting({ who }) {
     return <p className="italic">Greetings, {who}!</p>;
   }
   ```

3. **Use them in** `src/App.tsx`:

   ```tsx
   import React from 'react';
   import { Hello } from '@/components/Hello';
   import Greeting from '@/components/Greeting';

   export default function App() {
     return (
       <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 gap-4">
         <Hello name="TSX User" />
         <Greeting who="JSX Friend" />
         <button className="btn">A Tailwind Button</button>
       </div>
     );
   }
   ```

---

## 🚀 8. Test Locally

```bash
npm install      # install deps
npm run dev      # start Vite → http://localhost:5173
# You should see both Hello/Greeting components styled with Tailwind
npm run build    # production build
npm run preview  # serve the build
```

---

## 🎁 9. Publish as GitHub Template

```bash
git init
git add .
git commit -m "chore: initial Vite+React+Tailwind v4 CSS‑first starter with TSX/JSX support"

# With GitHub CLI:
gh repo create vite-tailwind-template   --public   --source=.   --push
gh repo edit vite-tailwind-template --template

# OR via GitHub UI:
# 1. Create empty repo “vite-tailwind-template”
# 2. git remote add origin git@github.com:YOU/vite-tailwind-template.git
# 3. git push -u origin main
# 4. In Settings → General, toggle “Template repository” on
```

---

## 📄 10. Consume Your Template

```bash
gh repo create my-new-app   --template YOU/vite-tailwind-template   --public   --clone
cd my-new-app
npm install
npm run dev
```

---

You now have a **repeatable**, **zero‑config**, **CSS‑first** Tailwind v4 + Vite + React starter with **full TSX/JSX & component support**—packaged as a GitHub template for reuse!

