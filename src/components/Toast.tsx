import { Icon } from './Icon'

export type ToastKind = 'success' | 'info'
export type ToastMessage = { message: string; kind: ToastKind }
export type ShowToast = (message: string, kind?: ToastKind) => void

export function Toast({ toast, onClose }: { toast: ToastMessage; onClose: () => void }) {
  return (
    <div className={`toast toast-${toast.kind}`} role="status" aria-live="polite">
      <Icon name={toast.kind === 'success' ? 'check' : 'info'} size={18} />
      <span>{toast.message}</span>
      <button type="button" aria-label="Cerrar notificación" onClick={onClose}>
        <Icon name="x" size={16} />
      </button>
    </div>
  )
}
