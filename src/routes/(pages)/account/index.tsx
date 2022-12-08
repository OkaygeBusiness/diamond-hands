import { $, component$ } from "@builder.io/qwik"
import HeaderText from "../../../components/atoms/headerText/headerText"
import Header from "../../../components/molecules/header/header"
import * as UserService from "../../../db/api"
import Icon from "../../../components/atoms/icon/icon"

export default component$(() => {
  const user = UserService.getUser(1)
  return (
    <>
      <Header text="Account Settings" hasButton={false} />
      <HeaderText text={user!.name} color="text-black" />
      <Icon image={user!.image} height="h-20" />
    </>
  )
})
