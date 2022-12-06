import { $, component$ } from "@builder.io/qwik"
import HeaderText from "../../components/atoms/headerText/headerText"

export default component$(() => {
  return <HeaderText text={"Account"} color="text-black" />
})
