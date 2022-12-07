import { $, component$ } from "@builder.io/qwik"
import HeaderText from "../../../components/atoms/headerText/headerText"
import Header from "../../../components/molecules/header/header"

export default component$(() => {
  return (
    <>
      <Header text="Trading Portal" hasButton={true} />
      <HeaderText text={"Trade"} color="text-black" />
    </>
  )
})
