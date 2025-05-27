import React from 'react';
import CardButton from './CardButton';
const buttonIsClicked=()=>{
  alert('CARD BUTTON IS CLICKED');
}
const Card = ({ Heading, description,imgURL }) => {
  return (
    <div className="max-w-sm bg-gray-100 shadow-md  rounded-lg overflow-hidden m-4 flex flex-col justify-between h-full">
      <img
        src={imgURL}
        alt="co-working"
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex-grow">
        <h1 className="text-gray-700 text-2xl font-bold text-gray-900">{Heading}</h1>
      
        <div className="mt-4 flex items-center">
          <span className="text-indigo-600">From 3000 per hour</span>
        </div>
        
        <ul className="mt-4 text-sm text-gray-700 list-disc list-inside">
          {description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center">
        <CardButton/>
      </div>
    </div>
  );
};

export default Card;
