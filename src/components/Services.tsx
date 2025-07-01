import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Brain, LineChart, Zap, Cog, Users } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 30, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="feature-card group"
    >
      <div className="feature-icon">{icon}</div>
      <h3 className="mb-3 text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <div className="mt-4 flex items-center text-primary-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span>Learn more</span>
        <svg
          className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </motion.div>
  );
};

// Xtract-style Service Section Component
interface Task {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  statusIcon?: React.ReactNode;
}

interface XtractServiceSectionProps {
  tabLabels: string[];
  tasks: Task[];
  label: string;
  heading: string;
  description: string;
  buttons: { text: string; variant?: 'primary' | 'secondary' }[];
  reverse?: boolean;
}

const XtractServiceSection: React.FC<XtractServiceSectionProps> = ({
  tabLabels,
  tasks,
  label,
  heading,
  description,
  buttons,
  reverse = false,
}) => {
  return (
    <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center justify-center gap-10 py-16 w-full`}>
      {/* Left Card */}
      <div className="bg-[#18181b] bg-opacity-90 rounded-2xl shadow-2xl p-6 w-full max-w-md min-h-[340px] flex flex-col justify-start border border-[#232323]">
        {/* Tabs */}
        <div className="flex gap-2 mb-4">
          {tabLabels.map((tab, i) => (
            <div
              key={tab}
              className={`px-3 py-1 rounded-md text-xs font-semibold ${i === 0 ? 'bg-[#232323] text-white' : 'bg-transparent text-gray-400 border border-[#232323]'}`}
            >
              {tab}
            </div>
          ))}
        </div>
        {/* Task List */}
        <div className="flex flex-col gap-2 mt-2">
          {tasks.map((task, i) => (
            <div key={i} className="flex items-center gap-3 bg-[#232323] bg-opacity-60 rounded-lg px-3 py-2">
              <span className="text-lg">{task.icon}</span>
              <div className="flex-1">
                <div className="text-white text-sm font-medium leading-tight">{task.title}</div>
                <div className="text-xs text-gray-400 leading-tight">{task.subtitle}</div>
              </div>
              {task.statusIcon && <span>{task.statusIcon}</span>}
            </div>
          ))}
        </div>
      </div>
      {/* Right Content */}
      <div className="flex flex-col items-start max-w-xl w-full">
        <div className="mb-3">
          <span className="inline-block bg-[#232323] text-white text-xs px-4 py-1 rounded-full font-semibold shadow">{label}</span>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">{heading}</h3>
        <p className="text-gray-300 mb-6 text-lg">{description}</p>
        <div className="flex gap-3 flex-wrap">
          {buttons.map((btn, i) => (
            <button
              key={btn.text}
              className={`px-5 py-2 rounded-full font-semibold text-sm shadow transition-all ${btn.variant === 'primary' ? 'bg-[#a259ff] text-white hover:bg-[#8e3fff]' : 'bg-[#232323] text-white hover:bg-[#333] border border-[#333]'}`}
            >
              {btn.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Example data for six services
const services = [
  {
    tabLabels: ['All Tasks', 'Waiting for approval'],
    tasks: [
      { icon: '💸', title: 'Payroll management', subtitle: 'Due on 2nd July', statusIcon: <span className="text-purple-400">✔</span> },
      { icon: '👤', title: 'Employee Tracking', subtitle: '2 days ago', statusIcon: <span className="text-purple-400">✔</span> },
      { icon: '📝', title: 'Social media post', subtitle: 'Cancelled by user', statusIcon: <span className="text-red-400">✖</span> },
      { icon: '📋', title: 'Lead list', subtitle: '70% prepared', statusIcon: <span className="text-blue-400">⚙</span> },
      { icon: '⏰', title: 'Payment reminder', subtitle: 'sent to selected clients', statusIcon: <span className="text-green-400">✔</span> },
    ],
    label: 'Workflow Automation',
    heading: 'Automate repetitive tasks',
    description: 'We help you streamline internal operations by automating manual workflows like data entry, reporting, and approval chains saving time and cutting down errors.',
    buttons: [
      { text: 'Internal Task Bots', variant: 'secondary' as 'secondary' },
      { text: '100+ Automations', variant: 'secondary' as 'secondary' },
    ],
  },
  // ...repeat with different content for the other five services (use placeholder data)
  {
    tabLabels: ['All Tasks', 'Completed'],
    tasks: [
      { icon: '📦', title: 'Inventory Check', subtitle: 'Completed today', statusIcon: <span className="text-green-400">✔</span> },
      { icon: '🚚', title: 'Shipment', subtitle: 'Dispatched', statusIcon: <span className="text-blue-400">🚚</span> },
      { icon: '🛒', title: 'Order Processing', subtitle: 'In progress', statusIcon: <span className="text-yellow-400">⏳</span> },
    ],
    label: 'Inventory Management',
    heading: 'Track and manage inventory',
    description: 'Automate stock tracking, order processing, and shipment notifications to keep your business running smoothly.',
    buttons: [
      { text: 'Inventory Bots', variant: 'secondary' as 'secondary' },
      { text: 'Real-time Updates', variant: 'secondary' as 'secondary' },
    ],
  },
  {
    tabLabels: ['All Tasks', 'Analytics'],
    tasks: [
      { icon: '📊', title: 'Sales Report', subtitle: 'Generated yesterday', statusIcon: <span className="text-blue-400">📈</span> },
      { icon: '📈', title: 'Growth Metrics', subtitle: 'Updated weekly', statusIcon: <span className="text-green-400">✔</span> },
    ],
    label: 'Data Analytics',
    heading: 'Gain actionable insights',
    description: 'Transform your data into valuable insights with automated reporting and analytics dashboards.',
    buttons: [
      { text: 'Analytics Tools', variant: 'secondary' as 'secondary' },
      { text: 'Custom Reports', variant: 'secondary' as 'secondary' },
    ],
  },
  {
    tabLabels: ['All Tasks', 'Integrations'],
    tasks: [
      { icon: '🔗', title: 'API Sync', subtitle: 'Last synced 1hr ago', statusIcon: <span className="text-green-400">✔</span> },
      { icon: '🖥', title: 'CRM Integration', subtitle: 'Connected', statusIcon: <span className="text-blue-400">🔗</span> },
    ],
    label: 'System Integration',
    heading: 'Connect your tools',
    description: 'Seamlessly integrate your existing systems and tools for a unified workflow.',
    buttons: [
      { text: 'Integration Hub', variant: 'secondary' as 'secondary' },
      { text: 'API Library', variant: 'secondary' as 'secondary' },
    ],
  },
  {
    tabLabels: ['All Tasks', 'Consulting'],
    tasks: [
      { icon: '💡', title: 'Strategy Session', subtitle: 'Scheduled tomorrow', statusIcon: <span className="text-purple-400">💡</span> },
      { icon: '📅', title: 'Roadmap Planning', subtitle: 'In progress', statusIcon: <span className="text-yellow-400">⏳</span> },
    ],
    label: 'AI Consulting',
    heading: 'Expert AI guidance',
    description: 'Get strategic advice and implementation planning to maximize your AI investment.',
    buttons: [
      { text: 'Book a Session', variant: 'primary' as 'primary' },
      { text: 'See Case Studies', variant: 'secondary' as 'secondary' },
    ],
  },
  {
    tabLabels: ['All Tasks', 'Learning'],
    tasks: [
      { icon: '📚', title: 'ML Workshop', subtitle: 'Next week', statusIcon: <span className="text-blue-400">📘</span> },
      { icon: '🧠', title: 'AI Training', subtitle: 'Ongoing', statusIcon: <span className="text-green-400">✔</span> },
    ],
    label: 'AI Training',
    heading: 'Upskill your team',
    description: 'Empower your workforce with hands-on AI and machine learning training.',
    buttons: [
      { text: 'Join Workshop', variant: 'primary' as 'primary' },
      { text: 'View Curriculum', variant: 'secondary' as 'secondary' },
    ],
  },
];

const Services: React.FC = () => (
  <section id="services" className="section bg-black text-white py-24">
    <div className="container-custom flex flex-col gap-24">
      <div className="text-center mb-8">
        <h2 className="section-title text-white">Our Services</h2>
        <p className="section-subtitle text-gray-300">
          Comprehensive AI automation solutions to transform your business operations and drive sustainable growth.
        </p>
      </div>
      {services.map((service, idx) => (
        <XtractServiceSection key={idx} {...service} reverse={idx % 2 === 1} />
      ))}
    </div>
  </section>
);

export default Services;