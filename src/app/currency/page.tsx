import { fetchCurrency } from '@/lib/currency'
import CurrencyClient from './CurrencyClient'

export const revalidate = 3600

export default async function CurrencyPage() {
  let data = null
  try {
    data = await fetchCurrency()
  } catch {}
  return <CurrencyClient data={data} />
}
