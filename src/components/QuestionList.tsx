import React from 'react';
import { GeneratedQuestion } from '../types';
import { HelpCircle } from 'lucide-react';

interface QuestionListProps {
  questions: GeneratedQuestion[];
}

export function QuestionList({ questions }: QuestionListProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <div className="flex items-center gap-2 mb-6">
        <HelpCircle className="w-5 h-5 text-purple-500" />
        <h2 className="text-xl font-semibold">Generated Questions</h2>
      </div>
      <div className="space-y-6">
        {questions.map((item, index) => (
          <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
            <p className="font-medium text-gray-800 mb-2">Q: {item.question}</p>
            <p className="text-gray-600">A: {item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}