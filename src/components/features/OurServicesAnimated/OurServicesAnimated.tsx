import React, { useEffect, useRef, useState } from 'react';

interface Task {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  statusIcon?: React.ReactNode;
}
interface ServiceSection {
  tabLabels: string[];
  tasks: Task[];
  label: string;
  heading: string;
  description: string;
  buttons: { text: string; variant?: 'primary' | 'secondary' }[];
}

// Animated task list component
const AnimatedTaskList: React.FC<{ tasks: Task[] }> = ({ tasks }) => {
  const [offset, setOffset] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const visibleCount = 5; // Show 5 tasks at a time for smoother flow
  const total = tasks.length;

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setOffset((prev) => (prev + 1) % total);
    }, 3000); // Slower animation - 3 seconds per task
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [total]);

  // Create a longer list for smooth continuous flow
  const extendedTasks = [...tasks, ...tasks.slice(0, visibleCount + 2)];
  const startIndex = offset;
  const visibleTasks = extendedTasks.slice(startIndex, startIndex + visibleCount);

  return (
    <div className="overflow-hidden h-64 flex flex-col justify-center relative">
      <div 
        className="transition-all duration-1500 ease-in-out" 
        style={{ 
          willChange: 'transform',
          transform: `translateY(-${offset * 12}px)` // Smoother upward movement
        }}
      >
        {visibleTasks.map((task, idx) => (
          <div 
            key={`${startIndex}-${idx}`} 
            className="flex items-center gap-3 py-3 px-3 rounded-lg mb-3 transition-all duration-500 ease-in-out"
            style={{
              backgroundColor: idx === 0 ? 'rgba(255,255,255,0.9)' : idx === 1 ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.4)',
              transform: `scale(${idx === 0 ? 1.02 : idx === 1 ? 1.01 : 1})`,
              boxShadow: idx === 0 ? '0 4px 12px rgba(0,0,0,0.15)' : idx === 1 ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
              opacity: idx < 4 ? 1 : 0.3, // Fade out tasks that are too far down
              marginBottom: idx === visibleCount - 1 ? '0' : '12px'
            }}
          >
            <span className="text-xl">{task.icon}</span>
            <div className="flex-1">
              <span className="font-medium text-[#222] block">{task.title}</span>
              <span className="text-xs text-gray-500 block">{task.subtitle}</span>
            </div>
            {task.statusIcon && (
              <span 
                className={`text-lg transition-all duration-500 ${
                  task.statusIcon === '✅' ? 'text-green-500' : 'text-red-500'
                }`}
                style={{
                  opacity: idx === 0 ? 1 : 0.7
                }}
              >
                {task.statusIcon}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const XtractServiceSection: React.FC<ServiceSection & { reverse?: boolean; withWhiteBg?: boolean }> = ({
  tabLabels,
  tasks,
  label,
  heading,
  description,
  buttons,
  reverse = false,
  withWhiteBg = false,
}) => (
  <div
    className={`relative flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-stretch w-full max-w-6xl mx-auto mb-20 bg-transparent md:gap-x-16`}
  >
    {/* White background box for Content Creation */}
    {/* White background box for Content Creation (currently disabled) */}
    {/* Left Card */}
    <div
      className="basis-1/2 max-w-none min-w-0 rounded-2xl shadow-xl bg-[#f5f5f5] p-8 flex flex-col mb-8 md:mb-0 relative z-10"
      style={{ boxShadow: '0 6px 32px 0 rgba(0,0,0,0.08), 0 1.5px 6px 0 rgba(0,0,0,0.04), inset 0 3px 1px #fff6' }}
    >
      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {tabLabels.map((tab, idx) => (
          <span
            key={tab}
            className={`px-4 py-1 rounded-full text-sm font-semibold ${idx === 0 ? 'bg-white text-[#0e1229] shadow' : 'bg-transparent text-gray-400'}`}
            style={idx === 0 ? { boxShadow: '0 2px 8px 0 rgba(0,0,0,0.04)' } : {}}
          >
            {tab}
          </span>
        ))}
      </div>
      {/* Animated Task List */}
      <AnimatedTaskList tasks={tasks} />
    </div>
    {/* Right Content */}
    <div className="basis-1/2 max-w-none min-w-0 flex flex-col justify-center pl-0 md:pl-0 pr-0 md:pr-0 py-4">
      <div className="relative flex justify-center mb-3">
        {/* White background for ALL section labels */}
        <div
          className="absolute inset-0 -top-1 bg-white rounded-full shadow z-0 pointer-events-none"
          aria-hidden="true"
        />
        <div className="bg-[#F5F5F5] rounded-full shadow px-6 py-2 flex justify-center items-center relative z-10 w-full">
          <h2 className="text-xl font-extrabold text-[#18181b] text-center w-full m-0 p-0">{label}</h2>
        </div>
      </div>
      <h3 className="text-3xl md:text-4xl font-bold text-[#0e1229] mb-4">{heading}</h3>
      <p className="text-lg text-gray-600 mb-6 max-w-xl">{description}</p>
      <div className="flex gap-4 mt-2">
        {buttons.map((btn, idx) => (
          <button
            key={btn.text}
            className={`px-6 py-2 rounded-full font-semibold shadow transition-all duration-200 ${btn.variant === 'primary' ? 'bg-[#0e1229] text-white' : 'bg-white text-[#0e1229] border border-gray-200 hover:bg-gray-100'}`}
            style={btn.variant === 'primary' ? { boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)' } : {}}
          >
            {btn.text}
          </button>
        ))}
      </div>
    </div>
  </div>
);

// Dynamically import all icons in the services folder
const iconImports = import.meta.glob('../../../assets/icons/services/*', { eager: true, import: 'default' });
const getIcon = (name: string) => {
  const entry = Object.entries(iconImports).find(([path]) => path.endsWith('/' + name));
  if (!entry) return null;
  const src = entry[1] as string;
  return <img src={src} alt="icon" width={24} height={24} style={{display:'block'}} />;
};

const OurServicesAnimated: React.FC = () => {
  const services: ServiceSection[] = [
    {
      tabLabels: ['All Tasks', 'Waiting for approval', 'Completed'],
      tasks: [
        { icon: getIcon('email-processing.png'), title: 'Email Processing', subtitle: 'Automated email sorting and responses', statusIcon: getIcon('check.png') },
        { icon: getIcon('data-analysis.png'), title: 'Data Analysis', subtitle: 'Real-time analytics and reporting', statusIcon: getIcon('check.png') },
        { icon: getIcon('chatbot-support.png'), title: 'Chatbot Support', subtitle: '24/7 customer service automation', statusIcon: getIcon('check.png') },
        { icon: getIcon('document-review.png'), title: 'Document Review', subtitle: 'AI-powered content analysis', statusIcon: getIcon('check.png') },
        { icon: getIcon('workflow-automation.png'), title: 'Workflow Automation', subtitle: 'Process optimization and routing', statusIcon: getIcon('check.png') },
      ],
      label: 'Workflow Automation',
      heading: 'Streamline Your Business Processes',
      description: 'Automate repetitive tasks and workflows to increase efficiency and reduce manual errors. Our AI solutions handle complex processes with precision.',
      buttons: [
        { text: 'Internal Task Bots', variant: 'secondary' },
        { text: '100+ Automations', variant: 'secondary' },
      ],
    },
    {
      tabLabels: ['Active Projects', 'In Progress', 'Completed'],
      tasks: [
        { icon: getIcon('lead-scoring.png'), title: 'Lead Scoring', subtitle: 'AI-powered lead qualification', statusIcon: getIcon('check.png') },
        { icon: getIcon('sales-forecasting.png'), title: 'Sales Forecasting', subtitle: 'Predictive analytics for sales', statusIcon: getIcon('check.png') },
        { icon: getIcon('customer-support.png'), title: 'Customer Support', subtitle: 'Automated ticket resolution', statusIcon: getIcon('check.png') },
        { icon: getIcon('contract-review.png'), title: 'Contract Review', subtitle: 'Legal document analysis', statusIcon: getIcon('check.png') },
        { icon: getIcon('invoice-processing.png'), title: 'Invoice Processing', subtitle: 'Automated payment tracking', statusIcon: getIcon('check.png') },
      ],
      label: 'Sales & Marketing',
      heading: 'Boost Your Revenue with AI',
      description: "Transform your sales and marketing efforts with intelligent automation. From lead generation to customer retention, we've got you covered.",
      buttons: [
        { text: 'Lead Generation', variant: 'secondary' },
        { text: 'Customer Analytics', variant: 'secondary' },
      ],
    },
    {
      tabLabels: ['Support Tickets', 'Escalated', 'Resolved'],
      tasks: [
        { icon: getIcon('voice-recognition.png'), title: 'Voice Recognition', subtitle: 'Multi-language support system', statusIcon: getIcon('check.png') },
        { icon: getIcon('mobile-integration.png'), title: 'Mobile Integration', subtitle: 'Cross-platform compatibility', statusIcon: getIcon('check.png') },
        { icon: getIcon('issue-detection.png'), title: 'Issue Detection', subtitle: 'Proactive problem identification', statusIcon: getIcon('check.png') },
        { icon: getIcon('call-routing.png'), title: 'Call Routing', subtitle: 'Intelligent call distribution', statusIcon: getIcon('check.png') },
        { icon: getIcon('performance-metrics.png'), title: 'Performance Metrics', subtitle: 'Real-time service analytics', statusIcon: getIcon('check.png') },
      ],
      label: 'Customer Support',
      heading: 'Deliver Exceptional Customer Experience',
      description: 'Provide round-the-clock customer support with AI-powered solutions. Handle inquiries, resolve issues, and maintain high satisfaction rates.',
      buttons: [
        { text: '24/7 Support', variant: 'secondary' },
        { text: 'Multi-channel', variant: 'secondary' },
      ],
    },
    {
      tabLabels: ['Data Sources', 'Processing', 'Insights'],
      tasks: [
        { icon: getIcon('data-collection.png'), title: 'Data Collection', subtitle: 'Multi-source data aggregation', statusIcon: getIcon('check.png') },
        { icon: getIcon('pattern-recognition.png'), title: 'Pattern Recognition', subtitle: 'AI-driven insights discovery', statusIcon: getIcon('check.png') },
        { icon: getIcon('trend-analysis.png'), title: 'Trend Analysis', subtitle: 'Predictive modeling', statusIcon: getIcon('check.png') },
        { icon: getIcon('report-generation.png'), title: 'Report Generation', subtitle: 'Automated insights delivery', statusIcon: getIcon('check.png') },
        { icon: getIcon('recommendations.png'), title: 'Recommendations', subtitle: 'Actionable business insights', statusIcon: getIcon('check.png') },
      ],
      label: 'Data Analytics',
      heading: 'Turn Data into Actionable Insights',
      description: 'Harness the power of your data with advanced analytics and AI. Get real-time insights and make data-driven decisions with confidence.',
      buttons: [
        { text: 'Real-time Analytics', variant: 'secondary' },
        { text: 'Predictive Models', variant: 'secondary' },
      ],
    },
    {
      tabLabels: ['Content Creation', 'Review', 'Published'],
      tasks: [
        { icon: getIcon('content-writing.png'), title: 'Content Writing', subtitle: 'AI-powered copy generation', statusIcon: getIcon('check.png') },
        { icon: getIcon('design-creation.png'), title: 'Design Creation', subtitle: 'Automated visual content', statusIcon: getIcon('check.png') },
        { icon: getIcon('video-editing.png'), title: 'Video Editing', subtitle: 'Smart video processing', statusIcon: getIcon('check.png') },
        { icon: getIcon('seo-optimization.png'), title: 'SEO Optimization', subtitle: 'Search engine optimization', statusIcon: getIcon('check.png') },
        { icon: getIcon('social-media.png'), title: 'Social Media', subtitle: 'Multi-platform posting', statusIcon: getIcon('check.png') },
      ],
      label: 'Content Creation',
      heading: 'Create Engaging Content at Scale',
      description: 'Generate high-quality content across all platforms with AI assistance. From blog posts to social media, create compelling content effortlessly.',
      buttons: [
        { text: 'Content Generation', variant: 'secondary' },
        { text: 'Multi-platform', variant: 'secondary' },
      ],
    },
    {
      tabLabels: ['Security Monitoring', 'Threats', 'Resolved'],
      tasks: [
        { icon: getIcon('threat-detection.png'), title: 'Threat Detection', subtitle: 'Real-time security monitoring', statusIcon: getIcon('check.png') },
        { icon: getIcon('access-control.png'), title: 'Access Control', subtitle: 'Intelligent authentication', statusIcon: getIcon('check.png') },
        { icon: getIcon('risk-assessment.png'), title: 'Risk Assessment', subtitle: 'Automated vulnerability scanning', statusIcon: getIcon('check.png') },
        { icon: getIcon('incident-response.png'), title: 'Incident Response', subtitle: 'Automated threat response', statusIcon: getIcon('check.png') },
        { icon: getIcon('compliance-monitoring.png'), title: 'Compliance Monitoring', subtitle: 'Regulatory compliance tracking', statusIcon: getIcon('check.png') },
      ],
      label: 'Security & Compliance',
      heading: 'Protect Your Business with AI Security',
      description: 'Safeguard your business with intelligent security solutions. Monitor threats, ensure compliance, and maintain data protection standards.',
      buttons: [
        { text: 'Threat Protection', variant: 'secondary' },
        { text: 'Compliance Tools', variant: 'secondary' },
      ],
    },
  ];

  return (
    <section id="ourservices" className="py-24 px-6 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-28">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-b from-gray-300 to-black bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Discover how our AI solutions can transform your business operations
          </p>
        </div>
        
        <div className="space-y-44">
          {services.map((service, index) => (
            <XtractServiceSection
              key={index}
              {...service}
              reverse={index % 2 === 1}
              withWhiteBg={index === 4} // Only for Content Creation
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServicesAnimated;