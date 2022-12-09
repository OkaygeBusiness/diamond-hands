import { component$, Resource, useStore, useWatch$ } from "@builder.io/qwik"
import { DocumentHead, RequestEvent, useEndpoint } from "@builder.io/qwik-city"
import { z } from "zod"
import { getStock } from "../../../../../db/api"
import { inferPromise, Stock } from "../../../../../types"
import Header from "../../../../../components/molecules/header/header"
import LinkButton from "~/components/molecules/linkButton/linkButton"
import { buttonSize } from "~/components/molecules/linkButton/linkButton"
import Divider from "~/components/atoms/divider/divider"
import Icon from "~/components/atoms/icon/icon"
import BodyText from "~/components/atoms/bodyText/bodyText"

export const onGet = async (event: RequestEvent) => {
  const parseResult = z.object({ stockId: z.number().min(0).step(1) }).safeParse({ stockId: +event.params.stockId })

  if (!parseResult.success) {
    throw event.response.redirect("/404")
  }

  try {
    const stock = getStock(parseResult.data.stockId)
    return stock
  } catch {
    throw event.response.redirect("/404")
  }
}

export default component$(() => {
  const resource = useEndpoint<inferPromise<typeof onGet>>()

  const store = useStore({
    searchInput: "1"
  })

  useWatch$(async ({ track }) => {
    const searchInput = track(() => store.searchInput)
    store.searchInput = searchInput
  })

  return (
    <Resource
      value={resource as any}
      onPending={() => <div class="h-screen" />}
      onRejected={() => <div>Rejected</div>}
      onResolved={(data: Stock) => (
        <>
          <Header text="Trade Stock" hasButton={true} link={`/stock/${data.id}`} />
          <div class="flex justify-center items-center flex-col">
            <Icon image={data.logo} class="p-6 border-4 rounded-full w-30 bg-gray-200 border-black" height="h-30" />
            <BodyText text={data.shortName} size="text-sm font-bold" />
            <BodyText text={data.name} size="text-sm" />
          </div>
          <Divider class={"my-2"} thickness={"h-1"} />
          <div class="flex justify-between items-center">
            <BodyText text="Price of 1 share:" size="text-sm" />
            <BodyText text={`$${data.price.toString()}`} size="text-xl" class="font-bold" />
          </div>
          <Divider class={"mb-2"} thickness={"h-1"} />
          <div class="flex justify-center items-center mt-8">
            <BodyText text="Shares:" />
            <input
              type="number"
              value="1"
              onInput$={(ev) => (store.searchInput = (ev.target as HTMLInputElement).value)}
              id="shares"
              class="text-black bg-gray-300 border text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full ml-5 p-2.5"
            />
          </div>
          <div class="flex justify-between items-center mt-56">
            <BodyText text="Stock Total:" size="text-sm" />
            <BodyText
              text={`$${(data.price * Number(store.searchInput || 1))
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
            />
          </div>
          <div class="flex justify-between items-center">
            <BodyText text="Brokerage Fee (2%):" size="text-sm" />
            <BodyText
              text={`$${(data.price * Number(store.searchInput || 1) * 0.02)
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
            />
          </div>
          <div class="flex justify-between items-center mt-4">
            <BodyText text="Total:" size="text-sm" />
            <BodyText
              text={`$${(data.price * Number(store.searchInput || 1) * 1.02)
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
              size="text-xl"
              class="font-bold"
            />
          </div>
          <Divider class={"mb-2"} thickness={"h-1"} />
          <div class="flex justify-center">
            <LinkButton text="Make an Order" link="/history" size={buttonSize.widepeepo} />
          </div>
        </>
      )}
    />
  )
})

export const head: DocumentHead = {
  title: "Trade Stock"
}
