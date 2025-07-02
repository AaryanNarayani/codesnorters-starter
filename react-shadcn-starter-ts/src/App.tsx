import { Github, Eye } from 'lucide-react';
import { Toaster, toast } from 'sonner';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import './App.css';

function App() {
  const codeStructure = `my-app/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   └── ui/
│   │       ├── accordion.tsx
│   │       ├── badge.tsx
│   │       └── button.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── components.json
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts`;

  return (
    <>
    <Toaster position="bottom-right" richColors />
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-8">
        <div className="flex items-center gap-3">
          <img src="/icon.png" alt="Logo" className='w-8 h-8 bg-white rounded-full object-fit-contain' />
          <span className="text-white font-medium" style={{ fontFamily: 'var(--font-heading)' }}>
            codeSnorters
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a 
            href="https://github.com/AaryanNarayani/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img 
              src="https://avatars.githubusercontent.com/u/145103103?v=4" 
              alt="AaryanNarayani" 
              className="w-8 h-8 rounded-full" 
            />
            <span className="text-sm text-gray-400">AaryanNarayani</span>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center px-8 py-16">
        {/* Version Badge */}
        <div className="mb-12">
          <Badge 
            variant="secondary"
            className="px-3 py-1 bg-gray-800 text-gray-400 hover:bg-gray-700"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            🎉 v1.0.1
          </Badge>
        </div>

        {/* Title */}
        <h1 
          className="text-5xl md:text-7xl font-bold text-center mb-8 text-white"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          React + ShadCn Template
        </h1>

        {/* Description */}
        <p 
          className="text-gray-400 text-center max-w-2xl text-lg mb-12 leading-relaxed"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Begin your project with built-in TypeScript support, ShadCn/UI components, Tailwind CSS for styling, 
          and Sonner for beautiful notifications. Ready to kickstart your development journey!
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mb-20">
          <Button 
            className="flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-gray-100 cursor-pointer"
            style={{ fontFamily: 'var(--font-body)' }}
            onClick={() => window.open('https://github.com/AaryanNarayani/codesnorters-starter')}
          >
              <Github size={18} />
              GitHub
          </Button>
          <Button 
            variant="outline"
            className="flex items-center gap-2 px-6 py-3 border-gray-700 text-black hover:bg-gray-800 hover:text-white cursor-pointer"
            style={{ fontFamily: 'var(--font-body)' }}
            onClick={() => toast('Toast rendered baby!')}
          >
            <Eye size={18} />
            Show Toast
          </Button>
        </div>

        {/* Accordion Section */}
        <div className="w-full max-w-2xl">
          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem value="usage" className="border border-gray-800 rounded-md">
              <AccordionTrigger 
                className="px-6 py-6 text-left hover:bg-gray-900 hover:no-underline cursor-pointer"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <span className="text-lg font-medium text-white">
                  How to use?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 border-t border-gray-800">
                <p 
                  className="text-gray-400 mt-4 leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Clone the repository, install dependencies with npm install, and start developing with npm run dev. 
                  This template includes ShadCn/UI components, Tailwind CSS, Sonner notifications, and all necessary configurations.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="contents" className="border border-gray-800 rounded-md mb-60">
              <AccordionTrigger 
                className="px-6 py-6 text-left hover:bg-gray-900 hover:no-underline cursor-pointer"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <span className="text-lg font-medium text-white">
                  What does it contain?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 border-t border-gray-800">
                <pre 
                  className="text-gray-300 mt-4 text-sm leading-relaxed overflow-x-auto bg-gray-950 p-4 rounded-md"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {codeStructure}
                </pre>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>
    </div>
    </>
  );
}

export default App;