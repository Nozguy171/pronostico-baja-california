import { meteoconIcon } from '../data/site'
import type { WeatherIcon as WeatherIconName } from '../data/weather'

// Íconos provisionales (Meteocons, licencia MIT)
const iconFiles: Record<WeatherIconName, string> = {
  sun: 'clear-day',
  'cloud-sun': 'partly-cloudy-day',
  cloud: 'cloudy',
  wind: 'wind',
  moon: 'clear-night',
}

export function WeatherIcon({ icon, size = 44 }: { icon: WeatherIconName; size?: number }) {
  return <img className="meteocon" src={meteoconIcon(iconFiles[icon])} width={size} height={size} alt="" />
}
