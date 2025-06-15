import React from "react";

export const AboutMe = ({ roles }: { roles: String[] }) => {
  return (
    <div className="flex items-center justify-center">
      {roles.map((role, idx) => (
        <h2
          key={idx}
          className="bg-gradient-to-t from-neutral-200 to-neutral-400 bg-clip-text pl-4 font-mono text-2xl font-light text-transparent"
        >
          {role}
        </h2>
      ))}
    </div>
  );
};
