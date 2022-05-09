import { version } from '../../package.json'

export const healthCheck = (req, res) => {
  res.send('OK')
}

export const systemVersion = (req, res) => {
  res.send(version)
}
