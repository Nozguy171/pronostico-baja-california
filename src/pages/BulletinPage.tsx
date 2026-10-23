import type { ReactNode } from 'react'
import { CycloneBulletin } from '../bulletins/CycloneBulletin'
import { DailySummary } from '../bulletins/DailySummary'
import { ExtendedForecast } from '../bulletins/ExtendedForecast'
import { WinterBulletin } from '../bulletins/WinterBulletin'
import { AlertBox } from '../components/AlertBox'
import { Button } from '../components/Button'
import { DocumentRow } from '../components/DocumentRow'
import { EmptyState } from '../components/EmptyState'
import { Footer } from '../components/Footer'
import { Icon } from '../components/Icon'
import { PageIntro } from '../components/PageIntro'
import { PdfPreview } from '../components/PdfPreview'
import type { ShowToast } from '../components/Toast'
import { documents } from '../data/documents'
import { inSeason, mainMenu, siteConfig } from '../data/site'
import { reportDate } from '../data/weather'
import { rootPath } from '../routes'

type BulletinPageProps = {
  id: string
  onNavigate: (href: string) => void
  onToast: ShowToast
}

export function BulletinPage({ id, onNavigate, onToast }: BulletinPageProps) {
  const item = mainMenu.find((entry) => entry.id === id) ?? mainMenu[0]
  const alert = siteConfig.activeAlert
  // TODO: usar el PDF real de cada boletín
  const document = { ...documents[0], title: item.title, date: reportDate.short }
  const noBulletin = (item.season && !inSeason(item.season)) || (item.id === 'avisos' && !alert)

  let content: ReactNode
  if (item.id === 'resumen') {
    content = <DailySummary />
  } else if (item.id === 'extendido-72') {
    content = <ExtendedForecast />
  } else if (noBulletin) {
    content = (
      <EmptyState title="No hay boletín vigente" text="Cuando se publique uno nuevo aparecerá en esta sección." />
    )
  } else if (item.id === 'ciclones') {
    content = <CycloneBulletin />
  } else if (item.id === 'frentes') {
    content = <WinterBulletin />
  } else {
    content = (
      <>
        {item.id === 'avisos' && alert && <AlertBox alert={alert} showTitle />}
        <DocumentRow
          document={document}
          label="PDF"
          actions={
            <Button variant="ghost" onClick={() => onToast('Descarga iniciada.', 'success')}>
              Descargar PDF <Icon name="download" size={16} />
            </Button>
          }
        />
        <PdfPreview document={document} />
      </>
    )
  }

  return (
    <main id="main-content">
      <PageIntro
        eyebrow="Pronóstico del tiempo"
        title={item.title}
        description={item.description}
        action={
          <Button variant="secondary" onClick={() => onNavigate(rootPath)}>
            <Icon name="home" size={17} /> Volver al inicio
          </Button>
        }
      />
      <section className="bulletin-section shell">{content}</section>
      <Footer />
    </main>
  )
}
