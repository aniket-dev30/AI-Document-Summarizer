import React, { useState } from 'react';
import { TextInput } from './components/TextInput';
import { SummaryDisplay } from './components/SummaryDisplay';
import { QuestionList } from './components/QuestionList';
import { DocumentAnalysis } from './types';
import { analyzeDocument } from './utils/mockAnalyzer';
import { FileText, Loader2 } from 'lucide-react';

function App() {
  const [text, setText] = useState('');
  const [analysis, setAnalysis] = useState<DocumentAnalysis | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!text.trim()) return;
    
    setLoading(true);
    try {
      const result = await analyzeDocument(text);
      setAnalysis(result);
    } catch (error) {
      console.error('Failed to analyze document:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="flex items-center gap-3 mb-8">
          <FileText className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">AI Document Summarizer</h1>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <TextInput value={text} onChange={setText} />
            <button
              onClick={handleAnalyze}
              disabled={loading || !text.trim()}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                'Analyze Document'
              )}
            </button>
          </div>

          {analysis && (
            <div className="space-y-6">
              <SummaryDisplay summary={analysis.summary} />
              <QuestionList questions={analysis.questions} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;