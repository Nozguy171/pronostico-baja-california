# Pronóstico del Tiempo · Baja California

Sitio web de consulta del estado del tiempo para Baja California, del Instituto de Ingeniería de la UABC.

Hecho con React, TypeScript y Vite. Por ahora es solo frontend: los datos del clima y los documentos son de prueba.

## Cómo correrlo

```bash
npm install
npm run dev
```

El sitio queda en http://localhost:3000.

Otros comandos:

- `npm run build`: compila para producción en `dist/`.
- `npm run build:deploy`: igual, pero para publicarse bajo `/pronostico-bc/`.
- `npm run format`: da formato al código con Prettier.

## Estructura

```
src/
  App.tsx          estado general, rutas y ventanas emergentes
  routes.ts        rutas del sitio
  units.ts         cambio entre °C y °F
  components/      piezas reutilizables (encabezado, botones, modales…)
  sections/        secciones de la página de inicio
  pages/           páginas: inicio, archivo histórico y boletines
  bulletins/       contenido de cada boletín (72 h, ciclones, frentes fríos…)
  data/            datos de prueba y configuración del sitio
  styles.css       estilos
public/icons/      íconos del clima
```

## Requerimientos

| Requerimiento | Dónde está |
| --- | --- |
| RF-01 Menú principal de 7 íconos e imagen satelital | `sections/MainMenu.tsx`, `sections/SatelliteBanner.tsx`, `pages/BulletinPage.tsx` |
| RF-02 Avisos emergentes | `components/AlertPopup.tsx` |
| RF-03 Sección Today (estación del Instituto) | `sections/StationToday.tsx` |
| RF-04 Gráfica de diez días | `sections/TenDayForecast.tsx` |
| RF-05 Íconos del pronóstico | `components/WeatherIcon.tsx`, `sections/Highlights.tsx` |
| RF-06 Menú horizontal | `components/Header.tsx`, `pages/ArchivePage.tsx` |
| RF-07 Cambio de °C a °F | `units.ts`, `components/Header.tsx` |

## Sitios de referencia

El diseño sigue los sitios que pide el documento de requerimientos:

- Menú de íconos y aviso emergente: [Protección Civil de Veracruz](https://www.veracruz.gob.mx/proteccioncivil/spcmeteorologia).
- Pronóstico a 72 horas: [Pronóstico extendido del SMN](https://smn.conagua.gob.mx/es/pronosticos/pronosticossubmenu/pronostico-extendido-a-96-horas).
- Ciclones tropicales: [Tropical Tidbits](https://www.tropicaltidbits.com/storminfo/).
- Frentes fríos: [Weather Prediction Center](https://www.wpc.ncep.noaa.gov/).
- Imagen satelital: [National Hurricane Center](https://www.nhc.noaa.gov/).

## Configuración

Lo que después administrará el meteorólogo está por ahora en `src/data/site.ts`:

- `satelliteImageUrl`: enlace de la imagen satelital de la NOAA.
- `activeAlert`: aviso vigente (`null` si no hay).
- `servicesPdfUrl`, `contactsPdfUrl`, `specialNoticePdfUrl`: enlaces a los PDF.
- `fileUrl` en cada opción de `mainMenu`: si se llena, el ícono abre ese archivo directamente.

El contenido de los boletines especiales está en `src/data/bulletins.ts`.

## Pendiente

- Conectar la sección Today a la estación meteorológica del Instituto.
- Backend para subir boletines en PDF y publicar avisos.
- Pronóstico real a 10 días (los días 6 a 10 se generan a partir de los primeros 5).
- Íconos oficiales; los actuales son [Meteocons](https://github.com/basmilius/weather-icons) (licencia MIT).
