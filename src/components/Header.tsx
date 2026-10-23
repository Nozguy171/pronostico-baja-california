import type { MouseEvent } from 'react'
import { siteConfig } from '../data/site'
import { archivePath, isHomePath, rootPath } from '../routes'
import type { Unit } from '../units'
import { Icon } from './Icon'
import { LogoMark } from './LogoMark'

// RF-06: menú horizontal
const menuItems: { label: string; href?: string; pdf?: string }[] = [
  { label: 'Inicio', href: rootPath },
  { label: 'Historial / Archivo de datos', href: archivePath },
  { label: 'Lista de servicios', pdf: siteConfig.servicesPdfUrl },
  { label: 'Lista de contactos', pdf: siteConfig.contactsPdfUrl },
  { label: 'Productos meteorológicos' },
]

const unitOptions: [Unit, string][] = [
  ['C', 'Celsius'],
  ['F', 'Fahrenheit'],
]

type HeaderProps = {
  path: string
  unit: Unit
  onUnitChange: (unit: Unit) => void
  onNavigate: (href: string) => void
}

export function Header({ path, unit, onUnitChange, onNavigate }: HeaderProps) {
  const isActive = (href: string) => (href === rootPath ? isHomePath(path) : path === href)
  const handleLink = (href: string) => (event: MouseEvent) => {
    event.preventDefault()
    onNavigate(href)
  }

  return (
    <>
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>
      <div className="institution-bar">
        <div className="shell institution-bar-inner">
          <span>INSTITUTO DE INGENIERÍA · UABC</span>
          <span>Consulta pública del estado del tiempo</span>
        </div>
      </div>
      <header className="site-header">
        <div className="shell header-inner">
          <a href={rootPath} className="brand" onClick={handleLink(rootPath)}>
            <LogoMark />
            <span className="brand-copy">
              <strong>Pronóstico del tiempo</strong>
              <span>Estado de Baja California</span>
            </span>
          </a>
          <div className="header-actions">
            <span className="header-context">
              <Icon name="mapPin" size={16} /> Baja California
            </span>
            <div className="unit-toggle" role="group" aria-label="Unidad de temperatura">
              {unitOptions.map(([value, name]) => (
                <button
                  key={value}
                  type="button"
                  aria-pressed={unit === value}
                  aria-label={`Grados ${name}`}
                  onClick={() => onUnitChange(value)}
                >
                  °{value}
                  <span className="unit-name">{name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>
      <nav className="forecast-tabs" aria-label="Menú horizontal">
        <div className="shell forecast-tabs-inner">
          {menuItems.map((item) => {
            if (item.href) {
              return (
                <a
                  key={item.label}
                  className={isActive(item.href) ? 'active' : ''}
                  href={item.href}
                  onClick={handleLink(item.href)}
                >
                  {item.label}
                </a>
              )
            }
            if (item.pdf) {
              return (
                <a key={item.label} href={item.pdf} target="_blank" rel="noopener noreferrer">
                  {item.label}
                </a>
              )
            }
            return (
              <button key={item.label} type="button">
                {item.label}
              </button>
            )
          })}
        </div>
      </nav>
    </>
  )
}
