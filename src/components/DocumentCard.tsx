import type { WeatherDocument } from '../data/documents'
import { Button } from './Button'
import { Icon } from './Icon'
import type { ShowToast } from './Toast'

type DocumentCardProps = {
  document: WeatherDocument
  onPreview: (document: WeatherDocument) => void
  onToast: ShowToast
}

export function DocumentCard({ document, onPreview, onToast }: DocumentCardProps) {
  return (
    <article className="document-card">
      <div className="document-card-top">
        <div className="document-icon small">
          <Icon name="file" size={21} />
        </div>
        <span className="pdf-pill">PDF</span>
      </div>
      <h2>{document.title}</h2>
      <div className="document-card-meta">
        <span>
          <Icon name="calendar" size={15} /> {document.date}
        </span>
        <span>
          <Icon name="clock" size={15} /> {document.time} h
        </span>
        <span>
          <Icon name="download" size={15} /> {document.downloads} descargas
        </span>
      </div>
      <div className="document-card-actions">
        <Button variant="secondary" onClick={() => onPreview(document)}>
          Ver <Icon name="arrowUpRight" size={15} />
        </Button>
        <Button variant="ghost" onClick={() => onToast('Descarga iniciada.', 'success')}>
          Descargar <Icon name="download" size={15} />
        </Button>
      </div>
    </article>
  )
}
