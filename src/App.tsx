import { useEffect, useState } from 'react'
import { AlertPopup } from './components/AlertPopup'
import { Button } from './components/Button'
import { Header } from './components/Header'
import { Icon } from './components/Icon'
import { InfoRequestModal } from './components/InfoRequestModal'
import { Modal } from './components/Modal'
import { PdfPreview } from './components/PdfPreview'
import { Toast, type ToastKind, type ToastMessage } from './components/Toast'
import type { WeatherDocument } from './data/documents'
import { siteConfig } from './data/site'
import { ArchivePage } from './pages/ArchivePage'
import { BulletinPage } from './pages/BulletinPage'
import { HomePage } from './pages/HomePage'
import { archivePath, getBulletinId, rootPath } from './routes'
import { loadUnit, saveUnit, UnitContext, type Unit } from './units'

const alertSeenKey = 'aviso-visto'

// El aviso emergente sale una vez por sesión
function shouldShowAlert() {
  const alert = siteConfig.activeAlert
  if (!alert) return false
  try {
    return sessionStorage.getItem(alertSeenKey) !== alert.title
  } catch {
    return true
  }
}

export default function App() {
  const [path, setPath] = useState(window.location.pathname)
  const [city, setCity] = useState('Mexicali')
  const [unit, setUnit] = useState<Unit>(loadUnit)
  const [toast, setToast] = useState<ToastMessage | null>(null)
  const [previewDocument, setPreviewDocument] = useState<WeatherDocument | null>(null)
  const [infoOpen, setInfoOpen] = useState(false)
  const [alertOpen, setAlertOpen] = useState(shouldShowAlert)

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname)
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    if (!toast) return
    const timeout = window.setTimeout(() => setToast(null), 4200)
    return () => window.clearTimeout(timeout)
  }, [toast])

  const navigate = (href: string) => {
    const [target, hash] = href.split('#')
    const nextPath = target || rootPath
    if (nextPath !== window.location.pathname) window.history.pushState({}, '', nextPath)
    setPath(nextPath)
    if (hash) window.setTimeout(() => document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' }), 0)
    else window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const showToast = (message: string, kind: ToastKind = 'info') => setToast({ message, kind })

  const changeUnit = (value: Unit) => {
    setUnit(value)
    saveUnit(value)
  }

  const closeAlert = () => {
    setAlertOpen(false)
    try {
      if (siteConfig.activeAlert) sessionStorage.setItem(alertSeenKey, siteConfig.activeAlert.title)
    } catch {
      // Sin almacenamiento el aviso volverá a aparecer al recargar.
    }
  }

  const bulletinId = getBulletinId(path)
  let page
  if (path === archivePath) {
    page = <ArchivePage onPreview={setPreviewDocument} onToast={showToast} />
  } else if (bulletinId) {
    page = <BulletinPage id={bulletinId} onNavigate={navigate} onToast={showToast} />
  } else {
    page = (
      <HomePage
        city={city}
        onCityChange={setCity}
        onNavigate={navigate}
        onPreview={setPreviewDocument}
        onToast={showToast}
        onRequestInfo={() => setInfoOpen(true)}
      />
    )
  }

  return (
    <UnitContext.Provider value={unit}>
      <Header path={path} unit={unit} onUnitChange={changeUnit} onNavigate={navigate} />
      {page}

      {alertOpen && siteConfig.activeAlert && <AlertPopup alert={siteConfig.activeAlert} onClose={closeAlert} />}

      {previewDocument && (
        <Modal
          title={previewDocument.title}
          kicker={`${previewDocument.date} · ${previewDocument.time} h`}
          onClose={() => setPreviewDocument(null)}
          footer={
            <>
              <Button variant="ghost" onClick={() => setPreviewDocument(null)}>
                Cerrar
              </Button>
              <Button onClick={() => showToast('Descarga iniciada.', 'success')}>
                Descargar <Icon name="download" size={16} />
              </Button>
            </>
          }
        >
          <PdfPreview document={previewDocument} />
        </Modal>
      )}

      {infoOpen && <InfoRequestModal onClose={() => setInfoOpen(false)} onToast={showToast} />}
      {toast && <Toast toast={toast} onClose={() => setToast(null)} />}
    </UnitContext.Provider>
  )
}
