import { JSX } from "react";

interface MaxWidthWrapperProps {
  children: React.ReactNode;
  className?: string;
  type?: keyof JSX.IntrinsicElements;
}

const MaxWidthWrapper: React.FC<MaxWidthWrapperProps> = ({
  children,
  className = '',
  type = 'div',
}) => {
  const Component = type;
  return (
    <Component className={`max-w-7xl mx-auto px-4 sm:px-6 ${className}`}>
      {children}
    </Component>
  );
};

export default MaxWidthWrapper