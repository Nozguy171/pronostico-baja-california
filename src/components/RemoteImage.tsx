import { useState } from 'react'
import { Icon } from './Icon'

type RemoteImageProps = {
  src: string
  alt: string
  className?: string
  eager?: boolean
}

export function RemoteImage({ src, alt, className, eager = false }: RemoteImageProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className={`image-fallback ${className ?? ''}`}>
        <Icon name="cloud" size={28} />
        <span>La imagen no está disponible en este momento.</span>
      </div>
    )
  }
  return (
    <img className={className} src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} onError={() => setFailed(true)} />
  )
}
