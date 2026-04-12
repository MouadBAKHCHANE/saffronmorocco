interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div
      className={`mx-auto max-w-content px-[clamp(1.25rem,5vw,6rem)] ${className}`.trim()}
    >
      {children}
    </div>
  );
}
