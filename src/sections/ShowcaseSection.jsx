import React, { useRef } from 'react'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);
    

    useGSAP(() => 
        
        {
     const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
        
     projects.forEach((card, index) => {
    gsap.fromTo(
        card,
        {
            y:50, opacity:0
        },
        {
            y:0, opacity:1, duration:1, delay:0.3 * (index +1),
            scrollTrigger:{
                trigger: card,
                start: "top bottom-=100",
            }
        }
    )
   })
      gsap.fromTo(
        sectionRef.current,
         { 
            opacity: 0
         },
          { opacity: 1,
             duration: 1.0
             });
    }, [])


   return (
    <section id='work' className='app-showcase' ref={sectionRef}>
        <div className='w-full'>
            <div className='showcaselayout'>
                {/* Left Side */}

                <div className='first-project-wrapper' ref={project1Ref}>
                    <div className='image-wrapper'>
                        <img src="/images/AiSaas.png" alt="Tools" />
                    </div>
                    <div className='text-content'>
                        <h2>An AI SAAS Web Based Application with Powerful AI Tools such as AI Image Generator, Background Remover and Many More..</h2>
                        <p className='text-white-50 md:text-xl'>A Web Application build with Nodejs and Express js with React and TailwindCSS for a fast, user-Friendly Experience.</p>
                    </div>
                </div>


                {/* Right Side */}

                <div className='project-list-wrapper overflow-hidden'>
                    <div className='project' ref={project2Ref}>
                        <div className='image-wrapper bg-[#ffefdb]'>
                            <img src="/images/Tracker.jpg" alt="Real Time Tracker" />
                        </div>
                        <h2>Real Time Tracker</h2>
                    </div>

                     <div className='project' ref={project3Ref}>
                        <div className='image-wrapper bg-[#ffe7eb]'>
                            <img src="/images/SS.png" alt="Image Classifier" />
                        </div>
                        <h2>AI Image Classifer</h2>
                    </div>

                </div>
            </div>
        </div>
      
    </section>
  )
}

export default ShowcaseSection
