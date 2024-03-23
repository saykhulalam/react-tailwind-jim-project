import React from 'react'
import bannerimg from '../assets/banner.png'

const Banner = () => {
  return (
    <>
        <section className="bg-cover bg-center h-[500px] w-full bg-no-repeat" style={{ backgroundImage: `url(${bannerimg})` }}>
            <div className="max-w-container mx-auto">
                <h1 className=' text-white pt-[200px] text-[64px] font-medium font-made text-white'>Free trial session <br /> with a trainer</h1>
            </div>
        </section>
        
    </>
  )
}

export default Banner
