import React from "react";
import { useNavigate } from "react-router-dom";


function CardButton() {
    const navigate =useNavigate();

    const handleClick=()=>{
        navigate('/checkout');
    };

  return (
    <>
    <button onClick={handleClick}
    className="bg-yellow-400 mb-4 text-white py-2 px-4 rounded-lg font-semibold
    hover:bg-yellow-600"
    >
        Book Now
    </button>

    </>
  )
}

export default CardButton