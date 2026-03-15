"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import { motion, type PanInfo } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Play, Instagram } from "lucide-react"

export interface PortfolioItem {
  id: number
  /** Thumbnail image URL (always required, used as poster for videos) */
  thumbnail: string
  /** Alt text */
  alt: string
  /** Optional video URL — if provided the card plays video on the active slide */
  videoUrl?: string
  /** Instagram post URL for redirection */
  href: string
  /** Client / brand name shown on the card */
  client: string
  /** Short caption */
  caption?: string
  /** Name of the jeweler/store */
  jewelerName?: string
  /** Followers count of the Instagram account */
  followersCount?: string
}

interface VerticalImageStackProps {
  items: PortfolioItem[]
}

export function VerticalImageStack({ items }: VerticalImageStackProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const lastNavigationTime = useRef(0)
  const navigationCooldown = 400

  const navigate = useCallback(
    (newDirection: number) => {
      const now = Date.now()
      if (now - lastNavigationTime.current < navigationCooldown) return
      lastNavigationTime.current = now

      setCurrentIndex((prev) => {
        if (newDirection > 0) {
          return prev === items.length - 1 ? 0 : prev + 1
        }
        return prev === 0 ? items.length - 1 : prev - 1
      })
    },
    [items.length],
  )

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50
    if (info.offset.y < -threshold) {
      navigate(1)
    } else if (info.offset.y > threshold) {
      navigate(-1)
    }
  }

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > 30) {
        if (e.deltaY > 0) {
          navigate(1)
        } else {
          navigate(-1)
        }
      }
    },
    [navigate],
  )

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: true })
    return () => window.removeEventListener("wheel", handleWheel)
  }, [handleWheel])

  const getCardStyle = (index: number) => {
    const total = items.length
    let diff = index - currentIndex
    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total

    if (diff === 0) {
      return { y: 0, scale: 1, opacity: 1, zIndex: 5, rotateX: 0 }
    } else if (diff === -1) {
      return { y: -160, scale: 0.82, opacity: 0.6, zIndex: 4, rotateX: 8 }
    } else if (diff === -2) {
      return { y: -280, scale: 0.7, opacity: 0.3, zIndex: 3, rotateX: 15 }
    } else if (diff === 1) {
      return { y: 160, scale: 0.82, opacity: 0.6, zIndex: 4, rotateX: -8 }
    } else if (diff === 2) {
      return { y: 280, scale: 0.7, opacity: 0.3, zIndex: 3, rotateX: -15 }
    } else {
      return {
        y: diff > 0 ? 400 : -400,
        scale: 0.6,
        opacity: 0,
        zIndex: 0,
        rotateX: diff > 0 ? -20 : 20,
      }
    }
  }

  const isVisible = (index: number) => {
    const total = items.length
    let diff = index - currentIndex
    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total
    return Math.abs(diff) <= 2
  }

  return (
    <div className="relative flex h-[85vh] w-full items-center justify-center overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.02] blur-3xl" />
      </div>

      {/* Card Stack */}
      <div
        className="relative flex h-[620px] w-[340px] items-center justify-center"
        style={{ perspective: "1200px" }}
      >
        {items.map((item, index) => {
          if (!isVisible(index)) return null
          const style = getCardStyle(index)
          const isCurrent = index === currentIndex

          return (
            <motion.div
              key={item.id}
              className="absolute cursor-grab active:cursor-grabbing"
              animate={{
                y: style.y,
                scale: style.scale,
                opacity: style.opacity,
                rotateX: style.rotateX,
                zIndex: style.zIndex,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                mass: 1,
              }}
              drag={isCurrent ? "y" : false}
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              style={{
                transformStyle: "preserve-3d",
                zIndex: style.zIndex,
              }}
            >
                <a
                  href={isCurrent ? item.href : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative block h-[520px] w-[290px] overflow-hidden rounded-3xl bg-zinc-900 ring-1 ring-white/10 ${
                    isCurrent ? "cursor-pointer" : ""
                  }`}
                  style={{
                    boxShadow: isCurrent
                      ? "0 25px 50px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08)"
                      : "0 10px 30px -10px rgba(0,0,0,0.4)",
                  }}
                  onClick={(e) => {
                    // Prevent dragging from triggering a click
                    if (!isCurrent) e.preventDefault()
                  }}
                >
                {/* Card inner glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/10 via-transparent to-transparent z-[1]" />

                {/* Media — video or image */}
                {item.videoUrl && isCurrent ? (
                  <video
                    src={item.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    poster={item.thumbnail}
                  />
                ) : (
                  <Image
                    src={item.thumbnail}
                    alt={item.alt}
                    fill
                    className="object-cover w-full h-full"
                    draggable={false}
                    priority={isCurrent}
                    unoptimized
                  />
                )}

                {/* Play icon badge for video cards when NOT active */}
                {item.videoUrl && !isCurrent && (
                  <div className="absolute top-3 right-3 z-10 bg-black/50 backdrop-blur-sm rounded-full p-1.5">
                    <Play className="w-3.5 h-3.5 text-white fill-white" />
                  </div>
                )}

                {/* Bottom gradient overlay + info */}
                <div className="absolute inset-x-0 bottom-0 z-[2] bg-gradient-to-t from-black/90 via-black/50 to-transparent pt-24 pb-6 px-5 flex flex-col justify-end">
                  
                  {item.jewelerName && (
                    <h3 className="text-white font-bold text-[22px] mb-2 leading-tight">
                      {item.jewelerName}
                    </h3>
                  )}

                  {item.followersCount && (
                    <p className="text-zinc-300 text-sm font-medium mb-3 flex items-center gap-2">
                      <Instagram className="w-4 h-4 text-white/70" />
                      {item.followersCount} Followers
                    </p>
                  )}

                  {item.caption && (
                    <p className="text-white/80 text-[14px] font-medium leading-relaxed truncate mb-5">
                      {item.caption}
                    </p>
                  )}

                  {/* CTA — only on active card */}
                  {isCurrent && (
                    <motion.a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-4 py-2 text-xs font-semibold text-white hover:bg-white/25 transition-colors"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      onClick={(e) => e.stopPropagation()}
                      onPointerDownCapture={(e) => e.stopPropagation()}
                    >
                      <Instagram className="w-3.5 h-3.5" />
                      View on Instagram
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </motion.a>
                  )}
                </div>
              </a>
            </motion.div>
          )
        })}
      </div>

      {/* Navigation dots */}
      <div className="absolute right-6 top-1/2 flex -translate-y-1/2 flex-col gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (index !== currentIndex) {
                setCurrentIndex(index)
              }
            }}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "h-6 bg-white"
                : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to item ${index + 1}`}
          />
        ))}
      </div>

      {/* Instruction hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="flex flex-col items-center gap-2 text-zinc-500">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7-7 7 7" />
            </svg>
          </motion.div>
          <span className="text-[10px] font-medium tracking-widest uppercase">
            Scroll or drag
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </motion.div>
        </div>
      </motion.div>

      {/* Counter */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center">
          <span className="text-4xl font-light text-white tabular-nums">
            {String(currentIndex + 1).padStart(2, "0")}
          </span>
          <div className="my-2 h-px w-8 bg-white/20" />
          <span className="text-sm text-zinc-500 tabular-nums">
            {String(items.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  )
}
