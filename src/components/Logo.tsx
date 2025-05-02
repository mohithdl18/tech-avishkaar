import React from "react";
import logo from './../../public/logo.png';

const Logo: React.FC = () => {
  return (
    <div className="flex rounded-full items-center gap-2">
      <div className="w-12 h-12 rounded-full bg-[#3c0075] flex items-center justify-center overflow-hidden">
        <img src={logo} alt="Logo" className="w-full h-full object-cover rounded-full" />
      </div>
      <span className="font-bold text-2xl text-[#150029]">
        Tech<span className="gradient-text">Avishkar</span>
      </span>
    </div>
  );
};

export default Logo;
