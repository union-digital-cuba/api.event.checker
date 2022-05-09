import { getCurrentDate } from './handleDates'

export const consoleLog = (message) => {
  console.log(`${getCurrentDate()} : Log => ${message}`)
}
export const consoleError = (message) => {
  console.error(`${getCurrentDate()} : Error => ${message}`)
}
export const consoleInfo = (message) => {
  console.info(`${getCurrentDate()} : Info => ${message}`)
}
export const consoleWarn = (message) => {
  console.warn(`${getCurrentDate()} : Warn => ${message}`)
}
