import { archivePath } from '../routes'
import { LogoMark } from './LogoMark'

export function Footer({ onRequestInfo }: { onRequestInfo?: () => void }) {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div className="footer-brand">
          <LogoMark />
          <div>
            <strong>Pronóstico del Tiempo</strong>
            <span>Baja California</span>
          </div>
        </div>
        <div className="footer-links">
          <a href={archivePath}>Archivo histórico</a>
          {onRequestInfo && (
            <button type="button" onClick={onRequestInfo}>
              Solicitar información
            </button>
          )}
        </div>
        <div className="footer-meta">
          <span>© 2026 · Instituto de Ingeniería UABC</span>
          <span>Íconos provisionales: Meteocons (MIT)</span>
        </div>
      </div>
    </footer>
  )
}
