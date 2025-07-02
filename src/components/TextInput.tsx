import React from 'react';
import { cn } from '../utils/cn';

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function TextInput({ value, onChange, className }: TextInputProps) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={cn(
        "w-full h-64 p-4 text-gray-700 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400",
        className
      )}
      placeholder="Paste your document here..."
    />
  );
}