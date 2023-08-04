import React, { useState, useEffect } from 'react';
import '../../styles/Success.css';
import Confetti from 'react-confetti';
import { motion } from 'framer-motion';

const Success = ({ onClose }) => {
  const [isConfettiActive, setConfettiActive] = useState(true);

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
      onClose();
    }, 500); // A slight delay to allow the confetti to settle
  };

  return (
    <div className="modal-container">
      <Confetti active={isConfettiActive} style={{marginLeft:"311"}}/>
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
