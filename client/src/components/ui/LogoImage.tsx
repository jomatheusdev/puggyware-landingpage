import Image from "next/image";
import LogoPng from "./Logo.png";

interface LogoImageProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  interactive?: boolean;
}

export default function LogoImage({ size = 'md', className = '', interactive = false }: LogoImageProps) {
  const sizeMap = {
    sm: { width: 32, height: 32, className: 'w-8 h-8' },
    md: { width: 48, height: 48, className: 'w-12 h-12' },
    lg: { width: 64, height: 64, className: 'w-16 h-16' },
    xl: { width: 96, height: 96, className: 'w-24 h-24' }
  };

  const { width, height, className: sizeClass } = sizeMap[size];

  return (    
    <div className={`${interactive ? 'logo-container hover:scale-110 transition-transform duration-200 cursor-pointer' : ''} ${sizeClass} ${className}`}>
      <Image
        src={LogoPng}
        alt="PuggyWare Logo"
        width={width}
        height={height}
        className="w-full h-full object-contain"
        priority={size === 'xl'}
        draggable={false}
      />
    </div>
  );
}
