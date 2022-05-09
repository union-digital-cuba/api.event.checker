import { DateTime } from 'luxon'

export const getCurrentDate = () => DateTime.utc().toSQL({ includeOffset: false })
