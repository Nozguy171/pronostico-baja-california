import { Icon } from '../components/Icon'
import { meteoconIcon } from '../data/site'
import { municipalityNames, type MunicipalityWeather } from '../data/weather'
import { useTemperature } from '../units'

type HighlightsProps = {
  weather: MunicipalityWeather
  city: string
  onCityChange: (city: string) => void
}

// RF-05: highlights del día
export function Highlights({ weather, city, onCityChange }: HighlightsProps) {
  const temperature = useTemperature()

  const heat =
    weather.feelsLike >= 38 ? 'Calor intenso' : weather.feelsLike >= 30 ? 'Calor moderado' : 'Confort térmico'
  const wind = weather.gusts >= 30 ? 'Rachas fuertes' : weather.gusts >= 20 ? 'Viento activo' : 'Viento ligero'
  const visibility =
    weather.visibility >= 15
      ? 'Buena visibilidad'
      : weather.visibility >= 10
        ? 'Visibilidad regular'
        : 'Visibilidad reducida'
  const solar =
    weather.uv >= 8 ? 'Protección solar alta' : weather.uv >= 6 ? 'Protección solar necesaria' : 'Exposición moderada'

  const highlights = [
    {
      label: 'Calor',
      value: `${temperature(weather.feelsLike)}°`,
      detail: heat,
      icon: 'thermometer-warmer',
      tone: 'heat',
    },
    {
      label: 'Viento',
      value: `${weather.wind} km/h`,
      detail: `${wind} · rachas ${weather.gusts} km/h`,
      icon: 'windsock',
      tone: 'wind',
    },
    { label: 'Visibilidad', value: `${weather.visibility} km`, detail: visibility, icon: 'mist', tone: 'visibility' },
    { label: 'Sol y UV', value: `${weather.uv} / 11`, detail: solar, icon: 'uv-index', tone: 'solar' },
  ]

  return (
    <section
      className="content-section shell signals-section"
      id="pronostico-municipio"
      aria-labelledby="signals-title"
    >
      <div className="section-heading">
        <div>
          <span className="eyebrow">Pronóstico por municipio</span>
          <h2 id="signals-title">Qué esperar hoy en {weather.name}</h2>
        </div>
        <label className="select-field compact-select">
          <span>Consultar otro municipio</span>
          <div className="select-wrap">
            <select value={city} onChange={(event) => onCityChange(event.target.value)}>
              {municipalityNames.map((name) => (
                <option key={name}>{name}</option>
              ))}
            </select>
            <Icon name="chevronDown" size={17} />
          </div>
        </label>
      </div>
      <div className="signals-grid">
        {highlights.map((item) => (
          <article className={`signal-card signal-${item.tone}`} key={item.label}>
            <div className="signal-head">
              <span className="signal-icon">
                <img src={meteoconIcon(item.icon)} width={40} height={40} alt="" />
              </span>
              <span>{item.label}</span>
            </div>
            <strong>{item.value}</strong>
            <p>{item.detail}</p>
            <span className="signal-rule" />
          </article>
        ))}
      </div>
    </section>
  )
}
