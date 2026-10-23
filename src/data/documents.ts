export type WeatherDocument = {
  id: number
  title: string
  date: string
  year: number
  month: number
  monthName: string
  time: string
  downloads: number
}

export const documents: WeatherDocument[] = [
  {
    id: 1,
    title: 'Pronóstico meteorológico de Baja California',
    date: '3 de septiembre de 2026',
    year: 2026,
    month: 9,
    monthName: 'Septiembre',
    time: '08:00',
    downloads: 125,
  },
  {
    id: 2,
    title: 'Pronóstico meteorológico de Baja California',
    date: '2 de septiembre de 2026',
    year: 2026,
    month: 9,
    monthName: 'Septiembre',
    time: '08:00',
    downloads: 98,
  },
  {
    id: 3,
    title: 'Pronóstico meteorológico de Baja California',
    date: '28 de agosto de 2026',
    year: 2026,
    month: 8,
    monthName: 'Agosto',
    time: '08:00',
    downloads: 84,
  },
  {
    id: 4,
    title: 'Pronóstico meteorológico de Baja California',
    date: '15 de agosto de 2026',
    year: 2026,
    month: 8,
    monthName: 'Agosto',
    time: '08:00',
    downloads: 76,
  },
  {
    id: 5,
    title: 'Pronóstico meteorológico de Baja California',
    date: '10 de junio de 2025',
    year: 2025,
    month: 6,
    monthName: 'Junio',
    time: '08:00',
    downloads: 112,
  },
  {
    id: 6,
    title: 'Pronóstico meteorológico de Baja California',
    date: '24 de mayo de 2025',
    year: 2025,
    month: 5,
    monthName: 'Mayo',
    time: '08:00',
    downloads: 91,
  },
  {
    id: 7,
    title: 'Pronóstico meteorológico de Baja California',
    date: '12 de febrero de 2025',
    year: 2025,
    month: 2,
    monthName: 'Febrero',
    time: '08:00',
    downloads: 66,
  },
  {
    id: 8,
    title: 'Pronóstico meteorológico de Baja California',
    date: '30 de octubre de 2024',
    year: 2024,
    month: 10,
    monthName: 'Octubre',
    time: '08:00',
    downloads: 71,
  },
  {
    id: 9,
    title: 'Pronóstico meteorológico de Baja California',
    date: '16 de julio de 2024',
    year: 2024,
    month: 7,
    monthName: 'Julio',
    time: '08:00',
    downloads: 59,
  },
  {
    id: 10,
    title: 'Pronóstico meteorológico de Baja California',
    date: '8 de marzo de 2023',
    year: 2023,
    month: 3,
    monthName: 'Marzo',
    time: '08:00',
    downloads: 48,
  },
  {
    id: 11,
    title: 'Pronóstico meteorológico de Baja California',
    date: '19 de noviembre de 2019',
    year: 2019,
    month: 11,
    monthName: 'Noviembre',
    time: '08:00',
    downloads: 42,
  },
  {
    id: 12,
    title: 'Pronóstico meteorológico de Baja California',
    date: '5 de abril de 2015',
    year: 2015,
    month: 4,
    monthName: 'Abril',
    time: '08:00',
    downloads: 34,
  },
]

export const archiveYears = [2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015]
