import { component$, useStore, useMount$ } from "@builder.io/qwik"
import Header from "../../../../../components/molecules/header/header"
import * as UserService from "../../../../../db/api"
import { User } from "../../../../../types"
import Leaderboard from "../../../../../components/molecules/leaderboard/leaderboard"
import HeaderText from "../../../../../components/atoms/headerText/headerText"
import Icon from "../../../../../components/atoms/icon/icon"

export default component$(() => {
  const store = useStore({
    users: [] as User[]
  })
  if (typeof window !== "undefined") {
    useMount$(() => {
      const users = UserService.getUsers()
      store.users = users
    })
  }

  return (
    <>
      <Header text={"Leaderboard"} />
      <div class="flex flex-col justify-center">
        <div class="flex flex-row justify-center">
          <HeaderText text={"TOP 4"} color="text-black" />
        </div>
        <div class="flex flex-row justify-center">
          <Icon image="/assets/icons/leaderboard.png" height="h-20" />
        </div>
      </div>
      {store.users.map((user) => {
        return <Leaderboard name={user.name} image={user.image} score={user.highscore} />
      })}
    </>
  )
})
