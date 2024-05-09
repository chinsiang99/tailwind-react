// import React from 'react'
// we can no need to import as we are having a new react version

import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="text-center font-palanquin text-4xl font-bold">
        What Our 
        <span className="text-coral-red">Customers </span>
        Say?
      </h3>
      <p className="text-slate-gray m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our satisfied customers about their exceptional experiences with us.
      </p>
      <div className="flex flex-1 mt-24 justify-evenly max-lg:flex-col gap-14">
        {
          reviews.map((review)=>(
            <ReviewCard key={review.customerName} {...review}/>
          ))
        }
      </div>
    </section>
  )
}

export default CustomerReviews