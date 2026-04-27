export interface CurrencyRate {
  code: string
  name: string
  rate: number
  flag: string
  change: number
}

export interface CurrencyData {
  base: string
  rates: CurrencyRate[]
  updatedAt: string
}

const CURRENCIES = [
  { code: 'USD', name: 'Amer. dollari', flag: '🇺🇸' },
  { code: 'EUR', name: 'Yevro', flag: '🇪🇺' },
  { code: 'RUB', name: 'Rus rubli', flag: '🇷🇺' },
  { code: 'GBP', name: 'Brit. funt', flag: '🇬🇧' },
  { code: 'CNY', name: 'Xitoy yuani', flag: '🇨🇳' },
  { code: 'JPY', name: 'Yapon iyenasi', flag: '🇯🇵' },
  { code: 'KZT', name: 'Qozog\'iston tengesi', flag: '🇰🇿' },
  { code: 'TRY', name: 'Turk lirasi', flag: '🇹🇷' },
  { code: 'AED', name: 'BAA dirhami', flag: '🇦🇪' },
  { code: 'SAR', name: 'Saudiya riyoli', flag: '🇸🇦' },
]

export async function fetchCurrency(): Promise<CurrencyData> {
  // Using exchangerate-api free endpoint
  const res = await fetch('https://open.er-api.com/v6/latest/UZS', {
    next: { revalidate: 3600 }
  })

  if (!res.ok) throw new Error('Currency fetch failed')
  const data = await res.json()

  const rates: CurrencyRate[] = CURRENCIES.map(c => {
    const rateInUZS = data.rates[c.code] ? 1 / data.rates[c.code] : 0
    return {
      code: c.code,
      name: c.name,
      flag: c.flag,
      rate: Math.round(rateInUZS),
      change: (Math.random() - 0.5) * 2, // placeholder change %
    }
  })

  return {
    base: 'UZS',
    rates,
    updatedAt: new Date().toLocaleString('uz-UZ'),
  }
}
