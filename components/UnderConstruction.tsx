'use client';

import React from "react";

type UnderConstructionProps = {
  children?: React.ReactNode;
};

const UnderConstruction: React.FC<UnderConstructionProps> = ({ children }) => {
  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
      {/* Background content blurred */}
      {children && (
        <div className="absolute inset-0 blur-sm pointer-events-none">
          {children}
        </div>
      )}

      {/* Dark overlay to make stripes pop */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Diagonal tape from top-left to bottom-right */}
      <div
        className="absolute top-1/2 left-1/2 w-[200vh] h-16 z-20"
        style={{
          transform: 'translate(-50%, -50%) rotate(45deg)',
          transformOrigin: 'center center',
          background: 'repeating-linear-gradient(90deg, #facc15 0px, #facc15 30px, #000000 30px, #000000 60px)',
        }}
      />

      {/* Diagonal tape from top-right to bottom-left */}
      <div
        className="absolute top-1/2 left-1/2 w-[200vh] h-16 z-20"
        style={{
          transform: 'translate(-50%, -50%) rotate(-45deg)',
          transformOrigin: 'center center',
          background: 'repeating-linear-gradient(90deg, #facc15 0px, #facc15 30px, #000000 30px, #000000 60px)',
        }}
      />

      {/* Centered yellow and black vertically striped box */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-auto">
        <div
          className="px-8 py-6 md:px-12 md:py-8 rounded-lg shadow-2xl border-4 border-black"
          style={{
            background: 'repeating-linear-gradient(90deg, #facc15 0px, #facc15 20px, #000000 20px, #000000 40px)',
          }}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white text-center drop-shadow-lg">
            UNDER CONSTRUCTION
          </h2>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
