import type { FormEvent } from 'react'
import { Button } from './Button'
import { Icon } from './Icon'
import { Modal } from './Modal'
import type { ShowToast } from './Toast'

// TODO: enviar el formulario cuando haya backend
export function InfoRequestModal({ onClose, onToast }: { onClose: () => void; onToast: ShowToast }) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onClose()
    onToast('Solicitud enviada correctamente.', 'success')
  }

  const footer = (
    <>
      <Button variant="ghost" onClick={onClose}>
        Cancelar
      </Button>
      <Button type="submit" form="info-request-form">
        Enviar solicitud <Icon name="send" size={16} />
      </Button>
    </>
  )

  return (
    <Modal title="Solicitar información" kicker="Atención a usuarios" onClose={onClose} footer={footer}>
      <form id="info-request-form" onSubmit={handleSubmit} className="form-stack">
        <label className="form-field">
          <span>Correo electrónico</span>
          <input required name="email" autoComplete="email" type="email" placeholder="nombre@correo.com" />
        </label>
        <label className="form-field">
          <span>Asunto</span>
          <input required name="subject" autoComplete="off" placeholder="¿En qué podemos ayudarte?…" />
        </label>
        <label className="form-field">
          <span>Mensaje</span>
          <textarea required name="message" rows={4} placeholder="Escribe tu solicitud…" />
        </label>
      </form>
    </Modal>
  )
}
