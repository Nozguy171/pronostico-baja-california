import { Icon } from '../components/Icon'
import { climateReference } from '../data/climate'
import type { MunicipalityWeather } from '../data/weather'
import { useTemperature } from '../units'

export function ClimateOverview({ weather }: { weather: MunicipalityWeather }) {
  const temperature = useTemperature()
  const reference = climateReference[weather.name] ?? climateReference.Mexicali
  const difference = temperature(weather.high) - temperature(reference.high)
  const comparison =
    difference === 0
      ? 'en el promedio del mes'
      : `${Math.abs(difference)}° ${difference > 0 ? 'sobre' : 'bajo'} el promedio del mes`

  return (
    <section className="content-section shell climate-section" aria-labelledby="climate-title">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Climatología mensual</span>
          <h2 id="climate-title">Septiembre en {weather.name}</h2>
        </div>
        <span className="section-note">Promedios y luz solar</span>
      </div>
      <div className="climate-panel">
        <div className="climate-summary">
          <span className="climate-kicker">Lectura del mes</span>
          <strong>
            {temperature(reference.high)}° / {temperature(reference.low)}°
          </strong>
          <p>Máxima y mínima promedio para septiembre. La máxima de hoy está {comparison}.</p>
          <div className="climate-sun">
            <span>
              <Icon name="sun" size={17} /> Sale {reference.sunrise}
            </span>
            <span>
              <Icon name="moon" size={17} /> Se oculta {reference.sunset}
            </span>
          </div>
        </div>
        <div className="climate-stat-grid">
          <div className="climate-stat">
            <span>Máxima promedio</span>
            <strong>{temperature(reference.high)}°</strong>
            <small>durante el día</small>
          </div>
          <div className="climate-stat">
            <span>Mínima promedio</span>
            <strong>{temperature(reference.low)}°</strong>
            <small>durante la noche</small>
          </div>
          <div className="climate-stat">
            <span>Precipitación</span>
            <strong>{reference.rain}</strong>
            <small>promedio mensual</small>
          </div>
          <div className="climate-stat">
            <span>Luz de día</span>
            <strong>13 h</strong>
            <small>aprox. en septiembre</small>
          </div>
        </div>
      </div>
    </section>
  )
}
