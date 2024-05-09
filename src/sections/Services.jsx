// import React from 'react'
// we can no need to import as we are having a new react version
import { services } from "../constants"
import { ServiceCard } from "../components"
const Services = () => {
  return (
    <section className="flex flex-wrap max-container justify-center gap-9">
      {
        services.map(service=>(
          <ServiceCard key={service.label} {...service}/>
        ))
      }
    </section>
  )
}

export default Services