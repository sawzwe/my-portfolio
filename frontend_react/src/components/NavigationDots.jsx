import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "testimonials","contact"].map((item,index) => (
          <a 
          key={item+index}
          href={`#${item}`} 
          className="app__navigation-dot"
          style={active == item ? {backgroundColor: "#313BAC"} :{}}
          onClick={() => setToggle(false)}/>
      ))}
    </div>
  );
};

export default NavigationDots;
