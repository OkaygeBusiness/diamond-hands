import { $, component$ } from "@builder.io/qwik"
import type { DocumentHead } from "@builder.io/qwik-city"
import HeaderText from "../components/atoms/headerText/headerText"
import SubHeaderText from "../components/atoms/subHeaderText/subHeaderText"
import MiniCard from "../components/molecules/miniCard/miniCard"

    
        
          
    

        
    
    @@ -26,13 +26,3 @@ export default component$(() => {
  
import BigCard from "../components/molecules/bigCard/bigCard"
import * as UserService from "../db/api/userService"
import { calculateWalletValue } from "../utils"
export default component$(() => {
  const user = UserService.getUser(1)
  return (
    <>
      <header class="flex">
        <img class="h-12 w-12" src="/assets/logo-black.png" alt="logo" />
        <div>
          <HeaderText text={user!.name} color="text-black" />
          <SubHeaderText class="text-xl font-bold text-gray-400" text={`Welcome back ${user!.name.split(" ")[0]}!`} />
        </div>
      </header>
      <BigCard headerText="Value" text={`${calculateWalletValue(user!.wallet!).toString()}$`} buttonText="Stocks" gain="7.27%" isPositive={true} />
      <MiniCard text="Watchlist" subText="View your favourited stocks" buttonText="View" image="/assets/icons/star.png" link="/watchlist" />
      <MiniCard text="Trade History" subText="View your recent exchanges" buttonText="View" image={"/assets/icons/history.png"} link="/" />
      {/* example of using button component props to change button size or add a logo*/}
      {/* <Button text="Logout" size={buttonSize.small} icon="/assets/logo-black.png" /> */}
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
