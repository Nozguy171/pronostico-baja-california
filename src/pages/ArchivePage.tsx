import { useMemo, useState } from 'react'
import { Button } from '../components/Button'
import { DocumentCard } from '../components/DocumentCard'
import { EmptyState } from '../components/EmptyState'
import { Footer } from '../components/Footer'
import { Icon } from '../components/Icon'
import { PageIntro } from '../components/PageIntro'
import type { ShowToast } from '../components/Toast'
import { archiveYears, documents, type WeatherDocument } from '../data/documents'

const latestYear = archiveYears[0]

export function ArchivePage({
  onPreview,
  onToast,
}: {
  onPreview: (document: WeatherDocument) => void
  onToast: ShowToast
}) {
  const [year, setYear] = useState(latestYear)
  const [month, setMonth] = useState('all')
  const [query, setQuery] = useState('')

  const filtered = useMemo(
    () =>
      documents.filter(
        (document) =>
          document.year === year &&
          (month === 'all' || document.month === Number(month)) &&
          `${document.title} ${document.date}`.toLowerCase().includes(query.toLowerCase()),
      ),
    [month, query, year],
  )
  // Solo se ofrecen los meses que tienen documentos en el año elegido.
  const monthOptions = Array.from(
    new Map(
      documents.filter((document) => document.year === year).map((document) => [document.month, document.monthName]),
    ),
  )

  const resetFilters = () => {
    setYear(latestYear)
    setMonth('all')
    setQuery('')
  }

  return (
    <main id="main-content">
      <PageIntro
        eyebrow="Consulta documental"
        title="Archivo histórico de pronósticos"
        description="Consulta los pronósticos meteorológicos publicados anteriormente y encuentra el boletín correspondiente a cada fecha."
        action={
          <Button variant="secondary" onClick={() => setYear(latestYear)}>
            <Icon name="calendar" size={17} /> Última publicación
          </Button>
        }
      />
      <section className="archive-section shell">
        <div className="archive-toolbar">
          <div className="year-tabs" role="tablist" aria-label="Año del archivo">
            {archiveYears.map((archiveYear) => (
              <button
                key={archiveYear}
                type="button"
                role="tab"
                aria-selected={year === archiveYear}
                className={year === archiveYear ? 'active' : ''}
                onClick={() => {
                  setYear(archiveYear)
                  setMonth('all')
                }}
              >
                {archiveYear}
              </button>
            ))}
          </div>
          <div className="archive-filters">
            <label className="search-field">
              <Icon name="search" size={18} />
              <span className="sr-only">Buscar documentos</span>
              <input
                name="query"
                autoComplete="off"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Buscar en el archivo…"
              />
            </label>
            <label className="select-field">
              <span className="sr-only">Filtrar por mes</span>
              <div className="select-wrap">
                <select name="month" value={month} onChange={(event) => setMonth(event.target.value)}>
                  <option value="all">Todos los meses</option>
                  {monthOptions.map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
                <Icon name="chevronDown" size={17} />
              </div>
            </label>
          </div>
        </div>
        <div className="archive-results-head">
          <span>
            {filtered.length} {filtered.length === 1 ? 'documento encontrado' : 'documentos encontrados'}
          </span>
          <span>Mostrando {year}</span>
        </div>
        {filtered.length > 0 ? (
          <div className="document-grid">
            {filtered.map((document) => (
              <DocumentCard key={document.id} document={document} onPreview={onPreview} onToast={onToast} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No hay documentos para este filtro"
            text="Prueba con otro año o limpia el filtro de mes."
            action={
              <Button variant="secondary" onClick={resetFilters}>
                Restablecer filtros
              </Button>
            }
          />
        )}
      </section>
      <Footer />
    </main>
  )
}
