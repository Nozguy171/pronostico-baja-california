import { Icon } from '../components/Icon'
import { WeatherIcon } from '../components/WeatherIcon'
import { reportDate, type MunicipalityWeather } from '../data/weather'
import { useTemperature } from '../units'

export function HourlyForecast({ weather }: { weather: MunicipalityWeather }) {
  const temperature = useTemperature()

  return (
    <section className="content-section shell" id="pronostico" aria-labelledby="hourly-title">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Evolución del día</span>
          <h2 id="hourly-title">Pronóstico por hora</h2>
        </div>
        <span className="section-note">
          {reportDate.weekday} {reportDate.short} · hora local
        </span>
      </div>
      <div className="hourly-scroll">
        {weather.hourly.map((point, index) => (
          <article className={`hourly-item ${index === 0 ? 'current' : ''}`} key={point.time}>
            <span className="hourly-time">{point.time}</span>
            <WeatherIcon icon={point.icon} size={44} />
            <strong>{temperature(point.temperature)}°</strong>
            <span className="hourly-rain">
              <Icon name="drop" size={13} /> {point.rain}%
            </span>
          </article>
        ))}
      </div>
    </section>
  )
}
