import { useRef } from 'react'
import { motion, useInView, useMotionValue, useReducedMotion, useSpring } from 'motion/react'
import './HeroOrbit.css'

interface HeroOrbitProps {
  parallax?: boolean
}

export function HeroOrbit({ parallax = true }: HeroOrbitProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  const visible = useInView(ref, { amount: 0.1 })
  const active = visible && !reducedMotion
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const x = useSpring(pointerX, { stiffness: 45, damping: 24, mass: 0.7 })
  const y = useSpring(pointerY, { stiffness: 45, damping: 24, mass: 0.7 })

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!parallax || reducedMotion || event.pointerType !== 'mouse') return
    const bounds = event.currentTarget.getBoundingClientRect()
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 16)
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 16)
  }

  const resetPointer = () => {
    pointerX.set(0)
    pointerY.set(0)
  }

  return <div className="hero-orbit" ref={ref} aria-hidden="true" onPointerMove={handlePointerMove} onPointerLeave={resetPointer}>
    <motion.div className="hero-orbit__scene" style={{ x, y }}>
      <motion.div className="hero-orbit__glow" animate={active ? { opacity: [0.45, 0.7, 0.45], scale: [0.94, 1.07, 0.94] } : { opacity: 0.5, scale: 1 }} transition={active ? { duration: 11, repeat: Infinity, ease: 'easeInOut' } : { duration: 0.3 }} />
      <motion.div className="hero-orbit__ring hero-orbit__ring--one" initial={{ rotate: -28 }} animate={active ? { rotate: 332 } : { rotate: -28 }} transition={active ? { duration: 48, repeat: Infinity, ease: 'linear' } : { duration: 0 }} />
      <motion.div className="hero-orbit__ring hero-orbit__ring--two" initial={{ rotate: 35 }} animate={active ? { rotate: -325 } : { rotate: 35 }} transition={active ? { duration: 66, repeat: Infinity, ease: 'linear' } : { duration: 0 }} />
      <motion.div className="hero-orbit__ring hero-orbit__ring--three" initial={{ rotate: 75 }} animate={active ? { rotate: 435 } : { rotate: 75 }} transition={active ? { duration: 82, repeat: Infinity, ease: 'linear' } : { duration: 0 }} />
      <motion.div className="hero-orbit__core" animate={active ? { scale: [1, 1.035, 1] } : { scale: 1 }} transition={active ? { duration: 7, repeat: Infinity, ease: 'easeInOut' } : { duration: 0.3 }}>
        <span className="hero-orbit__initials">DS</span>
        <motion.span className="hero-orbit__symbol" animate={active ? { y: [0, -7, 0], opacity: [0.7, 1, 0.7] } : { y: 0, opacity: 0.85 }} transition={active ? { duration: 5.5, repeat: Infinity, ease: 'easeInOut' } : { duration: 0.3 }}>✳</motion.span>
      </motion.div>
      <motion.span className="hero-orbit__particle" animate={active ? { y: [0, -9, 0], x: [0, 4, 0] } : { x: 0, y: 0 }} transition={active ? { duration: 8, repeat: Infinity, ease: 'easeInOut' } : { duration: 0.3 }} />
      <span className="hero-orbit__label hero-orbit__label--one">SOFTWARE</span>
      <span className="hero-orbit__label hero-orbit__label--two">SYSTEMS</span>
      <span className="hero-orbit__label hero-orbit__label--three">SOLUTIONS</span>
    </motion.div>
  </div>
}
