import { $, component$, useStore, useMount$ } from "@builder.io/qwik"
import Header from "../../../components/molecules/header/header"
import Button from "../../../components/atoms/button/button"
import WatchStock from "../../../components/molecules/watchStock/watchStock"
import * as UserService from "../../../db/api/userService"
import { Stock, WatchList } from "../../../types"

export default component$(() => {
  const user = UserService.getUser(1)
  const store = useStore({
    watchlist: [] as WatchList
  })
  useMount$(async () => {
    store.watchlist = user!.watchlist!
  })

  const removeStock = $((id: number) => {
    store.watchlist = store.watchlist.filter((stock: Stock) => stock.id !== id)
  })

  return (
    <>
      <Header text="Watchlist" hasButton={true} />
      <div class="flex py-1 justify-between">
        <Button text="Add" color="bg-lightGreen" />
        <Button text="Remove" color="bg-lightGreen" />
      </div>
      {store.watchlist.map((stock, i) => {
        return <WatchStock key={i} stock={stock} change="0.00" isPositive={true} onClick$={() => removeStock(stock.id)} />
      })}
    </>
  )
})
