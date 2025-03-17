
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface SuccessErrorChartProps {
  successCount: number;
  errorCount: number;
}

const SuccessErrorChart: React.FC<SuccessErrorChartProps> = ({ successCount, errorCount }) => {
  const data = [
    { name: 'Success', value: successCount },
    { name: 'Error', value: errorCount },
  ];

  const COLORS = ['#22C55E', '#EF4444'];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Success vs Error Rate</CardTitle>
        <CardDescription>Proportion of successful vs failed requests</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={true}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => [`${value} requests`, '']}
                contentStyle={{ 
                  backgroundColor: 'white', 
                  borderRadius: '8px', 
                  border: 'none',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default SuccessErrorChart;
