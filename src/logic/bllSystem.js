import { version } from '../../package.json'

export const healthCheck = (req, res) => {
  res.status(200).json('It works!')
}

export const systemVersion = (req, res) => {
  res.status(200).json(`API Version: ${version}`)
}
