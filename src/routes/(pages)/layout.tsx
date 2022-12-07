import { component$, Slot } from "@builder.io/qwik"

export default component$(() => {
  return (
    <>
      <main>
        <section>
          <div class="mt-40">
            <Slot />
          </div>
        </section>
      </main>
    </>
  )
})
