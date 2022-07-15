import React from "react";

function SocialLink() {
  return (
    <div className='icon-bar'>
      <a
        href='https://www.facebook.com/kashin.gupta.04'
        target='_blank'
        rel='noopener noreferrer'
        className='facebook'
      >
        <i className='fa fa-facebook'></i>
      </a>
      {/* eslint-disable-next-line */}
      <a href='#' className='twitter' rel='noopener noreferrer'>
        <i className='fa fa-twitter'></i>
      </a>
      <a
        href='https://github.com/kashingupta'
        target='_blank'
        rel='noopener noreferrer'
        className='github'
      >
        <i className='fa fa-github'></i>
      </a>
      <a
        href='https://www.linkedin.com/in/kashin-gupta-3252a51a1/'
        target='_blank'
        rel='noopener noreferrer'
        className='linkedin'
      >
        <i className='fa fa-linkedin'></i>
      </a>
      <a
        href='https://www.instagram.com/kashingupta/?hl=en'
        target='_blank'
        rel='noopener noreferrer'
        className='instagram'
      >
        <i className='fa fa-instagram'></i>
      </a>
    </div>
  );
}

export default SocialLink;
