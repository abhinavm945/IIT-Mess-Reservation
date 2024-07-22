/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('token'); // Remove token from local storage
    setIsLoggedIn(false); // Update state to reflect logged out status
    navigate('/login'); // Redirect to login page
  }, [navigate, setIsLoggedIn]);

  return null; // No need to render anything
};

export default Logout;
