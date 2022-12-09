import { component$, useMount$, useStore, useWatch$ } from "@builder.io/qwik"
import Header from "../../../components/molecules/header/header"
import HeaderText from "../../../components/atoms/headerText/headerText"
import BigCard from "../../../components/molecules/bigCard/bigCard"
import Icon from "../../../components/atoms/icon/icon"
import { getStocks } from "../../../db/api"
import { Stock } from "../../../types"

export default component$(() => {
  const store = useStore({
    stocks: [] as Stock[],
    searchInput: ""
  })
  const filterToggle = useStore({
    isFilterOpen: false
  })

  useMount$(async () => {
    store.stocks = getStocks()
  })

  useWatch$(async ({ track }) => {
    const searchInput = track(() => store.searchInput)
    store.stocks = getStocks().filter((stock) => {
      let results = new Set().add(stock.name.toLowerCase().includes(searchInput.toLowerCase()))
      .add(stock.shortName.toLowerCase().includes(searchInput.toLowerCase()))
      return Array.from(results).includes(true)
    })
  })

  return (
    <>
      <Header text="Trading Portal" />
      <label for="simple-search" class="sr-only">
        Search
      </label>
      <div class="relative w-full mb-2">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg class="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          onInput$={(ev) => (store.searchInput = (ev.target as HTMLInputElement).value)}
          id="simple-search"
          class="text-black bg-gray-300 border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
          placeholder="Search"
        />
      </div>
      <div class="flex ">
        <HeaderText text="Stocks" color="text-black" />
        <div class="flex justify-end w-full">
          <Icon
            image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABHElEQVRIie3WsS4EURSH8R8hIkpRSBQKhUKhUSloNKrtVCqNeABegAeg0+lUXkEiS6LhARQKiQiRiESEsFbhTHaLxczs7CZivmSKOff8z3dvMjMZSv4bVdQ7dFWbRb0dP0qD+m8N47iNxu02RDsx4x4TaUOzeIngWg7pSmRfMZ81vIQPvGMxQ24Bb5FdzipN2PK180dMpeifxENkNvNKoQf7MegSIz/0DuMieg8U8OAO4lTjlRho0dOPw+g5w1C70oRRXMXgvRbru7F2jbGipAnTeArBelN9I2rPmClamlAJSa2pVotapVPShOQT+N19Krr5ySzFpbg79LWRXcVcURtJQ6vfmpusQ/Ke+A5HOMExznPOycRkNyQlf59PgAtVhZHfIk8AAAAASUVORK5CYII="
            height="h-8"
            onClick$={() => {
              filterToggle.isFilterOpen = !filterToggle.isFilterOpen

              if (filterToggle.isFilterOpen) {
                store.stocks = getStocks().filter((stock) => stock.name.toLowerCase().includes(store.searchInput.toLowerCase())).sort((a, b) => (a.price > b.price ? 1 : -1))
              } else {
                store.stocks = getStocks().filter((stock) => stock.name.toLowerCase().includes(store.searchInput.toLowerCase())).sort((a, b) => (a.price < b.price ? 1 : -1))
              }
            }}
          />
        </div>
      </div>
      {store.stocks.map((item: Stock) => (
        <BigCard key={item.id} text={`${item.price.toString()}$`} headerText={item.shortName} gain={((Math.random()*10).toFixed(2)).toString() + "%"} isPositive={!Math.round(Math.random())} buttonText={"Buy"} link={`/stock/${item.id}`}  />
      ))}
    </>
  )
})
