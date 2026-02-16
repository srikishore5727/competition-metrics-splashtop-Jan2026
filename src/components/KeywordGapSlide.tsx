import React, { useState } from 'react';
import { Search, Download, ChevronUp, ChevronDown } from 'lucide-react';

interface KeywordData {
  keyword: string;
  intent: 'Informational' | 'Commercial' | 'Navigational' | 'Transactional';
  volume: number;
  kd: number;
  splashtop: number;
  teamviewer: number;
  anydesk: number;
  logmein: number;
}

const data: KeywordData[] = [
  { keyword: 'remote work setup', intent: 'Informational', volume: 1830000, kd: 43, splashtop: 0, teamviewer: 0, anydesk: 75, logmein: 0 },
  { keyword: 'help desk solutions', intent: 'Commercial', volume: 1500000, kd: 52, splashtop: 0, teamviewer: 0, anydesk: 0, logmein: 76 },
  { keyword: 'remote support', intent: 'Informational', volume: 4400, kd: 94, splashtop: 10, teamviewer: 6, anydesk: 4, logmein: 8 },
  { keyword: 'desktop remote access', intent: 'Navigational', volume: 8100, kd: 99, splashtop: 0, teamviewer: 6, anydesk: 4, logmein: 29 },
  { keyword: 'it support near me', intent: 'Transactional', volume: 8100, kd: 40, splashtop: 0, teamviewer: 0, anydesk: 0, logmein: 36 },
  { keyword: 'remote desktop support', intent: 'Informational', volume: 720, kd: 90, splashtop: 10, teamviewer: 9, anydesk: 4, logmein: 6 },
  { keyword: 'how to enable remote access', intent: 'Informational', volume: 590, kd: 33, splashtop: 93, teamviewer: 75, anydesk: 58, logmein: 70 },
  { keyword: 'remote support tool', intent: 'Informational', volume: 260, kd: 66, splashtop: 44, teamviewer: 2, anydesk: 1, logmein: 6 },
  { keyword: 'linux remote support', intent: 'Commercial', volume: 110, kd: 57, splashtop: 78, teamviewer: 9, anydesk: 2, logmein: 6 },
  { keyword: 'asset management software', intent: 'Commercial', volume: 6600, kd: 55, splashtop: 0, teamviewer: 0, anydesk: 0, logmein: 36 },
  { keyword: 'remote ctrl', intent: 'Informational', volume: 5400, kd: 50, splashtop: 0, teamviewer: 13, anydesk: 39, logmein: 0 },
  { keyword: 'remote desktop app', intent: 'Informational', volume: 5400, kd: 91, splashtop: 0, teamviewer: 8, anydesk: 5, logmein: 31 },
  { keyword: 'endpoint security solutions', intent: 'Commercial', volume: 2900, kd: 49, splashtop: 0, teamviewer: 0, anydesk: 0, logmein: 0 },
  { keyword: 'how to screen share', intent: 'Informational', volume: 2900, kd: 50, splashtop: 0, teamviewer: 6, anydesk: 10, logmein: 0 },
  { keyword: 'cloud network security', intent: 'Informational', volume: 2900, kd: 33, splashtop: 3, teamviewer: 0, anydesk: 0, logmein: 0 },
  { keyword: 'cloud security posture', intent: 'Commercial', volume: 1000, kd: 35, splashtop: 8, teamviewer: 0, anydesk: 0, logmein: 0 },
  { keyword: 'cloud cyber security', intent: 'Informational', volume: 720, kd: 53, splashtop: 92, teamviewer: 0, anydesk: 0, logmein: 0 },
  { keyword: 'cloud security vulnerabilities', intent: 'Informational', volume: 390, kd: 33, splashtop: 16, teamviewer: 0, anydesk: 0, logmein: 0 },
  { keyword: 'security on cloud storage', intent: 'Informational', volume: 390, kd: 37, splashtop: 17, teamviewer: 0, anydesk: 0, logmein: 0 },
  { keyword: 'best cloud container security', intent: 'Commercial', volume: 260, kd: 6, splashtop: 13, teamviewer: 0, anydesk: 0, logmein: 0 },
];

export const KeywordGapSlide = () => {
  const [activeTab, setActiveTab] = useState<'untapped' | 'weak'>('untapped');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'cloud' | 'ai'>('all');

  const filteredData = data.filter(item => {
    // Filter by tab
    if (activeTab === 'untapped' && item.splashtop > 0) return false;
    if (activeTab === 'weak' && item.splashtop === 0) return false;
    
    // Filter by category
    if (selectedFilter === 'cloud' && !item.keyword.includes('cloud')) return false;
    // For "AI", we'll just check if it contains "security" or "support" as a proxy for this demo if AI keywords aren't explicit
    if (selectedFilter === 'ai' && !['security', 'support'].some(k => item.keyword.includes(k))) return false;
    
    return true;
  });

  const formatVolume = (vol: number) => {
    return vol.toLocaleString();
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-white p-8 font-sans">
      {/* Page Title */}
      <div className="mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 tracking-tight">Keyword Gap</h2>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500 font-medium">Splashtop vs. Competitors - Strategic Opportunities</p>
          <p className="text-xs text-gray-400 font-medium">Source: Semrush</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 pl-1 mb-[-1px] z-10">
        <button 
          onClick={() => setActiveTab('untapped')}
          className={`px-8 py-3 rounded-t-lg text-sm font-semibold transition-colors ${
            activeTab === 'untapped' 
              ? 'bg-white text-red-600 border-t border-x border-gray-200 shadow-[0_-2px_4px_rgba(0,0,0,0.02)]' 
              : 'bg-gray-100 text-gray-500 hover:bg-gray-200 border border-transparent'
          }`}
        >
          Untapped Keyword
        </button>
        <button 
          onClick={() => setActiveTab('weak')}
          className={`px-8 py-3 rounded-t-lg text-sm font-semibold transition-colors ${
            activeTab === 'weak' 
              ? 'bg-white text-red-600 border-t border-x border-gray-200 shadow-[0_-2px_4px_rgba(0,0,0,0.02)]' 
              : 'bg-gray-100 text-gray-500 hover:bg-gray-200 border border-transparent'
          }`}
        >
          Weak Keyword
        </button>
      </div>

      {/* Main Card */}
      <div className="border border-gray-200 rounded-b-xl rounded-tr-xl bg-white shadow-sm flex-1 flex flex-col overflow-hidden relative z-0">
        
        {/* Header / Filter Area */}
        <div className="p-6 pb-4">
          <div className="flex items-center gap-4"> 
            <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center flex-shrink-0">
              <Search className="text-orange-500" size={24} />
            </div>
            <div>
              {/* <h3 className="text-lg font-bold text-gray-900">Competitive Keyword Comparison</h3> */}
              <p className="text-sm text-gray-500 mt-1">
                {activeTab === 'untapped' 
                  ? 'At least one competitor ranks for these keywords, but Splashtop does not rank.' 
                  : 'Splashtop ranks for these keywords but performs lower than competitors.'}
              </p>
            </div>
          </div>
        </div>
        
        {/* Table */}
        <div className="flex-1 overflow-auto relative">
          <table className="w-full border-collapse">
            <thead className="bg-gray-100 sticky top-0 z-20">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 w-1/3 font-bold">Keyword</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 font-normal font-bold">Intent</th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 font-bold">Volume</th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-gray-600 font-bold">KD</th>
                {/* Splashtop Column Header - Highlighted */}
                <th className="px-6 py-3 text-center text-xs font-bold text-gray-800 bg-orange-50 border-l border-orange-100">ST</th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-gray-600 font-bold">TV</th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-gray-600 font-bold">AD</th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-gray-600 font-bold">LMI</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredData.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors group">
                  <td className="px-6 py-3 text-sm text-gray-700 font-medium">{row.keyword}</td>
                  <td className="px-6 py-3 text-sm text-gray-500">{row.intent}</td>
                  <td className="px-6 py-3 text-sm text-gray-600 text-right font-mono">{formatVolume(row.volume)}</td>
                  <td className="px-6 py-3 text-sm text-gray-600 text-center">{row.kd}</td>
                  
                  {/* Splashtop Column - Highlighted */}
                  <td className="px-6 py-3 text-center bg-orange-50 border-l border-orange-100 group-hover:bg-orange-100 transition-colors">
                     <span className={`font-bold ${row.splashtop === 0 ? 'text-red-500' : 'text-gray-900'}`}>
                      {row.splashtop === 0 ? '0' : row.splashtop}
                    </span>
                  </td>
                  
                  <td className="px-6 py-3 text-center text-sm text-gray-500">
                    <span className={row.teamviewer === 0 ? 'text-red-400' : ''}>{row.teamviewer === 0 ? '0' : row.teamviewer}</span>
                  </td>
                  <td className="px-6 py-3 text-center text-sm text-gray-500">
                    <span className={row.anydesk === 0 ? 'text-red-400' : ''}>{row.anydesk === 0 ? '0' : row.anydesk}</span>
                  </td>
                  <td className="px-6 py-3 text-center text-sm text-gray-500">
                    <span className={row.logmein === 0 ? 'text-red-400' : ''}>{row.logmein === 0 ? '0' : row.logmein}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {/* Custom Scrollbar visual - simulated with CSS classes on container, but we can add a visual indicator if needed */}
          <div className="absolute top-0 bottom-0 right-1 w-2 bg-transparent pointer-events-none">
             <div className="w-1.5 bg-gray-300 rounded-full h-1/3 mt-12 ml-auto opacity-50"></div>
          </div>
        </div>
        
        {/* Pagination / Footer (if needed to match card bottom) */}
        <div className="h-4 bg-white border-t border-gray-100"></div>
      </div>
    </div>
  );
};