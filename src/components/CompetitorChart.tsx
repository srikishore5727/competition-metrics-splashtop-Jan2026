import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ChartData {
  month: string;
  [key: string]: string | number;
}

interface CompetitorChartProps {
  data: ChartData[];
  title: string;
  unit?: string; // 'M', 'k', or ''
  yAxisDomain?: [number | string, number | string];
  legendOrder?: string[]; // Optional custom legend order
}

const colors = {
  splashtop: '#3b82f6', // Blue
  teamviewer: '#10b981', // Emerald
  anydesk: '#f59e0b', // Amber
  beyondtrust: '#8b5cf6', // Violet
  loginein: '#ec4899', // Pink
  gotomypc: '#ef4444', // Red
};

// Helper function to format numbers intelligently
const formatNumber = (value: number, unit?: string): string => {
  if (unit === 'M') {
    return value.toFixed(1) + 'M';
  }
  if (unit === 'k') {
    return Math.round(value).toString() + 'k';
  }
  
  // Smart formatting for raw numbers
  if (value >= 1000000) {
    return (value / 1000000).toFixed(1) + 'M';
  }
  if (value >= 1000) {
    return (value / 1000).toFixed(0) + 'k';
  }
  return value.toString() + (unit || '');
};

const lineConfig = [
  { key: 'splashtop', name: 'Splashtop', color: colors.splashtop },
  { key: 'beyondtrust', name: 'BeyondTrust', color: colors.beyondtrust },
  { key: 'loginein', name: 'Loginein', color: colors.loginein },
  { key: 'gotomypc', name: 'GoToMyPC', color: colors.gotomypc },
  { key: 'anydesk', name: 'AnyDesk', color: colors.anydesk },
  { key: 'teamviewer', name: 'TeamViewer', color: colors.teamviewer },
];

// Helper function to get ordered line config
const getOrderedLineConfig = (customOrder?: string[]) => {
  if (!customOrder) return lineConfig;
  
  return customOrder
    .map(key => lineConfig.find(line => line.key === key))
    .filter(Boolean) as typeof lineConfig;
};

const CustomTooltip = ({ active, payload, label, unit }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-100 shadow-lg rounded-lg text-xs font-sans z-50">
        <p className="font-semibold text-gray-700 mb-2">{label}</p>
        {payload.map((entry: any) => (
          <div key={entry.name} className="flex items-center gap-2 mb-1 last:mb-0">
            <div 
              className="w-2 h-2 rounded-full" 
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-gray-600 capitalize">
              {entry.name === 'GoToMyPC' ? 'GoToMyPC' : entry.name}:
            </span>
            <span className="font-medium text-gray-900">
              {typeof entry.value === 'number' ? formatNumber(entry.value, unit) : entry.value}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export const CompetitorChart = ({ data, title, unit = '', yAxisDomain = [0, 'auto'], legendOrder }: CompetitorChartProps) => {
  const [hiddenSeries, setHiddenSeries] = useState<string[]>([]);

  // Get competitors that exist in the data
  const dataKeys = data.length > 0 ? Object.keys(data[0]).filter(key => key !== 'month') : [];
  
  // Filter lineConfig to only include competitors present in the data
  const availableLineConfig = legendOrder 
    ? getOrderedLineConfig(legendOrder).filter(line => dataKeys.includes(line.key))
    : lineConfig.filter(line => dataKeys.includes(line.key));

  const orderedLineConfig = availableLineConfig;

  const handleLegendClick = (e: any) => {
    const clickedKey = e.dataKey;
    setHiddenSeries(prev => {
      if (prev.includes(clickedKey)) {
        // If already hidden, show it (remove from hidden list)
        return prev.filter(key => key !== clickedKey);
      } else {
        // If visible, hide it (add to hidden list)
        return [...prev, clickedKey];
      }
    });
  };

  // Determine which lines should be visible
  const isLineVisible = (lineKey: string) => {
    return !hiddenSeries.includes(lineKey);
  };

  // Custom legend renderer
  const renderCustomLegend = (props: any) => {
    // Use orderedLineConfig to ensure consistent ordering
    const legendItems = orderedLineConfig.map(line => ({
      dataKey: line.key,
      value: line.name,
      color: line.color
    }));
    
    return (
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {legendItems.map((entry: any, index: number) => {
            const isVisible = !hiddenSeries.includes(entry.dataKey);
            return (
              <button
                key={`legend-${index}`}
                onClick={() => handleLegendClick({ dataKey: entry.dataKey })}
                className={`flex items-center gap-2 px-3 py-1.5 bg-white border rounded-full transition-all duration-200 hover:shadow-md ${
                  isVisible
                    ? 'border-gray-300 shadow-sm'
                    : 'border-gray-200 opacity-50'
                }`}
              >
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: entry.color }}
                />
                <span className={`text-xs font-medium ${isVisible ? 'text-gray-700' : 'text-gray-400'}`}>
                  {entry.value}
                </span>
              </button>
            );
          })}
        </div>
        <p className="text-[10px] text-gray-400 italic">Click on competitors to toggle comparison</p>
      </div>
    );
  };

  return (
    <div className="h-[400px] w-full mt-6 bg-white rounded-xl border border-gray-100 p-4 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-semibold text-gray-700">{title}</h3>
        <div className="flex items-center gap-2">
           {hiddenSeries.length > 0 && (
            <button 
              onClick={() => setHiddenSeries([])}
              className="text-[10px] font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-md hover:bg-blue-100 transition-colors"
            >
              Show All
            </button>
          )}
        </div>
      </div>

      <div className="mb-6">
        {renderCustomLegend({})}
      </div>
      
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6b7280', fontSize: 11 }}
              dy={10}
              padding={{ left: 10, right: 10 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6b7280', fontSize: 11 }}
              tickFormatter={(value) => `${typeof value === 'number' ? formatNumber(value, unit) : value}`}
              domain={yAxisDomain}
            />
            <Tooltip content={<CustomTooltip unit={unit} />} />
            {orderedLineConfig.map((line) => {
              const shouldHide = !isLineVisible(line.key);
              return (
                <Line
                  key={line.key}
                  type="monotone"
                  dataKey={line.key}
                  name={line.name}
                  stroke={line.color}
                  strokeWidth={2.5}
                  dot={{ r: 5, fill: line.color, strokeWidth: 0 }}
                  activeDot={{ r: 6 }}
                  hide={shouldHide}
                  animationDuration={300}
                />
              );
            })}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};