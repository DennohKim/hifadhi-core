"use client";

import React from 'react'
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

const Home = () => {
  return (
    <section className='bg-white text-black font-lexend'>
        <Navbar />
        <HeroSection />
    </section>
  )
}

export default Home