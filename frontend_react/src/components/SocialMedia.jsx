import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://www.linkedin.com/in/saw-zwe/" target="_blank">
        <div>
          <BsLinkedin />
        </div>
      </a>
      <a href="https://github.com/sawzwe" target="_blank">
        <div>
        <BsGithub />
        </div>
      </a>

      {/* <div>
        <FaFacebook />
      </div> */}
    </div>
  );
};

export default SocialMedia;
