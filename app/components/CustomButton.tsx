import React from "react";

const CustomButton = ({
  text,
  containerStyles,
}: {
  text: string;
  containerStyles: string;
}) => {
  return (
    <button
      className={`${containerStyles} group relative inline-flex items-center justify-center
      bg-accent uppercase overflow-hidden`}
    >
      {/* animated overlay */}
      <span
        className="absolute left-1/2 top-1/2 h-0 w-[200%]
        -translate-x-1/2 -translate-y-1/2 rotate-45
        bg-black/40 transition-all duration-300 ease-in-out
        group-hover:h-[300%]"
      />

      {/* text */}
      <span className="relative z-10 text-white">{text}</span>
    </button>
  );
};

export default CustomButton;
