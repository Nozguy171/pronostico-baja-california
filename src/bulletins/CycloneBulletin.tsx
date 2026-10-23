import { Icon } from '../components/Icon'
import { RemoteImage } from '../components/RemoteImage'
import { activeCyclones, cycloneImages, type Cyclone } from '../data/bulletins'

const fields: [keyof Cyclone, string][] = [
  ['location', 'Ubicación'],
  ['maxWinds', 'Vientos máximos sostenidos'],
  ['gusts', 'Rachas'],
  ['pressure', 'Presión mínima central'],
  ['movement', 'Desplazamiento'],
  ['distance', 'Distancia a Baja California'],
]

export function CycloneBulletin() {
  return (
    <>
      {activeCyclones.length === 0 ? (
        <p className="bulletin-notice">
          Por el momento no hay ciclones tropicales que representen riesgo para Baja California.
        </p>
      ) : (
        activeCyclones.map((cyclone) => (
          <article className="cyclone-card" key={cyclone.name}>
            <h2>{cyclone.name}</h2>
            <p>Actualizado: {cyclone.updatedAt}</p>
            <dl>
              {fields.map(([key, label]) => (
                <div key={key}>
                  <dt>{label}</dt>
                  <dd>{cyclone[key]}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))
      )}
      <div className="bulletin-images">
        {cycloneImages.map((image) => (
          <figure className="bulletin-figure" key={image.url}>
            <figcaption>
              <span>{image.title}</span>
              <a className="text-link" href={image.source} target="_blank" rel="noopener noreferrer">
                Fuente <Icon name="external" size={14} />
              </a>
            </figcaption>
            <RemoteImage src={image.url} alt={image.title} />
          </figure>
        ))}
      </div>
    </>
  )
}
