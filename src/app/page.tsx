import React from 'react'
import Image from 'next/image';
import Header from './components/header'
import Footer from './components/footer'

const Page = () => {
  return (
    <div>
      
      <Header/>
      <div className='body123'>

<div className="description">
        <h1>Hello, I'm Haroon Afridi!</h1>
        <p>I’m a Frontend Developer with a passion for design and coding,</p>
        
      </div>
      
      <div className="">
        
      <Image alt="" src={require("../../public/picture/profile.jpg")}
      width={100}
      height={100}
      className="float-right"
     
      />
      </div>

</div>
      <Footer/>
    </div>
  )
}

export default Page
