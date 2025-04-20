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

