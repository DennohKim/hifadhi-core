"use client";

import React from 'react'
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';

const Home = () => {
  return (
    <section className='bg-white text-black font-lexend'>
        <Navbar />
        <HeroSection />
        <About />
    </section>
  )
}

export default Home