import { component$ } from "@builder.io/qwik"
import type { DocumentHead } from "@builder.io/qwik-city"
import HeaderText from "../components/atoms/headerText/headerText"
import SubHeaderText from "../components/atoms/subHeaderText/subHeaderText"
import Button, { buttonSize } from "../components/atoms/button/button"
import { Link } from "@builder.io/qwik-city"

export default component$(() => {
  const name = "John Doe"
  return (
    <>
      <header class="flex">
        <img class="h-12 w-12" src="/assets/logo-black.png" alt="logo" />
        <div>
          <HeaderText text={name} color="text-black" />
          <SubHeaderText className="text-xl font-bold text-gray-400" text={`Welcome back ${name.split(" ")[0]}!`} />
        </div>
      </header>
      {/* example of using button component props to change button size or add a logo*/}
      <Button text="Logout" size={buttonSize.small} icon="/assets/logo-black.png" />
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
