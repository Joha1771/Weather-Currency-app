export interface WeatherData {
  city: string
  temp: number
  feelsLike: number
  humidity: number
  windSpeed: number
  condition: string
  icon: string
  uvIndex: number
  visibility: number
  pressure: number
  hourly: { time: string; temp: number; icon: string }[]
  daily: { day: string; min: number; max: number; icon: string; condition: string }[]
}

const WMO_CODES: Record<number, { label: string; icon: string }> = {
  0: { label: 'Tiniq', icon: '☀️' },
  1: { label: 'Asosan tiniq', icon: '🌤️' },
  2: { label: 'Qisman bulutli', icon: '⛅' },
  3: { label: 'Bulutli', icon: '☁️' },
  45: { label: 'Tumanli', icon: '🌫️' },
  48: { label: 'Qirov tumani', icon: '🌫️' },
  51: { label: 'Yengil shivala', icon: '🌦️' },
  61: { label: 'Yomg\'ir', icon: '🌧️' },
  63: { label: 'Kuchli yomg\'ir', icon: '🌧️' },
  65: { label: 'Juda kuchli yomg\'ir', icon: '⛈️' },
  71: { label: 'Qor', icon: '❄️' },
  80: { label: 'Yomg\'ir dushlari', icon: '🌦️' },
  95: { label: 'Momaqaldiroq', icon: '⛈️' },
}

export async function fetchWeather(lat: number, lon: number, city: string): Promise<WeatherData> {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,pressure_msl,visibility,uv_index&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=7`

  const res = await fetch(url, { next: { revalidate: 300 } })
  if (!res.ok) throw new Error('Weather fetch failed')
  const d = await res.json()

  const code = d.current.weather_code
  const meta = WMO_CODES[code] || { label: 'Noma\'lum', icon: '🌡️' }

  const now = new Date()
  const hourly = d.hourly.time.slice(0, 24).map((t: string, i: number) => ({
    time: new Date(t).getHours() + ':00',
    temp: Math.round(d.hourly.temperature_2m[i]),
    icon: (WMO_CODES[d.hourly.weather_code[i]] || { icon: '☀️' }).icon,
  })).filter((_: unknown, i: number) => i % 3 === 0)

  const days = ['Yak', 'Du', 'Se', 'Ch', 'Pa', 'Ju', 'Sh']
  const daily = d.daily.time.map((t: string, i: number) => {
    const date = new Date(t)
    return {
      day: i === 0 ? 'Bugun' : i === 1 ? 'Ertaga' : days[date.getDay()],
      min: Math.round(d.daily.temperature_2m_min[i]),
      max: Math.round(d.daily.temperature_2m_max[i]),
      icon: (WMO_CODES[d.daily.weather_code[i]] || { icon: '☀️' }).icon,
      condition: (WMO_CODES[d.daily.weather_code[i]] || { label: 'Noma\'lum' }).label,
    }
  })

  return {
    city,
    temp: Math.round(d.current.temperature_2m),
    feelsLike: Math.round(d.current.apparent_temperature),
    humidity: d.current.relative_humidity_2m,
    windSpeed: Math.round(d.current.wind_speed_10m),
    condition: meta.label,
    icon: meta.icon,
    uvIndex: Math.round(d.current.uv_index || 0),
    visibility: Math.round((d.current.visibility || 10000) / 1000),
    pressure: Math.round(d.current.pressure_msl || 1013),
    hourly,
    daily,
  }
}
