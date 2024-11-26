// src/components/ui/OptimizedImage.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
}

const OptimizedImage = ({ src, alt, className = '' }: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gray-200 animate-pulse"
          />
        )}
      </AnimatePresence>
      <img
        src={src}
        alt={alt}
        className={className}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export default OptimizedImage;