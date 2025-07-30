import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { cn } from '../../lib/utils';

const AnimatedSection = ({ 
  children, 
  className,
  delay = 0,
  direction = 'up',
  ...props 
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { y: 0, x: 50 },
    right: { y: 0, x: -50 }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        ...directions[direction]
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        x: 0 
      } : {}}
      transition={{ 
        duration: 0.6, 
        delay: delay,
        ease: [0.21, 1.11, 0.81, 0.99]
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

const StaggerContainer = ({ children, className, staggerDelay = 0.1 }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
      className={cn(className)}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6, ease: [0.21, 1.11, 0.81, 0.99] }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export { AnimatedSection, StaggerContainer };

