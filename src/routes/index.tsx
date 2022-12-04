import { component$ } from "@builder.io/qwik"
import type { DocumentHead } from "@builder.io/qwik-city"
import HeaderText from "~/components/atoms/headerText/headerText"
import SubHeaderText from "~/components/atoms/subHeaderText/subHeaderText"
import { Link } from "@builder.io/qwik-city"

export default component$(() => {
  const name = "Jhon Doe"
  return (
    <>
      <header class="flex">
        <img class="h-12 w-12" src="/assets/logo-black.png" alt="logo" />
        <div>
          <HeaderText text={name} />
          <SubHeaderText text={`Welcome back ${name.split(" ")[0]}`} />
        </div>
      </header>
    </>
  )
})

export const head: DocumentHead = {
  title: "Welcome to Diamond Hands",
  meta: [
    {
      name: "description",
      content: "A simple, lightweight, and fast web app for tracking your stock portfolio."
    }
  ]
}
