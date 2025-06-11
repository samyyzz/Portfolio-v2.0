import React from "react";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`bg-primary mx-auto w-full max-w-4xl ${className}`}>
      {children}
    </div>
  );
};

export default Container;
