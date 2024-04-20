"use client";

import React from 'react'
import About from '@/components/landing-page/About';
import Features from '@/components/landing-page/Features';
import HeroSection from '@/components/landing-page/HeroSection';
import Navbar from '@/components/landing-page/Navbar';

const Home = () => {
  return (
    <section className='bg-neutral-bg text-black font-lexend'>
        <Navbar />
        <HeroSection />
        <About />
        <Features />
    </section>
  )
}

export default Home