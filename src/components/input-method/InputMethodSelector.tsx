
import React, { useState } from 'react';
import { Database, FileUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface InputMethodSelectorProps {
  onSelect: (method: 'database' | 'upload') => void;
  selectedMethod: 'database' | 'upload' | null;
}

const InputMethodSelector: React.FC<InputMethodSelectorProps> = ({ onSelect, selectedMethod }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
      <div 
        className={cn(
          "bre-input-method", 
          selectedMethod === 'database' && "active"
        )}
        onClick={() => onSelect('database')}
      >
        <div className="h-16 w-16 rounded-full bg-bre-light flex items-center justify-center mb-4">
          <Database className="h-8 w-8 text-bre-primary" />
        </div>
        <h3 className="text-lg font-medium mb-2">Fetch from Database</h3>
        <p className="text-gray-500 text-center">
          Select a date range to fetch data from DynamoDB
        </p>
      </div>

      <div 
        className={cn(
          "bre-input-method", 
          selectedMethod === 'upload' && "active"
        )}
        onClick={() => onSelect('upload')}
      >
        <div className="h-16 w-16 rounded-full bg-bre-light flex items-center justify-center mb-4">
          <FileUp className="h-8 w-8 text-bre-primary" />
        </div>
        <h3 className="text-lg font-medium mb-2">Upload XML File</h3>
        <p className="text-gray-500 text-center">
          Upload an XML file to test with the BRE endpoint
        </p>
      </div>
    </div>
  );
};

export default InputMethodSelector;
