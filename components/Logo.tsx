import React from "react";

const Logo: React.FC = () => (
  <div className="logo flex items-center space-x-2">
    <svg
      className="logo-icon w-12 h-12"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="themis-icon">
        <path
          d="M50 10 L55 35 L80 35 L60 48 L65 73 L50 60 L35 73 L40 48 L20 35 L45 35 Z"
          fill="#C7A349"
        ></path>
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#003366"
          strokeWidth={2}
        ></circle>
        <line
          x1="50"
          y1="10"
          x2="50"
          y2="90"
          stroke="#003366"
          strokeWidth={2}
        ></line>
        <line
          x1="10"
          y1="50"
          x2="90"
          y2="50"
          stroke="#003366"
          strokeWidth={2}
        ></line>
        <line
          x1="20"
          y1="20"
          x2="80"
          y2="80"
          stroke="#003366"
          strokeWidth={2}
        ></line>
        <line
          x1="80"
          y1="20"
          x2="20"
          y2="80"
          stroke="#003366"
          strokeWidth={2}
        ></line>
      </g>
    </svg>
    <span className="logo-text text-xl font-bold text-[#003366]">
      THEMIS
      <span className="text-sm ml-1 align-top">PRUC</span>
    </span>
  </div>
);

export default Logo;
