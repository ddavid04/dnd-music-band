'use client';

import Hero from '@/components/Hero';
import MemberCard from '@/components/MemberCard';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const bandMembers = [
  {
    name: 'Stefan',
    instrument: 'Lead Guitar',
    // insert a better bio for Stefan, he is the lead guitarist of the band
    bio: 'Stefan is the lead guitarist of the band. He brings a unique and powerful guitar playing skills to every performance. His stage presence is magnetic and his guitar playing skills unforgettable.',
    funFact: 'Autofilled fun fact::: Started playing guitar at age 12 after seeing a concert that changed their life forever!',
  },
  {
    name: 'Iva',
    instrument: 'Singer',
    // insert a better bio for Iva, she is the singer of the band
    bio: 'Iva is the singer of the band. She brings a unique and powerful voice to every performance. Her stage presence is magnetic and her voice unforgettable.',
    funFact: 'Autofilled fun fact:::Can play over 200 songs from memory and loves collecting vintage guitars.',
  },
  {
    name: 'Vanja',
    instrument: 'Keys',
    // insert a better bio for Vanja, he is the keyboard player of the band
    bio: 'Vanja is the keyboard player of the band. He brings a unique and powerful keyboard skills to every performance. His stage presence is magnetic and his keyboard skills unforgettable.',
    funFact: 'Autofilled fun fact::: Trained in classical piano for 10 years before discovering rock music.',
  },
  {
    name: 'Leon',
    instrument: 'Drums',
    // insert a better bio for Leon, he is the drummer of the band
    bio: 'Leon is the drummer of the band. He brings a unique and powerful drumming skills to every performance. His stage presence is magnetic and his drumming skills unforgettable.',
    funFact: 'Autofilled fun fact::: Can play drums while solving a Rubik\'s cube (not recommended during concerts!).',
  },
  {
    name: 'Angela',
    instrument: 'Bass Guitar',
    // insert a better bio for Angela, she is the bass player of the band
    bio: 'Angela is the bass player of the band. She brings a unique and powerful bass playing skills to every performance. Her stage presence is magnetic and her bass playing skills unforgettable.',
    funFact: 'Autofilled fun fact::: Started on guitar but switched to bass because "the low end just felt right".',
  },
];

export default function Home() {
  const membersRef = useRef<HTMLElement>(null);

  const scrollToMembers = () => {
    membersRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen">
      <Hero scrollToMembers={scrollToMembers} />
      
      {/* Band Members Section */}
      <section ref={membersRef} className="py-20 px-4 bg-gradient-to-b from-purple-100 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Meet the Band
            </h2>
            <p className="text-xl text-purple-700 max-w-2xl mx-auto">
              Five talented musicians, one incredible sound. Get to know the faces behind the music!
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8">
            {bandMembers.map((member, index) => (
              <div key={member.name} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] max-w-sm">
                <MemberCard
                  name={member.name}
                  instrument={member.instrument}
                  bio={member.bio}
                  funFact={member.funFact}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-purple-50 to-purple-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              About DND Music Band
            </h2>
            <p className="text-lg md:text-xl text-purple-700 leading-relaxed mb-8 max-w-3xl mx-auto">
              We&apos;re a passionate rock band dedicated to creating music that moves your soul and gets your feet tapping. 
              With a unique blend of classic rock energy and modern flair, we bring unforgettable performances to every stage.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl glow-hover mb-8"
          >
            <div className="relative w-full aspect-video">
              <Image
                src="/band_photo.jpeg"
                alt="DND Music Band"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
              />
            </div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-purple-600 leading-relaxed text-center"
          >
            From intimate venues to grand stages, we&apos;re here to rock your world! 🎸🎵
          </motion.p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gradient-to-b from-purple-200 to-purple-300 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-purple-900 mb-4">Follow Us</h3>
          <div className="flex justify-center gap-6 mb-6">
            {['🎵', '📱', '📸', '🎬'].map((icon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-2xl cursor-pointer shadow-lg glow-hover"
              >
                {icon}
              </motion.div>
            ))}
          </div>
          <p className="text-purple-700 font-medium">
            © 2024 DND Music Band. Made with 💜 and lots of rock & roll!
          </p>
        </motion.div>
      </footer>
    </main>
  );
}

