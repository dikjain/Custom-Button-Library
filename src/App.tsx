import React, { useEffect } from 'react';
import { button } from './data/Button';
import { ButtonCard } from './components/ButtonCard';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="py-12 px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <h1 className="text-4xl font-bold">Button Library</h1>
        </div>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A collection of cool and animated buttons. 
          <br />
          Click "View Code" to get the HTML, CSS, and JavaScript code for each button.
        </p>
      </header>

      <main className="container mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {button.map((btn) => (
            <ButtonCard key={btn.id} button={btn} />
          ))}
        </div>
      </main>

      <footer className="text-center py-8 text-gray-400">
        <p>Created by Dikshit Mahanot</p>
      </footer>
    </div>
  );
}

export default App;
