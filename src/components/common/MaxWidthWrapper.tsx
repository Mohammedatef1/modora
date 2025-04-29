interface MaxWidthWrapperProps {
  children: React.ReactNode;
  className?: string
}

const MaxWidthWrapper: React.FC<MaxWidthWrapperProps> = ({children, className}) => {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 ${className}`}>{children}</div>
  )
}

export default MaxWidthWrapper