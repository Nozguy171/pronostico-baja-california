import { levelClass } from '../components/AlertBox'
import { Button } from '../components/Button'
import { Icon, type IconName } from '../components/Icon'
import type { WeatherAlert } from '../data/alerts'

const levelIcons: Record<WeatherAlert['level'], IconName> = {
  Informativo: 'info',
  Precaución: 'alert',
  Importante: 'alert',
  Severo: 'shield',
}

export function AlertBanner({ alert, onShowDetails }: { alert: WeatherAlert; onShowDetails: () => void }) {
  return (
    <section className={`alert-section shell alert-${levelClass(alert)}`} aria-labelledby="alert-title">
      <div className="alert-panel">
        <div className="alert-mark">
          <Icon name={levelIcons[alert.level]} size={24} />
        </div>
        <div className="alert-copy">
          <span className="eyebrow" id="alert-title">
            Aviso meteorológico
          </span>
          <h2>{alert.title}</h2>
          <p>
            {alert.scope} · Vigencia {alert.validity}
          </p>
        </div>
        <Button variant="secondary" onClick={onShowDetails}>
          Ver detalles <Icon name="arrowUpRight" size={16} />
        </Button>
      </div>
    </section>
  )
}
