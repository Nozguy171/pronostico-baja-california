import { sampleAlert, type WeatherAlert } from './alerts'

// Configuración que después manejará el meteorólogo desde un panel
export const siteConfig = {
  // Puede ser cualquier URL de imagen
  satelliteImageUrl: 'https://cdn.star.nesdis.noaa.gov/GOES18/ABI/SECTOR/psw/GEOCOLOR/1200x1200.jpg',
  satelliteSourceUrl: 'https://www.nhc.noaa.gov/',
  satelliteCaption: 'GOES-18 · Sector Pacífico suroeste · GeoColor',
  servicesPdfUrl: '',
  contactsPdfUrl: '',
  specialNoticePdfUrl: '',
  // null = no hay aviso
  activeAlert: sampleAlert as WeatherAlert | null,
}

export const meteoconIcon = (name: string) => `${import.meta.env.BASE_URL}icons/${name}.svg`

export type MainMenuItem = {
  id: string
  title: string
  description: string
  icon: string
  // Si se llena, el ícono abre el archivo directamente
  fileUrl?: string
  // Meses (1-12) de la temporada del boletín
  season?: [number, number]
}

export const mainMenu: MainMenuItem[] = [
  {
    id: 'resumen',
    title: 'Resumen de las condiciones diarias',
    description: 'Resumen del estado del tiempo en Baja California para radio y prensa.',
    icon: meteoconIcon('menu/sunrise'),
  },
  {
    id: 'informe',
    title: 'Informe meteorológico del día',
    description: 'Informe meteorológico elaborado por el Instituto de Ingeniería.',
    icon: meteoconIcon('menu/partly-cloudy-day'),
  },
  {
    id: 'avisos',
    title: 'Avisos especiales',
    description: 'Avisos sobre fenómenos meteorológicos de relevancia para el estado.',
    icon: meteoconIcon('menu/lightning-bolt'),
  },
  {
    id: 'extendido-72',
    title: 'Pronóstico extendido a 72 horas',
    description: 'Máximas, mínimas y condiciones esperadas por municipio para los próximos tres días.',
    icon: meteoconIcon('menu/partly-cloudy-day-rain'),
  },
  {
    id: 'boletin-10',
    title: 'Boletín extendido a 10 días',
    description: '',
    icon: meteoconIcon('menu/thermometer'),
  },
  {
    id: 'ciclones',
    title: 'Boletín especial de ciclones tropicales',
    description: 'Seguimiento de ciclones tropicales con posible efecto en Baja California.',
    icon: meteoconIcon('menu/hurricane'),
    season: [5, 11],
  },
  {
    id: 'frentes',
    title: 'Boletín especial de frentes fríos e invierno',
    description: 'Seguimiento de frentes fríos, tormentas invernales y descensos de temperatura.',
    icon: meteoconIcon('menu/snowflake'),
    season: [10, 3],
  },
]

// La temporada puede cruzar el fin de año (octubre a marzo).
export function inSeason([start, end]: [number, number], month = new Date().getMonth() + 1) {
  return start <= end ? month >= start && month <= end : month >= start || month <= end
}
