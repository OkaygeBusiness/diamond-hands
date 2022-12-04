import { component$ } from "@builder.io/qwik"
import { colors } from "../../colors/colors"

export default component$(() => {
  return (
    <>
      <div class={`bg-${colors.green}`}></div>
    </>
  )
})
