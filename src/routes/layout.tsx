import { component$, Slot } from "@builder.io/qwik"
import { DocumentHead } from "@builder.io/qwik-city"
import Navbar from "../components/organisms/navbar/navbar"

export default component$(() => {
  return (
    <>
      <main>
        <section>
          <div class="container mx-auto my-8 w-4/5">
            <Slot />
          </div>
        </section>
      </main>
      <Navbar />
    </>
  )
})

export const head: DocumentHead = {
  title: "Diamond Hands",
  meta: [
    {
      name: "description",
      content: "A simple, lightweight, and fast web app for tracking your stock portfolio."
    }
  ]
}
