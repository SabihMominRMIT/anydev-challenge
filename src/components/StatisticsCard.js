import React from 'react';

const StatisticsCard = ({ title, number, label , iconurl }) => {
  return (
    <div className="w-full sm:w-1/3 p-4 sm:flex" >
    <div className="bg-white rounded-lg p-4 shadow-md w-full" style={{backgroundImage:"linear-gradient( 95.2deg, rgba(173,252,234,1) 26.8%, rgba(192,229,246,1) 64% )"}}>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className="flex items-center justify-between mt-6">
        <img src={iconurl} alt="Icon" className="w-12 h-12" />
        <span className="text-4xl font-bold">{number}</span>
      </div>
    </div>
  </div>
  );
};

export default StatisticsCard;
