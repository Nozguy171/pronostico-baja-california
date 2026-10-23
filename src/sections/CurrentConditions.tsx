import { Icon, type IconName } from '../components/Icon'
import type { MunicipalityWeather } from '../data/weather'
import { useTemperature } from '../units'

export function CurrentConditions({ weather }: { weather: MunicipalityWeather }) {
  const temperature = useTemperature()
  const items: { label: string; value: string; icon: IconName }[] = [
    { label: 'Humedad', value: `${weather.humidity}%`, icon: 'drop' },
    { label: 'Viento', value: `${weather.wind} km/h`, icon: 'wind' },
    { label: 'Ráfagas', value: `${weather.gusts} km/h`, icon: 'wind' },
    { label: 'Presión', value: `${weather.pressure} hPa`, icon: 'gauge' },
    { label: 'Visibilidad', value: `${weather.visibility} km`, icon: 'eye' },
    { label: 'Punto de rocío', value: `${temperature(weather.dewPoint)}°`, icon: 'drop' },
    { label: 'Índice UV', value: `${weather.uv} · Alto`, icon: 'sun' },
  ]

  return (
    <section className="content-section shell" aria-labelledby="conditions-title">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Información secundaria</span>
          <h2 id="conditions-title">Condiciones actuales</h2>
        </div>
        <span className="section-note">Lecturas para {weather.name}</span>
      </div>
      <div className="conditions-grid">
        {items.map((item) => (
          <div className="condition-row" key={item.label}>
            <span className="condition-icon">
              <Icon name={item.icon} size={18} />
            </span>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>
    </section>
  )
}
