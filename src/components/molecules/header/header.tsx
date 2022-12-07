import { $, component$, QwikMouseEvent } from "@builder.io/qwik"
import { twMerge } from "tailwind-merge"
import LinkButton from "../linkButton/linkButton"
import HeaderText from "../../atoms/headerText/headerText"

export interface headerProps {
  text: string
  backgroundColor?: string
  hasButton?: boolean
  link?: string
  class?: string
}

export default component$((props: headerProps) => {
  return (
    <>
      <div class="fixed inset-x-0 top-0">
        <div class={twMerge(props.class, "flex py-12 justify-between bg-darkBlue")}>
          <div>
            {props.hasButton && (
              <LinkButton image="/assets/icons/backArrow.png" class="ml-6 -mr-12" color="bg-gray-300 text-black" link={props.link} />
            )}
          </div>
          <div>
            <HeaderText text={props.text} size="text-4xl" />
          </div>
          <div>{/* for scuffed spacing */}</div>
        </div>
      </div>
    </>
  )
})
