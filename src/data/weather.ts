export type WeatherIcon = 'sun' | 'cloud-sun' | 'cloud' | 'wind' | 'moon'

export type HourlyPoint = {
  time: string
  temperature: number
  rain: number
  icon: WeatherIcon
}

export type ForecastDay = {
  day: string
  condition: string
  high: number
  low: number
  icon: WeatherIcon
}

export type MunicipalityWeather = {
  name: string
  region: string
  temperature: number
  condition: string
  feelsLike: number
  high: number
  low: number
  humidity: number
  wind: number
  rain: number
  pressure: number
  visibility: number
  uv: number
  gusts: number
  dewPoint: number
  icon: WeatherIcon
  hourly: HourlyPoint[]
  week: ForecastDay[]
}

const commonHours = (temperatures: number[], rains: number[], icons: WeatherIcon[]): HourlyPoint[] =>
  temperatures.map((temperature, index) => ({
    time: index === 0 ? 'Ahora' : `${14 + index}:00`,
    temperature,
    rain: rains[index],
    icon: icons[index],
  }))

export const municipalities: Record<string, MunicipalityWeather> = {
  Mexicali: {
    name: 'Mexicali',
    region: 'Valle de Mexicali',
    temperature: 38,
    condition: 'Despejado',
    feelsLike: 40,
    high: 42,
    low: 27,
    humidity: 22,
    wind: 18,
    rain: 5,
    pressure: 1008,
    visibility: 16,
    uv: 9,
    gusts: 29,
    dewPoint: 13,
    icon: 'sun',
    hourly: commonHours(
      [38, 39, 40, 41, 40, 38, 36],
      [5, 5, 5, 4, 5, 6, 7],
      ['sun', 'sun', 'sun', 'sun', 'sun', 'cloud-sun', 'cloud-sun'],
    ),
    week: [
      { day: 'Viernes', condition: 'Soleado', high: 42, low: 27, icon: 'sun' },
      { day: 'Sábado', condition: 'Parcialmente nublado', high: 40, low: 26, icon: 'cloud-sun' },
      { day: 'Domingo', condition: 'Soleado', high: 41, low: 27, icon: 'sun' },
      { day: 'Lunes', condition: 'Soleado', high: 42, low: 28, icon: 'sun' },
      { day: 'Martes', condition: 'Parcialmente nublado', high: 39, low: 25, icon: 'cloud-sun' },
    ],
  },
  Tijuana: {
    name: 'Tijuana',
    region: 'Costa noroeste',
    temperature: 24,
    condition: 'Parcialmente nublado',
    feelsLike: 24,
    high: 27,
    low: 18,
    humidity: 68,
    wind: 13,
    rain: 3,
    pressure: 1013,
    visibility: 12,
    uv: 7,
    gusts: 23,
    dewPoint: 17,
    icon: 'cloud-sun',
    hourly: commonHours(
      [24, 25, 26, 27, 26, 24, 22],
      [3, 3, 4, 3, 3, 4, 5],
      ['cloud-sun', 'cloud-sun', 'sun', 'sun', 'cloud-sun', 'cloud-sun', 'moon'],
    ),
    week: [
      { day: 'Viernes', condition: 'Parcialmente nublado', high: 27, low: 18, icon: 'cloud-sun' },
      { day: 'Sábado', condition: 'Nublado', high: 25, low: 17, icon: 'cloud' },
      { day: 'Domingo', condition: 'Soleado', high: 28, low: 18, icon: 'sun' },
      { day: 'Lunes', condition: 'Soleado', high: 29, low: 19, icon: 'sun' },
      { day: 'Martes', condition: 'Parcialmente nublado', high: 26, low: 17, icon: 'cloud-sun' },
    ],
  },
  Ensenada: {
    name: 'Ensenada',
    region: 'Costa del Pacífico',
    temperature: 23,
    condition: 'Soleado',
    feelsLike: 23,
    high: 26,
    low: 17,
    humidity: 61,
    wind: 11,
    rain: 2,
    pressure: 1015,
    visibility: 15,
    uv: 8,
    gusts: 19,
    dewPoint: 15,
    icon: 'sun',
    hourly: commonHours(
      [23, 24, 25, 26, 25, 23, 21],
      [2, 2, 2, 2, 3, 3, 4],
      ['sun', 'sun', 'sun', 'sun', 'cloud-sun', 'cloud-sun', 'moon'],
    ),
    week: [
      { day: 'Viernes', condition: 'Soleado', high: 26, low: 17, icon: 'sun' },
      { day: 'Sábado', condition: 'Soleado', high: 27, low: 17, icon: 'sun' },
      { day: 'Domingo', condition: 'Parcialmente nublado', high: 25, low: 16, icon: 'cloud-sun' },
      { day: 'Lunes', condition: 'Soleado', high: 28, low: 18, icon: 'sun' },
      { day: 'Martes', condition: 'Soleado', high: 27, low: 17, icon: 'sun' },
    ],
  },
  Tecate: {
    name: 'Tecate',
    region: 'Sierra de Baja California',
    temperature: 29,
    condition: 'Despejado',
    feelsLike: 29,
    high: 33,
    low: 19,
    humidity: 33,
    wind: 16,
    rain: 4,
    pressure: 1010,
    visibility: 18,
    uv: 8,
    gusts: 25,
    dewPoint: 12,
    icon: 'sun',
    hourly: commonHours(
      [29, 30, 31, 33, 32, 30, 27],
      [4, 4, 4, 5, 5, 6, 7],
      ['sun', 'sun', 'sun', 'sun', 'sun', 'cloud-sun', 'moon'],
    ),
    week: [
      { day: 'Viernes', condition: 'Soleado', high: 33, low: 19, icon: 'sun' },
      { day: 'Sábado', condition: 'Soleado', high: 32, low: 18, icon: 'sun' },
      { day: 'Domingo', condition: 'Parcialmente nublado', high: 31, low: 19, icon: 'cloud-sun' },
      { day: 'Lunes', condition: 'Soleado', high: 34, low: 20, icon: 'sun' },
      { day: 'Martes', condition: 'Soleado', high: 33, low: 19, icon: 'sun' },
    ],
  },
  'Playas de Rosarito': {
    name: 'Playas de Rosarito',
    region: 'Costa noroeste',
    temperature: 22,
    condition: 'Nublado',
    feelsLike: 22,
    high: 24,
    low: 17,
    humidity: 73,
    wind: 12,
    rain: 4,
    pressure: 1014,
    visibility: 11,
    uv: 6,
    gusts: 22,
    dewPoint: 17,
    icon: 'cloud',
    hourly: commonHours(
      [22, 22, 23, 24, 23, 22, 20],
      [4, 4, 4, 4, 5, 5, 6],
      ['cloud', 'cloud-sun', 'cloud-sun', 'cloud-sun', 'cloud', 'cloud', 'moon'],
    ),
    week: [
      { day: 'Viernes', condition: 'Nublado', high: 24, low: 17, icon: 'cloud' },
      { day: 'Sábado', condition: 'Parcialmente nublado', high: 25, low: 17, icon: 'cloud-sun' },
      { day: 'Domingo', condition: 'Soleado', high: 26, low: 18, icon: 'sun' },
      { day: 'Lunes', condition: 'Soleado', high: 27, low: 18, icon: 'sun' },
      { day: 'Martes', condition: 'Nublado', high: 24, low: 17, icon: 'cloud' },
    ],
  },
  'San Felipe': {
    name: 'San Felipe',
    region: 'Golfo de California',
    temperature: 36,
    condition: 'Soleado',
    feelsLike: 38,
    high: 39,
    low: 28,
    humidity: 36,
    wind: 20,
    rain: 6,
    pressure: 1007,
    visibility: 14,
    uv: 10,
    gusts: 31,
    dewPoint: 19,
    icon: 'sun',
    hourly: commonHours(
      [36, 37, 38, 39, 38, 36, 34],
      [6, 6, 6, 6, 7, 7, 8],
      ['sun', 'sun', 'sun', 'sun', 'sun', 'cloud-sun', 'moon'],
    ),
    week: [
      { day: 'Viernes', condition: 'Soleado', high: 39, low: 28, icon: 'sun' },
      { day: 'Sábado', condition: 'Soleado', high: 38, low: 27, icon: 'sun' },
      { day: 'Domingo', condition: 'Soleado', high: 40, low: 29, icon: 'sun' },
      { day: 'Lunes', condition: 'Soleado', high: 41, low: 29, icon: 'sun' },
      { day: 'Martes', condition: 'Soleado', high: 39, low: 28, icon: 'sun' },
    ],
  },
  'San Quintín': {
    name: 'San Quintín',
    region: 'Costa del Pacífico',
    temperature: 26,
    condition: 'Soleado',
    feelsLike: 26,
    high: 29,
    low: 18,
    humidity: 55,
    wind: 14,
    rain: 2,
    pressure: 1012,
    visibility: 17,
    uv: 8,
    gusts: 24,
    dewPoint: 16,
    icon: 'sun',
    hourly: commonHours(
      [26, 27, 28, 29, 28, 26, 23],
      [2, 2, 2, 2, 2, 3, 4],
      ['sun', 'sun', 'sun', 'sun', 'cloud-sun', 'cloud-sun', 'moon'],
    ),
    week: [
      { day: 'Viernes', condition: 'Soleado', high: 29, low: 18, icon: 'sun' },
      { day: 'Sábado', condition: 'Soleado', high: 30, low: 18, icon: 'sun' },
      { day: 'Domingo', condition: 'Soleado', high: 30, low: 19, icon: 'sun' },
      { day: 'Lunes', condition: 'Parcialmente nublado', high: 28, low: 18, icon: 'cloud-sun' },
      { day: 'Martes', condition: 'Soleado', high: 29, low: 17, icon: 'sun' },
    ],
  },
}

export const municipalityNames = Object.keys(municipalities)

const dayNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

// TODO: los días 6 a 10 se repiten de los primeros 5; usar el pronóstico real
export const tenDayForecast = (weather: MunicipalityWeather): ForecastDay[] => {
  const start = dayNames.indexOf(weather.week[0].day)
  return Array.from({ length: 10 }, (_, index) => {
    const base = weather.week[index % weather.week.length]
    const drift = index < weather.week.length ? 0 : index % 2 === 0 ? -1 : 1
    return { ...base, day: dayNames[(start + index) % 7], high: base.high + drift, low: base.low + drift }
  })
}

// TODO: conectar con la estación del Instituto de Ingeniería
export const stationWeather = municipalities.Mexicali

// Fecha y hora de los datos de prueba.
export const reportDate = {
  weekday: 'Jueves',
  long: 'Jueves, 3 de septiembre de 2026',
  short: '3 de septiembre de 2026',
  time: '14:30',
}
