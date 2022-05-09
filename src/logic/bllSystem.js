import { version } from '../../package.json'

export const healthCheck = (req, res) => {
  res.send('Its alive!')
}

export const systemVersion = (req, res) => {
  res.send(`API Version: ${version}`)
}
