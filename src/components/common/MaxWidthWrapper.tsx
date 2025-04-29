import { JSX } from "react";

interface MaxWidthWrapperProps {
  children: React.ReactNode;
  className?: string;
  type?: keyof JSX.IntrinsicElements;
  fullPadding?: boolean
}

const MaxWidthWrapper: React.FC<MaxWidthWrapperProps> = ({
  children,
  className = '',
  type = 'div',
  fullPadding= false
}) => {
  const Component = type;
  return (
    <Component className={`max-w-7xl mx-auto ${fullPadding? 'p-4 sm:p-6' : 'px-4 sm:px-6'}  ${className}`}>
      {children}
    </Component>
  );
};

export default MaxWidthWrapper