import { version } from '../../package.json'

export const healthCheck = (req, res) => {
  res.send('It works!')
}

export const systemVersion = (req, res) => {
  res.send(`API Version: ${version}`)
}
