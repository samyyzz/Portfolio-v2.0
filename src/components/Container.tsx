import React from "react";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`mb-20 mx-auto w-full max-w-7xl ${className}`}>
      {children}
    </div>
  );
};

export default Container;
