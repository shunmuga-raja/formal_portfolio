import React from 'react'

const Social = () => {
  return (
    <div className='home__social'>
        {/*insta icon*/}
        <a href='https://portfolio-92877.web.app' className='home__social-icon' target='_blank'>
        <i class="uil uil-dribbble"></i>
        </a>

        {/*dribble icons*/}
        <a href='https://www.linkedin.com/in/shanmuga-raja-914124219' className='home__social-icon' target='_blank'>
        <i class="uil uil-linkedin"></i> 
        </a>

        {/*github icons*/}
        <a href='https://github.com/shunmuga-raja' className='home__social-icon' target='_blank'>
        <i class="uil uil-github-alt"></i>   
        </a>
    </div>
  )
}

export default Social