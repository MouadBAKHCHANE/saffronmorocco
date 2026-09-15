interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div
      className={`mx-auto max-w-content px-gutter ${className}`.trim()}
    >
      {children}
    </div>
  );
}
