import type { WeatherAlert } from '../data/alerts'
import { Icon } from './Icon'

export function AlertBox({ alert, showTitle = false }: { alert: WeatherAlert; showTitle?: boolean }) {
  const meta = [showTitle && alert.title, alert.scope, `Vigencia ${alert.validity}`].filter(Boolean).join(' · ')
  return (
    <div className={`alert-popup alert-popup-${levelClass(alert)}`}>
      <span className="alert-mark">
        <Icon name="alert" size={24} />
      </span>
      <div>
        <p className="alert-popup-meta">{meta}</p>
        <p>{alert.body}</p>
      </div>
    </div>
  )
}

// "Precaución" -> "precaucion", para usarlo como clase CSS.
export const levelClass = (alert: WeatherAlert) => alert.level.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
