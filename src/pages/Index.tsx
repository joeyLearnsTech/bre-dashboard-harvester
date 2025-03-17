
import React, { useState } from 'react';
import { toast } from "sonner";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import InputMethodSelector from '@/components/input-method/InputMethodSelector';
import DateRangeSelector from '@/components/input-method/DateRangeSelector';
import XmlFileUploader from '@/components/input-method/XmlFileUploader';
import MetricsOverview from '@/components/dashboard/MetricsOverview';
import StatusCodeChart from '@/components/dashboard/StatusCodeChart';
import SuccessErrorChart from '@/components/dashboard/SuccessErrorChart';
import TimeSeriesChart from '@/components/dashboard/TimeSeriesChart';

// Mock data for demo
const mockTimeSeriesData = [
  { date: '2023-01-01', successCount: 120, errorCount: 5 },
  { date: '2023-01-02', successCount: 132, errorCount: 8 },
  { date: '2023-01-03', successCount: 101, errorCount: 12 },
  { date: '2023-01-04', successCount: 134, errorCount: 3 },
  { date: '2023-01-05', successCount: 90, errorCount: 7 },
  { date: '2023-01-06', successCount: 130, errorCount: 10 },
  { date: '2023-01-07', successCount: 146, errorCount: 4 },
];

const mockStatusCodeData = [
  { statusCode: '200', count: 723 },
  { statusCode: '201', count: 89 },
  { statusCode: '400', count: 28 },
  { statusCode: '401', count: 6 },
  { statusCode: '403', count: 14 },
  { statusCode: '500', count: 31 },
];

const Index = () => {
  const [inputMethod, setInputMethod] = useState<'database' | 'upload' | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleMethodSelect = (method: 'database' | 'upload') => {
    setInputMethod(method);
    setShowResults(false);
  };

  const handleDateRangeSubmit = (startDate: Date, endDate: Date) => {
    setIsLoading(true);
    // This would be an API call to the backend in a real application
    console.log('Fetching data for date range:', { startDate, endDate });
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setShowResults(true);
      toast.success('Data fetched successfully');
    }, 1500);
  };

  const handleXmlUpload = (fileContent: string) => {
    setIsLoading(true);
    // This would be an API call to the backend in a real application
    console.log('Processing XML file with content length:', fileContent.length);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setShowResults(true);
      toast.success('XML file processed successfully');
    }, 1500);
  };

  // Calculate metrics
  const totalRequests = mockTimeSeriesData.reduce(
    (sum, item) => sum + item.successCount + item.errorCount, 
    0
  );
  const totalSuccess = mockTimeSeriesData.reduce(
    (sum, item) => sum + item.successCount, 
    0
  );
  const totalErrors = mockTimeSeriesData.reduce(
    (sum, item) => sum + item.errorCount, 
    0
  );
  const successRate = Math.round((totalSuccess / totalRequests) * 100);
  const errorRate = Math.round((totalErrors / totalRequests) * 100);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 py-8 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-8">
          {!showResults ? (
            <>
              <div className="text-center mb-8 animate-fade-in">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">BRE Backtesting Tool</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Test the Business Rules Engine with historical data from DynamoDB or upload your own XML file.
                </p>
              </div>
              
              <div className="space-y-8 animate-slide-in">
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h2 className="text-xl font-semibold mb-6 text-center">Select Input Method</h2>
                  <InputMethodSelector 
                    onSelect={handleMethodSelect} 
                    selectedMethod={inputMethod} 
                  />
                </div>
                
                {inputMethod === 'database' && (
                  <DateRangeSelector onSubmit={handleDateRangeSubmit} />
                )}
                
                {inputMethod === 'upload' && (
                  <XmlFileUploader onUpload={handleXmlUpload} />
                )}
              </div>
            </>
          ) : (
            <div className="space-y-8 animate-fade-in">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">BRE Test Results</h2>
                <button 
                  onClick={() => setShowResults(false)}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Run Another Test
                </button>
              </div>
              
              <MetricsOverview 
                totalRequests={totalRequests}
                successRate={successRate}
                errorRate={errorRate}
                avgResponseTime={78}
              />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <SuccessErrorChart 
                  successCount={totalSuccess} 
                  errorCount={totalErrors} 
                />
                <StatusCodeChart data={mockStatusCodeData} />
              </div>
              
              <TimeSeriesChart data={mockTimeSeriesData} />
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
