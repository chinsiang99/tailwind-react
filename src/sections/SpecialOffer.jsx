// import React from 'react'
// we can no need to import as we are having a new react version
import { Button } from "../components"
import { offer } from "../assets/images"
import { arrowRight } from "../assets/icons"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} width={773} height={687} className="object-contain w-full"/>
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          We Provide you <span className='text-coral-red'>Special</span> Offer
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Shop Now' iconUrl={arrowRight}/>
          <Button label='Learn More' textColor="text-slate-gray" borderColor="border-slate-gray" backgroundColor="bg-white" custom={true}/>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer