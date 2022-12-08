import { component$ } from "@builder.io/qwik"
import { twMerge } from "tailwind-merge"
import NavbarButton from "../../molecules/navbarButton/navbarButton"

export interface navbarProps {
  class?: string
}

export default component$((props: navbarProps) => {
  return (
    <div class="fixed inset-x-0 bottom-0">
      <div class={twMerge(props.class, "flex flex-row justify-between items-center bg-darkBlue z-10")}>
        <NavbarButton text="Home" link="/" image="/assets/navbarIcons/home.png" height="h-6" />
        <NavbarButton text="News" link="/news" image="/assets/navbarIcons/news.png" height="h-6" />
        <NavbarButton text="Trade" link="/trade" image="/assets/navbarIcons/trade.png" height="h-6" />
        <NavbarButton text="Guides" link="/guides" image="/assets/navbarIcons/guide.png" height="h-6" />
        <NavbarButton text="Account" link="/account" image="/assets/navbarIcons/account.png" height="h-6" />
      </div>
    </div>
  )
})
