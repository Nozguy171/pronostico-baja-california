import { useState } from 'react'
import { Icon } from '../components/Icon'
import { RemoteImage } from '../components/RemoteImage'
import { frontCharts, riskLabels, winterHazards } from '../data/bulletins'
import { stationWeather, tenDayForecast } from '../data/weather'

export function WinterBulletin() {
  const [day, setDay] = useState(0)
  const dayNames = tenDayForecast(stationWeather)
    .slice(0, 3)
    .map((forecast) => forecast.day)

  return (
    <>
      <div className="hazard-table-wrap">
        <table className="hazard-table">
          <thead>
            <tr>
              <th>Fenómeno</th>
              {dayNames.map((name) => (
                <th key={name}>{name.slice(0, 3)}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {winterHazards.map((row) => (
              <tr key={row.hazard}>
                <th scope="row">{row.hazard}</th>
                {row.levels.map((level, index) => (
                  <td key={index}>
                    <span className={`risk risk-${level}`}>{riskLabels[level]}</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <figure className="bulletin-figure">
        <figcaption>
          <span>
            Mapa de pronóstico · {dayNames[day]}{' '}
            <a className="text-link" href="https://www.wpc.ncep.noaa.gov/" target="_blank" rel="noopener noreferrer">
              WPC <Icon name="external" size={14} />
            </a>
          </span>
          <div className="chart-tabs" role="group" aria-label="Día del mapa">
            {frontCharts.map((chart, index) => (
              <button key={chart.label} type="button" aria-pressed={day === index} onClick={() => setDay(index)}>
                {chart.label}
              </button>
            ))}
          </div>
        </figcaption>
        {/* key reinicia el aviso de error al cambiar de día */}
        <RemoteImage key={day} src={frontCharts[day].url} alt={`Mapa de pronóstico del ${dayNames[day]}`} />
      </figure>
    </>
  )
}
