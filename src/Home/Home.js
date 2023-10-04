import Carousel from '../Carsoul/Carousel'
import React from 'react'
import Hello from './Hello/Hello.js'
import Skills from '../Skills/Skills'
import Projects from '../CardProjects/Projects'
import HTMLChart from '../Charts/Charts'
import ContactForm from '../Contact/Contact'


const Home = () => {
  return (
   
       <div style={{width:'100%'}}>
      <Carousel/>
      <Hello/>
      <Skills/>
      <Projects/>
       <HTMLChart/>
       <ContactForm/>
    </div>
 

 
   
  )
}

export default Home