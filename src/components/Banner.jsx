import React from 'react'
import bannerimg from '../assets/banner.png'

const Banner = () => {
  return (
    <>
        <section className="bg-cover bg-center h-[500px] w-full bg-no-repeat" style={{ backgroundImage: `url(${bannerimg})` }}>
            <div className="max-w-container mx-auto px-3">
                <h1 className=' text-white pt-[200px] lg:text-[64px] text-[30px] font-medium font-made '>Free trial session <br /> with a trainer</h1>
            </div>
        </section>
        
    </>
  )
}

export default Banner
