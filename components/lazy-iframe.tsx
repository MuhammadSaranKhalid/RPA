'use client'

import { useState, useRef, useEffect } from 'react'

interface LazyIframeProps {
  src: string
  title: string
  className?: string
  allow?: string
  allowFullScreen?: boolean
  loading?: 'lazy' | 'eager'
}

export function LazyIframe({ 
  src, 
  title, 
  className = '', 
  allow = '', 
  allowFullScreen = false,
  loading = 'lazy'
}: LazyIframeProps) {
  const [isLoaded, setIsLoaded] = useState(loading === 'eager')
  const [isInView, setIsInView] = useState(false)
  const iframeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (loading === 'eager') return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (iframeRef.current) {
      observer.observe(iframeRef.current)
    }

    return () => observer.disconnect()
  }, [loading])

  useEffect(() => {
    if (isInView && !isLoaded) {
      setIsLoaded(true)
    }
  }, [isInView, isLoaded])

  return (
    <div ref={iframeRef} className={className}>
      {isLoaded ? (
        <iframe
          src={src}
          title={title}
          className="w-full h-full"
          allow={allow}
          allowFullScreen={allowFullScreen}
        />
      ) : (
        <div className="w-full h-full bg-muted flex items-center justify-center">
          <div className="text-muted-foreground">Loading video...</div>
        </div>
      )}
    </div>
  )
}
