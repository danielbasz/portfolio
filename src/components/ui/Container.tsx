import { ReactNode, ElementType } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  background?: 'light' | 'white' | 'gradient';
  as?: ElementType;
}

export default function Container({ 
  children, 
  className = '', 
  background,
  as: Component = 'div'
}: ContainerProps) {
  const backgroundClasses = {
    light: 'bg-light',
    white: 'bg-white', 
    gradient: 'gradient-bg'
  };

  const backgroundClass = background ? backgroundClasses[background] : '';

  const combinedClassName = [
    backgroundClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <Component 
      className={combinedClassName}
      style={background === 'gradient' ? { position: 'relative' } : undefined}
    >
      {children}
    </Component>
  );
}