
import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
        <span className="text-white font-bold text-lg">TA</span>
      </div>
      <span className="font-bold text-xl text-[#150029]">TechAvishkaar</span>
    </div>
  );
};

export default Logo;
