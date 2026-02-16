import React from 'react';
import { TrendingUp, Target, BarChart3, Sparkles, Link, ChevronRight, Search, Compass } from 'lucide-react';

interface TOCItemProps {
  number: string;
  title: string;
  icon: React.ReactNode;
  iconBg: string;
  items: { label: string; slideIndex: number }[];
  onNavigate: (index: number) => void;
}

const TOCItem: React.FC<TOCItemProps> = ({ number, title, icon, iconBg, items, onNavigate }) => (
  <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col h-full">
    <div className="flex items-center gap-4 mb-5 pb-4 border-b border-gray-50">
      <div className={`p-2.5 ${iconBg} rounded-xl`}>
        {icon}
      </div>
      <h3 className="font-bold text-gray-900 text-[15px]">{number}. {title}</h3>
    </div>
    <div className="space-y-4 flex-1">
      {items.map((item, idx) => (
        <button
          key={idx}
          onClick={() => onNavigate(item.slideIndex)}
          className="w-full flex items-center justify-between group cursor-pointer text-left"
        >
          <div className="flex items-center gap-3">
            <ChevronRight size={14} className="text-gray-300 group-hover:text-blue-500 transition-colors" />
            <span className="text-[13px] text-gray-600 group-hover:text-gray-900 transition-colors font-medium">
              {item.label}
            </span>
          </div>
          <span className="text-[10px] font-bold text-gray-400 group-hover:text-blue-500 transition-colors uppercase tracking-tight whitespace-nowrap ml-4">
            Slide {item.slideIndex}
          </span>
        </button>
      ))}
    </div>
  </div>
);

export const TableOfContents: React.FC<{ onNavigate: (index: number) => void }> = ({ onNavigate }) => {
  const categories = [
    {
      number: "1",
      title: "Organic Traffic Overview",
      icon: <TrendingUp size={20} className="text-red-500" />,
      iconBg: "bg-red-50",
      items: [
        { label: "Organic Traffic Overview", slideIndex: 3 },
      ]
    },
    {
      number: "2",
      title: "Keyword Performance",
      icon: <Target size={20} className="text-pink-500" />,
      iconBg: "bg-pink-50",
      items: [
        { label: "Keyword Performance", slideIndex: 5 },
      ]
    },
    {
      number: "3",
      title: "Competition Performance - Focus Category",
      icon: <BarChart3 size={20} className="text-emerald-500" />,
      iconBg: "bg-emerald-50",
      items: [
        { label: "Remote Access", slideIndex: 7 },
        { label: "Remote Desktop", slideIndex: 8 },
        { label: "Remote Support", slideIndex: 9 },
        { label: "Remote Connection", slideIndex: 10 },
        { label: "Secure Remote", slideIndex: 11 },
      ]
    },
    {
      number: "4",
      title: "AI Overview Metrics",
      icon: <Sparkles size={20} className="text-amber-500" />,
      iconBg: "bg-amber-50",
      items: [
        { label: "AI Overview Keywords", slideIndex: 13 },
        { label: "AI Overview Traffic", slideIndex: 14 },
      ]
    },
    {
      number: "5",
      title: "Backlink Competitive Analysis",
      icon: <Link size={20} className="text-blue-500" />,
      iconBg: "bg-blue-50",
      items: [
        { label: "Competition Backlink Performance", slideIndex: 16 },
      ]
    },
    {
      number: "6",
      title: "Competitive Insights",
      icon: <Search size={20} className="text-orange-500" />,
      iconBg: "bg-orange-50",
      items: [
        { label: "Content Gap", slideIndex: 18 },
        { label: "Keyword Gap", slideIndex: 19 },
        { label: "Web Experience", slideIndex: 20 },
      ]
    }
  ];

  return (
    <div className="flex-1 flex flex-col items-center justify-start max-w-6xl mx-auto w-full px-4 overflow-y-auto pb-12 scrollbar-hide">
      <div className="text-center mb-10 pt-4">
        <h2 className="text-4xl font-bold text-[#0A1629] mb-4">Table of Contents</h2>
        <div className="w-16 h-1 bg-red-500 mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {categories.map((cat, idx) => (
          <TOCItem
            key={idx}
            number={cat.number}
            title={cat.title}
            icon={cat.icon}
            iconBg={cat.iconBg}
            items={cat.items}
            onNavigate={onNavigate}
          />
        ))}
      </div>
      <p className="mt-12 text-sm text-gray-500 font-medium">
        Click any item to navigate directly to that slide
      </p>
    </div>
  );
};