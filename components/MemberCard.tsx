'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface MemberCardProps {
  name: string;
  instrument: string;
  bio: string;
  funFact: string;
  index: number;
}

export default function MemberCard({ name, instrument, bio, funFact, index }: MemberCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="w-full max-w-sm mx-auto"
    >
      <div
        className="relative h-[400px] cursor-pointer perspective-1000"
        onClick={() => setIsFlipped(!isFlipped)}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <motion.div
          className="absolute inset-0 w-full h-full preserve-3d"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        >
          {/* Front of card */}
          <div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400 p-6 shadow-2xl glow-hover flex flex-col items-center justify-center text-center">
            <motion.div
              className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 mb-4 flex items-center justify-center text-4xl font-bold text-white shadow-lg"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {name.charAt(0)}
            </motion.div>
            <h3 className="text-2xl font-bold text-purple-900 mb-2">{name}</h3>
            <p className="text-lg text-purple-700 font-semibold mb-4">{instrument}</p>
            <motion.div
              className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-full text-sm font-medium"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Click to learn more →
            </motion.div>
          </div>

          {/* Back of card */}
          <div 
            className="absolute inset-0 w-full h-full backface-hidden rounded-3xl bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 p-6 shadow-2xl flex flex-col justify-center text-white"
            style={{ transform: 'rotateY(180deg)' }}
          >
            <h3 className="text-2xl font-bold mb-4 text-center">{name}</h3>
            <p className="text-purple-100 mb-4 text-center leading-relaxed">{bio}</p>
            <div className="mt-4 p-3 bg-purple-700/50 rounded-xl">
              <p className="text-sm font-semibold mb-1">Fun Fact:</p>
              <p className="text-sm text-purple-100">{funFact}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

