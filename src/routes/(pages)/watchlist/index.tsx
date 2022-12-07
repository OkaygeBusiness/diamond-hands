import { $, component$, useStore } from "@builder.io/qwik"
import Header from "../../../components/molecules/header/header"
import Button from "../../../components/atoms/button/button"
import WatchStock from "../../../components/molecules/watchStock/watchStock"
import * as UserService from "../../../db/api/userService"
import { Stock, WatchList } from "../../../types"

export default component$(() => {
  const user = UserService.getUser(1)
  const watchlist = useStore<WatchList>(user?.watchlist!)

  const removeStock = $(() => {
    watchlist?.pop()
  })

  return (
    <>
      <Header text="Watchlist" hasButton={true} />
      <Button text="Add" color="bg-lightGreen" />
      {watchlist?.map((stock, i) => {
        return <WatchStock key={i} stock={stock} change="0.00" isPositive={true} onClick={removeStock} />
      })}
    </>
  )
})
