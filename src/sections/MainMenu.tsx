import { mainMenu, type MainMenuItem } from '../data/site'
import { bulletinPath, routePath } from '../routes'

// El boletín a 10 días está en la misma página de inicio; los demás tienen página propia.
const menuHref = (item: MainMenuItem) =>
  item.id === 'boletin-10' ? routePath('/#ten-day-title') : bulletinPath(item.id)

// RF-01: menú principal
export function MainMenu({ onNavigate }: { onNavigate: (href: string) => void }) {
  return (
    <nav className="main-menu shell" aria-label="Menú principal">
      <ul>
        {mainMenu.map((item) => {
          const content = (
            <>
              <span className="menu-tile-icon">
                <img src={item.icon} width={64} height={64} alt="" />
              </span>
              <strong>{item.title}</strong>
            </>
          )
          return (
            <li key={item.id}>
              {item.fileUrl ? (
                <a className="menu-tile" href={item.fileUrl} target="_blank" rel="noopener noreferrer">
                  {content}
                </a>
              ) : (
                <a
                  className="menu-tile"
                  href={menuHref(item)}
                  onClick={(event) => {
                    event.preventDefault()
                    onNavigate(menuHref(item))
                  }}
                >
                  {content}
                </a>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
