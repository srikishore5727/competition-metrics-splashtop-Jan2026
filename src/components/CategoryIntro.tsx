import React from 'react';

interface CategoryIntroProps {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description?: string;
  objectives?: string[];
}

export const CategoryIntro: React.FC<CategoryIntroProps> = ({ 
  icon, 
  iconBg, 
  title, 
  description, 
  objectives 
}) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4">
      <div className="max-w-3xl text-center">
        <div className={`inline-flex p-6 ${iconBg} rounded-3xl mb-8`}>
          {icon}
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
          {title}
        </h2>
        
        {description && (
          <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        )}
        
        {objectives && objectives.length > 0 && (
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 mt-8">
            <h3 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-6">
              What we'll explore
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {objectives.map((obj, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700 font-medium">{obj}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
