
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Eye, Download, File } from 'lucide-react';

// Mock data for demo
const mockHistoryData = [
  { 
    id: '1', 
    date: '2023-06-15 14:32:21', 
    source: 'DB Query', 
    successRate: 94.2, 
    requestCount: 128,
    dateRange: '2023-06-01 to 2023-06-15'
  },
  { 
    id: '2', 
    date: '2023-06-10 09:15:33', 
    source: 'XML Upload', 
    successRate: 87.5, 
    requestCount: 1,
    fileName: 'test-case-1.xml'
  },
  { 
    id: '3', 
    date: '2023-06-05 16:42:07', 
    source: 'DB Query', 
    successRate: 91.3, 
    requestCount: 92,
    dateRange: '2023-05-15 to 2023-06-05'
  },
  { 
    id: '4', 
    date: '2023-05-28 11:07:45', 
    source: 'XML Upload', 
    successRate: 100.0, 
    requestCount: 1,
    fileName: 'test-case-2.xml'
  },
  { 
    id: '5', 
    date: '2023-05-20 13:52:18', 
    source: 'DB Query', 
    successRate: 89.7, 
    requestCount: 156,
    dateRange: '2023-05-01 to 2023-05-20'
  },
];

const History = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 py-8 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Test History</h1>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Previous Test Runs</CardTitle>
              <CardDescription>
                View and analyze results from previous BRE test runs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Source</TableHead>
                    <TableHead>Details</TableHead>
                    <TableHead>Success Rate</TableHead>
                    <TableHead>Requests</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockHistoryData.map((test) => (
                    <TableRow key={test.id}>
                      <TableCell className="font-medium">{test.date}</TableCell>
                      <TableCell>{test.source}</TableCell>
                      <TableCell>
                        {test.source === 'DB Query' 
                          ? <span>{test.dateRange}</span>
                          : <div className="flex items-center">
                              <File className="h-4 w-4 mr-2" />
                              <span>{test.fileName}</span>
                            </div>
                        }
                      </TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          test.successRate >= 95 
                            ? 'bg-green-100 text-green-800'
                            : test.successRate >= 85
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-red-100 text-red-800'
                        }`}>
                          {test.successRate}%
                        </span>
                      </TableCell>
                      <TableCell>{test.requestCount}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="icon">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="icon">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default History;
