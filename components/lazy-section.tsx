'use client'

import { Suspense, lazy } from 'react'
import { useInView } from 'react-intersection-observer'

interface LazySectionProps {
  Component: React.ComponentType<any>
  fallback?: React.ReactNode
}

export function LazySection({ Component, fallback = null }: LazySectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div ref={ref}>
      {inView ? (
        <Suspense fallback={fallback}>
          <Component />
        </Suspense>
      ) : (
        <div style={{ minHeight: '400px' }} />
      )}
    </div>
  )
}
