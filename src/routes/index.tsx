import { component$ } from "@builder.io/qwik"
import type { DocumentHead } from "@builder.io/qwik-city"
import { Link } from "@builder.io/qwik-city"

export default component$(() => {
  return (
    <>
      <div class="bg-sky-500"> despairge </div>
    </>
  )
})

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description"
    }
  ]
}
