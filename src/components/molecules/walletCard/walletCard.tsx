import { component$ } from "@builder.io/qwik"
import { twMerge } from "tailwind-merge"
import SubHeaderText from "~/components/atoms/subHeaderText/subHeaderText"

export interface WalletCardProps {
  class?: string
  textDecoration?: string
  wallet: object
}

export default component$((props: WalletCardProps) => {
  const { id, name, shortName, price, shares } = JSON.parse(JSON.stringify(props.wallet))

  const value = (price * shares).toFixed(2)

  return (
    <div class="flex flex-row justify-center">
      <div
        class={twMerge(props.class, "flex flex-col justify-center h-32 w-[350px] bg-darkBlue rounded-xl text-white font-medium my-3 px-4 py-3")}
        key={id}
      >
        <SubHeaderText text={`${name} - ${shortName}`} color={"mb-1 text-[#6499E3]"} />
        <p class={twMerge(props.textDecoration)}>Value: ${value}</p>
        <p class={twMerge(props.textDecoration)}>Share Price: {price}</p>
        <p class={twMerge(props.textDecoration)}>Number of Shares: {shares}</p>
      </div>
    </div>
  )
})
