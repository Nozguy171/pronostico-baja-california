import { Button } from '../components/Button'
import { DocumentRow } from '../components/DocumentRow'
import { Icon } from '../components/Icon'
import type { ShowToast } from '../components/Toast'
import type { WeatherDocument } from '../data/documents'
import { archivePath } from '../routes'

type LatestDocumentProps = {
  document: WeatherDocument
  onPreview: (document: WeatherDocument) => void
  onToast: ShowToast
}

export function LatestDocument({ document, onPreview, onToast }: LatestDocumentProps) {
  return (
    <section className="content-section shell latest-section" aria-labelledby="latest-title">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Archivo documental</span>
          <h2 id="latest-title">Último pronóstico publicado</h2>
        </div>
        <a className="text-link" href={archivePath}>
          Ver archivo histórico <Icon name="arrowUpRight" size={16} />
        </a>
      </div>
      <DocumentRow
        document={document}
        label="PDF · Pronóstico meteorológico"
        showDownloads
        actions={
          <>
            <Button variant="secondary" onClick={() => onPreview(document)}>
              Ver documento <Icon name="arrowUpRight" size={16} />
            </Button>
            <Button variant="ghost" onClick={() => onToast('Descarga iniciada.', 'success')}>
              Descargar PDF <Icon name="download" size={16} />
            </Button>
          </>
        }
      />
    </section>
  )
}
