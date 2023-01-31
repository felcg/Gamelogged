/* eslint-disable consistent-return */
import React, { ReactElement, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'

import { Loader } from './index'

export default function Loading({
  isLoading,
  children,
}: {
  isLoading: boolean
  children: ReactElement
}) {
  const [showLoader, setShowLoader] = React.useState(false)
  useEffect(() => {
    if (isLoading) {
      setShowLoader(true)
    }

    if (!isLoading && showLoader) {
      const timeout = setTimeout(() => {
        setShowLoader(false)
      }, 400)

      return () => {
        clearTimeout(timeout)
      }
    }
  }, [isLoading, showLoader])

  const fadeOutProps = useSpring({
    opacity: showLoader ? 1 : 0,
    color: '#747fb3',
  })
  const fadeInProps = useSpring({
    opacity: showLoader ? 0 : 1,
    color: '#747fb3',
  })

  return (
    <div>
      {showLoader ? (
        <animated.div style={fadeOutProps}>
          <Loader />
        </animated.div>
      ) : (
        <animated.div style={fadeInProps}>{children}</animated.div>
      )}
    </div>
  )
}
