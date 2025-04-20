## Vite + React (TSX/JSX) + Tailwind v4 CSS‑First Starter

A bullet‑proof, step‑by‑step template you can fork on GitHub for zero‑config setup with full TSX/JSX, Lucide icons, and shadcn/ui support.

---

1. 📦 **Prerequisites**
   ```bash
   node --version   # ≥18.x
   npm --version    # ≥8.x
   gh --version     # (if using GitHub CLI)
   ```

2. 🏗 **Scaffold Project**
   ```bash
   # 2.1 Create project folder
   mkdir vite-tailwind-template && cd vite-tailwind-template

   # 2.2 Initialize Vite React+TS template
   npm create vite@latest . -- --template react-ts
   ```

3. ⚙️ **Install Dependencies**
   ```bash
   npm install -D tailwindcss @tailwindcss/postcss postcss postcss-import autoprefixer
   npm install lucide-react
   
   ```

4. 🎨 **Configure PostCSS**
   Create `postcss.config.cjs`:
   ```js
   module.exports = {
     plugins: [
       require('postcss-import'),
       require('@tailwindcss/postcss'),
       require('autoprefixer'),
     ],
   };
   ```

5. 🎨 **Tailwind Entry CSS**
   Create or replace `src/index.css`:
   ```css
   @import "tailwindcss";

   /* Optional theme overrides */
   @layer base {
     :root { --font-sans: "Inter", sans-serif; }
   }

   /* Custom component class */
   @layer components {
     .btn { @apply inline-block px-4 py-2 rounded bg-blue-600 text-white; }
   }
   ```

6. 🔗 **Wire CSS into React**
   In `src/main.tsx`, import before anything else:
   ```ts
   import './index.css';
   import React from 'react';
   import ReactDOM from 'react-dom/client';
   import App from './App';

   ReactDOM.createRoot(document.getElementById('root')!).render(
     <React.StrictMode><App /></React.StrictMode>
   );
   ```

7. 🧩 **Enable TSX/JSX & Path Aliases**
   - **tsconfig.json**:
     ```jsonc
     {
       "compilerOptions": {
         "jsx": "react-jsx",
         "baseUrl": ".",
         "paths": { "@/*": ["src/*"] },
         // ...other settings
       },
       "include": ["src/**/*.{js,ts,jsx,tsx}"]
     }
     ```

   - **vite.config.ts**:
     ```ts
     import { defineConfig } from 'vite';
     import react from '@vitejs/plugin-react';
     import path from 'path';

     export default defineConfig({
       plugins: [react()],
       resolve: {
         alias: { '@': path.resolve(__dirname, 'src') },
         extensions: ['.js', '.ts', '.jsx', '.tsx'],
       },
     });
     ```

8. 🔧 **Initialize & Add shadcn/ui**
```bash
# Initialize project (choose a base color)
npx shadcn@latest init

# Add components
npx shadcn@latest add button

# Optional: rebuild component registry
npx shadcn@latest build
```

9. 🛠 **Add Sample Components**
   - **TSX** `src/components/Hello.tsx`:
     ```tsx
     export function Hello({ name }: { name: string }) {
       return <h2 className="text-2xl">Hello, {name}!</h2>;
     }
     ```
   - **JSX** `src/components/Greeting.jsx`:
     ```jsx
     export default function Greeting({ who }) {
       return <p className="italic">Greetings, {who}!</p>;
     }
     ```
   - **Icons** `src/components/IconDemo.tsx`:
     ```tsx
     import { Camera, Github, AlertCircle } from 'lucide-react';
     export default function IconDemo() {
       return (
         <div className="flex items-center space-x-4">
           <Camera className="w-6 h-6" />
           <Github className="w-6 h-6" />
           <AlertCircle className="w-6 h-6" />
           <span>Icons work!</span>
         </div>
       );
     }
     ```
   - **shadcn Button** in `src/components/ui/button.tsx` (auto-generated)

   - **Use in** `src/App.tsx`:
     ```tsx
     import { Hello } from '@/components/Hello';
     import Greeting from '@/components/Greeting';
     import IconDemo from '@/components/IconDemo';
     import { Button } from '@/components/ui/button';

     export default function App() {
       return (
         <div className="min-h-screen flex flex-col items-center justify-center gap-4">
           <Hello name="TSX User" />
           <Greeting who="JSX Friend" />
           <IconDemo />
           <Button>Click me</Button>
           <button className="btn">Tailwind Button</button>
         </div>
       );
     }
     ```

10. 🚀 **Test Locally**
    ```bash
    npm install
    npm run dev      # → http://localhost:5173
    npm run build    # production build
    npm run preview  # serve the production build
    ```

💡 **Troubleshooting “Permission denied” on `vite`**
If running `npm run dev` gives `sh: 1: vite: Permission denied`, try one of the following:

- Use `npm exec vite` directly:
  ```bash
  npm exec vite
  ```
- Ensure the Vite binary is executable:
  ```bash
  chmod +x node_modules/.bin/vite
  ```
- Reinstall dependencies cleanly:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```bash
    npm install
    npm run dev      # → http://localhost:5173
    npm run build    # production build
    npm run preview  # serve the production build
    ```

11. 🎁 **Publish as GitHub Template**
    ```bash
    git init
    git add .
    git commit -m "chore: initial Vite+React+Tailwind CSS-first starter"

    # via GitHub CLI:
    gh repo create vite-tailwind-template --public --source=. --push
    gh repo edit vite-tailwind-template --template
    ```

12. 📄 **Consume Your Template**
    ```bash
    gh repo create my-app --template YOU/vite-tailwind-template --public --clone
    cd my-app
    npm install
    npm run dev
    ```

---

You now have a seamless, end-to-end setup for **Vite + React (TSX/JSX) + Tailwind v4 + Lucide + shadcn/ui**, packaged as a reusable GitHub template!

