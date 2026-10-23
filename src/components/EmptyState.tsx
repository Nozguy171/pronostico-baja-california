import type { ReactNode } from 'react'
import { Icon } from './Icon'

export function EmptyState({ title, text, action }: { title: string; text: string; action?: ReactNode }) {
  return (
    <div className="empty-state">
      <span className="empty-icon">
        <Icon name="file" size={26} />
      </span>
      <h2>{title}</h2>
      <p>{text}</p>
      {action}
    </div>
  )
}
