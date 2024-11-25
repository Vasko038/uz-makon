function Container({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`!container px-5 mx-auto ${className}`}>{children}</div>
  );
}

export default Container;
