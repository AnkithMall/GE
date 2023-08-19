import React from 'react'
import Image  from 'next/image' ;

const About = () => {
  return (
    <div className='about'>
        <h1 className='about_h1'>About</h1>
        <Image
            src="/asset1.jpg"
            width={230}
            height={230}
            className="image_"
            alt='about'
        />
        <p className='about_text'>
        At Ganesh Enterprises, we offer diverse loans to meet 
        your unique financial requirements. 
        Give life to your dreams by partnering with GE’s 
        flexible and convenient loan solutions.
        </p>
    </div>
  )
}

export default About