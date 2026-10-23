import { useState } from 'react'
import { Icon } from '../components/Icon'

const terms = [
  ['Punto de rocío', 'Temperatura a la que el aire alcanza la saturación y puede comenzar a formar condensación.'],
  ['Presión atmosférica', 'Peso del aire sobre la superficie, expresado en hectopascales (hPa).'],
  ['Ráfagas', 'Incrementos breves de la velocidad del viento que pueden superar el valor sostenido.'],
  ['Humedad relativa', 'Porcentaje de vapor de agua presente en el aire respecto al máximo posible.'],
]

export function Glossary() {
  const [open, setOpen] = useState(true)

  return (
    <section className="content-section shell glossary-section" aria-labelledby="glossary-title">
      <div className="glossary-panel">
        <div className="glossary-header">
          <div>
            <span className="eyebrow">Educación meteorológica</span>
            <h2 id="glossary-title">Glosario meteorológico</h2>
          </div>
          <button
            type="button"
            className="glossary-toggle"
            aria-expanded={open}
            aria-controls="glossary-content"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? 'Ocultar términos' : 'Ver términos'} <Icon name="chevronDown" size={18} />
          </button>
        </div>
        {open && (
          <div id="glossary-content" className="glossary-grid">
            {terms.map(([term, definition]) => (
              <div className="glossary-item" key={term}>
                <strong>{term}</strong>
                <p>{definition}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
