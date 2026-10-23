// En producción el sitio está en /pronostico-bc/ (ver vite.config.ts)
export const basePath = import.meta.env.BASE_URL.replace(/\/$/, '')
export const rootPath = `${basePath}/`
export const routePath = (path: string) => `${basePath}${path}`

export const archivePath = routePath('/archivo')
export const bulletinPath = (id: string) => routePath(`/boletines/${id}`)

export const isHomePath = (path: string) => path === rootPath || path === basePath

export const getBulletinId = (path: string) => {
  const prefix = bulletinPath('')
  return path.startsWith(prefix) ? path.slice(prefix.length) : null
}
