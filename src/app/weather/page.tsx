import { fetchWeather } from "@/lib/weather";
import WeatherClient from "./WeatherClient";

export const revalidate = 300;

const CITIES = [
  { name: "Toshkent", lat: 41.2995, lon: 69.2401, flag: "🇺🇿" },
  { name: "Samarqand", lat: 39.6542, lon: 66.9597, flag: "🇺🇿" },
  { name: "Buxoro", lat: 39.7747, lon: 64.4286, flag: "🇺🇿" },
  { name: "Namangan", lat: 41.0011, lon: 71.6725, flag: "🇺🇿" },
];

export default async function WeatherPage() {
  const weatherData = await Promise.allSettled(
    CITIES.map((c) => fetchWeather(c.lat, c.lon, c.name)),
  );

  const cities = weatherData.map((r, i) => ({
    ...CITIES[i],
    data: r.status === "fulfilled" ? r.value : null,
  }));

  return <WeatherClient cities={cities} />;
}
