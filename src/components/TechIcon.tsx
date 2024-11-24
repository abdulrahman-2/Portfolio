import React from "react";

const TechIcon = ({ component }: { component: React.ElementType }) => {
  const Component = component;
  return (
    <>
      <Component className="size-10 fill-[url(#gradient)]" />
      <svg className="size-0 absolute">
        <linearGradient id="gradient">
          <stop offset="0%" stopColor="#6ee7b7" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
      </svg>
    </>
  );
};

export default TechIcon;
