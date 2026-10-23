export type AlertLevel = 'Informativo' | 'Precaución' | 'Importante' | 'Severo'

export type WeatherAlert = {
  level: AlertLevel
  title: string
  scope: string
  validity: string
  body: string
}

export const sampleAlert: WeatherAlert = {
  level: 'Importante',
  title: 'Temperaturas extremadamente altas.',
  scope: 'Mexicali y zonas cercanas',
  validity: '12:00 – 20:00',
  body: 'Mantente hidratado, evita la exposición prolongada y protege a personas vulnerables.',
}
