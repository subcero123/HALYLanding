"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

interface AnimateInProps {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  duration?: number
  className?: string
}

export const AnimateIn = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  className = "",
}: AnimateInProps) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: duration,
        delay: delay,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={variants} className={className}>
      {children}
    </motion.div>
  )
}

export const FadeIn = ({ children, delay = 0, duration = 0.5, className = "" }: Omit<AnimateInProps, "direction">) => {
  return (
    <AnimateIn delay={delay} duration={duration} className={className}>
      {children}
    </AnimateIn>
  )
}

