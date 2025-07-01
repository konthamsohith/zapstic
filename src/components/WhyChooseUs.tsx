import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ZapsticLogo from '../assets/icons/zapstic_logo.jpg';
import ChatGPTIcon from '../assets/icons/chatgpt.png';
import GithubIcon from '../assets/icons/github.png';
import DiscordIcon from '../assets/icons/discord.png';
import GoogleDriveIcon from '../assets/icons/google_drive.png';
import FlowingSections from './FlowingSections';

// Pixel-perfect Clock Animation (Faster Innovation)
const ClockIcon = () => {
  // Animation timing and keyframes
  const duration = 2.2;
  const pause = 0.5;
  // Hand rotates from -65deg to +68deg and back
  const handKeyframes = [-65, 68, -65];
  const handTimes = [0, 0.5, 1];
  // Dots pop in at max hand angle
  const dotKeyframes = [0, 0, 1, 1, 0, 0];
  const dotTimes = [0, 0.45, 0.5, 0.95, 1, 1];

  // Sizes and positions (from OrbAI reference)
  const clockSize = 140;
  const handWidth = 60;
  const handHeight = 12;
  const handRadius = 12;
  const centerDot = 13;
  const whiteDot = 18;
  // Dots positions
  const dot1 = { left: 28, top: 22 };
  const dot2 = { right: 32, top: 18 };
  const dot3 = { right: 24, bottom: 32 };

  return (
    <div
      className="relative select-none"
      style={{ width: clockSize, height: clockSize, minWidth: clockSize, minHeight: clockSize }}
    >
      {/* Main clock face with strong soft shadow */}
      <div
        className="absolute rounded-full"
        style={{
          width: clockSize,
          height: clockSize,
          background: '#f5f5f5',
          boxShadow:
            '0 8px 24px 0 rgba(0,0,0,0.13), 0 1px 3px 0 rgba(0,0,0,0.10), inset 0 2px 1px #fff6',
          top: 0,
          left: 0,
        }}
      />
      {/* Hand - perfectly anchored at center, under black dot */}
      <motion.div
        className="absolute"
        style={{
          width: handWidth,
          height: handHeight,
          top: `calc(50% - ${handHeight / 2}px)`,
          left: `calc(50% - 1px)`, // -1px for pixel-perfect anchor
          background: '#fff',
          borderRadius: handRadius,
          boxShadow: '0 4px 12px 0 rgba(0,0,0,0.10)',
          transformOrigin: '0% 50%',
          zIndex: 2,
        }}
        animate={{ rotate: handKeyframes }}
        transition={{
          repeat: Infinity,
          duration: duration * 2 + pause * 2,
          times: handTimes,
          ease: 'easeInOut',
        }}
      />
      {/* Center black dot (always above hand, perfectly centered) */}
      <div
        className="absolute"
        style={{
          width: centerDot,
          height: centerDot,
          background: '#000',
          borderRadius: '50%',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 8px 2px rgba(0,0,0,0.13)',
          zIndex: 3,
        }}
      />
      {/* White Dots - exact size and position */}
      <motion.div
        style={{
          position: 'absolute',
          left: dot1.left,
          top: dot1.top,
          width: whiteDot,
          height: whiteDot,
          borderRadius: '50%',
          background: '#f5f5f5',
          boxShadow: '0 2px 6px rgba(0,0,0,0.10)',
          zIndex: 2,
        }}
        animate={{ opacity: dotKeyframes, scale: [0.8, 1, 1, 1, 0.8, 0.8] }}
        transition={{ repeat: Infinity, duration: duration * 2 + pause * 2, times: dotTimes, ease: 'linear' }}
      />
      <motion.div
        style={{
          position: 'absolute',
          right: dot2.right,
          top: dot2.top,
          width: whiteDot,
          height: whiteDot,
          borderRadius: '50%',
          background: '#f5f5f5',
          boxShadow: '0 2px 6px rgba(0,0,0,0.10)',
          zIndex: 2,
        }}
        animate={{ opacity: dotKeyframes, scale: [0.8, 1, 1, 1, 0.8, 0.8] }}
        transition={{ repeat: Infinity, duration: duration * 2 + pause * 2, times: dotTimes, ease: 'linear' }}
      />
      {/* Bottom dot is always visible, no animation */}
      <div
        style={{
          position: 'absolute',
          right: dot3.right,
          bottom: dot3.bottom,
          width: whiteDot,
          height: whiteDot,
          borderRadius: '50%',
          background: '#f5f5f5',
          boxShadow: '0 2px 6px rgba(0,0,0,0.10)',
          zIndex: 2,
          opacity: 1,
          transform: 'scale(1)',
        }}
      />
    </div>
  );
};

// Pixel-perfect AI-Driven Growth Bar Chart Animation
function AIDrivenGrowthCard() {
  // Bar chart states (bars: [automation, mid1, mid2, mid3, cost])
  const before = {
    automation: 0.2, // 20%
    cost: 0.6,      // 60%
    bars: [0.2, 0.32, 0.44, 0.52, 0.6],
  };
  const after = {
    automation: 0.8, // 80%
    cost: 0.1,      // 10%
    bars: [0.8, 0.62, 0.44, 0.28, 0.1],
  };
  const [phase, setPhase] = useState<'before' | 'after'>('before');
  useEffect(() => {
    const timeout = setTimeout(() => {
      setPhase(p => (p === 'before' ? 'after' : 'before'));
    }, 2600);
    return () => clearTimeout(timeout);
  }, [phase]);
  const state = phase === 'before' ? before : after;
  const barColors = '#f5f5f5';
  const barShadow = '0 0.7px 0.7px -0.67px rgba(0,0,0,0.08), 0 1.8px 1.8px -1.33px rgba(0,0,0,0.08), 0 3.6px 3.6px -2px rgba(0,0,0,0.07), 0 6.9px 6.9px -2.67px rgba(0,0,0,0.07), 0 13.6px 13.6px -3.33px rgba(0,0,0,0.05), 0 30px 30px -4px rgba(0,0,0,0.02), 0 3px 1px 0px #fff inset';
  // Bar chart sizing
  const chartHeight = 120;
  const chartWidth = 220;
  const barWidth = 28;
  const barGap = 18;
  const barRadius = 12;
  // Automation is always the first bar, Cost is always the last bar
  const automationIdx = 0;
  const costIdx = 4;
  return (
    <div
      className="flex flex-col items-start justify-between rounded-3xl shadow-xl p-8 min-w-[320px] max-w-sm w-full h-[340px] transition-transform duration-200 hover:scale-105 border border-gray-100 relative overflow-hidden"
      style={{ background: '#f5f5f5', boxShadow: '0 8px 32px 0 rgba(0,0,0,0.10), 0 1.5px 6px 0 rgba(0,0,0,0.04), inset 0 3px 1px #fff6' }}
    >
      {/* Animated Bar Chart at the top */}
      <div style={{ display: 'flex', alignItems: 'flex-end', height: chartHeight, width: chartWidth, gap: barGap, margin: '32px auto 24px auto', position: 'relative' }}>
        {/* BEFORE/AFTER label */}
        <motion.div
          style={{ position: 'absolute', left: -54, top: chartHeight / 2 - 40, writingMode: 'vertical-rl', fontWeight: 600, fontSize: 14, color: '#222', opacity: phase === 'before' ? 1 : 0, transition: 'opacity 0.5s', background: '#f5f5f5', borderRadius: 5, boxShadow: barShadow, padding: '8px 4px', textAlign: 'center' }}
        >
          BEFORE
        </motion.div>
        <motion.div
          style={{ position: 'absolute', left: -54, top: chartHeight / 2 - 40, writingMode: 'vertical-rl', fontWeight: 600, fontSize: 14, color: '#222', opacity: phase === 'after' ? 1 : 0, transition: 'opacity 0.5s', background: '#f5f5f5', borderRadius: 5, boxShadow: barShadow, padding: '8px 4px', textAlign: 'center' }}
        >
          AFTER
        </motion.div>
        {/* Bars */}
        {state.bars.map((h, i) => (
          <motion.div
            key={i}
            animate={{ height: h * chartHeight }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            style={{
              width: barWidth,
              height: h * chartHeight,
              background: barColors,
              borderRadius: 0,
              boxShadow: barShadow,
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              position: 'relative',
            }}
          />
        ))}
        {/* Automation label above first bar */}
        <motion.div
          animate={{ y: phase === 'before' ? 0 : -20, opacity: phase === 'before' ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'absolute',
            left: automationIdx * (barWidth + barGap),
            top: -36,
            fontWeight: 700,
            fontSize: 15,
            color: '#111',
            background: '#f5f5f5',
            borderRadius: 20,
            boxShadow: barShadow,
            padding: '4px 14px',
            minWidth: 80,
            textAlign: 'center',
          }}
        >
          20% Automation
        </motion.div>
        <motion.div
          animate={{ y: phase === 'after' ? 0 : 20, opacity: phase === 'after' ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'absolute',
            left: automationIdx * (barWidth + barGap),
            top: -36,
            fontWeight: 700,
            fontSize: 15,
            color: '#111',
            background: '#f5f5f5',
            borderRadius: 20,
            boxShadow: barShadow,
            padding: '4px 14px',
            minWidth: 80,
            textAlign: 'center',
          }}
        >
          80% Automation
        </motion.div>
        {/* Cost label above last bar */}
        <motion.div
          animate={{ y: phase === 'before' ? 0 : 20, opacity: phase === 'before' ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'absolute',
            left: costIdx * (barWidth + barGap),
            top: -36,
            fontWeight: 700,
            fontSize: 15,
            color: '#111',
            background: '#f5f5f5',
            borderRadius: 20,
            boxShadow: barShadow,
            padding: '4px 14px',
            minWidth: 80,
            textAlign: 'center',
          }}
        >
          60% Cost
        </motion.div>
        <motion.div
          animate={{ y: phase === 'after' ? 0 : -20, opacity: phase === 'after' ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'absolute',
            left: costIdx * (barWidth + barGap),
            top: -36,
            fontWeight: 700,
            fontSize: 15,
            color: '#111',
            background: '#f5f5f5',
            borderRadius: 20,
            boxShadow: barShadow,
            padding: '4px 14px',
            minWidth: 80,
            textAlign: 'center',
          }}
        >
          10% Cost
        </motion.div>
      </div>
      {/* Section Title and Description */}
      <div className="mt-auto">
        <div className="font-bold text-lg mb-2">AI-Driven Growth</div>
        <div className="text-gray-500 text-sm">Make smarter moves with accurate, real-time business insights.</div>
      </div>
    </div>
  );
}

// Custom Workflow Card (matches OrbAI reference)
function CustomWorkflowCard() {
  // Icon data for easier mapping
  const icons = [
    { src: ChatGPTIcon, alt: 'ChatGPT', style: { top: 16, left: 36 } },
    { src: GithubIcon, alt: 'GitHub', style: { top: 16, right: 36 } },
    { src: DiscordIcon, alt: 'Discord', style: { top: 150, left: 36 } },
    { src: GoogleDriveIcon, alt: 'Google Drive', style: { top: 150, right: 36 } },
  ];
  const center = { x: 135, y: 84 }; // Center logo position (px, card is 270px wide)
  const iconSize = 56; // w-14 = 56px
  const stopDistance = 40; // px from center to stop (closer to main logo)
  const [gatheredCount, setGatheredCount] = useState(0); // How many icons are gathered
  const [allReturn, setAllReturn] = useState(false); // If all icons should return

  // For more spacing, increase mainBox size and add cornerOffset
  const mainBox = { x: 135, y: 48, w: 120, h: 120 }; // main logo box: center x, top y, width, height
  const topCornerOffset = 24;
  const bottomCornerOffset = 8;

  // Step through gathering icons one by one
  useEffect(() => {
    if (allReturn) {
      // After all icons return, reset
      const timer = setTimeout(() => {
        setAllReturn(false);
        setGatheredCount(0);
      }, 1200);
      return () => clearTimeout(timer);
    } else if (gatheredCount < icons.length) {
      // Gather next icon
      const timer = setTimeout(() => {
        setGatheredCount((prev) => prev + 1);
      }, 900);
      return () => clearTimeout(timer);
    } else if (gatheredCount === icons.length) {
      // All gathered, wait, then return all
      const timer = setTimeout(() => {
        setAllReturn(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [gatheredCount, allReturn]);

  // Helper to get the offset for each icon to move toward center, but stop at stopDistance
  const getTargetOffset = (iconIdx: number) => {
    const icon = icons[iconIdx];
    // Get icon center position
    let x0 = 0, y0 = 0;
    if (icon.style.left !== undefined) x0 = icon.style.left as number + iconSize / 2;
    else x0 = 270 - (icon.style.right as number) - iconSize / 2;
    y0 = (icon.style.top as number) + iconSize / 2;
    // Target corner of main logo box, spaced out
    let target = { x: center.x, y: center.y };
    if (iconIdx === 0) { // ChatGPT: top-left
      target = {
        x: mainBox.x - mainBox.w / 2 - topCornerOffset + iconSize / 2,
        y: mainBox.y - topCornerOffset + iconSize / 2
      };
    } else if (iconIdx === 1) { // GitHub: top-right
      target = {
        x: mainBox.x + mainBox.w / 2 + topCornerOffset - iconSize / 2,
        y: mainBox.y - topCornerOffset + iconSize / 2
      };
    } else if (iconIdx === 2) { // Discord: bottom-left
      target = {
        x: mainBox.x - mainBox.w / 2 - bottomCornerOffset + iconSize / 2,
        y: mainBox.y + mainBox.h + bottomCornerOffset - iconSize / 2
      };
    } else if (iconIdx === 3) { // Google Drive: bottom-right
      target = {
        x: mainBox.x + mainBox.w / 2 + bottomCornerOffset - iconSize / 2,
        y: mainBox.y + mainBox.h + bottomCornerOffset - iconSize / 2
      };
    }
    // Vector from icon to target
    const dx = target.x - x0;
    const dy = target.y - y0;
    return { x: dx, y: dy };
  };

  return (
    <div
      className="flex flex-col items-start justify-end rounded-3xl shadow-xl p-8 min-w-[320px] max-w-sm w-full h-[340px] transition-transform duration-200 hover:scale-105 border border-gray-100 relative overflow-hidden"
      style={{ background: '#f5f5f5', boxShadow: '0 8px 32px 0 rgba(0,0,0,0.10), 0 1.5px 6px 0 rgba(0,0,0,0.04), inset 0 3px 1px #fff6' }}
    >
      {/* Center logo with shadow (main logo in a box) */}
      <div className="absolute left-1/2" style={{ top: 32, transform: 'translateX(-50%)' }}>
        <div className="bg-white rounded-3xl shadow-xl flex items-center justify-center w-36 h-36">
          <div className="bg-white rounded-2xl shadow-lg flex items-center justify-center w-28 h-28">
            <img
              src={ZapsticLogo}
              alt="Main Logo"
              className="w-20 h-20 object-contain"
            />
          </div>
        </div>
      </div>
      {/* Floating icons, gather one by one, then all return at once */}
      {icons.map((icon, i) => {
        const offset = getTargetOffset(i);
        let animateProps;
        if (allReturn) {
          animateProps = { x: 0, y: 0, scale: 1, zIndex: 2 };
        } else if (i < gatheredCount) {
          animateProps = { x: offset.x, y: offset.y, scale: 1.15, zIndex: 3 };
        } else {
          animateProps = { x: 0, y: 0, scale: 1, zIndex: 2 };
        }
        return (
          <motion.div
            key={icon.alt}
            initial={false}
            animate={animateProps}
            transition={{
              type: 'spring',
              stiffness: 80,
              damping: 18,
              duration: 1.1,
            }}
            style={{
              position: 'absolute',
              ...icon.style,
              zIndex: animateProps.zIndex,
            }}
          >
            <img
              src={icon.src}
              alt={icon.alt}
              className="w-12 h-12 object-contain rounded-xl shadow"
            />
          </motion.div>
        );
      })}
      {/* Card content (more top padding) */}
      <div className="mt-auto pt-8">
        <h3 className="text-xl font-bold text-[#222] mb-2">Automated Workflows</h3>
        <p className="text-gray-500 text-base leading-snug">Automate workflows to streamline tasks, boost efficiency, and save time</p>
      </div>
    </div>
  );
}

const features = [
  {
    title: 'Faster Innovation',
    description: 'Accelerate your business with rapid, AI-powered solutions.',
    icon: <ClockIcon />,
  },
  {
    title: 'Scalable Solutions',
    description: 'Grow confidently with AI that adapts to your needs.',
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 256 256"><rect x="56" y="56" width="144" height="144" rx="32" fill="#F3F3F3"/><path d="M96 160l32-32 32 32" stroke="#7C3AED" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  },
  {
    title: 'Personalized Experiences',
    description: 'Deliver tailored interactions for every customer.',
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 256 256"><circle cx="128" cy="104" r="40" fill="#F3F3F3"/><rect x="64" y="160" width="128" height="32" rx="16" fill="#7C3AED"/></svg>
    ),
  },
  {
    title: 'Cost Effective',
    description: 'Reduce operational costs with efficient automation.',
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 256 256"><rect x="56" y="56" width="144" height="144" rx="32" fill="#F3F3F3"/><path d="M128 96v64" stroke="#7C3AED" strokeWidth="16" strokeLinecap="round"/><circle cx="128" cy="160" r="8" fill="#7C3AED"/></svg>
    ),
  },
];

const WhyChooseUs = () => (
  <section id="features" className="py-24 px-4 bg-[#f5f5f5]">
    <div className="max-w-5xl mx-auto text-center mb-14">
      <div className="flex flex-col items-center mb-4">
        <span className="inline-block px-6 py-2 rounded-full bg-white text-gray-700 text-sm font-semibold shadow-md mb-4 tracking-wide border border-gray-200" style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)' }}>BENEFITS</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-b from-gray-300 to-black bg-clip-text text-transparent">
          Why Choose Us
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Partner with an AI agency delivering smart solutions.</p>
      </div>
    </div>
    <div className="flex flex-col items-center gap-10">
      <div className="flex flex-row justify-center gap-6 w-full">
        {/* First feature card: Faster Innovation */}
        <div
          key={features[0].title}
          className="flex flex-col items-start justify-between rounded-3xl shadow-xl p-8 min-w-[320px] max-w-sm w-full h-[340px] transition-transform duration-200 hover:scale-105 border border-gray-100 relative overflow-hidden"
          style={{ background: '#f5f5f5', boxShadow: '0 8px 32px 0 rgba(0,0,0,0.10), 0 1.5px 6px 0 rgba(0,0,0,0.04), inset 0 3px 1px #fff6' }}
        >
          <div className="mb-6 flex items-center justify-center w-[140px] h-[140px] mx-auto">
            <ClockIcon />
          </div>
          <div className="font-bold text-lg mb-2">Faster Innovation</div>
          <div className="text-gray-600 text-base opacity-80">Accelerate your business with rapid, AI-powered solutions.</div>
        </div>
        {/* Second section: AI-Driven Growth (animated bar chart, OrbAI style) */}
        <AIDrivenGrowthCard />
        {/* Third section: Automated Workflows (CustomWorkflowCard) */}
        <CustomWorkflowCard />
      </div>
      {/* Flowing animation bar for 8 sections */}
      <div className="w-full -mt-2">
        <div className="w-[1150px] mx-auto overflow-hidden">
          <FlowingSections />
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;