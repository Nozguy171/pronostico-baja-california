import { WeatherIcon } from '../components/WeatherIcon'
import { tenDayForecast, type MunicipalityWeather } from '../data/weather'
import { useTemperature, useUnit } from '../units'

type ChartProps = {
  highs: number[]
  lows: number[]
  labels: string[]
  min: number
  max: number
  width: number
  height: number
  variant: 'wide' | 'compact'
}

// Gráfica de líneas en SVG; se dibujan dos tamaños y el CSS muestra uno según el ancho de pantalla.
function TemperatureChart({ highs, lows, labels, min, max, width, height, variant }: ChartProps) {
  const left = 22
  const right = width - 22
  const top = 26
  const bottom = height - 46
  const x = (index: number) => left + (index * (right - left)) / Math.max(labels.length - 1, 1)
  const y = (value: number) => top + ((max - value) / (max - min)) * (bottom - top)
  const points = (values: number[]) => values.map((value, index) => `${x(index)},${y(value)}`).join(' ')
  const gridLines = [0, 1, 2, 3].map((step) => top + (step * (bottom - top)) / 3)

  return (
    <svg
      className={`temperature-chart temperature-chart-${variant}`}
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label="Temperaturas máximas y mínimas de los próximos diez días"
    >
      {gridLines.map((gridY) => (
        <line key={gridY} x1={left} x2={right} y1={gridY} y2={gridY} stroke="#d4ded8" strokeDasharray="3 5" />
      ))}
      <polyline
        className="chart-line-high"
        points={points(highs)}
        fill="none"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        className="chart-line-low"
        points={points(lows)}
        fill="none"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {labels.map((label, index) => (
        <g key={index}>
          <circle className="chart-dot-high" cx={x(index)} cy={y(highs[index])} r="4.5" fill="#fff" strokeWidth="2.5" />
          <circle className="chart-dot-low" cx={x(index)} cy={y(lows[index])} r="4.5" fill="#fff" strokeWidth="2.5" />
          <text x={x(index)} y={y(highs[index]) - 11} textAnchor="middle" className="chart-value">
            {highs[index]}°
          </text>
          <text x={x(index)} y={y(lows[index]) + 20} textAnchor="middle" className="chart-value chart-value-low">
            {lows[index]}°
          </text>
          <text x={x(index)} y={height - 14} textAnchor="middle" className="chart-label">
            {label}
          </text>
        </g>
      ))}
    </svg>
  )
}

// RF-04: gráfica de diez días
export function TenDayForecast({ weather }: { weather: MunicipalityWeather }) {
  const temperature = useTemperature()
  const unit = useUnit()
  const days = tenDayForecast(weather)
  const highs = days.map((day) => temperature(day.high))
  const lows = days.map((day) => temperature(day.low))
  const labels = days.map((day) => day.day.slice(0, 3))
  const min = Math.min(...lows) - 2
  const max = Math.max(...highs) + 2
  const chartProps = { highs, lows, labels, min, max }

  return (
    <section className="content-section shell chart-section" aria-labelledby="ten-day-title">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Boletín extendido</span>
          <h2 id="ten-day-title">Pronóstico a diez días · {weather.name}</h2>
        </div>
        <div className="chart-legend">
          <span className="legend-line legend-high" /> Máxima <span className="legend-line legend-low" /> Mínima{' '}
          <span className="legend-unit">°{unit}</span>
        </div>
      </div>
      <div className="chart-card">
        <div className="chart-y-axis">
          <span>{max}°</span>
          <span>{Math.round((max + min) / 2)}°</span>
          <span>{min}°</span>
        </div>
        <TemperatureChart {...chartProps} width={680} height={230} variant="wide" />
        <TemperatureChart {...chartProps} width={340} height={210} variant="compact" />
      </div>
      <div className="forecast-grid ten-day-grid">
        {days.map((day, index) => (
          <article className="forecast-day" key={index}>
            <span className="forecast-day-name">{day.day}</span>
            <WeatherIcon icon={day.icon} size={48} />
            <span className="forecast-condition">{day.condition}</span>
            <div className="forecast-temps">
              <strong>{temperature(day.high)}°</strong>
              <span>{temperature(day.low)}°</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
