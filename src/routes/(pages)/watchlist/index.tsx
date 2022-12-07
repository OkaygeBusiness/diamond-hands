import { component$ } from "@builder.io/qwik"
import Header from "../../../components/molecules/header/header"
import Button from "../../../components/atoms/button/button"

export default component$(() => {
  return (
    <>
      <Header text="Watchlist" hasButton={true} />
      <Button text="Add" color="bg-lightGreen" />
    </>
  )
})
