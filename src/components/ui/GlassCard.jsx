import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const GlassCard = React.forwardRef(({ 
  className, 
  children, 
  hover = true,
  blur = "md",
  ...props 
}, ref) => {
  const blurClasses = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  };

  return (
    <motion.div
      ref={ref}
      className={cn(
        "relative rounded-xl border border-white/20 bg-white/10 shadow-xl",
        blurClasses[blur],
        className
      )}
      whileHover={hover ? { 
        y: -8, 
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
      } : {}}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }}
      {...props}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 via-white/10 to-transparent pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
});
GlassCard.displayName = "GlassCard";

export { GlassCard };

