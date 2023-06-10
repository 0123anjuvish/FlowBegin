import React, { useEffect } from 'react';
import '../../styles/ripple.css'; // import the CSS file

function RippleEffect() {
 
  useEffect(() => {
    const bodyElement = document.querySelector("body");
    bodyElement.addEventListener("mousemove", (e) => {
      const xPosition = e.offsetX;
      const yPosition = e.offsetY;
      const spanElement = document.createElement("span");
      spanElement.style.left = xPosition + "px";
      spanElement.style.top = yPosition + "px";
      const size = Math.random() * 100;
      spanElement.style.width = size + "px";
      spanElement.style.height = size + "px";
      bodyElement.appendChild(spanElement);
      setTimeout(() => {
        spanElement.remove();
      }, 5000);
    });
  }, []);

  return (
    <div className="App">
      <span></span>
    </div>
  );
}
export default RippleEffect;
