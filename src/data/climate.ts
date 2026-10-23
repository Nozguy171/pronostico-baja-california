export type ClimateReference = {
  high: number
  low: number
  rain: string
  sunrise: string
  sunset: string
}

// Promedios de septiembre por municipio (°C).
export const climateReference: Record<string, ClimateReference> = {
  Mexicali: { high: 40, low: 24, rain: '6.3 mm', sunrise: '06:11', sunset: '19:13' },
  Tijuana: { high: 26, low: 17, rain: '5.2 mm', sunrise: '06:25', sunset: '19:05' },
  Ensenada: { high: 26, low: 17, rain: '4.3 mm', sunrise: '06:24', sunset: '19:08' },
  Tecate: { high: 32, low: 19, rain: '4.7 mm', sunrise: '06:18', sunset: '19:10' },
  'Playas de Rosarito': { high: 24, low: 17, rain: '5.4 mm', sunrise: '06:27', sunset: '19:04' },
  'San Felipe': { high: 38, low: 27, rain: '3.0 mm', sunrise: '06:08', sunset: '19:19' },
  'San Quintín': { high: 29, low: 18, rain: '4.1 mm', sunrise: '06:23', sunset: '19:18' },
}
