'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Scroll to Top - Bottom Right */}
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-[100] w-12 h-12 bg-primary/90 backdrop-blur-md rounded-full flex items-center justify-center text-on-primary shadow-2xl hover:bg-primary transition-all group"
            aria-label="Back to top"
          >
            <span className="material-icons-outlined group-hover:-translate-y-1 transition-transform">
              expand_less
            </span>
          </motion.button>

          {/* Contact Button - Middle Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed top-1/2 -translate-y-1/2 right-0 z-[100]"
          >
            <Link
              href="/contact"
              className="group flex items-center bg-surface-container-high/90 backdrop-blur-md border border-outline-variant/30 pr-4 pl-4 py-6 rounded-l-2xl shadow-2xl hover:bg-primary transition-all duration-500 hover:border-primary group"
            >
              <div className="flex flex-col items-center gap-4">
                <span className="material-icons-outlined text-primary group-hover:text-on-primary transition-colors">
                  mail
                </span>
                <span className="[writing-mode:vertical-rl] text-[10px] font-bold uppercase tracking-[0.3em] text-on-surface-variant group-hover:text-on-primary transition-colors">
                  Contact
                </span>
              </div>
            </Link>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
