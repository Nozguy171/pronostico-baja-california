import type { WeatherDocument } from '../data/documents'
import { Icon } from './Icon'

// TODO: mostrar el PDF real
export function PdfPreview({ document }: { document: WeatherDocument }) {
  return (
    <div className="pdf-preview">
      <div className="pdf-toolbar">
        <span>
          <Icon name="file" size={16} /> Vista previa del documento
        </span>
        <span className="pdf-page-count">1 / 2</span>
      </div>
      <div className="pdf-sheet">
        <div className="pdf-sheet-head">
          <span className="pdf-seal">BC</span>
          <div>
            <strong>PRONÓSTICO METEOROLÓGICO</strong>
            <span>BAJA CALIFORNIA</span>
          </div>
          <span className="pdf-doc-type">PDF</span>
        </div>
        <div className="pdf-rule" />
        <div className="pdf-sheet-meta">
          <span>{document.date}</span>
          <span>{document.time} h</span>
        </div>
        <h3>Condiciones generales</h3>
        <div className="pdf-lines">
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="pdf-mini-grid">
          <span />
          <span />
          <span />
        </div>
        <p>Descripción sinóptica, glosario y temperaturas máximas y mínimas por municipio.</p>
      </div>
    </div>
  )
}
