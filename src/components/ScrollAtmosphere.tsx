import { useEffect, useState } from 'react'
import { motion, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from 'motion/react'

const planes = [
  { label: '01 / SISTEMAS', x: '-39vw', y: '-29vh', rotate: -12, delay: 0 },
  { label: '02 / INTERFACES', x: '38vw', y: '-17vh', rotate: 11, delay: 0.12 },
  { label: '03 / SEGURANÇA', x: '-34vw', y: '29vh', rotate: 9, delay: 0.24 },
  { label: '04 / AUTOMAÇÃO', x: '36vw', y: '32vh', rotate: -10, delay: 0.36 },
]

function Plane({ plane, index, pointer, depth }: { plane: typeof planes[number]; index: number; pointer: { x: number; y: number }; depth: MotionValue<number> }) {
  const z = useTransform(depth, value => value * (index % 2 ? -0.55 : 0.7) - plane.delay * 170)
  return <motion.div className="scroll-atmosphere__plane" style={{
    left: `calc(50% + ${plane.x})`, top: `calc(50% + ${plane.y})`, rotate: plane.rotate,
    x: pointer.x * (index % 2 ? -20 : 20), y: pointer.y * (index % 2 ? 14 : -14), z,
  }}><span>{plane.label}</span><i /><i /><i /></motion.div>
}

export function ScrollAtmosphere() {
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 65, damping: 25, restDelta: 0.001 })
  const [pointer, setPointer] = useState({ x: 0, y: 0 })
  const depth = useTransform(progress, [0, 1], [-160, 260])

  useEffect(() => {
    if (reduced || !window.matchMedia('(pointer: fine)').matches) return
    const move = (event: PointerEvent) => setPointer({
      x: (event.clientX / window.innerWidth - .5) * 2,
      y: (event.clientY / window.innerHeight - .5) * 2,
    })
    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [reduced])

  if (reduced) return null

  return <div className="scroll-atmosphere" aria-hidden="true">
    <div className="scroll-atmosphere__grid" />
    <div className="scroll-atmosphere__ring scroll-atmosphere__ring--outer" />
    <div className="scroll-atmosphere__ring scroll-atmosphere__ring--inner" />
    {planes.map((plane, index) => <Plane key={plane.label} plane={plane} index={index} pointer={pointer} depth={depth} />)}
    <motion.div className="scroll-atmosphere__progress" style={{ scaleX: scrollYProgress }} />
  </div>
}
