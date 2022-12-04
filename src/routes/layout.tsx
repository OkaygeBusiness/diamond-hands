import { component$, Slot } from "@builder.io/qwik"
import Navbar from "../components/organisims/navbar/navbar"

export default component$(() => {
  return (
    <>
      <main>
        <section>
          <Slot />
        </section>
      </main>
      <Navbar />
    </>
  )
})
