import React from 'react'
import {BsTwitter,BSInstagram} from 'react-icons/bs'
import {FaFacebook} from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className= "app__social">
      <div>
        <BsTwitter/>
      </div>
      <div>
        <BSInstagram/>
      </div>
      <div>
        <FaFacebook/>
      </div>
    </div>
  )
}

export default SocialMedia
