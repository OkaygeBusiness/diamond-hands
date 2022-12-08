import { component$, Slot } from "@builder.io/qwik"
import Navbar from "../components/organisims/navbar/navbar"

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
