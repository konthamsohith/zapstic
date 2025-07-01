import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail, Headset, Lightbulb } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="contact"
      style={{ backgroundColor: '#F5F5F5' }}
      className="relative overflow-hidden text-gray-900 py-20"
    >
      {/* Slanted Light Lines Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-0.5 h-[150%] bg-gradient-to-b from-purple-300/20 to-transparent blur-lg rotate-[30deg] origin-top animate-pulse-glow" />
        <div className="absolute top-0 left-1/2 w-0.5 h-[150%] bg-gradient-to-b from-pink-300/20 to-transparent blur-lg rotate-[25deg] origin-top animate-pulse-glow" />
        <div className="absolute top-0 right-1/4 w-0.5 h-[150%] bg-gradient-to-b from-violet-300/20 to-transparent blur-lg rotate-[35deg] origin-top animate-pulse-glow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mt-6 text-4xl font-bold bg-gradient-to-b from-gray-300 to-black bg-clip-text text-transparent">
          Get in Touch
        </h2>
          <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
            Discover how our AI automation solutions can transform your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
            <div className="space-y-6 mb-10">
              {/* Our Location */}
<div className="flex items-start">
  <div className="relative">
    {/* Main card */}
    <div className="relative p-3 rounded-lg bg-white shadow" style={{ zIndex: 1 }}>
      <div className="absolute inset-0 bg-black opacity-100 rounded-lg z-0 pointer-events-none" />
      <div className="relative z-10">
        <MapPin
          className="w-5 h-5 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
          strokeWidth={2.5}
        />
      </div>
    </div>
  </div>
  <div className="ml-4">
    <h4 className="text-lg font-medium text-gray-800">Our Location</h4>
    <p className="text-gray-600">Remote</p>
  </div>
</div>

{/* Phone */}
<div className="flex items-start">
  <div className="relative">
    {/* Main card */}
    <div className="relative p-3 rounded-lg bg-white shadow" style={{ zIndex: 1 }}>
      <div className="absolute inset-0 bg-black opacity-100 rounded-lg z-0 pointer-events-none" />
      <div className="relative z-10">
        <Phone
          className="w-5 h-5 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
          strokeWidth={2.5}
        />
      </div>
    </div>
  </div>
  <div className="ml-4">
    <h4 className="text-lg font-medium text-gray-800">Phone</h4>
    <p className="text-gray-600">+91 7670975161</p>
    <p className="text-gray-600">+91 6304198661</p>
  </div>
</div>

{/* Email */}
<div className="flex items-start">
  <div className="relative">
    {/* Main card */}
    <div className="relative p-3 rounded-lg bg-white shadow" style={{ zIndex: 1 }}>
      <div className="absolute inset-0 bg-black opacity-100 rounded-lg z-0 pointer-events-none" />
      <div className="relative z-10">
        <Mail
          className="w-5 h-5 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
          strokeWidth={2.5}
        />
      </div>
    </div>
  </div>
  <div className="ml-4">
    <h4 className="text-lg font-medium text-gray-800">Email</h4>
    <p className="text-gray-600">zapsticai@gmail.com</p>
  </div>
</div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Customer Support Card */}
              <div className="relative">
                {/* White background duplicate */}
                <div
                  className="absolute inset-0 -top-1 rounded-xl shadow-lg"
                  style={{ backgroundColor: '#fff', zIndex: 0 }}
                  aria-hidden="true"
                />
                {/* Main card */}
                <div className="relative p-6 rounded-xl shadow-lg transition" style={{ backgroundColor: '#F5F5F5', zIndex: 1 }}>
                  <div className="relative z-10">
                    <div className="p-3 bg-black rounded-lg mb-3 inline-flex items-center justify-center">
                      <Headset className="w-5 h-5 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]" strokeWidth={2.5} />
                    </div>
                    <h4 className="text-lg font-medium text-gray-800">Customer Support</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      For issues or urgent help, reach out to our support team.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feedback Card */}
              <div className="relative">
                {/* White background duplicate */}
                <div
                  className="absolute inset-0 -top-1 rounded-xl shadow-lg"
                  style={{ backgroundColor: '#fff', zIndex: 0 }}
                  aria-hidden="true"
                />
                {/* Main card */}
                <div className="relative p-6 rounded-xl shadow-lg transition" style={{ backgroundColor: '#F5F5F5', zIndex: 1 }}>
                  <div className="relative z-10">
                    <div className="p-3 bg-black rounded-lg mb-3 inline-flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]" strokeWidth={2.5} />
                    </div>
                    <h4 className="text-lg font-medium text-gray-800">Feedback & Suggestions</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      We value your ideas to improve our services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Booking Card */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="relative w-full max-w-xl">
              {/* White background duplicate */}
              <div
                className="absolute inset-0 -top-1 rounded-xl shadow-lg"
                style={{ backgroundColor: '#fff', zIndex: 0 }}
                aria-hidden="true"
              />
              {/* Main card */}
              <div className="relative p-6 rounded-xl shadow-lg" style={{ backgroundColor: '#F5F5F5', zIndex: 1 }}>
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800">Book a Meeting</h3>
                  <iframe
                    src="https://calendly.com/zapsticai"
                    style={{
                      width: '100%',
                      minHeight: '600px',
                      border: 'none',
                      borderRadius: '12px',
                    }}
                    title="Book a meeting with us"
                    allow="camera; microphone; fullscreen"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
