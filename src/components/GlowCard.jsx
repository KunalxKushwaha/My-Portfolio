import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger)

const GlowCard = ({ card, index, children }) => {
  const cardRefs = useRef([])

  const handleMouseMove = (index) => (e) => {
    const card = cardRefs.current[index]
    if (!card) return

    const rect = card.getBoundingClientRect()
    const mouseX = e.clientX - rect.left - rect.width / 2
    const mouseY = e.clientY - rect.top - rect.height / 2

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI)
    angle = (angle + 360) % 360
    card.style.setProperty("--start", angle + 60)
  }

  useEffect(() => {
    const el = cardRefs.current[index]
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, scale: 0.8, rotate: -5, y: 80 }, 
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          y: 0,
          duration: 1,
          ease: "back.out(1.7)", 
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
           
          },
        }
      )
    }, el)

    return () => ctx.revert()
  }, [index])

  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      className="glow-card card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column"
    >
      <div className="glow"></div>
      <div className="flex items-center gap-1 mb-5 break-inside-avoid-column">
        {Array.from({ length: 5 }, (_, i) => (
          <img key={i} src="/images/star.png" alt="star" className="size-5" />
        ))}
      </div>
      <div className="mb-5">
        <p className="text-white-50 text-lg">{card.review}</p>
      </div>
      {children}
    </div>
  )
}

export default GlowCard
