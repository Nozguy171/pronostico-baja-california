// Contenido de ejemplo de los boletines especiales

// Pronóstico extendido a 72 horas
export const extendedForecast = {
  number: 247,
  issuedAt: '14:00',
  significant:
    'SE PREVÉ AMBIENTE MUY CALUROSO EN EL VALLE DE MEXICALI Y SAN FELIPE, ADEMÁS DE VIENTO DEL OESTE CON RACHAS DE 40 A 50 KM/H EN LA RUMOROSA.',
  periods: [
    'Una dorsal de alta presión en niveles medios de la atmósfera mantendrá cielo mayormente despejado y temperaturas muy calurosas en el valle de Mexicali y la costa del golfo de California. En la costa del Pacífico, el flujo marino favorecerá nublados matutinos y ambiente templado.',
    'La dorsal se debilitará ligeramente, permitiendo el ingreso de humedad del sur que originará nublados dispersos por la tarde en la zona montañosa. Continuará el ambiente caluroso en el oriente del estado.',
    'Un canal de baja presión sobre el noroeste del país favorecerá viento del oeste con rachas fuertes en la zona de La Rumorosa y un ligero descenso de las temperaturas máximas en la costa.',
  ],
  preparedBy: 'Área de Meteorología, Instituto de Ingeniería, UABC',
}

// Ciclones tropicales
export type Cyclone = {
  name: string
  updatedAt: string
  location: string
  maxWinds: string
  gusts: string
  pressure: string
  movement: string
  distance: string
}

// Vacío = no hay ciclones activos
export const activeCyclones: Cyclone[] = []

export const cycloneImages = [
  {
    title: 'Imagen infrarroja · GOES-18',
    url: 'https://cdn.star.nesdis.noaa.gov/GOES18/ABI/SECTOR/psw/13/1200x1200.jpg',
    source: 'https://www.star.nesdis.noaa.gov/GOES/',
  },
  {
    title: 'Perspectiva a 7 días · Pacífico oriental (NHC)',
    url: 'https://www.nhc.noaa.gov/xgtwo/two_pac_7d0.png',
    source: 'https://www.nhc.noaa.gov/',
  },
]

// Frentes fríos e invierno
export const frontCharts = [1, 2, 3].map((day) => ({
  label: `Día ${day}`,
  url: `https://www.wpc.ncep.noaa.gov/NationalForecastChart/staticmaps/noaad${day}.png`,
}))

export type RiskLevel = 'none' | 'low' | 'moderate' | 'high'

export const riskLabels: Record<RiskLevel, string> = {
  none: 'Sin riesgo',
  low: 'Bajo',
  moderate: 'Moderado',
  high: 'Alto',
}

export const winterHazards: { hazard: string; levels: RiskLevel[] }[] = [
  { hazard: 'Heladas', levels: ['none', 'low', 'low'] },
  { hazard: 'Nevadas en la sierra', levels: ['none', 'none', 'low'] },
  { hazard: 'Viento fuerte', levels: ['moderate', 'low', 'none'] },
  { hazard: 'Descenso de temperatura', levels: ['low', 'moderate', 'moderate'] },
]
