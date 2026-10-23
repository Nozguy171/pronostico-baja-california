import { WeatherIcon } from '../components/WeatherIcon'
import { municipalities, municipalityNames, stationWeather } from '../data/weather'
import { useTemperature, useUnit } from '../units'

// TODO: el texto lo debe redactar el meteorólogo
export function DailySummary() {
  const temperature = useTemperature()
  const unit = useUnit()
  const station = stationWeather

  return (
    <div className="daily-summary">
      <p>
        Para hoy en {station.name} se espera cielo {station.condition.toLowerCase()}, con máxima de{' '}
        {temperature(station.high)}°{unit} y mínima de {temperature(station.low)}°{unit}. Viento de {station.wind} km/h
        con rachas de {station.gusts} km/h y {station.rain}% de probabilidad de lluvia. Índice UV {station.uv}: se
        recomienda protección solar.
      </p>
      <ul>
        {municipalityNames.map((name) => {
          const city = municipalities[name]
          return (
            <li key={name}>
              <WeatherIcon icon={city.icon} size={34} />
              <strong>{name}</strong>
              <span>{city.condition}</span>
              <b>
                {temperature(city.high)}° / {temperature(city.low)}°
              </b>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
