
import { useNavigate } from 'react-router-dom';

function BookNowButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/checkout');
  };

  return (
    <button onClick={handleClick} className="absolute mb-20 bottom-10 right-20 mr-20
                bg-yellow-400 text-white font-semibold  
                hover:bg-yellow-600
                 px-6 py-3 rounded-md focus:outline-none max-lg:hidden">
      Book Now
      <br/>
    
    </button>
  );
}

export default BookNowButton;
