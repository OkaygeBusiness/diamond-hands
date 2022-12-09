import * as UserService from "../../../db/api"
import { component$, useStore, useMount$ } from "@builder.io/qwik"
import { TradeHistory } from "../../../types"
import Header from "../../../components/molecules/header/header"
import HistoryCard from "~/components/molecules/historyCard/historyCard"
import BackToTop from "~/components/molecules/backToTop/backToTop"

export default component$(() => {
  const store = useStore({
    history: [] as TradeHistory | undefined
  })
  useMount$(() => {
    const history = UserService.getUserTradeHistory(1)
    store.history = history
  })

  return (
    <>
      <Header text="Trade History" hasButton={true} />
      {store.history?.map((trade) => {
        return (
          <HistoryCard
            key={trade.stock.id}
            stockData={trade.stock}
            date={trade.date}
            brokerFee={trade.brokerFee}
            quantity={trade.amount}
            action={trade.action}
          />
        )
      })}
      {store.history ? <BackToTop target={"/history"} /> : null}
    </>
  )
})
