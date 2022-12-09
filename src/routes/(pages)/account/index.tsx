import { $, component$ } from "@builder.io/qwik"
import HeaderText from "../../../components/atoms/headerText/headerText"
import Header from "../../../components/molecules/header/header"
import * as UserService from "../../../db/api"
import Icon from "../../../components/atoms/icon/icon"
import Button from "../../../components/atoms/button/button"
import SettingOption from "../../../components/molecules/settingOption/settingOption"

export default component$(() => {
  const user = UserService.getUser(1)
  return (
    <>
      <Header text="Account Settings" hasButton={false} />

        <div class="bg-white rounded overflow-hidden shadow-lg">
          <div class="text-center p-6  border-b">
            <Icon class="w-24 rounded-full mx-auto" image={user!.image} height="h-24" />
            <HeaderText class="pt-2 text-lg font-semibold" text={user!.name} color="text-black" />
            <div class="mt-5">
              <Button class="border rounded-full py-2 px-4 mx-auto" text="Edit Profile Pic" color="bg-white text-gray-500" onClick$={()=>{console.log("Edit Profile Clicked")}} />
            </div>
          </div>
          <div class="border-b">
            <SettingOption
              path="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              title="Personal Settings"
              description="Manage email/profile"
              onClick$={()=> console.log("Personal Settings Clicked")}
            />
            <SettingOption
              path="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              path2="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              title="Currency"
              onClick$={()=> console.log("Currency Clicked")}
            />
            <SettingOption
              path="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
              title="Notifications"
              onClick$={()=> console.log("Notifications Clicked")}
            />
          </div>
          <div class="">
            <SettingOption class="px-4 py-2 hover:bg-gray-100 flex block w-full mt-5" textColor="text-red-500" title="Reset Wallet" onClick$={()=> console.log("Reset Wallet Clicked")}/>
            <SettingOption class="px-4 py-2 hover:bg-gray-100 flex block w-full mb-3" title="Logout" onClick$={()=> console.log("Logout Clicked")}/>  
          </div>
        </div>

    </>
  )
})
