import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Data from the provided image
// Values are in Millions.
const data = [
  {
    month: 'Oct 2025',
    splashtop: 0.4,
    teamviewer: 5.0,
    anydesk: 9.3,
    beyondtrust: 0.2,
    gotomypc: 0.073,
  },
  {
    month: 'Nov 2025',
    splashtop: 0.4,
    teamviewer: 4.7,
    anydesk: 9.3,
    beyondtrust: 0.2,
    gotomypc: 0.072,
  },
  {
    month: 'Dec 2025',
    splashtop: 0.4,
    teamviewer: 4.7,
    anydesk: 9.3,
    beyondtrust: 0.2,
    gotomypc: 0.088,
  },
  {
    month: 'Jan 2026',
    splashtop: 0.3,
    teamviewer: 4.6,
    anydesk: 8.9,
    beyondtrust: 0.2,
    gotomypc: 0.090,
  },
];

const colors = {
  splashtop: '#3b82f6', // Blue
  teamviewer: '#10b981', // Emerald
  anydesk: '#f59e0b', // Amber
  beyondtrust: '#8b5cf6', // Violet
  gotomypc: '#ef4444', // Red
};

const lineConfig = [
  { key: 'anydesk', name: 'AnyDesk', color: colors.anydesk },
  { key: 'teamviewer', name: 'TeamViewer', color: colors.teamviewer },
  { key: 'splashtop', name: 'Splashtop', color: colors.splashtop },
  { key: 'beyondtrust', name: 'BeyondTrust', color: colors.beyondtrust },
  { key: 'gotomypc', name: 'GoToMyPC', color: colors.gotomypc },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-100 shadow-lg rounded-lg text-xs font-sans">
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
              {entry.value < 1 
                ? `${(entry.value * 1000).toFixed(0)}k` 
                : `${entry.value}M`}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export const TrafficChart = () => {
  // State to track which series are selected. Empty array = show all.
  const [selectedSeries, setSelectedSeries] = useState<string[]>([]);

  const handleLegendClick = (e: any) => {
    const clickedKey = e.dataKey;
    setSelectedSeries(prev => {
      // If currently showing all, clicking one starts a selection with just that one
      if (prev.length === 0) {
        return [clickedKey];
      }

      // If already selecting, toggle this specific one
      if (prev.includes(clickedKey)) {
        const newSelection = prev.filter(key => key !== clickedKey);
        // If we deselected the last one, revert to showing all (empty array)
        return newSelection;
      } else {
        return [...prev, clickedKey];
      }
    });
  };

  return (
    <div className="h-[350px] w-full mt-6 bg-white rounded-xl border border-gray-100 p-4 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)]">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-sm font-semibold text-gray-700">Monthly Organic Traffic</h3>
        <div className="flex items-center gap-2">
           {selectedSeries.length > 0 && (
            <button 
              onClick={() => setSelectedSeries([])}
              className="text-[10px] font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-md hover:bg-blue-100 transition-colors"
            >
              Reset View
            </button>
          )}
          <div className="p-1.5 rounded-md hover:bg-gray-50 text-gray-400 cursor-pointer transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
              <path d="m15 5 4 4"/>
            </svg>
          </div>
        </div>
      </div>
      
      <ResponsiveContainer width="100%" height={280}>
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
            tickFormatter={(value) => `${value}M`}
            domain={[0, 'auto']}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            onClick={handleLegendClick}
            verticalAlign="bottom" 
            height={36}
            iconType="circle"
            wrapperStyle={{ paddingTop: '20px', fontSize: '12px', cursor: 'pointer' }}
            formatter={(value, entry: any) => {
              const isSelected = selectedSeries.length === 0 || selectedSeries.includes(entry.dataKey);
              return <span className={`transition-opacity duration-300 ${isSelected ? 'opacity-100 font-medium' : 'opacity-40'}`}>{value}</span>;
            }}
          />
          {lineConfig.map((line) => (
            <Line
              key={line.key}
              type="monotone"
              dataKey={line.key}
              name={line.name}
              stroke={line.color}
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 6 }}
              // Hide if we have a selection AND this line is not in it
              hide={selectedSeries.length > 0 && !selectedSeries.includes(line.key)}
              // Animation key helps smooth transitions when lines appear/disappear
              animationDuration={300}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
