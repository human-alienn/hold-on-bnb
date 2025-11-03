import { useState } from 'react';

interface ProfileImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackType?: 'person' | 'logo' | 'character';
}

export function ProfileImage({ src, alt, className = '', fallbackType = 'person' }: ProfileImageProps) {
  const [error, setError] = useState(false);
  
  // Generate a consistent placeholder based on the image name
  const getPlaceholder = () => {
    const hash = src.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const colors = [
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    ];
    
    const selectedColor = colors[hash % colors.length];
    
    // Get initials from alt text
    const words = alt.split(' ').filter(w => w.length > 0);
    const initials = words.length > 1 
      ? `${words[0][0]}${words[words.length - 1][0]}`.toUpperCase()
      : alt.substring(0, 2).toUpperCase();
    
    return (
      <div 
        className={`flex items-center justify-center ${className}`}
        style={{ background: selectedColor }}
      >
        <span className="text-white font-bold" style={{ fontSize: '40%' }}>
          {initials}
        </span>
      </div>
    );
  };

  if (error) {
    return getPlaceholder();
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  );
}
