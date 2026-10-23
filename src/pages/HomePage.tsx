import { Footer } from '../components/Footer'
import type { ShowToast } from '../components/Toast'
import { documents, type WeatherDocument } from '../data/documents'
import { siteConfig } from '../data/site'
import { municipalities, stationWeather } from '../data/weather'
import { bulletinPath } from '../routes'
import { AlertBanner } from '../sections/AlertBanner'
import { ClimateOverview } from '../sections/ClimateOverview'
import { CurrentConditions } from '../sections/CurrentConditions'
import { Glossary } from '../sections/Glossary'
import { Highlights } from '../sections/Highlights'
import { HourlyForecast } from '../sections/HourlyForecast'
import { LatestDocument } from '../sections/LatestDocument'
import { MainMenu } from '../sections/MainMenu'
import { SatelliteBanner } from '../sections/SatelliteBanner'
import { StationToday } from '../sections/StationToday'
import { TenDayForecast } from '../sections/TenDayForecast'

type HomePageProps = {
  city: string
  onCityChange: (city: string) => void
  onNavigate: (href: string) => void
  onPreview: (document: WeatherDocument) => void
  onToast: ShowToast
  onRequestInfo: () => void
}

export function HomePage({ city, onCityChange, onNavigate, onPreview, onToast, onRequestInfo }: HomePageProps) {
  const weather = municipalities[city]
  const alert = siteConfig.activeAlert

  return (
    <main id="main-content">
      <SatelliteBanner />
      <MainMenu onNavigate={onNavigate} />
      {alert && <AlertBanner alert={alert} onShowDetails={() => onNavigate(bulletinPath('avisos'))} />}
      <StationToday weather={stationWeather} />
      <Highlights weather={weather} city={city} onCityChange={onCityChange} />
      <HourlyForecast weather={weather} />
      <TenDayForecast weather={weather} />
      <ClimateOverview weather={weather} />
      <CurrentConditions weather={weather} />
      <Glossary />
      <LatestDocument document={documents[0]} onPreview={onPreview} onToast={onToast} />
      <Footer onRequestInfo={onRequestInfo} />
    </main>
  )
}
