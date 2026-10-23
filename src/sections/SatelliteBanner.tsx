import { Icon } from '../components/Icon'
import { RemoteImage } from '../components/RemoteImage'
import { siteConfig } from '../data/site'

// RF-01: imagen satelital
export function SatelliteBanner() {
  return (
    <section className="satellite-section shell" aria-labelledby="satellite-title">
      <figure className="satellite-banner">
        <figcaption>
          <span>
            <span className="eyebrow" id="satellite-title">
              Imagen satelital · NOAA
            </span>
            <strong>{siteConfig.satelliteCaption}</strong>
          </span>
          <a className="text-link" href={siteConfig.satelliteSourceUrl} target="_blank" rel="noopener noreferrer">
            Ver en NOAA <Icon name="external" size={15} />
          </a>
        </figcaption>
        <RemoteImage
          eager
          className="satellite-image"
          src={siteConfig.satelliteImageUrl}
          alt="Imagen satelital más reciente de la NOAA sobre Baja California"
        />
      </figure>
    </section>
  )
}
