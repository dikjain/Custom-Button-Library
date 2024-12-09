import React, { useState } from 'react';
import { CursorConfig as ButtonConfig } from '../types/Button';
import { ButtonPreview } from './ButtonPreview';
import { CodeBlock } from './CodeBlock';
import { Code } from 'lucide-react';

interface ButtonCardProps {
  button: ButtonConfig;
}

export function ButtonCard({ button }: ButtonCardProps) {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
      <ButtonPreview button={button} />
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{button.name}</h3>
        <p className="text-gray-400 mb-4">{button.description}</p>
        <button
          onClick={() => setShowCode(!showCode)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
        >
          <Code className="w-4 h-4" />
          {showCode ? 'Hide Code' : 'View Code'}
        </button>

        {showCode && (
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="text-white font-semibold mb-2">HTML</h4>
              <CodeBlock code={button.html} language="html" />
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">CSS</h4>
              <CodeBlock code={button.css} language="css" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
