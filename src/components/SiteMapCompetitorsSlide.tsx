import React from 'react';
import { ExternalLink, BookOpen, FileText } from 'lucide-react';

interface PageItem {
  category: string;
  title: string;
  url: string;
  date: string;
}

interface CompetitorData {
  name: string;
  count: number;
  pages: PageItem[];
}

const data: Record<string, CompetitorData> = {
  teamviewer: {
    name: 'Team Viewer',
    count: 2,
    pages: [
      {
        category: 'IT BUDGET',
        title: 'How to Maximize ROI from Your IT Budget',
        url: 'https://www.teamviewer.com/en-us/insights/how-to-maximize-roi-from-your-it-budget/',
        date: 'Jan 23, 2026'
      },
      {
        category: 'EMPLOYEE EXPERIENCE',
        title: 'How Endpoint Management Elevates Employee Experience',
        url: 'https://www.teamviewer.com/en-us/insights/how-endpoint-management-elevates-employee-experience/',
        date: 'Jan 27, 2026'
      }
    ]
  },
  beyondtrust: {
    name: 'BeyondTrust',
    count: 21,
    pages: [
      { category: 'IDENTITY SECURITY', title: 'Identity Security Cannot Be Solved in Silos', url: 'https://www.beyondtrust.com/blog/entry/identity-security-cannot-be-solved-in-silos', date: '1/26/2026' },
      { category: 'INSIDER THREATS', title: 'How to Stop Insider Threats', url: 'https://www.beyondtrust.com/blog/entry/how-to-stop-insider-threats', date: '1/23/2026' },
      { category: 'AI SECURITY', title: 'Agentic AI Security', url: 'https://www.beyondtrust.com/blog/entry/agentic-ai-security', date: '1/23/2026' },
      { category: 'REMOTE SUPPORT', title: 'Unattended Support Sessions Use Cases', url: 'https://www.beyondtrust.com/blog/entry/unattended-support-sessions-use-cases-security-other-consider', date: '1/23/2026' },
      { category: 'OT CYBERSECURITY', title: 'Operational Technology OT Cybersecurity', url: 'https://www.beyondtrust.com/blog/entry/operational-technology-ot-cybersecurity-4-best-practices', date: '1/23/2026' },
      { category: 'AI SECURITY', title: 'Generative AI and the Insider Threat', url: 'https://www.beyondtrust.com/blog/entry/generative-ai-and-the-insider-threat', date: '1/23/2026' },
      { category: 'AI SECURITY', title: 'Closing the Agentic AI Security Gap', url: 'https://www.beyondtrust.com/blog/entry/closing-the-agentic-ai-security-gap', date: '1/22/2026' },
      { category: 'ACCESS MANAGEMENT', title: 'Securing Autonomous Access with PASM', url: 'https://www.beyondtrust.com/blog/entry/securing-autonomous-access-with-pasm', date: '1/22/2026' },
      { category: 'PRIVILEGED ACCESS', title: 'What is Least Privilege', url: 'https://www.beyondtrust.com/blog/entry/what-is-least-privilege', date: '1/20/2026' },
      { category: 'PROVISIONING', title: 'Provisioning and Deprovisioning', url: 'https://www.beyondtrust.com/blog/entry/provisioning-and-deprovisioning', date: '1/20/2026' },
      { category: 'LINUX SECURITY', title: 'Unix Linux Privileged Management', url: 'https://www.beyondtrust.com/blog/entry/unix-linux-privileged-management-should-you-sudo', date: '1/20/2026' },
      { category: 'PASSWORD SECURITY', title: 'Password Cracking 101', url: 'https://www.beyondtrust.com/blog/entry/password-cracking-101-attacks-defenses-explained', date: '1/20/2026' },
      { category: 'IOT SECURITY', title: 'Top IoT Security Vulnerabilities', url: 'https://www.beyondtrust.com/blog/entry/top-iot-security-vulnerabilities', date: '1/15/2026' },
      { category: 'PRIVILEGED ACCESS', title: 'What is Machine PAM', url: 'https://www.beyondtrust.com/blog/entry/what-is-machine-pam', date: '1/15/2026' },
      { category: 'SHADOW IT', title: 'Most Common and Dangerous Types of Shadow IT', url: 'https://www.beyondtrust.com/blog/entry/most-common-and-dangerous-types-of-shadow-it', date: '1/12/2026' },
      { category: 'REMOTE SUPPORT', title: 'Monitor Log Audit Remote Support Activity', url: 'https://www.beyondtrust.com/blog/entry/monitor-log--audit-remote-support-activity', date: '1/12/2026' },
      { category: 'TECH INTEGRATIONS', title: 'Top Tech Integrations', url: 'https://www.beyondtrust.com/blog/entry/top-tech-integrations', date: '1/2/2026' },
      { category: 'CHANNEL PREDICTIONS', title: 'Channel Predictions', url: 'https://www.beyondtrust.com/blog/entry/channel-predictions', date: '1/2/2026' },
      { category: 'AI SECURITY', title: 'How to Govern AI Agent Identities', url: 'https://www.beyondtrust.com/blog/entry/how-to-govern-ai-agent-identities', date: '1/2/2026' },
      { category: 'CYBERSECURITY', title: 'Holiday Hacklore', url: 'https://www.beyondtrust.com/blog/entry/holiday-hacklore', date: '1/2/2026' },
      { category: 'CYBERSECURITY', title: 'BeyondTrust Cybersecurity Trend Predictions', url: 'https://www.beyondtrust.com/blog/entry/beyondtrust-cybersecurity-trend-predictions', date: '1/2/2026' }
    ]
  },
  anydesk: {
    name: 'AnyDesk',
    count: 3,
    pages: [
      {
        category: 'FEATURES',
        title: 'Wake on LAN Explained',
        url: 'https://anydesk.com/blog/wake-on-lan-explained',
        date: '12/16/2025'
      },
      {
        category: 'LICENSING',
        title: 'Register AnyDesk License',
        url: 'https://anydesk.com/blog/register-anydesk-license',
        date: '12/16/2025'
      },
      {
        category: 'FEATURES',
        title: 'Benefits of Unattended Access Feature',
        url: 'https://anydesk.com/blog/benefits-of-unattended-access-feature',
        date: '12/16/2025'
      }
    ]
  }
};

export const SiteMapCompetitorsSlide = () => {
  const [activeTab, setActiveTab] = React.useState<'teamviewer' | 'beyondtrust' | 'anydesk'>('teamviewer');

  const currentData = data[activeTab];

  return (
    <div className="flex-1 flex flex-col h-full bg-white font-sans overflow-hidden">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 tracking-tight">Content Gap</h2>
        <p className="text-sm text-gray-500 font-medium">Key Insights & Strategic Actions</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 p-1 bg-gray-100 rounded-xl w-fit">
        <button 
          onClick={() => setActiveTab('teamviewer')}
          className={`px-6 py-2 text-sm font-semibold rounded-lg transition-all ${activeTab === 'teamviewer' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
        >
          Teamviewer
        </button>
        <button 
          onClick={() => setActiveTab('beyondtrust')}
          className={`px-6 py-2 text-sm font-semibold rounded-lg transition-all ${activeTab === 'beyondtrust' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
        >
          Beyondtrust
        </button>
        <button 
          onClick={() => setActiveTab('anydesk')}
          className={`px-6 py-2 text-sm font-semibold rounded-lg transition-all ${activeTab === 'anydesk' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
        >
          Anydesk
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
        {/* Main Content Area following Image 1 */}
        <div className="space-y-6 pb-8">
          {/* Blue Grid Section */}
          <div className="bg-[#f2f7ff] border border-[#d1e3ff] rounded-2xl p-8 relative">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#2196f3] flex items-center justify-center flex-shrink-0">
                <FileText className="text-white" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  New Pages Added in January 2026
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Recent content expansion focusing on {activeTab === 'teamviewer' ? 'IT budgeting and employee experience.' : activeTab === 'beyondtrust' ? 'AI security, identity management, and technical predictions.' : 'wake on LAN and license management.'}
                </p>
              </div>
              <div className="px-3 py-1 bg-[#2196f3] text-white text-[10px] font-bold rounded-full uppercase tracking-wider">
                {currentData.count} NEW PAGES
              </div>
            </div>

            {/* Grid of Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentData.pages.map((page, index) => (
                <a 
                  key={index}
                  href={page.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-gray-100 rounded-xl p-5 group hover:shadow-md transition-all flex justify-between items-start"
                >
                  <div className="flex-1">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 group-hover:text-[#2196f3] transition-colors">
                      {page.category}
                    </p>
                    <h4 className="text-[15px] font-bold text-gray-900 leading-tight">
                      {page.title}
                    </h4>
                    <p className="text-[11px] text-gray-400 mt-2 font-medium">
                      Published: {page.date}
                    </p>
                  </div>
                  <ExternalLink size={16} className="text-gray-300 group-hover:text-[#2196f3] transition-colors mt-0.5 flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};