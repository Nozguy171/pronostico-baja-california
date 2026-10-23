import type { WeatherAlert } from '../data/alerts'
import { siteConfig } from '../data/site'
import { AlertBox } from './AlertBox'
import { Button } from './Button'
import { Icon } from './Icon'
import { Modal } from './Modal'

// RF-02: avisos emergentes
export function AlertPopup({ alert, onClose }: { alert: WeatherAlert; onClose: () => void }) {
  const footer = (
    <>
      {siteConfig.specialNoticePdfUrl && (
        <a
          className="button button-secondary"
          href={siteConfig.specialNoticePdfUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver aviso en PDF <Icon name="external" size={16} />
        </a>
      )}
      <Button onClick={onClose}>Entendido</Button>
    </>
  )

  return (
    <Modal title={alert.title} kicker={`Aviso especial · ${alert.level}`} onClose={onClose} footer={footer}>
      <AlertBox alert={alert} />
    </Modal>
  )
}
