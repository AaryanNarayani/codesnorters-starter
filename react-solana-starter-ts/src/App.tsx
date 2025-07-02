import { useState } from 'react';
import { Github, ChevronDown, Eye } from 'lucide-react';
import { Toaster, toast } from 'sonner';
import './App.css';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
    WalletModalProvider,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';


function WalletButton(){
return(
  <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
        <WalletProvider wallets={[]} autoConnect>
            <WalletModalProvider>
                <WalletMultiButton className='flex items-center gap-2 px-6 py-3 border border-gray-700 text-white rounded-md font-medium hover:bg-gray-800 transition-colors cursor-pointer' />
            </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
)

}
function App() {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const toggleAccordion = (section: string) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  const codeStructure = `my-react-app/
├── public/
├── src/
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   └── index.css
├── package.json
├── tsconfig.json
├── tailwind.config.js
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
          <span 
            className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-400"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            🎉 v1.0.1
          </span>
        </div>

        {/* Title */}
        <h1 
          className="text-5xl md:text-7xl font-bold text-center mb-8 text-white"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          React + Solana Template
        </h1>

        {/* Description */}
        <p 
          className="text-gray-400 text-center max-w-2xl text-lg mb-12 leading-relaxed"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Begin your project with Solana Web wallet support, Tailwind CSS for styling, 
          and Sonner for beautiful notifications. Ready to kickstart your development journey!
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mb-20">
          <button 
            className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-md font-medium hover:bg-gray-100 transition-colors cursor-pointer"
            style={{ fontFamily: 'var(--font-body)' }}
            onClick={() => window.open('https://github.com/AaryanNarayani/codesnorters-starter')}
          >
            <Github size={18} />
            GitHub
          </button>
            <button 
            className="flex items-center gap-2 px-6 py-3 border border-gray-700 text-white rounded-md font-medium hover:bg-gray-800 transition-colors cursor-pointer"
            style={{ fontFamily: 'var(--font-body)' }}
            onClick={() => toast('Toast rendered baby!')}
            >
            <Eye size={18} />
            Show Toast
            </button>
            <WalletButton />
        </div>

        {/* Accordion Section */}
        <div className="w-full max-w-2xl space-y-2">
          <div className="border border-gray-800 rounded-md overflow-hidden">
            <button
              onClick={() => toggleAccordion('usage')}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-900 transition-colors cursor-pointer"
            >
              <span 
                className="text-lg font-medium text-white"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                How to use?
              </span>
              <ChevronDown 
                size={20} 
                className={`text-gray-400 transition-transform ${
                  activeAccordion === 'usage' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {activeAccordion === 'usage' && (
              <div className="px-6 pb-6 border-t border-gray-800">
                <p 
                  className="text-gray-400 mt-4 leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Clone the repository, install dependencies with npm install, and start developing with npm run dev. 
                  The template includes TypeScript, Tailwind CSS, and all necessary configurations.
                </p>
              </div>
            )}
          </div>

          <div className="border border-gray-800 rounded-md overflow-hidden mb-60">
            <button
              onClick={() => toggleAccordion('contents')}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-900 transition-colors cursor-pointer"
            >
              <span 
                className="text-lg font-medium text-white"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                What does it contain?
              </span>
              <ChevronDown 
                size={20} 
                className={`text-gray-400 transition-transform ${
                  activeAccordion === 'contents' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {activeAccordion === 'contents' && (
              <div className="px-6 pb-6 border-t border-gray-800">
                <pre 
                  className="text-gray-400 mt-4 text-sm leading-relaxed overflow-x-auto"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {codeStructure}
                </pre>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
    </>
  );
}

export default App;