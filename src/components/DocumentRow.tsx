import type { ReactNode } from 'react'
import type { WeatherDocument } from '../data/documents'
import { Icon } from './Icon'

type DocumentRowProps = {
  document: WeatherDocument
  label: string
  showDownloads?: boolean
  actions: ReactNode
}

export function DocumentRow({ document, label, showDownloads = false, actions }: DocumentRowProps) {
  return (
    <article className="latest-document">
      <div className="document-icon">
        <Icon name="file" size={27} />
      </div>
      <div className="latest-doc-copy">
        <span className="document-type">{label}</span>
        <h3>{document.title}</h3>
        <div className="document-meta">
          <span>
            <Icon name="calendar" size={15} /> {document.date}
          </span>
          <span>
            <Icon name="clock" size={15} /> {document.time} h
          </span>
          {showDownloads && (
            <span>
              <Icon name="download" size={15} /> {document.downloads} descargas
            </span>
          )}
        </div>
      </div>
      <div className="document-actions">{actions}</div>
    </article>
  )
}
