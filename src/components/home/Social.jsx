import React from 'react'

const Social = () => {
  return (
    <div className='home__social'>
        {/*insta icons*/}
        <a href='https://www.instagram.com/' className='home__social-icon' target='_blank'>
        <i class="uil uil-instagram"></i>
        </a>

        {/*dribble icons*/}
        <a href='https://dribbble.com/' className='home__social-icon' target='_blank'>
        <i class="uil uil-dribbble"></i>  
        </a>

        {/*github icons*/}
        <a href='https://github.com/shunmuga-raja' className='home__social-icon' target='_blank'>
        <i class="uil uil-github-alt"></i>   
        </a>
    </div>
  )
}

export default Social