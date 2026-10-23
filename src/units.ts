import { createContext, useContext } from 'react'

// RF-07: los datos vienen en °C y se convierten solo al mostrarlos
export type Unit = 'C' | 'F'

export const UnitContext = createContext<Unit>('C')

export const useUnit = () => useContext(UnitContext)

export function useTemperature() {
  const unit = useUnit()
  return (celsius: number) => (unit === 'F' ? Math.round((celsius * 9) / 5 + 32) : celsius)
}

const storageKey = 'unidad-temperatura'

export function loadUnit(): Unit {
  try {
    return localStorage.getItem(storageKey) === 'F' ? 'F' : 'C'
  } catch {
    return 'C'
  }
}

export function saveUnit(unit: Unit) {
  try {
    localStorage.setItem(storageKey, unit)
  } catch {
    // Sin almacenamiento la preferencia solo dura mientras la página esté abierta.
  }
}
