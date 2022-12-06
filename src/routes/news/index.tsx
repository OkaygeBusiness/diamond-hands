import { $, component$ } from "@builder.io/qwik"
import HeaderText from "../../components/atoms/headerText/headerText"

export default component$(() => {
  return <HeaderText text={"News"} color="text-black" />
})
