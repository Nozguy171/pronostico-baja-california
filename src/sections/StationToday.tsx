import { Icon, type IconName } from '../components/Icon'
import { WeatherIcon } from '../components/WeatherIcon'
import { reportDate, type MunicipalityWeather } from '../data/weather'
import { useTemperature, useUnit } from '../units'

function Metric({ icon, label, value, suffix }: { icon: IconName; label: string; value: number; suffix: string }) {
  return (
    <div className="metric">
      <span className="metric-icon">
        <Icon name={icon} size={19} />
      </span>
      <div>
        <span className="metric-label">{label}</span>
        <strong>
          {value}
          <small>{suffix}</small>
        </strong>
      </div>
    </div>
  )
}

// RF-03: sección Today
export function StationToday({ weather }: { weather: MunicipalityWeather }) {
  const temperature = useTemperature()
  const unit = useUnit()

  return (
    <section className="hero-section shell" aria-labelledby="home-title">
      <div className="hero-heading">
        <div>
          <span className="eyebrow">
            Estación · {reportDate.short} · {reportDate.time} h
          </span>
          <h1 id="home-title">Hoy en la estación del Instituto de Ingeniería</h1>
        </div>
      </div>
      <div className="hero-grid">
        <article className="weather-hero-card">
          <div className="hero-card-top">
            <span className="update-label">
              <span className="status-dot" /> LECTURA DE LA ESTACIÓN
            </span>
            <span className="updated">
              <Icon name="clock" size={15} /> Última lectura {reportDate.time}
            </span>
          </div>
          <div className="hero-card-main">
            <div>
              <p className="location-kicker">
                <Icon name="mapPin" size={16} /> Instituto de Ingeniería UABC
              </p>
              <h2>
                {weather.name}, <span>Baja California</span>
              </h2>
              <p className="hero-date">{reportDate.long}</p>
            </div>
            <div className="hero-weather-value">
              <WeatherIcon icon={weather.icon} size={92} />
              <div>
                <div className="temperature">
                  {temperature(weather.temperature)}
                  <sup>°{unit}</sup>
                </div>
                <strong>{weather.condition}</strong>
                <span>Sensación térmica {temperature(weather.feelsLike)}°</span>
              </div>
            </div>
          </div>
          <div className="hero-card-bottom">
            <div>
              <span>Máxima</span>
              <strong>{temperature(weather.high)}°</strong>
            </div>
            <div>
              <span>Mínima</span>
              <strong>{temperature(weather.low)}°</strong>
            </div>
            <div>
              <span>Índice UV</span>
              <strong>
                {weather.uv} <small>Alto</small>
              </strong>
            </div>
          </div>
        </article>
        <aside className="hero-side-note">
          <div className="side-note-top">
            <span className="eyebrow">Lectura rápida</span>
            <Icon name="chart" size={21} />
          </div>
          <h2>El estado del tiempo, a simple vista.</h2>
          <p>
            Datos medidos por la estación meteorológica montada en las instalaciones del Instituto de Ingeniería,
            Mexicali.
          </p>
          <div className="side-note-rule" />
          <div className="side-note-list">
            <span>
              <Icon name="sun" size={17} /> {weather.condition}
            </span>
            <span>
              <Icon name="wind" size={17} /> {weather.wind} km/h
            </span>
            <span>
              <Icon name="drop" size={17} /> {weather.rain}% de lluvia
            </span>
          </div>
          <a
            className="text-link"
            href="#pronostico"
            onClick={(event) => {
              event.preventDefault()
              document.getElementById('pronostico')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Ver pronóstico del día <Icon name="arrowUpRight" size={16} />
          </a>
        </aside>
      </div>
      <div className="metric-strip" aria-label="Métricas meteorológicas actuales">
        <Metric icon="drop" label="Humedad" value={weather.humidity} suffix="%" />
        <Metric icon="wind" label="Viento" value={weather.wind} suffix=" km/h" />
        <Metric icon="cloudSun" label="Probabilidad de lluvia" value={weather.rain} suffix="%" />
        <Metric icon="gauge" label="Presión" value={weather.pressure} suffix=" hPa" />
        <Metric icon="eye" label="Visibilidad" value={weather.visibility} suffix=" km" />
        <Metric icon="sun" label="Índice UV" value={weather.uv} suffix=" / 11" />
      </div>
    </section>
  )
}
