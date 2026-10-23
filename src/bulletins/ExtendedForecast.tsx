import { extendedForecast } from '../data/bulletins'
import { municipalities, municipalityNames, reportDate, stationWeather, tenDayForecast } from '../data/weather'
import { useTemperature, useUnit } from '../units'

// "Mexicali, Tijuana y Tecate"
const joinNames = (names: string[]) =>
  names.length > 1 ? `${names.slice(0, -1).join(', ')} y ${names[names.length - 1]}` : names[0]

// Agrupa municipios en rangos de 5 grados, del más caluroso al más fresco.
function groupByRange(entries: [string, number][]) {
  const groups = new Map<number, string[]>()
  for (const [name, value] of entries) {
    const from = Math.floor(value / 5) * 5
    groups.set(from, [...(groups.get(from) ?? []), name])
  }
  return [...groups].sort((a, b) => b[0] - a[0])
}

function groupByCondition(dayIndex: number) {
  const groups = new Map<string, string[]>()
  for (const name of municipalityNames) {
    const { condition } = tenDayForecast(municipalities[name])[dayIndex]
    groups.set(condition, [...(groups.get(condition) ?? []), name])
  }
  return [...groups]
}

export function ExtendedForecast() {
  const temperature = useTemperature()
  const unit = useUnit()
  const dayNames = [
    reportDate.weekday.toLowerCase(),
    ...tenDayForecast(stationWeather).map((day) => day.day.toLowerCase()),
  ]

  return (
    <article className="bulletin-document">
      <div className="bulletin-head">
        <span>
          <strong>No. de aviso: {extendedForecast.number}</strong>
          <br />
          Mexicali, Baja California, a {reportDate.short}.
        </span>
        <strong>Emisión: {extendedForecast.issuedAt} h</strong>
      </div>

      <h2>Fenómenos significativos</h2>
      <p className="bulletin-significant">{extendedForecast.significant}</p>

      {extendedForecast.periods.map((text, index) => {
        const entries = (pick: 'high' | 'low') =>
          municipalityNames.map(
            (name) => [name, temperature(tenDayForecast(municipalities[name])[index][pick])] as [string, number],
          )
        return (
          <section key={index}>
            <h2>
              Pronóstico a {24 * (index + 1)} horas. Periodo de validez de las 08:00 h del {dayNames[index]} a las 08:00
              h del {dayNames[index + 1]}
            </h2>
            <p>{text}</p>
            <ul>
              {groupByRange(entries('high')).map(([from, names]) => (
                <li key={`max-${from}`}>
                  <strong>
                    Temperaturas máximas de {from} a {from + 5} °{unit}:
                  </strong>{' '}
                  {joinNames(names)}.
                </li>
              ))}
              {groupByRange(entries('low')).map(([from, names]) => (
                <li key={`min-${from}`}>
                  <strong>
                    Temperaturas mínimas de {from} a {from + 5} °{unit}:
                  </strong>{' '}
                  {joinNames(names)}.
                </li>
              ))}
              {groupByCondition(index).map(([condition, names]) => (
                <li key={condition}>
                  <strong>{condition}:</strong> {joinNames(names)}.
                </li>
              ))}
            </ul>
          </section>
        )
      })}

      <p className="bulletin-foot">
        Elaboró: {extendedForecast.preparedBy}. Próxima emisión: mañana a las {extendedForecast.issuedAt} h.
      </p>
    </article>
  )
}
