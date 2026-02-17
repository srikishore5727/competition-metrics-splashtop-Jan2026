import React, { useState } from 'react';
import { Home, Lightbulb, Users, FileCheck, X } from 'lucide-react';
import breadcrumbImage from 'figma:asset/332d4597eb3c7c75753593a51e27daefccfa641d.png';
import anydeskPricing from 'figma:asset/a6e589420b5f4e5c5bdf105747e0b086f1a8af41.png';
import teamviewerAI from 'figma:asset/529dd65de9a1489191daec5408cc721ee54254c0.png';
import teamviewerTrends from 'figma:asset/bf68b7f322bf5143e2d4f6818d02cf67e0d9df40.png';
import employeeExperience from 'figma:asset/a060b91821609c410ff4e309dfed4d3c1ed408c1.png';
import preDigitalEmployee from 'figma:asset/98744c99d8843b8cfe1bff96ce096d3205855a58.png';
import zeroTrustAttacks from 'figma:asset/8214b89bbb643e8abf228de90a0c5ba855fb0a7a.png';
import zeroTrustThreats from 'figma:asset/37c6c0d59c6cf0d918d17dd01f95c0a698fdb631.png';
import otSecurity from 'figma:asset/be3251c0d2fec0a372f58346e04225278c17b683.png';

type TabType = 'breadcrumbs' | 'takeaways' | 'touchpoints';

interface TabCardProps {
  icon: React.ReactNode;
  title: string;
  company: string;
  bgColor: string;
  iconBgColor: string;
  isActive: boolean;
  onClick: () => void;
}

const TabCard: React.FC<TabCardProps> = ({ icon, title, company, bgColor, iconBgColor, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-start gap-3 p-4 rounded-xl border-2 transition-all text-left ${
      isActive 
        ? `${bgColor} border-gray-300 shadow-md` 
        : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-sm'
    }`}
  >
    <div className={`p-2 ${iconBgColor} rounded-lg flex-shrink-0`}>
      {icon}
    </div>
    <div className="flex-1 min-w-0">
      <h3 className="font-bold text-gray-900 text-sm leading-tight mb-1">{title}</h3>
      <p className="text-xs text-blue-600 font-medium">{company}</p>
    </div>
  </button>
);

export const CompetitionWebsiteFindings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('breadcrumbs');
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  // Close fullscreen on Escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setFullscreenImage(null);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <>
      {/* Fullscreen Image Modal */}
      {fullscreenImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
          onClick={() => setFullscreenImage(null)}
        >
          <button
            onClick={() => setFullscreenImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X size={32} />
          </button>
          <img 
            src={fullscreenImage} 
            alt="Fullscreen view" 
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-1">Web Experience</h2>
        <p className="text-sm text-blue-600 font-medium">Strategic Observations from Competitor Websites</p>
      </div>

      {/* Tab Cards */}
      <div className="mb-6">
        <div className="grid grid-cols-3 gap-4">
          <TabCard
            icon={<Home size={20} className="text-red-500" />}
            title="Home page updates"
            company="AnyDesk & BeyondTrust"
            bgColor="bg-red-50"
            iconBgColor="bg-red-100"
            isActive={activeTab === 'breadcrumbs'}
            onClick={() => setActiveTab('breadcrumbs')}
          />
          <TabCard
            icon={<Lightbulb size={20} className="text-yellow-600" />}
            title="External links to authoritative sites"
            company="TeamViewer"
            bgColor="bg-yellow-50"
            iconBgColor="bg-yellow-100"
            isActive={activeTab === 'takeaways'}
            onClick={() => setActiveTab('takeaways')}
          />
          <TabCard
            icon={<Users size={20} className="text-purple-500" />}
            title="Verifiable facts"
            company="TeamViewer & BeyondTrust"
            bgColor="bg-purple-50"
            iconBgColor="bg-purple-100"
            isActive={activeTab === 'touchpoints'}
            onClick={() => setActiveTab('touchpoints')}
          />
        </div>
      </div>

      {/* Content Area - No internal scrolling, let parent handle it */}
      <div className="pb-8">
        {/* Conditional Tab Content */}
        {activeTab === 'takeaways' && (
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Lightbulb size={20} className="text-yellow-600" />
              External links to authoritative sites
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <span className="text-xs font-semibold text-blue-600 flex-shrink-0">Page URL:</span>
                <a href="https://www.teamviewer.com/en-in/insights/evolution-of-employee-experience/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline break-all">
                  https://www.teamviewer.com/en-in/insights/evolution-of-employee-experience/
                </a>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-xs font-semibold text-gray-600 flex-shrink-0">Publish date:</span>
                <span className="text-xs text-gray-700">Feb 9, 2026</span>
              </div>
              <div className="border border-gray-200 rounded-lg overflow-hidden max-w-4xl">
                <img 
                  src={preDigitalEmployee} 
                  alt="Pre-digital employee experience" 
                  className="w-full h-auto max-h-[400px] object-contain cursor-pointer hover:opacity-90 transition-opacity" 
                  onClick={() => setFullscreenImage(preDigitalEmployee)}
                />
              </div>
              <div className="mt-4">
                <p className="text-xs font-semibold text-gray-600 mb-2">Examples:</p>
                <div className="space-y-1">
                  <a href="https://www.gartner.com/en/human-resources/topics/employee-experience?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline block break-all">
                    https://www.gartner.com/en/human-resources/topics/employee-experience?utm_source=chatgpt.com
                  </a>
                  <a href="https://hbr.org/2023/04/engaged-employees-create-better-customer-experiences?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline block break-all">
                    https://hbr.org/2023/04/engaged-employees-create-better-customer-experiences?utm_source=chatgpt.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'touchpoints' && (
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Users size={20} className="text-purple-500" />
              Verifiable facts
            </h3>
            <div className="space-y-8">
              {/* First Section - Zero Trust Security */}
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-xs font-semibold text-blue-600 flex-shrink-0">Page URL:</span>
                  <a href="https://www.teamviewer.com/en-in/insights/zero-trust-security-for-the-digital-workplace/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline break-all">
                    https://www.teamviewer.com/en-in/insights/zero-trust-security-for-the-digital-workplace/
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xs font-semibold text-gray-600 flex-shrink-0">Publish date:</span>
                  <span className="text-xs text-gray-700">Nov 3, 2025</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src={zeroTrustAttacks} 
                      alt="Zero trust attacks statistics" 
                      className="w-full h-auto max-h-[300px] object-contain cursor-pointer hover:opacity-90 transition-opacity" 
                      onClick={() => setFullscreenImage(zeroTrustAttacks)}
                    />
                  </div>
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src={zeroTrustThreats} 
                      alt="Zero trust threats analysis" 
                      className="w-full h-auto max-h-[300px] object-contain cursor-pointer hover:opacity-90 transition-opacity" 
                      onClick={() => setFullscreenImage(zeroTrustThreats)}
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-xs font-semibold text-gray-600 mb-2">Sources:</p>
                  <div className="space-y-1">
                    <a href="https://www.checkpoint.com/press-releases/check-point-softwares-2025-security-report-finds-alarming-44-increase-in-cyber-attacks-amid-maturing-cyber-threat-ecosystem/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline block break-all">
                      https://www.checkpoint.com/press-releases/check-point-softwares-2025-security-report-finds-alarming-44-increase-in-cyber-attacks-amid-maturing-cyber-threat-ecosystem/
                    </a>
                    <a href="https://www.ibm.com/think/insights/83-percent-organizations-reported-insider-threats-2024" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline block break-all">
                      https://www.ibm.com/think/insights/83-percent-organizations-reported-insider-threats-2024
                    </a>
                  </div>
                </div>
              </div>

              {/* Second Section - OT Security */}
              <div className="pt-6 border-t border-gray-200 space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-xs font-semibold text-blue-600 flex-shrink-0">Page URL:</span>
                  <a href="https://www.beyondtrust.com/blog/entry/ot-security-privileged-remote-access" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline break-all">
                    https://www.beyondtrust.com/blog/entry/ot-security-privileged-remote-access
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xs font-semibold text-gray-600 flex-shrink-0">Publish date:</span>
                  <span className="text-xs text-gray-700">Jan 13, 2026</span>
                </div>
                <div className="border border-gray-200 rounded-lg overflow-hidden max-w-4xl">
                  <img 
                    src={otSecurity} 
                    alt="OT security privileged remote access" 
                    className="w-full h-auto max-h-[300px] object-contain cursor-pointer hover:opacity-90 transition-opacity" 
                    onClick={() => setFullscreenImage(otSecurity)}
                  />
                </div>
                <div className="mt-4">
                  <p className="text-xs font-semibold text-gray-600 mb-2">Sources:</p>
                  <div className="space-y-1">
                    <a href="https://www.dragos.com/ot-cybersecurity-year-in-review/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline block break-all">
                      https://www.dragos.com/ot-cybersecurity-year-in-review/
                    </a>
                    <a href="https://www.honeywell.com/us/en/reports/2025/honeywell-cyber-threat-report" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline block break-all">
                      https://www.honeywell.com/us/en/reports/2025/honeywell-cyber-threat-report
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Additional Sections Below */}
        {activeTab === 'breadcrumbs' && (
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Home size={20} className="text-blue-600" />
              Home page updates
            </h3>
            <div className="space-y-6">
              {/* AnyDesk */}
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-xs font-semibold text-blue-600 flex-shrink-0">Page URL:</span>
                  <a href="https://anydesk.com/en" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline">
                    https://anydesk.com/en
                  </a>
                </div>
                <p className="text-sm text-gray-700">
                  <span className="font-semibold text-gray-900">AnyDesk</span> has introduced a pricing section in the Home page.
                </p>
                <div className="border border-gray-200 rounded-lg overflow-hidden max-w-4xl">
                  <img 
                    src={anydeskPricing} 
                    alt="AnyDesk pricing section" 
                    className="w-full h-auto max-h-[300px] object-contain cursor-pointer hover:opacity-90 transition-opacity" 
                    onClick={() => setFullscreenImage(anydeskPricing)}
                  />
                </div>
              </div>

              {/* TeamViewer */}
              <div className="pt-6 border-t border-gray-200 space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-xs font-semibold text-blue-600 flex-shrink-0">Page URL:</span>
                  <a href="https://www.teamviewer.com/en-in/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline">
                    https://www.teamviewer.com/en-in/
                  </a>
                </div>
                <p className="text-sm text-gray-700">
                  <span className="font-semibold text-gray-900">TeamViewer</span> has changed their home page messaging more related to AI to cope up with the growing trend of AI related keywords over the past six months.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src={teamviewerAI} 
                      alt="TeamViewer AI messaging" 
                      className="w-full h-auto max-h-[300px] object-contain cursor-pointer hover:opacity-90 transition-opacity" 
                      onClick={() => setFullscreenImage(teamviewerAI)}
                    />
                  </div>
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src={teamviewerTrends} 
                      alt="TeamViewer trends" 
                      className="w-full h-auto max-h-[300px] object-contain cursor-pointer hover:opacity-90 transition-opacity" 
                      onClick={() => setFullscreenImage(teamviewerTrends)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
