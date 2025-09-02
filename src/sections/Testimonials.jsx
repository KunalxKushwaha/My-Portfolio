import React, { useEffect } from 'react'
import TitleHeader from '../components/TitleHeader'
import { testimonials } from '../constants'
import GlowCard from '../components/GlowCard'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger)

const Testimonials = () => {
  useEffect(() => {
    const section = document.getElementById('testimonials')
    if (!section) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.testimonial-card',
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
            // markers: true,
          },
        }
      )
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What Peoples Say About Me?"
          sub="🌟 Clients Feedback Highlight"
        />

       
        <div className="lg:columns-3 md:columns-2 mt-16 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="break-inside-avoid mb-6">
              <GlowCard card={t}>
                
                <div className="testimonial-card flex items-center gap-3">
                  <div>
                    <img
                      src={t.imgPath}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold">{t.name}</p>
                    <p className="text-white-50">{t.mentions}</p>
                  </div>
                </div>
              </GlowCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
