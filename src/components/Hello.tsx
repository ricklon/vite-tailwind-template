import React from 'react';

export function Hello({ name }: { name: string }) {
  return <h2 className="text-2xl">Hello, {name}!</h2>;
}

