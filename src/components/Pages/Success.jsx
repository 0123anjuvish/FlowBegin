import '../../styles/Success.css';

import React, { useEffect, useState } from 'react';

import Confetti from 'react-confetti';
import { motion } from 'framer-motion';
import {useNavigate} from "react-router-dom"

const Success =  () => {
  const [isConfettiActive, setConfettiActive] = useState(true);
  const navigate = useNavigate()
  useEffect(() => {
    // Stop the confetti after 30 seconds
    const timer = setTimeout(() => {
      setConfettiActive(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    // Close the modal and trigger the onClose function
    setConfettiActive(false);
    setTimeout(() => {
      navigate("/")
    }, 500); // A slight delay to allow the confetti to settle
  };

  return (
    <div className="modal-container">
      <Confetti active={isConfettiActive} />
      <motion.div className="modal" initial={{ scale: 0 }} animate={{ scale: 1 }}>
        <h2 className='modal-h2'>Success!</h2>
        <p className='modal-p'>You have successfully submitted your form. Thanks for registering with us.</p>
        {/* <span role="img" aria-label="Namaste" style={{ fontSize: '36px', marginTop: '-2em', marginLeft: '4em' }}>
          🙏
        </span> */}
        <button onClick={handleClose} className='modal-btn'>Close</button>
      </motion.div>
    </div>
  );
};

export default Success;
