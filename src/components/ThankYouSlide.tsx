import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Wifi, MonitorSmartphone, Link2, Sparkles } from 'lucide-react';

export const ThankYouSlide = () => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsConnected(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex-1 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight 
            }}
            animate={{
              x: [null, Math.random() * window.innerWidth],
              y: [null, Math.random() * window.innerHeight],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">
        {/* Connection animation */}
        <div className="mb-12 flex items-center justify-center gap-8 relative">
          {/* Left device */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 2, 0, -2, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl shadow-2xl"
            >
              <MonitorSmartphone className="w-16 h-16 text-white" />
            </motion.div>
            {/* Pulse effect */}
            <motion.div
              className="absolute inset-0 bg-blue-500 rounded-2xl"
              animate={{ 
                scale: [1, 1.3, 1.3],
                opacity: [0.5, 0, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
          </motion.div>

          {/* Connection line and dots */}
          <div className="relative flex items-center gap-2">
            {/* Animated connection line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isConnected ? 1 : 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="h-1 w-32 bg-gradient-to-r from-blue-500 via-emerald-500 to-blue-500 rounded-full origin-left"
            />
            
            {/* Animated dots traveling along the line */}
            {isConnected && (
              <>
                <motion.div
                  className="absolute w-3 h-3 bg-white border-2 border-blue-500 rounded-full shadow-lg"
                  animate={{ 
                    x: [-60, 60],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <motion.div
                  className="absolute w-3 h-3 bg-white border-2 border-emerald-500 rounded-full shadow-lg"
                  animate={{ 
                    x: [60, -60],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    ease: "linear",
                    delay: 0.75
                  }}
                />
              </>
            )}

            {/* Center connection icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ 
                scale: isConnected ? 1 : 0,
                rotate: isConnected ? 0 : -180
              }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute left-1/2 -translate-x-1/2 bg-white p-2 rounded-full shadow-lg"
            >
              <Link2 className="w-4 h-4 text-emerald-500" />
            </motion.div>
          </div>

          {/* Right device */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, -2, 0, 2, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-6 rounded-2xl shadow-2xl"
            >
              <MonitorSmartphone className="w-16 h-16 text-white" />
            </motion.div>
            {/* Pulse effect */}
            <motion.div
              className="absolute inset-0 bg-emerald-500 rounded-2xl"
              animate={{ 
                scale: [1, 1.3, 1.3],
                opacity: [0.5, 0, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeOut",
                delay: 1
              }}
            />
          </motion.div>
        </div>

        {/* Status indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mb-8 flex items-center justify-center gap-2"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Wifi className={`w-5 h-5 ${isConnected ? 'text-emerald-500' : 'text-gray-400'}`} />
          </motion.div>
          <span className={`text-sm font-medium ${isConnected ? 'text-emerald-600' : 'text-gray-400'}`}>
            {isConnected ? 'Connected Successfully' : 'Connecting...'}
          </span>
        </motion.div>

        {/* Thank you message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut"
            }}
            className="inline-block mb-6"
          >
            <Sparkles className="w-12 h-12 text-amber-500 mx-auto" />
          </motion.div>

          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            Thank You!
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 font-light"
          >
            Stay connected with insights that matter
          </motion.p>
        </motion.div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 2.5 }}
          className="mt-16 h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-gray-300 to-transparent rounded-full"
        />
      </div>
    </div>
  );
};