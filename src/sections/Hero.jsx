import React, { useRef, useEffect } from 'react'
import { words } from '../constants/index.js'
import Buttons from '../components/Buttons.jsx'
import HeroExperience from '../components/HeroModels/HeroExperience.jsx'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedCounter from '../components/AnimatedCounter.jsx';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-text h1",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1.1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 70%", 
            once: true,       
          },
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id='hero' className='relative overflow-hidden' ref={heroRef}>
      <div className='absolute top-0 left-0 z-10'>
        <img src="/images/bg.png" alt="background"/>
      </div>

      <div className='hero-layout'>
        {/* Left Side */}
        <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
          <div className='flex flex-col gap-7'>
            <div className='hero-text'>
              <h1>
                Shaping 
                <span className='slide'>
                  <span className='wrapper'>
                    {words.map((word) => (
                      <span key={word.text} className='flex items-center md:gap-3 gap-1 pb-2 '>
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50'
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>
            <p className='text-white-50 md:text-xl relative z-10 pointer-events-none'>
              Hii, I'm Kunal, a Developer based in Crotia with a Passion for Code.
            </p>
            <Buttons
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="See My Work✒️"
            />
            
          </div>
        </header>

        {/* Right Side */}
        <figure>
          <div className='hero-3d-layout'>
            <HeroExperience/>
          </div>
        </figure>
      </div>

      <AnimatedCounter/>
    </section>
  )
}

export default Hero
