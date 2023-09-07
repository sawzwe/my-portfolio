import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleResume = () => {
    // window.open('https://drive.google.com/file/d/1WTv8OBhxtMZqx3iLNfeKpVrAAOFKPErY/view', '_blank');
    window.open('https://drive.google.com/file/d/1BO_YpnssicSLkrKILfawOQOWTkzmSVOV/view', '_blank');
    setToggle(false);
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        {/* <img src={images.logo} alt="logo" /> */}
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'contact', 'resume'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            {item === 'resume' ? (
              <a href="#resume" onClick={handleResume}>
                {item}
              </a>
            ) : (
              <a href={`#${item}`}>{item}</a>
            )}
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact', 'resume'].map((item) => (
                <li key={item}>
                  {item === 'resume' ? (
                    <a href="#resume" onClick={handleResume}>
                      {item}
                    </a>
                  ) : (
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
