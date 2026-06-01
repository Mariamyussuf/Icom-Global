'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Users, Briefcase, CheckCircle, Radio, Cable, Sun, Fuel, Plug, Monitor, Package, ClipboardList } from 'lucide-react';

const iconMap = {
  Award,
  Users,
  Briefcase,
  CheckCircle,
  Radio,
  Cable,
  Sun,
  Fuel,
  Plug,
  Monitor,
  Package,
  ClipboardList,
};

export default function StatCard({ value, label, icon, index = 0 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    const duration = 1500;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(easeOut * numericValue);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, numericValue]);

  const IconComponent = iconMap[icon] || Award;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="relative bg-[var(--color-navy)] rounded-xl p-6 sm:p-8 overflow-hidden group"
    >
      {/* Background icon */}
      <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
        <IconComponent size={48} className="text-white" />
      </div>

      {/* Value */}
      <p className="text-4xl sm:text-5xl font-bold text-[var(--color-gold)] font-[family-name:var(--font-heading)] mb-2 relative z-10">
        {count}
        {suffix}
      </p>

      {/* Label */}
      <p className="text-sm sm:text-base text-gray-300 font-medium relative z-10">
        {label}
      </p>
    </motion.div>
  );
}
