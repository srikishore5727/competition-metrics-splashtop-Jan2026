import React from 'react';
import { TrendingUp, TrendingDown, LucideIcon } from 'lucide-react';

interface InsightCardProps {
  type: 'success' | 'warning';
  icon?: LucideIcon;
  title: React.ReactNode;
  description: string;
}

export const InsightCard = ({ type, icon, title, description }: InsightCardProps) => {
  const isSuccess = type === 'success';
  const bgColor = isSuccess ? 'bg-emerald-50' : 'bg-blue-50';
  const borderColor = isSuccess ? 'border-emerald-100' : 'border-blue-100';
  const DefaultIcon = isSuccess ? TrendingUp : TrendingDown;
  const Icon = icon || DefaultIcon;
  const iconColor = isSuccess ? 'text-emerald-600' : 'text-blue-600';

  return (
    <div className={`${bgColor} border ${borderColor} rounded-xl p-5 mb-4 last:mb-0 transition-all hover:shadow-sm`}>
      <div className="flex flex-col gap-2">
        <div className={`${iconColor}`}>
          <Icon size={20} strokeWidth={2.5} />
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-1.5 text-sm leading-snug">
            {title}
          </h4>
          <p className="text-xs text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};