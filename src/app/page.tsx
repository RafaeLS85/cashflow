import styles from "./page.module.css";
import { BasicButtons } from "@/components/Buttons";
import CalendarComponent from "@/components/Calendar";
import CurrencyCard from "@/components/currency-market/CurrencyCard";
import { Currency } from "@/types";

async function getDollarValues(currency: string) {
  const res = await fetch("https://api.bluelytics.com.ar/v2/latest")
  return res.json()
}

export default async function Home() {
  // Initiate both requests in parallel
  const dollarData = getDollarValues("USD")

  // Wait for the promises to resolve
  const [data] = await Promise.all([dollarData])

  return (
    <main className={styles.main}>
      {/* <BasicButtons />
      <CalendarComponent /> */}
      <CurrencyCard currency={data.blue} last_update={data.last_update} />
      {JSON.stringify(data)}
    </main>
  );
}
