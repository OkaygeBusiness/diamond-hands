import * as UserService from "../../../db/api"
import { component$, useStore, useMount$ } from "@builder.io/qwik"
import { TradeHistory, User } from "../../../types"
import Header from "../../../components/molecules/header/header"

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
      <Header text="TradeHistory" hasButton={true} />
      {store.history?.map((trade) => {
        return (
          <div>
            <div>{trade.stock.name}</div>
            <div>{trade.date}</div>
            <div>{trade.amount}</div>
            <div>{trade.brokerFee}</div>
            <div>{trade.price}</div>
          </div>
        )
      })}
    </>
  )
})
