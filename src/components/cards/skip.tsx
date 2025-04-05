import React from "react";
import { Skip } from "../../utils/types";
import Button from "../button";

type Props = {
  skip?: Skip; 
  isLoading?: boolean; 
};

const SkipCard: React.FC<Props> = ({ skip, isLoading = false }) => {
  if (isLoading) {
    return (
      <div className="flex flex-col bg-gray-200 animate-pulse w-full mb-6 shadow-xl p-8">
        <div className="w-full h-56 bg-gray-300 rounded"></div>
        <div className="pt-4 h-6 bg-gray-300 rounded w-3/4"></div>
        <div className="pt-2 h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="pt-4 h-6 bg-gray-300 rounded w-1/3"></div>
        <div className="my-4 w-full flex items-center justify-center">
          <div className="h-10 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-white hover:bg-slate-100 transition-colors duration-300 w-full mb-6 shadow-xl p-8">
      <img
        src="https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=800"
        alt=""
        className="w-full h-56 object-cover"
      />
      <p className="pt-2 font-semibold text-lg">{`${skip?.size} Yard Skip`}</p>
      <p className="text-sm pt-2 italic">{`${skip?.hire_period_days} day hire period`}</p>
      <p className="text-md pt-2 text-green-700 font-semibold">
        {`£${skip?.price_before_vat}`}
        <span className="text-gray-600 ml-2 text-xs">per week</span>
      </p>
      <div className="my-4 w-full flex items-center justify-center cursor-pointer">
        <Button className="flex items-center justify-center group">
          Select This Skip
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 ml-2 text-black group-hover:text-white transition-colors duration-300"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5l6 6m0 0l-6 6m6-6H4.5" />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default SkipCard;