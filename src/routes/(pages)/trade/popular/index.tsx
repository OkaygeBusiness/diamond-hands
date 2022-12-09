import { component$, useMount$, useStore } from "@builder.io/qwik"
import { wsb } from "../../../../db/api"
import Header from "../../../../components/molecules/header/header"
import { Wsb } from "../../../../types"
import HeaderText from "../../../../components/atoms/headerText/headerText"
import BigCard from "../../../../components/molecules/bigCard/bigCard"

export default component$(() => {
  const store = useStore({
    stocks: [] as Wsb[]
  })
  useMount$(async () => {
    store.stocks = await wsb()
  })
  return (
    <>
      <Header text="Popular" hasButton={true} />
      <HeaderText text="Top 10 Stocks" color="text-black" />
      {store.stocks.map((item: Wsb) => (
        <BigCard
          text={item.ticker}
          headerText={item.sentiment}
          gain={item.sentiment_score.toString()}
          isPositive={item.sentiment_score > 0}
          buttonText={"Buy"}
        />
      ))}
    </>
  )
})
