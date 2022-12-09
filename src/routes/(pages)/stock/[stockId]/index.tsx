import { component$, Resource } from "@builder.io/qwik"
import { DocumentHead, RequestEvent, useEndpoint } from "@builder.io/qwik-city"
import { z } from "zod"
import { getStock } from "../../../../db/api"
import { inferPromise, Stock } from "../../../../types"
import Header from "../../../../components/molecules/header/header"
import SubHeaderText from "~/components/atoms/subHeaderText/subHeaderText"
import Divider from "~/components/atoms/divider/divider"
import LinkButton from "~/components/molecules/linkButton/linkButton"
import { buttonSize } from "~/components/molecules/linkButton/linkButton"
import ImageCard from "~/components/atoms/imageCard/imageCard"
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

  return (
    <Resource
      value={resource as any}
      onPending={() => <div class="h-screen" />}
      onRejected={() => <div>Rejected</div>}
      onResolved={(data: Stock) => (
        <>
          <Header text={data.shortName} hasButton={true} link="/trade" />
          <SubHeaderText text="Price History" color="text-black" />
          <Divider class={"my-2"} thickness={"h-1"} />
          <ImageCard src="/assets/graphs/stock-graph.png"></ImageCard>
          <SubHeaderText text={`About ${data.shortName}`} color="text-black" />
          <Divider class={"my-2"} thickness={"h-1"} />
          <BodyText
            class="mb-4"
            text={`${data.name} Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fugit optio totam eius unde ullam consectetur hic quibusdam nobis doloremque dignissimos, officiis eaque autem aliquid accusamus obcaecati. Illum, suscipit veritatis!`}
          />
          <div class="flex justify-center">
            <LinkButton text="Make an Order" link={`/stock/${data.id}/trade`} size={buttonSize.widepeepo} />
          </div>
        </>
      )}
    />
  )
})

export const head: DocumentHead = {
  title: "Stock"
}
