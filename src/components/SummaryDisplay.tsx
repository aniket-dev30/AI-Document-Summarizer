import React from 'react';
import { Summary } from '../types';
import { Lightbulb, Star } from 'lucide-react';

interface SummaryDisplayProps {
  summary: Summary;
}

export function SummaryDisplay({ summary }: SummaryDisplayProps) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-6 shadow-md">
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb className="w-5 h-5 text-yellow-500" />
          <h2 className="text-xl font-semibold">Key Points</h2>
        </div>
        <ul className="list-disc list-inside space-y-2">
          {summary.keyPoints.map((point, index) => (
            <li key={index} className="text-gray-700">{point}</li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-md">
        <div className="flex items-center gap-2 mb-4">
          <Star className="w-5 h-5 text-blue-500" />
          <h2 className="text-xl font-semibold">Highlights</h2>
        </div>
        <ul className="list-disc list-inside space-y-2">
          {summary.highlights.map((highlight, index) => (
            <li key={index} className="text-gray-700">{highlight}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}