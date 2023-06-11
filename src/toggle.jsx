import React, { useState } from 'react'

const Toggle = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="container">
      <button
        onClick={() => setToggle(!toggle)}
        className={`btn ${toggle ? 'arrow-active' : ''}`}
      >
        <span className="btn-text">Why park a domain name in Parkname ?</span>
        <span className={`arrow-icon ${toggle ? 'rotate' : ''}`}></span>
      </button>
      {toggle && (
        <p>
          Parkname is the leading industry standard for domain name parking and monetization services.
          We offer a wide variety of services to help you achieve success.
        </p>
      )}
    </div>
  );
};
export default Toggle;