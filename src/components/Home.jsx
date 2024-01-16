import React from 'react'
import Sections from './Sections'

const Home = () => {
  return (
    <div className="h-screen">
      <Sections
      title= "Model S"
      description= "Order Online for Touchless Delivery"
      image= "model-s.jpg"
      />
      <Sections
      title= "Model Y"
      description= "Order Online for Touchless Delivery"
      image= "model-y.jpg"
      />
      <Sections
      title= "Model X"
      description= "Order Online for Touchless Delivery"
      image= "model-x.jpg"
      />
      <Sections
      title= "Solar Panel"
      description= "Order Online for Touchless Delivery"
      image= "solar-panel.jpg"
      />
       
      <Sections
      title= "Accessories"
      description= "Order Online for Touchless Delivery"
      image= "accessories.jpg"
      button= "Shop Now"
      />
       
    </div>
  )
}

export default Home
